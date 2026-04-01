// /app/collection/earrings/page.tsx
"use client";

import "./earrings.css";
import { earrings } from "../../data/earringsData";
import Card from "@/app/components/Card/card";
import CollectionHeading from "@/app/components/Collection Heading/collectionHeading";

export default function EarringsPage() {
  const sortedEarrings = [...earrings].sort((a, b) => {
    if (a.pieces === 0 && b.pieces > 0) return 1;
    if (a.pieces > 0 && b.pieces === 0) return -1;
    return 0;
  });

  return (
    <div>
      <CollectionHeading
        title="Earrings Collection"
        subtext="Timeless designs, modern elegance – explore our earrings today."
      />
      <div className="cards-grid">
        {sortedEarrings.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            imagePath={item.imagePath}
            price={item.price}
            pieces={item.pieces}
          />
        ))}
      </div>
    </div>
  );
}
