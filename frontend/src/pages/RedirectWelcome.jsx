import React, { useState, useEffect } from "react";

export default function RedirectPage({ onFinish }) {
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    // 1. Decrement countdown every second
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    // 2. Automatically trigger finish callback after 3 seconds (3000ms)
    const timeout = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 3000);

    // Cleanup timers when component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  // Calculate percentage for DaisyUI radial progress (100% -> 0%)
  const progressPercent = Math.max(0, Math.round((secondsLeft / 3) * 100));

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          {/* DaisyUI Radial Progress Countdown */}
          {/* <div
            className="radial-progress text-primary font-bold text-lg my-2 transition-all duration-500"
            style={{
              "--value": progressPercent,
              "--size": "5rem",
              "--thickness": "5px",
            }}
            role="progressbar"
            aria-valuenow={progressPercent}
          >
            {secondsLeft > 0 ? secondsLeft : 0}s
          </div> */}

          <img src="/appLogo.png" alt="appLogo" className="w-22 h-22" />

          <p className="text-base-content/70 text-sm">
            Please wait, redirecting in{" "}
            <span className="font-semibold text-primary">
              {secondsLeft > 0 ? secondsLeft : 0}
            </span>{" "}
            second{secondsLeft === 1 ? "" : "s"}.
          </p>

          {/* DaisyUI Loading Dots Indicator */}
          <span className="loading loading-dots loading-md text-primary mt-2"></span>

          {/* Skip Button */}
          <div className="card-actions justify-center mt-4">
            <button
              onClick={onFinish}
              className="btn btn-ghost btn-xs text-base-content/50 hover:text-primary"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
