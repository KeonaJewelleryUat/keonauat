"use client";

import "./collectionHeading.css";

interface CollectionHeadingProps {
  title: string;
  subtext: string;
}

export default function CollectionHeading({
  title,
  subtext,
}: CollectionHeadingProps) {
  return (
    <div className="common-collection-section">
      <div className="common-collection-heading">
        <span className="common-line"></span>
        <span className="common-star">✶</span>
        <h2>{title}</h2>
        <span className="common-star">✶</span>
        <span className="common-line"></span>
      </div>
      <div className="common-collection-subtext-container">
        <p className="common-collection-subtext">{subtext}</p>
      </div>
    </div>
  );
}
