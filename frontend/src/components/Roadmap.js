import React from "react";

const ROADMAPS = {
  software: [
    {
      id: "html",
      topic: "HTML Basics",
      videoId: "UB1O30fR-EE",
      description: "Learn the building blocks of every webpage.",
    },
    {
      id: "css",
      topic: "CSS Fundamentals",
      videoId: "yfoY53QXEnI",
      description: "Style your pages with colors, layouts, and animations.",
    },
    {
      id: "js",
      topic: "JavaScript Fundamentals",
      videoId: "W6NZfCO5SIk",
      description: "Add interactivity and logic to your web projects.",
    },
  ],
  uiux: [
    {
      id: "design-principles",
      topic: "Design Principles",
      videoId: "a5KYlHNKQB8",
      description: "Understand color, typography, and visual hierarchy.",
    },
    {
      id: "figma",
      topic: "Figma Basics",
      videoId: "FTFaQWZBqQ8",
      description: "Create wireframes and prototypes in Figma.",
    },
  ],
  speaking: [
    {
      id: "confidence",
      topic: "Building Confidence",
      videoId: "tShavGuo0_E",
      description: "Overcome fear and speak with authority.",
    },
    {
      id: "structure",
      topic: "Structuring Your Talk",
      videoId: "Unzc731iCUY",
      description: "Learn how to open, develop, and close a compelling talk.",
    },
  ],
};

function Roadmap({ goal, onBack, onStartQuiz }) {
  const topics = ROADMAPS[goal.id] || [];

  return (
    <div className="card">
      <div className="roadmap-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="badge">{goal.icon} {goal.title}</span>
      </div>

      <h2>Your Learning Roadmap</h2>
      <p className="subtitle">Work through each topic in order for the best results</p>

      {topics.map((item, index) => (
        <div key={item.id} className="topic-card">
          <h3>
            <span className="step-num">{index + 1}</span>
            {item.topic}
          </h3>
          <p style={{ color: "#888", fontSize: "13px", marginBottom: "16px" }}>{item.description}</p>

          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.topic}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <button className="btn-quiz" onClick={() => onStartQuiz(item)}>
            Take Quiz →
          </button>
        </div>
      ))}
    </div>
  );
}

export default Roadmap;
