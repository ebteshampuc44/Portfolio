// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0c0c0c",
        borderTop: "1px solid #1a1a1a",
        fontFamily: "'Inter', sans-serif",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .footer-nav { gap: 18px !important; flex-wrap: wrap; justify-content: center; }
          .footer-nav a { font-size: 13px !important; }
        }
      `}</style>

      {/* Logo */}
      <div
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: "#fff",
          marginBottom: 16,
        }}
      >
        EA
      </div>

      {/* Navigation */}
      <div
        className="footer-nav"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {["Home", "About", "Works", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "#666",
              textDecoration: "none",
              fontSize: 14,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ color: "#666", fontSize: 12 }}>
        © All rights reserved by EA
      </p>
    </footer>
  );
};

export default Footer;