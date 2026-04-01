"use client";

import Image from "next/image";
import "./card.css";

interface CardProps {
  id: number;
  name: string;
  imagePath: string;
  price?: number;
  pieces?: number;
}

export default function Card({
  id,
  name,
  imagePath,
  price,
  pieces,
}: CardProps) {
  const fewPieces = pieces !== undefined && pieces > 0 && pieces < 5;
  const soldOut = pieces === 0;

  return (
    <div className="card">
      {/* Sold Out overlay */}
      {soldOut && (
        <div className="sold-out-overlay">
          <div className="sold-out-label">Sold Out</div>
        </div>
      )}

      {/* Image */}
      <div className="card-image">
        <Image src={imagePath} alt={name} width={200} height={200} />
      </div>

      {/* Product name */}
      <div className="card-text">{name}</div>

      {/* Price + Few pieces left */}
      {price !== undefined && (
        <div className="card-price">
          ₹{price}{" "}
          {fewPieces && <span className="few-left">Few pieces left!</span>}
        </div>
      )}
    </div>
  );
}
