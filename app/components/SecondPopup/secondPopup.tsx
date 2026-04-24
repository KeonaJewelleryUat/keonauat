"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./secondPopup.css";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function SecondPopup({ show, onClose }: Props) {
  useEffect(() => {
    if (show) {
      const canvas = document.getElementById(
        "confetti-canvas",
      ) as HTMLCanvasElement;

      if (!canvas) return;

      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true,
      });

      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        myConfetti({
          particleCount: 5,
          spread: 70,
          origin: { y: 0.6 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      {/* ✅ Confetti canvas */}
      <canvas id="confetti-canvas"></canvas>

      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img src="/offer.PNG" alt="offer" className="offer-img" />
      </div>
    </div>
  );
}
