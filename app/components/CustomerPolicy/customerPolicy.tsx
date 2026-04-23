"use client";

import "./customerPolicy.css";

type CustomerPolicyProps = {
  title: string;
  content: string[];
};

export default function CustomerPolicy({
  title,
  content,
}: CustomerPolicyProps) {
  return (
    <div className="policy-container">
      <h1 className="policy-header">{title}</h1>

      {content.map((para, index) => (
        <p key={index} className="policy-description">
          {para}
        </p>
      ))}
    </div>
  );
}
