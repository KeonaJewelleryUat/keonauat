"use client";

import { useState } from "react";
import "./../commonPage.css";
import { bracelet } from "../../data/braceletData";
import Card from "@/app/components/Card/card";
import CollectionHeading from "@/app/components/Collection Heading/collectionHeading";
import SortFilter from "@/app/components/SortFilter/sortFilter";

export default function BraceletsPage() {
  const [filteredBracelets, setFilteredBracelets] = useState(bracelet);

  return (
    <div>
      <div className="collection-header">
        <CollectionHeading
          title="Bracelets Collection"
          subtext="Timeless designs, modern elegance – explore our Bracelets today."
        />

        <div className="actions">
          <SortFilter
            items={bracelet}
            setFilteredItems={setFilteredBracelets}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        {filteredBracelets.map((item) => (
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
