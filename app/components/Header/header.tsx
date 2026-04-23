"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Handle nav click
  const handleNavClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo-container">
        <div className="logo1-wrapper">
          <Image src="/logo.PNG" alt="Logo 1" fill className="logo" />
        </div>
        <div className="logo2-wrapper">
          <Image src="/logo_name.jpg" alt="Logo 2" fill className="logo" />
        </div>
      </div>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="nav-link" onClick={handleNavClick}>
          Home
        </Link>

        {/* COLLECTION DROPDOWN */}
        <div className="dropdown" ref={dropdownRef}>
          <div
            className="nav-link dropdown-toggle"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Collection
            <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>⌄</span>
          </div>

          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <Link
              href="/collection/earrings"
              className="dropdown-item"
              onClick={handleNavClick}
            >
              Earrings
            </Link>
            <Link
              href="/collection/rings"
              className="dropdown-item"
              onClick={handleNavClick}
            >
              Rings
            </Link>
            <Link
              href="/collection/bracelets"
              className="dropdown-item"
              onClick={handleNavClick}
            >
              Bracelets
            </Link>
            <Link
              href="/collection/necklaces"
              className="dropdown-item"
              onClick={handleNavClick}
            >
              Necklaces
            </Link>
          </div>
        </div>

        <Link href="/about" className="nav-link" onClick={handleNavClick}>
          About Us
        </Link>

        <Link href="/order" className="nav-link" onClick={handleNavClick}>
          Place Order
        </Link>
      </nav>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setDropdownOpen(false);
        }}
      >
        ☰
      </div>
    </header>
  );
}
