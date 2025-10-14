import React, { useEffect, useState } from "react";
import "./Birthday.css";
import img2 from "../../assets/img2 (1).png";
import Answers from "./Answers";

const QUESTIONS = [
  {
    question: "What did I hurt recently?",
    answer: "compare",
    note: "tula kay kelela aavdat nhi ?",
    helpNote: (
      <>
        <b>Haha!</b> Please contact the creator for the answer.<br />
        Don’t worry! Click the link below to get the answers.<br />
        <span style={{ color: "#a21caf" }}>Evda contact karaych trass nhi denar 😉</span>
        <br />
        <a
          href="#answers"
          style={{
            color: "#fff",
            background: "#a21caf",
            padding: "4px 12px",
            borderRadius: "6px",
            display: "inline-block",
            marginTop: "8px",
            textDecoration: "none",
            fontWeight: 500,
          }}
          onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
          id="show-answers-link"
        >
          Show Answers
        </a>
      </>
    ),
  },
  {
    question: "What do you like most about me, my love or ?",
    answer
    }
    // Cleanup floating elements on unmount
    return () => {
      const floatingElements = document.querySelectorAll(".floating");
      floatingElements.forEach((el) => el.remove());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct =
      input.trim().toLowerCase() === QUESTIONS[step].answer.toLowerCase();
    if (correct) {
      setError("");
      setWrongCount(0);
      setInput("");
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setStep("done");
        setShowImage(true);
        setTimeout(() => {
          setShowImage(false);
          setShowCard(true);
        }, 1800);
      }
    } else {
      setError("Try again! That's not quite right.");
      const newWrongCount = wrongCount + 1;
      setWrongCount(newWrongCount);
      if (newWrongCount >= MAX_TRIES) {
        setWrongIndexes([step]);
        setShowAnswers(true);
      }
    }
  };

  if (showAnswers) {
    return (
      <Answers
        onBack={() => {
          setShowAnswers(false);
          setWrongCount(0);
          setInput("");
        }}
        showIndexes={wrongIndexes}
        questions={QUESTIONS}
      />
    );
  }

  // Show question card until all answers are correct
  if (step !== "done") {
    return (
      <div className="birthday-container">
        <div className="message-box" style={{ maxWidth: 350, margin: "auto" }}>
          <h2 style={{ fontSize: "1.2em", marginBottom: 16 }}>Answer to unlock the message</h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", marginBottom: 8 }}>
              {QUESTIONS[step].question}
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: 12,
                fontSize: "1em",
              }}
              autoFocus
            />
            <button
              type="submit"
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                background: "#a21caf",
                color: "#fff",
                border: "none",
                fontWeight: 500,
                fontSize: "1em",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            {error && (
              <div style={{ color: "#f43f5e", marginTop: 8, fontSize: "0.95em" }}>{error}</div>
            )}
            {/* Show note after 1 wrong attempt */}
            {wrongCount >= 1 && wrongCount < MAX_TRIES && (
              <div style={{ color: "#a21caf", marginTop: 12, fontSize: "0.98em" }}>
                <b>Note:</b> {QUESTIONS[step].note}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Show animated image from top, then show card after image disappears
  if (showImage) {
    return (
      <div className="birthday-container">
        <div className="img-fall-wrapper">
          <img src={img2} alt="Surprise" className="img-fall" />
        </div>
        <style>{`
          .img-fall-wrapper {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            height: 100vh;
            pointer-events: none;
          }
          .img-fall {
            width: 220px;
            max-width: 80vw;
            animation: imgFall 1.5s cubic-bezier(.68,-0.55,.27,1.55) forwards;
            margin-top: 0;
            filter: drop-shadow(0 8px 32px #0008);
          }
          @keyframes imgFall {
            0% {
              transform: translateY(-350px) scale(0.8) rotate(-10deg);
              opacity: 0;
            }
            60% {
              transform: translateY(30px) scale(1.05) rotate(4deg);
              opacity: 1;
            }
            80% {
              transform: translateY(-10px) scale(0.98) rotate(-2deg);
            }
            100% {
              transform: translateY(0) scale(1) rotate(0deg);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  // Show the birthday card after image animation
  if (showCard) {
    return (
      <div className="birthday-container">
        <BirthdayCard />
      </div>
    );
  }

  // Birthday message card component
  function BirthdayCard() {
    return (
      <div className="message-box" style={{ zIndex: 20, position: "relative" }}>
        <h1>Happy Birthday, Siddhi 💫</h1>
        <div className="divider"></div>
        <p>
          Tula fakta ek wish nahi, tar ek emotion pathavtoy —
          <span className="highlight">Peace, Smile, ani Aathvani</span> je
          kadhi sampat nahi. 🌿
        </p>
        <p>
          Life ne aapan dognanna veglya rastyavar thevla,
          <br />
          Pan kahi rishtay samapt hot nahi — te fakta shantata madhun jagtat.
        </p>
        <p>
          Tuza divas tuzya manasarkhch jao —
          <span className="highlight-purple">calm, pure, ani peace-full.</span>
          🌸
        </p>
        <p>
          Kadhi kadhi nature silence madhe bolte,
          <br />
          Ani te bolne manaat ek shabd sodte —
          <br />
          <span className="highlight">"You're far, but never gone."</span> 💫
        </p>
        <p className="signature">
          Thank you for being a chapter I'll always keep close. 💖
        </p>
        <div className="signature-box">✨ With all my heart ✨</div>
      </div>
    );
  }

  // Fallback (should never reach here)
  return null;
};

export default Birthday;