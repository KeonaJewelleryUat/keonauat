"use client";

import "./whatsappPopup.css";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function WhatsappPopup({ show, onClose }: Props) {
  const handleJoin = () => {
    window.open("https://chat.whatsapp.com/YOUR_GROUP_LINK", "_blank");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Join our WhatsApp Community 💚</h2>

        <p className="comment">
          Get early access to new drops & exclusive offers.
        </p>

        {/* ✅ Scanner Image */}
        <img
          src="/qr-code.jpg" // 👉 put your scanner image in /public
          alt="Scan to join"
          className="scanner-img"
        />
        {/* <span className="line"></span>

        <h3>OR</h3>

        <span className="line"></span> */}

        {/* ✅ Centered Button */}
        {/* <button className="join-btn" onClick={handleJoin}>
          Join Now
        </button> */}
      </div>
    </div>
  );
}
