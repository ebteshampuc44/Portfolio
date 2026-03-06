// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: "1px solid #1a1a1a",
        padding: "0 60px",
        fontFamily: "'Inter', sans-serif",
        background: "#0c0c0c",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .navbar-inner { padding: 0 20px !important; }
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 0;
            background: #111;
            border-top: 1px solid #1a1a1a;
            padding: 12px 20px 20px;
          }
          .nav-mobile-menu a {
            padding: 12px 0;
            border-bottom: 1px solid #1a1a1a;
            color: #888;
            text-decoration: none;
            font-size: 15px;
            font-family: 'Inter', sans-serif;
            transition: color .2s;
          }
          .nav-mobile-menu a:last-child { border-bottom: none; }
          .nav-mobile-cta {
            margin-top: 16px;
            background: #1c1c1c;
            border: none;
            color: #fff;
            padding: 12px 22px;
            border-radius: 999px;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
          }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu-wrap { display: none !important; }
        }
      `}</style>

      <div
        className="navbar-inner"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 72,
          padding: "0 0px",
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
          EA
        </span>

        {/* Desktop Nav Links */}
        <ul className="nav-links" style={{ display: "flex", gap: 40, listStyle: "none" }}>
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
              onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.color = "#666"; }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="nav-cta"
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

        {/* Hamburger Button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <span style={{
            display: "block", width: 24, height: 2,
            background: "#fff", borderRadius: 2,
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            transition: "transform .2s",
          }} />
          <span style={{
            display: "block", width: 24, height: 2,
            background: "#fff", borderRadius: 2,
            opacity: menuOpen ? 0 : 1,
            transition: "opacity .2s",
          }} />
          <span style={{
            display: "block", width: 24, height: 2,
            background: "#fff", borderRadius: 2,
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            transition: "transform .2s",
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="nav-mobile-menu-wrap">
        {menuOpen && (
          <div className="nav-mobile-menu">
            {["Home", "About", "Works", "Contact"].map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
            <button className="nav-mobile-cta">Let's talk</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;