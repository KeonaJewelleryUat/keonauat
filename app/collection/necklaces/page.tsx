"use client";

import { useState } from "react";
import "./../commonPage.css";
import { necklace } from "../../data/necklaceData";
import Card from "@/app/components/Card/card";
import CollectionHeading from "@/app/components/Collection Heading/collectionHeading";
import SortFilter from "@/app/components/SortFilter/sortFilter";

export default function NecklacesPage() {
  const [filterednecklaces, setFilterednecklaces] = useState(necklace);

  return (
    <div>
      <div className="collection-header">
        <CollectionHeading
          title="Necklaces Collection"
          subtext="Timeless designs, modern elegance – explore our necklaces today."
        />

        <div className="actions">
          <SortFilter
            items={necklace}
            setFilteredItems={setFilterednecklaces}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        {filterednecklaces.map((item) => (
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
