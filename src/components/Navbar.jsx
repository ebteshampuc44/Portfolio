// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

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
          
          .nav-mobile-menu-wrap {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 40%;
            min-width: 280px;
            max-width: 400px;
            z-index: 1000;
            pointer-events: none;
          }
          
          .nav-mobile-menu {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background: #111;
            border-left: 1px solid #1a1a1a;
            padding: 80px 30px 30px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
            pointer-events: auto;
            overflow-y: auto;
          }
          
          .nav-mobile-menu.open {
            transform: translateX(0);
          }
          
          .nav-mobile-menu a {
            display: block;
            padding: 16px 0;
            border-bottom: 1px solid #1a1a1a;
            color: #888;
            text-decoration: none;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
            transition: color .2s;
          }
          
          .nav-mobile-menu a:hover {
            color: #fff;
          }
          
          .nav-mobile-menu a:last-child { 
            border-bottom: none; 
          }
          
          .nav-mobile-cta {
            margin-top: 24px;
            background: #1c1c1c;
            border: none;
            color: #fff;
            padding: 14px 24px;
            border-radius: 999px;
            font-size: 15px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            transition: background .2s;
          }
          
          .nav-mobile-cta:hover {
            background: #272727;
          }
          
          .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(3px);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          }
          
          .menu-overlay.active {
            opacity: 1;
            visibility: visible;
          }
        }
        
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu-wrap { display: none !important; }
        }
      `}</style>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontSize: 21,
              fontWeight: 800,
              letterSpacing: "-.5px",
              color: "#fff",
              zIndex: 1001,
              cursor: 'pointer'
            }}
          >
            EA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links" style={{ display: "flex", gap: 40, listStyle: "none" }}>
          <li
            style={{
              fontSize: 14,
              cursor: "pointer",
              color: isActive('/') ? "#fff" : "#666",
              fontWeight: isActive('/') ? 500 : 400,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => { if (!isActive('/')) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { if (!isActive('/')) e.currentTarget.style.color = "#666"; }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          </li>
          <li
            style={{
              fontSize: 14,
              cursor: "pointer",
              color: isActive('/about') ? "#fff" : "#666",
              fontWeight: isActive('/about') ? 500 : 400,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => { if (!isActive('/about')) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { if (!isActive('/about')) e.currentTarget.style.color = "#666"; }}
          >
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
          </li>
          <li
            style={{
              fontSize: 14,
              cursor: "pointer",
              color: "#666",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#666"}
          >
            Works
          </li>
          <li
            style={{
              fontSize: 14,
              cursor: "pointer",
              color: "#666",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#666"}
          >
            Contact
          </li>
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
            zIndex: 1001,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#272727")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1c1c")}
        >
          Let's talk
        </button>

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
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
            zIndex: 1001,
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
      <div className="nav-mobile-menu-wrap" ref={menuRef}>
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button 
            className="nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;