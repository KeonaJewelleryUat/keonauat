"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Marquee from "./components/Marquee/marquee";
import Footer from "./components/Footer/Footer";

import "./globals.css";
import WhatsappPopup from "./components/WhatsappPopup/whatsappPopup";
import WhatsappFloat from "./components/WhatsappFloat/whatsappFloat";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ AUTO SHOW ONLY ONCE PER SESSION
  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");

    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000); // delay (optional)

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <html lang="en">
      <body className="layout-body">
        <div className="top-section">
          <Header />
          <Marquee />
        </div>

        <main className="main-content">{children}</main>

        <Footer />

        {/* ✅ Popup */}
        <WhatsappPopup show={showPopup} onClose={() => setShowPopup(false)} />

        {/* ✅ Floating Button (manual trigger) */}
        <WhatsappFloat onClick={() => setShowPopup(true)} />
      </body>
    </html>
  );
}
