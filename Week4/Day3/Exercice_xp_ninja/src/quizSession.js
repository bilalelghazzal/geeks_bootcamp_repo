import crypto from "node:crypto";

const COOKIE_NAME = "quiz_sid";
const sessions = new Map();

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  for (const part of cookieHeader.split(";")) {
    const [k, ...rest] = part.trim().split("=");
    if (!k) continue;
    cookies[k] = decodeURIComponent(rest.join("=") || "");
  }
  return cookies;
}

function setCookie(res, name, value) {
  // Basic cookie is enough for this exercise (same machine, local dev)
  res.setHeader("Set-Cookie", `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax`);
}

function createSession(total) {
  return {
    id: crypto.randomUUID(),
    currentIndex: 0,
    score: 0,
    total,
    answeredIds: new Set(),
    isFinished: false,
  };
}

export function getOrCreateSession(req, res, total) {
  const cookies = parseCookies(req.headers.cookie);
  const sid = cookies[COOKIE_NAME];

  if (sid && sessions.has(sid)) {
    const existing = sessions.get(sid);
    if (existing.total !== total) existing.total = total;
    return existing;
  }

  const session = createSession(total);
  sessions.set(session.id, session);
  setCookie(res, COOKIE_NAME, session.id);
  return session;
}

export function resetSession(req, res, total) {
  const cookies = parseCookies(req.headers.cookie);
  const sid = cookies[COOKIE_NAME];
  if (sid) sessions.delete(sid);

  const session = createSession(total);
  sessions.set(session.id, session);
  setCookie(res, COOKIE_NAME, session.id);
  return session;
}

export function submitAnswer({ session, questions, questionId, answerIndex }) {
  if (session.isFinished) {
    return { ok: false, error: "QUIZ_FINISHED", finished: true, score: session.score, total: session.total };
  }

  const currentQuestion = questions[session.currentIndex];
  if (!currentQuestion) {
    session.isFinished = true;
    return { ok: true, finished: true, score: session.score, total: session.total };
  }

  if (questionId !== currentQuestion.id) {
    return { ok: false, error: "WRONG_QUESTION", message: "That question is not the current one." };
  }

  if (typeof answerIndex !== "number" || !Number.isInteger(answerIndex)) {
    return { ok: false, error: "INVALID_ANSWER", message: "answerIndex must be an integer." };
  }

  if (answerIndex < 0 || answerIndex >= currentQuestion.options.length) {
    return { ok: false, error: "INVALID_ANSWER", message: "answerIndex out of range." };
  }

  // Prevent double submissions (e.g. refresh + re-click)
  if (session.answeredIds.has(currentQuestion.id)) {
    return {
      ok: false,
      error: "ALREADY_ANSWERED",
      message: "You already answered this question.",
      score: session.score,
      total: session.total,
      index: session.currentIndex,
    };
  }

  session.answeredIds.add(currentQuestion.id);
  const correct = answerIndex === currentQuestion.correctIndex;
  if (correct) session.score += 1;

  // advance
  session.currentIndex += 1;
  if (session.currentIndex >= questions.length) session.isFinished = true;

  return {
    ok: true,
    correct,
    correctIndex: currentQuestion.correctIndex,
    score: session.score,
    total: session.total,
    finished: session.isFinished,
    nextIndex: session.currentIndex,
  };
}
