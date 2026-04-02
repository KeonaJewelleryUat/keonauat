"use client";

import { useEffect, useRef, useState } from "react";
import "./sortFilter.css";

type Item = {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  pieces: number;
};

type Props = {
  items: Item[];
  setFilteredItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export default function SortFilter({ items, setFilteredItems }: Props) {
  const [sortOption, setSortOption] = useState("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);

  const [openMenu, setOpenMenu] = useState<null | "sort" | "filter">(null);

  // ✅ Ref for outside click
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔹 Filter + Sort logic
  useEffect(() => {
    let updatedItems = [...items];

    if (inStockOnly) {
      updatedItems = updatedItems.filter((item) => item.pieces > 0);
    }

    updatedItems = updatedItems.filter(
      (item) => item.price >= 0 && item.price <= maxPrice
    );

    updatedItems.sort((a, b) => {
      if (sortOption === "low") return a.price - b.price;
      if (sortOption === "high") return b.price - a.price;

      if (a.pieces === 0 && b.pieces > 0) return 1;
      if (a.pieces > 0 && b.pieces === 0) return -1;

      return 0;
    });

    setFilteredItems(updatedItems);
  }, [items, sortOption, inStockOnly, maxPrice, setFilteredItems]);

  return (
    <div className="actions" ref={dropdownRef}>
      {/* 🔹 SORT */}
      <div className="dropdown">
        <button
          className="action-btn icon-btn"
          onClick={() => setOpenMenu(openMenu === "sort" ? null : "sort")}
        >
          <span className="icon">⇅</span>
          Sort
        </button>

        <div className={`dropdown-menu ${openMenu === "sort" ? "show" : ""}`}>
          <p
            onClick={() => {
              setSortOption("default");
              setOpenMenu(null); // ✅ close on select
            }}
          >
            Default
          </p>
          <p
            onClick={() => {
              setSortOption("low");
              setOpenMenu(null);
            }}
          >
            Price: Low to High
          </p>
          <p
            onClick={() => {
              setSortOption("high");
              setOpenMenu(null);
            }}
          >
            Price: High to Low
          </p>
        </div>
      </div>

      {/* 🔹 FILTER */}
      <div className="dropdown">
        <button
          className="action-btn icon-btn"
          onClick={() => setOpenMenu(openMenu === "filter" ? null : "filter")}
        >
          <span className="icon">☰</span>
          Filter
        </button>

        <div
          className={`dropdown-menu filter-menu ${
            openMenu === "filter" ? "show" : ""
          }`}
        >
          {/* In Stock */}
          <label
            className="filter-item"
            onClick={() => setOpenMenu(null)} // ✅ close when clicked
          >
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
            />
            In Stock Only
          </label>

          {/* Price */}
          <div className="price-range">
            <p>Price Range</p>

            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              onMouseUp={() => setOpenMenu(null)} // ✅ close after adjusting
              onTouchEnd={() => setOpenMenu(null)} // ✅ mobile
            />

            <div className="price-values">
              <span>₹0</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
