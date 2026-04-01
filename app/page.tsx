"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "./components/Carousel/carousel";
import "./home.css";

export default function HomePage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  const trendingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trendingRef.current;
    if (!track) return;

    let pos = 0;
    const speed = 0.6;
    let paused = false;
    let rafId: number;

    const animate = () => {
      if (!paused) {
        pos -= speed;
        track.style.transform = `translateX(${pos}px)`;

        const firstChild = track.children[0] as HTMLElement;
        const firstChildWidth = firstChild.offsetWidth + 40; // 40 = your gap

        // When first item is fully out of view, move it to end
        if (Math.abs(pos) >= firstChildWidth) {
          track.appendChild(firstChild);
          pos += firstChildWidth;
          track.style.transform = `translateX(${pos}px)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("touchstart", onEnter);
    track.addEventListener("touchend", onLeave);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("touchstart", onEnter);
      track.removeEventListener("touchend", onLeave);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // restart animation every time it comes into view
          setAnimate(false);
          void el.offsetWidth;
          setAnimate(true);
        } else {
          // reset when leaving viewport
          setAnimate(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Base + carousel (unchanged) */}
      <div className="base-div"></div>
      <div className="carousel-div">
        <div className="text-section">
          <h1>Anti Tarnish Jewellery</h1>
          <p>
            Discover handcrafted jewellery that speaks of grace, tradition, and
            modern charm. Each piece tells its own story of beauty.
          </p>
          <button className="explore-btn">Explore Now</button>
        </div>
        <div className="carousel-section">
          <Carousel />
        </div>
      </div>
      {/* Trending Now Section */}
      <section className="trending-section">
        <h2>TRENDING NOW</h2>
        <div className="trending-carousel">
          <button className="carousel-arrow left">{"<"}</button>

          <div className="trending-items-wrapper">
            <div className="trending-items" ref={trendingRef}>
              {[
                { img: "/rings.jpg", text: "Rings" },
                { img: "/earrings.jpg", text: "Earrings" },
                { img: "/necklace.png", text: "Necklaces" },
                { img: "/bracelet.jpg", text: "Bracelets" },
                { img: "/rings.jpg", text: "Rings" },
                { img: "/earrings.jpg", text: "Earrings" },
                { img: "/necklace.png", text: "Necklaces" },
                { img: "/bracelet.jpg", text: "Bracelets" },
                { img: "/necklace.png", text: "Necklaces" },
                { img: "/bracelet.jpg", text: "Bracelets" },
              ].map((item, i) => (
                <div key={i} className="trending-item-container">
                  <div className="trending-item">
                    <img src={item.img} alt={item.text} />
                  </div>
                  <p className="trending-item-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow right">{">"}</button>
        </div>
      </section>

      {/* Collection heading (unchanged) */}
      <section className="collection-section">
        <div className="collection-heading">
          <span className="line"></span>
          <span className="star">✶</span>
          <h2>Our Collection</h2>
          <span className="star">✶</span>
          <span className="line"></span>
        </div>
        <p className="collection-subtext">
          Handpicked pieces crafted with precision, elegance, and passion.
        </p>
      </section>

      {/* Floating Circle Buttons Section */}
      <section className="circle-buttons-section" ref={sectionRef}>
        <div className={`circle-buttons ${animate ? "animate" : ""}`}>
          <div className="circle-btn-container">
            <button
              className="circle-btn"
              style={{ backgroundImage: "url('/rings.jpg')" }}
            ></button>
            <p className="circle-btn-text">Rings</p>
          </div>

          <div className="circle-btn-container">
            <button
              className="circle-btn"
              style={{ backgroundImage: "url('/earrings.jpg')" }}
            ></button>
            <p className="circle-btn-text">Earrings</p>
          </div>

          <div className="circle-btn-container">
            <button
              className="circle-btn"
              style={{ backgroundImage: "url('/necklace.png')" }}
            ></button>
            <p className="circle-btn-text">Necklaces</p>
          </div>

          <div className="circle-btn-container">
            <button
              className="circle-btn"
              style={{ backgroundImage: "url('/bracelet.jpg')" }}
            ></button>
            <p className="circle-btn-text">Bracelets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
