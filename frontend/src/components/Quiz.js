import React, { useState } from "react";

const QUESTIONS = {
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Tool Markup Language", "Home Tool Markup Language"],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<meta>", "<head>", "<title>", "<header>"],
      answer: "<title>",
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Syntax"],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which property is used to change the text color?",
      options: ["font-color", "text-color", "color", "foreground"],
      answer: "color",
    },
    {
      question: "Which CSS property controls the spacing inside an element?",
      options: ["margin", "spacing", "padding", "border"],
      answer: "padding",
    },
  ],
  js: [
    {
      question: "Which keyword declares a block-scoped variable in JavaScript?",
      options: ["var", "let", "define", "set"],
      answer: "let",
    },
    {
      question: "What does '===' check in JavaScript?",
      options: ["Value only", "Type only", "Value and type", "Reference"],
      answer: "Value and type",
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "append()", "add()", "insert()"],
      answer: "push()",
    },
  ],
  default: [
    {
      question: "What is the primary goal of this learning platform?",
      options: ["Entertainment", "Personalized skill learning", "Social networking", "File storage"],
      answer: "Personalized skill learning",
    },
    {
      question: "What helps measure your understanding after each topic?",
      options: ["Videos", "Quizzes", "Forums", "Chat"],
      answer: "Quizzes",
    },
  ],
};

function Quiz({ topic, onBack }) {
  const questions = QUESTIONS[topic?.id] || QUESTIONS.default;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q?.answer;

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelected(option);
    if (option === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const pct = Math.round((score / questions.length) * 100);

  if (done) {
    return (
      <div className="card">
        <div className="score-screen">
          <div className="score-circle">
            <span className="score-num">{pct}%</span>
            <span className="score-label">Score</span>
          </div>
          <h3>{pct >= 70 ? "Great job!" : "Keep practicing!"}</h3>
          <p>
            You got {score} out of {questions.length} questions correct on{" "}
            <strong style={{ color: "#a78bfa" }}>{topic?.topic}</strong>.
          </p>
          <div>
            <button className="btn-outline" onClick={handleRetry}>Retry Quiz</button>
            <button className="btn-next" onClick={onBack}>Back to Roadmap</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="quiz-meta">
        <button className="back-btn" onClick={onBack}>← Roadmap</button>
        <span className="quiz-progress">
          Question {current + 1} / {questions.length}
        </span>
        <span className="badge">📝 {topic?.topic}</span>
      </div>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{ width: `${((current) / questions.length) * 100}%` }}
        />
      </div>

      <p className="question-text">{q.question}</p>

      <div className="options-list">
        {q.options.map((opt) => {
          let cls = "option-btn";
          if (isAnswered) {
            if (opt === q.answer) cls += " correct";
            else if (opt === selected) cls += " wrong";
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => handleSelect(opt)}
              disabled={isAnswered}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <>
          <div className={`feedback ${isCorrect ? "correct" : "wrong"}`}>
            {isCorrect ? "✓ Correct!" : `✗ The correct answer is: ${q.answer}`}
          </div>
          <button className="btn-next" onClick={handleNext}>
            {current + 1 >= questions.length ? "See Results" : "Next Question →"}
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
