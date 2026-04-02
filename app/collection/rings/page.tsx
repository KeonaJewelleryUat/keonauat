"use client";

import { useState } from "react";
import "./../commonPage.css";
import { ring } from "../../data/ringsData";
import Card from "@/app/components/Card/card";
import CollectionHeading from "@/app/components/Collection Heading/collectionHeading";
import SortFilter from "@/app/components/SortFilter/sortFilter";

export default function RingsPage() {
  const [filteredrings, setFilteredrings] = useState(ring);

  return (
    <div>
      <div className="collection-header">
        <CollectionHeading
          title="Rings Collection"
          subtext="Timeless designs, modern elegance – explore our rings today."
        />

        <div className="actions">
          <SortFilter items={ring} setFilteredItems={setFilteredrings} />
        </div>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        {filteredrings.map((item) => (
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
