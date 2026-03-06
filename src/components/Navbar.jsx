// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        borderBottom: "1px solid #1a1a1a",
        padding: "0 60px",
        fontFamily: "'Inter', sans-serif",
        background: "#0c0c0c",   // 👈 Navbar black
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 72,
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: "-.5px",
            color: "#fff",
          }}
        >
          GridX
        </span>

        {/* Nav Links */}
        <ul style={{ display: "flex", gap: 40, listStyle: "none" }}>
          {["Home", "About", "Works", "Contact"].map((item, i) => (
            <li
              key={item}
              style={{
                fontSize: 14,
                cursor: "pointer",
                color: i === 0 ? "#fff" : "#666",
                fontWeight: i === 0 ? 500 : 400,
                transition: "color .2s",
              }}
              onMouseEnter={(e) => {
                if (i !== 0) e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                if (i !== 0) e.currentTarget.style.color = "#666";
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          style={{
            background: "#1c1c1c",
            border: "none",
            color: "#fff",
            padding: "9px 22px",
            borderRadius: 999,
            fontSize: 13,
            fontFamily: "inherit",
            fontWeight: 500,
            cursor: "pointer",
            transition: "background .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#272727")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1c1c")}
        >
          Let's talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;