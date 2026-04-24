"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Marquee from "./components/Marquee/marquee";
import Footer from "./components/Footer/Footer";

import "./globals.css";
import WhatsappPopup from "./components/WhatsappPopup/whatsappPopup";
import WhatsappFloat from "./components/WhatsappFloat/whatsappFloat";
import SecondPopup from "./components/SecondPopup/secondPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  // ✅ First popup (WhatsApp)
  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");

    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ Handle closing first popup
  const handleCloseWhatsapp = () => {
    setShowPopup(false);

    // 👇 Show second popup AFTER closing first
    setTimeout(() => {
      setShowSecondPopup(true);
    }, 3000); // delay after close (you can tweak)
  };

  return (
    <html lang="en">
      <body className="layout-body">
        <div className="top-section">
          <Header />
          <Marquee />
        </div>

        <main className="main-content">{children}</main>

        <Footer />

        {/* ✅ First Popup */}
        <WhatsappPopup show={showPopup} onClose={handleCloseWhatsapp} />

        {/* ✅ Second Popup */}
        <SecondPopup
          show={showSecondPopup}
          onClose={() => setShowSecondPopup(false)}
        />

        {/* ✅ Floating Button */}
        <WhatsappFloat onClick={() => setShowPopup(true)} />
      </body>
    </html>
  );
}
