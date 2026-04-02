"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import img2 from "./rashi.jpg";
import img1 from "./yashvi.jpg";

import "./about.css";
import CollectionHeading from "../components/Collection Heading/collectionHeading";

export default function HomePage() {
  return (
    <div className="page-div">
      <div className="carousel-div">
        <div className="text-section-div">
          <h1>About Us</h1>
          <p>
            Keona Jewellery, founded on 30th April 2025, is a modern jewellery
            brand dedicated to creating anti-tarnish pieces that blend elegance
            with everyday practicality. Our collections are thoughtfully
            designed to offer unique, timeless styles suitable for both daily
            wear and special occasions.
          </p>
          <p>
            Founded by Yashvi Thakkar and Rashi Shirangi, Keona is a brand for
            women, made by women. We are passionate about celebrating
            individuality through our designs while promoting strength,
            confidence, and independence.
          </p>
          <p>
            At Keona, we strongly believe in empowering and strengthening women
            entrepreneurship, striving to build a community where creativity and
            ambition shine just as brightly as our jewellery.
          </p>
        </div>
      </div>
      <div className="founder-container">
        <CollectionHeading title="Our Founders" subtext="" />
        <div className="founder-card">
          <div className="founder-image">
            <Image
              src={img1}
              alt={""}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200", height: "200" }}
            ></Image>
          </div>
          <div className="founder-name">Yashvi Thakkar</div>
          <div className="founder-role">Founder</div>
        </div>
        <div className="founder-card">
          <div className="founder-image">
            <Image
              src={img2}
              alt={""}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200", height: "200" }}
            ></Image>
          </div>
          <div className="founder-name">Rashi Shirangi</div>
          <div className="founder-role">Co-Founder</div>
        </div>
      </div>
    </div>
  );
}
