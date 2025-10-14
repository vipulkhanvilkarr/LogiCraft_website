import React from "react";

const Answers = ({ onBack, showIndexes = [0], questions = [] }) => (
  <div className="birthday-container" id="answers">
    <div className="message-box" style={{ maxWidth: 350, margin: "auto" }}>
      <h2 style={{ fontSize: "1.2em", marginBottom: 16 }}>Answer</h2>
      <ol style={{ textAlign: "left", fontSize: "1.1em" }}>
        {showIndexes.map((idx) => (
          <li key={idx} style={{ marginTop: idx === 0 ? 0 : 16 }}>
            <b>{questions[idx]?.question}</b>
            <br />
            <span style={{ color: "#a21caf" }}>{questions[idx]?.answer}</span>
          </li>
        ))}
      </ol>
      <div style={{ marginTop: 24 }}>
        <button
          onClick={onBack}
          style={{
            color: "#fff",
            background: "#a21caf",
            padding: "6px 18px",
            borderRadius: "8px",
            border: "none",
            fontWeight: 500,
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
);

export default Answers;