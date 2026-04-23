"use client";

import "./whatsappFloat.css";

type Props = {
  onClick: () => void;
};

export default function WhatsappFloat({ onClick }: Props) {
  return (
    <div className="whatsapp-float" onClick={onClick}>
      <img src="/whatsapp-icon.jpg" alt="WhatsApp" />
    </div>
  );
}
