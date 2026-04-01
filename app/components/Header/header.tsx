// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import "./header.css";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <div className="logo1-wrapper">
//           <Image src="/logo.PNG" alt="Logo 1" fill className="logo" />
//         </div>
//         <div className="logo2-wrapper">
//           <Image src="/logo_name.jpg" alt="Logo 2" fill className="logo" />
//         </div>
//       </div>

//       <nav className="nav">
//         <Link href="/" className="nav-link">
//           Home
//         </Link>
//         <div className="nav-link dropdown">
//           Collection
//           <div className="dropdown-menu">
//             <Link href="/collection/earrings" className="dropdown-item">
//               Earrings
//             </Link>
//             <Link href="/collection/rings" className="dropdown-item">
//               Rings
//             </Link>
//             <Link href="/collection/bracelets" className="dropdown-item">
//               Bracelets
//             </Link>
//             <Link href="/collection/necklaces" className="dropdown-item">
//               Necklaces
//             </Link>
//           </div>
//         </div>

//         <Link href="/about" className="nav-link">
//           About Us
//         </Link>
//         <Link href="/order" className="nav-link">
//           Place Order
//         </Link>
//       </nav>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  // ✅ Auto close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // ✅ Close menu manually on click
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
        <div className="dropdown">
          <div
            className="nav-link dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Collection <span className="arrow">⌄</span>
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
          setDropdownOpen(false); // reset dropdown when toggling menu
        }}
      >
        ☰
      </div>
    </header>
  );
}
