"use client";

import "./placeOrder.css";

export default function PlaceOrder() {
  return (
    <div className="order-container">
      <h1 className="order-header">Place Order</h1>

      <p className="order-description">
        1. 💬 Screenshot & Share : Love a piece? Send us its screenshot on
        WhatsApp.{" "}
      </p>
      <p className="order-description">
        2. 🔍 We Check for You : Our team confirms availability of your selected
        designs.{" "}
      </p>
      <p className="order-description">
        {" "}
        3. 💫 Secure Your Order : Once confirmed, complete your payment via
        UPI.{" "}
      </p>
      <p className="order-description">
        4. 📍 Send Your Details : Share your shipping address with us.{" "}
      </p>
      <p className="order-description">
        5. 🎁 Sit Back & Shine : Your Keona pieces will be carefully packed and
        dispatched to you! At Keona, every order is handled with care—because
        you deserve jewellery that shines as beautifully as you do 💖
      </p>
    </div>
  );
}
