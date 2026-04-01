import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { QUESTIONS } from "./src/questions.js";
import { getOrCreateSession, resetSession, submitAnswer } from "./src/quizSession.js";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend
app.use(express.static(__dirname));

// Basic health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Get current question (one at a time)
app.get("/api/question", (req, res) => {
  const session = getOrCreateSession(req, res, QUESTIONS.length);

  if (session.isFinished) {
    return res.json({
      finished: true,
      score: session.score,
      total: session.total,
    });
  }

  const q = QUESTIONS[session.currentIndex];
  res.json({
    finished: false,
    index: session.currentIndex,
    total: session.total,
    score: session.score,
    question: {
      id: q.id,
      text: q.text,
      options: q.options,
    },
  });
});

// Submit answer, return immediate feedback + next state
app.post("/api/answer", (req, res) => {
  const session = getOrCreateSession(req, res, QUESTIONS.length);
  const { questionId, answerIndex } = req.body ?? {};

  const result = submitAnswer({
    session,
    questions: QUESTIONS,
    questionId,
    answerIndex,
  });

  res.json(result);
});

// Restart quiz
app.post("/api/restart", (req, res) => {
  const session = resetSession(req, res, QUESTIONS.length);
  res.json({ ok: true, score: session.score, total: session.total, index: session.currentIndex });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Quiz server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
