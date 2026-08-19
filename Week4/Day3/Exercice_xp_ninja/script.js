const $score = document.getElementById("score");
const $question = document.getElementById("question");
const $options = document.getElementById("options");
const $feedback = document.getElementById("feedback");
const $final = document.getElementById("final");

const $submit = document.getElementById("submit");
const $next = document.getElementById("next");
const $restart = document.getElementById("restart");

let currentQuestion = null;
let lastAnswerWasCorrect = null;
let lastCorrectIndex = null;
let latestState = { score: 0, total: 0 };

async function apiGetQuestion() {
  const res = await fetch("/api/question", { credentials: "include" });
  if (!res.ok) throw new Error("Failed to load question");
  return await res.json();
}

async function apiSubmitAnswer(questionId, answerIndex) {
  const res = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ questionId, answerIndex }),
  });
  if (!res.ok) throw new Error("Failed to submit answer");
  return await res.json();
}

async function apiRestart() {
  const res = await fetch("/api/restart", { method: "POST", credentials: "include" });
  if (!res.ok) throw new Error("Failed to restart");
  return await res.json();
}

function setButtons({ canSubmit, showNext, showRestart }) {
  $submit.disabled = !canSubmit;
  $submit.style.display = canSubmit ? "inline-block" : "none";
  $next.style.display = showNext ? "inline-block" : "none";
  $restart.style.display = showRestart ? "inline-block" : "none";
}

function setScore(score, total) {
  latestState = { score, total };
  $score.textContent = `Score: ${score}${Number.isFinite(total) && total ? ` / ${total}` : ""}`;
}

function clearFeedback() {
  $feedback.textContent = "";
  $feedback.className = "feedback";
  lastAnswerWasCorrect = null;
  lastCorrectIndex = null;
}

function renderOptions(options, disabled = false) {
  $options.innerHTML = "";

  for (let i = 0; i < options.length; i++) {
    const id = `opt_${i}`;

    const label = document.createElement("label");
    label.className = "option";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(i);
    input.id = id;
    input.disabled = disabled;

    const text = document.createElement("span");
    text.textContent = options[i];
    text.style.marginLeft = "10px";

    label.appendChild(input);
    label.appendChild(text);
    $options.appendChild(label);
  }
}

function getSelectedAnswerIndex() {
  const checked = $options.querySelector("input[name='answer']:checked");
  if (!checked) return null;
  const n = Number(checked.value);
  return Number.isInteger(n) ? n : null;
}

function highlightCorrectness(selectedIndex) {
  const labels = Array.from($options.querySelectorAll("label.option"));
  labels.forEach((label, idx) => {
    label.classList.remove("correct", "wrong");
    if (idx === lastCorrectIndex) label.classList.add("correct");
    if (selectedIndex === idx && selectedIndex !== lastCorrectIndex) label.classList.add("wrong");
  });
}

function showFinal(score, total) {
  $final.style.display = "block";
  $final.textContent = `Final Score: ${score} / ${total}`;
  $question.textContent = "Quiz finished!";
  $options.innerHTML = "";
  clearFeedback();
  setButtons({ canSubmit: false, showNext: false, showRestart: true });
}

async function loadAndRenderQuestion() {
  clearFeedback();
  $final.style.display = "none";

  const data = await apiGetQuestion();
  if (data.finished) {
    setScore(data.score, data.total);
    return showFinal(data.score, data.total);
  }

  currentQuestion = data.question;
  setScore(data.score, data.total);
  $question.textContent = `Q${data.index + 1}: ${currentQuestion.text}`;
  renderOptions(currentQuestion.options, false);
  setButtons({ canSubmit: true, showNext: false, showRestart: true });
}

$submit.addEventListener("click", async () => {
  if (!currentQuestion) return;

  const selected = getSelectedAnswerIndex();
  if (selected === null) {
    $feedback.textContent = "Pick an answer first.";
    $feedback.classList.add("warn");
    return;
  }

  setButtons({ canSubmit: false, showNext: false, showRestart: true });
  $feedback.textContent = "Checking…";

  try {
    const result = await apiSubmitAnswer(currentQuestion.id, selected);

    if (!result.ok) {
      $feedback.textContent = result.message || "Something went wrong.";
      $feedback.classList.add("warn");
      setButtons({ canSubmit: true, showNext: false, showRestart: true });
      return;
    }

    lastAnswerWasCorrect = result.correct;
    lastCorrectIndex = result.correctIndex;

    setScore(result.score, result.total);
    renderOptions(currentQuestion.options, true);
    highlightCorrectness(selected);

    $feedback.textContent = result.correct ? "Correct!" : "Wrong.";
    $feedback.classList.add(result.correct ? "ok" : "bad");

    if (result.finished) {
      showFinal(result.score, result.total);
    } else {
      setButtons({ canSubmit: false, showNext: true, showRestart: true });
    }
  } catch (e) {
    $feedback.textContent = "Network error. Try again.";
    $feedback.classList.add("warn");
    setButtons({ canSubmit: true, showNext: false, showRestart: true });
  }
});

$next.addEventListener("click", async () => {
  await loadAndRenderQuestion();
});

$restart.addEventListener("click", async () => {
  $feedback.textContent = "Restarting…";
  $feedback.className = "feedback";
  try {
    await apiRestart();
    await loadAndRenderQuestion();
  } catch (e) {
    $feedback.textContent = "Couldn't restart. Try refreshing the page.";
    $feedback.classList.add("warn");
  }
});

loadAndRenderQuestion().catch(() => {
  $question.textContent = "Failed to load the quiz.";
  $feedback.textContent = "Start the server and refresh the page.";
  $feedback.classList.add("warn");
  setButtons({ canSubmit: false, showNext: false, showRestart: true });
});
