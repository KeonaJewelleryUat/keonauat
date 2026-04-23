import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">Keona Jewellery</div>

          <p>
            In case you are not able to reach us on our customer care number,
            pls write to us at
          </p>

          <p className="email">keonasupport@gmail.com</p>

          <p>Our team will get back to you within 24–48 working hours.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Collection</h3>
          <Link href="/collection/earrings">Earrings</Link>
          <Link href="/collection/rings">Rings</Link>
          <Link href="/collection/bracelets">Bracelets</Link>
          <Link href="/collection/earrings">Necklaces</Link>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful links</h3>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Policies */}
        <div className="footer-column">
          <h3>Customer Policies</h3>
          <Link href="/policies//order-confirmation">Order Confirmation</Link>
          <Link href="/policies//returns"> Returns & Exchanges</Link>
          <Link href="/policies/shipping">Shipping & Delivery</Link>
          <Link href="/policies/product-care">
            Product Care & Responsibilities
          </Link>
        </div>
      </div>
    </footer>
  );
}
