import React, { useState } from "react";
import { getNextLevel } from "../utils/recommendation";

export default function DayDetail({ dayIndex, dayData, isCompleted, onBack, onComplete }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [done, setDone] = useState(false);

  const questions = dayData.questions || [];
  const q = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q?.answer;
  const total = questions.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const handleSelect = (opt) => {
    if (isAnswered) return;
    setSelected(opt);
    if (opt === q.answer) setScore((s) => s + 1);
    else setWrongCount((w) => w + 1);
  };

  const handleNext = () => {
    if (current + 1 >= total) setDone(true);
    else { setCurrent((c) => c + 1); setSelected(null); }
  };

  const getHint = () => {
    if (pct >= 80) return { icon: "🏆", label: "Excellent!", color: "#15803d", bg: "#f0fdf4", border: "#bbf7d0" };
    if (pct >= 60) return { icon: "👍", label: "Good Work!", color: "#1d4ed8", bg: "#eff6ff", border: "#bfdbfe" };
    if (pct >= 40) return { icon: "📚", label: "Needs Review", color: "#b45309", bg: "#fffbeb", border: "#fde68a" };
    return { icon: "🔁", label: "Needs More Practice", color: "#b91c1c", bg: "#fef2f2", border: "#fecaca" };
  };

  // LOCKED
  if (isCompleted) {
    return (
      <div className="w3-quiz-page">
        <button className="w3-back-btn" onClick={onBack}>← Back to Roadmap</button>
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🔒</div>
          <h1 className="w3-quiz-title">Day {dayIndex + 1} Completed</h1>
          <p style={{ color: "#6b7280", marginBottom: 16 }}>{dayData.topic}</p>
          <div style={{ display: "inline-block", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px 24px", color: "#15803d", fontWeight: 700 }}>
            ✓ Quiz already submitted — this day is locked
          </div>
        </div>
      </div>
    );
  }

  // SCORE SCREEN
  if (done) {
    const hint = getHint();
    const next = getNextLevel(pct);
    return (
      <div className="w3-quiz-page">
        <div className="w3-score-screen">
          <div className="w3-score-circle">
            <span className="w3-score-num">{pct}%</span>
            <span className="w3-score-lbl">Score</span>
          </div>
          <h1 className="w3-quiz-title">{hint.icon} {hint.label}</h1>
          <p className="w3-q-counter">You got {score} out of {total} correct</p>
          <p style={{ color: "#9ca3af", marginBottom: 16 }}>Day {dayIndex + 1}: {dayData.topic}</p>
          <div style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${next.color}`, borderRadius: 10, padding: "12px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>{next.icon}</span>
            <div>
              <div style={{ fontWeight: 700, color: next.color, fontSize: 14 }}>Next: {next.label}</div>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>Based on your score</div>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, fontSize: 14, color: "#d1d5db", fontWeight: 600 }}>
            {pct >= 80 && "Outstanding! The roadmap continues at full pace."}
            {pct >= 60 && pct < 80 && "Good effort! You're on track."}
            {pct >= 40 && pct < 60 && "A revision day will be added to reinforce this topic."}
            {pct < 40 && "Two revision days will be added to help you master this before moving on."}
          </div>
          <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 20 }}>⚠️ Once completed, this day will be permanently locked.</p>
          <button className="w3-next-btn" onClick={() => onComplete(pct, wrongCount)}>
            Complete &amp; Lock Day ✓
          </button>
        </div>
      </div>
    );
  }

  // QUIZ VIEW — W3Schools style
  if (showQuiz) {
    return (
      <div className="w3-quiz-page">
        <button className="w3-back-btn" onClick={() => setShowQuiz(false)}>← Back to Video</button>

        <h1 className="w3-quiz-title">{dayData.topic} Quiz</h1>
        <p className="w3-q-counter">Question {current + 1} of {total}:</p>

        {q?.image && (
          <div style={{ margin: "16px 0", borderRadius: 6, overflow: "hidden" }}>
            <img src={q.image} alt="quiz visual" style={{ width: "100%", maxHeight: 220, objectFit: "cover", display: "block" }} />
          </div>
        )}

        <p className="w3-q-text">{q?.q || q?.question}</p>

        <div className="w3-options-list">
          {q?.options.map((opt, i) => {
            let state = "";
            if (isAnswered) {
              if (opt === q.answer) state = "correct";
              else if (opt === selected) state = "wrong";
            } else if (opt === selected) {
              state = "selected";
            }
            return (
              <label key={opt} className={`w3-option-row ${state}`} onClick={() => handleSelect(opt)}>
                <span className="w3-radio-circle">{state === "correct" ? "✓" : state === "wrong" ? "✗" : ""}</span>
                <span className="w3-option-text">{opt}</span>
              </label>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`w3-feedback ${isCorrect ? "correct" : "wrong"}`}>
            {isCorrect ? "✓ Correct!" : `✗ The correct answer is: ${q.answer}`}
          </div>
        )}

        {isAnswered && (
          <button className="w3-next-btn" onClick={handleNext}>
            {current + 1 >= total ? "See Results" : "Next ›"}
          </button>
        )}
      </div>
    );
  }

  // VIDEO + START QUIZ
  return (
    <div className="card day-detail">
      <button className="back-btn" onClick={onBack}>← Roadmap</button>
      {dayData.isRevision && (
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#b45309", fontWeight: 600 }}>
          📚 Revision Day — revisit this topic to strengthen your understanding.
        </div>
      )}
      <h2>Day {dayIndex + 1}: {dayData.topic}</h2>
      <p className="subtitle">Watch the video then take the quiz. The day locks once submitted.</p>
      <p className="section-title">📹 Video Lesson</p>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${dayData.videoId}`}
          title={dayData.topic}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
        <button className="btn-quiz" onClick={() => setShowQuiz(true)}>
          Take Quiz ({total} questions) →
        </button>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>⚠️ Quiz can only be submitted once</span>
      </div>
    </div>
  );
}
