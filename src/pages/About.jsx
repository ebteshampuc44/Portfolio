// src/pages/About.jsx
import React, { useState, useEffect } from "react";

/* ── Responsive Hook ── */
const useBreakpoint = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
};

/* ── SVG Icons ── */
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = ({ size = 22, opacity = 0.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    style={{ opacity }}
  >
    <path
      d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z"
      fill="currentColor"
    />
  </svg>
);

const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Components ── */
const ArrowBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1.5px solid #2a2a2a",
      background: "transparent",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0,
    }}
  >
    <ArrowIcon />
  </button>
);

const SocialBtn = ({ children }) => (
  <div
    style={{
      width: 46,
      height: 46,
      borderRadius: "50%",
      border: "1.5px solid #2a2a2a",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    {children}
  </div>
);

const Card = ({ children, style = {} }) => (
  <div
    style={{
      background: "#141414",
      borderRadius: 18,
      padding: "24px 26px",
      ...style,
    }}
  >
    {children}
  </div>
);

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "#555",
      textTransform: "uppercase",
      fontWeight: 600,
      marginBottom: 18,
    }}
  >
    {children}
  </p>
);

const TimelineItem = ({ year, role, company }) => (
  <div>
    <p style={{ fontSize: 12, color: "#555", marginBottom: 4, fontWeight: 500 }}>
      {year}
    </p>
    <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
      {role}
    </p>
    <p style={{ fontSize: 13, color: "#888" }}>{company}</p>
  </div>
);

const Divider = () => (
  <div style={{ height: 1, background: "#1f1f1f", margin: "16px 0" }} />
);

/* ── Main Component ── */
const About = () => {
  const { isMobile, isTablet } = useBreakpoint();

  const isCompact = isMobile || isTablet;

  return (
    <div
      style={{
        background: "#0c0c0c",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        padding: isMobile ? "20px 16px 40px" : isTablet ? "24px 28px 44px" : "28px 60px 48px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "#555",
            textTransform: "uppercase",
          }}
        >
          About Me
        </span>
        <ArrowBtn />
      </div>

      {/* Row 1 — Profile + Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "180px 1fr" : "230px 1fr",
          gap: 14,
          marginBottom: 14,
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            height: isMobile ? "auto" : isTablet ? 240 : 260,
          }}
        >
          <img
            src="https://i.ibb.co.com/wZNPNjNw/97126606.jpg"
            alt="profile"
            style={{
              width: "100%",
              height: isMobile ? "auto" : "100%",
              display: "block",
              objectFit: isMobile ? "contain" : "cover",
            }}
          />
        </div>

        {/* Summary Card */}
        <Card style={{ padding: isMobile ? "20px" : "28px 32px" }}>
          <h1
            style={{
              fontSize: isMobile ? 28 : isTablet ? 36 : 48,
              fontWeight: 800,
              marginBottom: isMobile ? 14 : 20,
              lineHeight: 1.1,
            }}
          >
            SELF-SUMMARY
          </h1>

          <div
            style={{
              background: "#1a1a1a",
              borderRadius: 14,
              padding: isMobile ? "14px 16px" : "16px 20px",
            }}
          >
            <h2 style={{ fontSize: isMobile ? 16 : 18, marginBottom: 8 }}>
              Md Ebtesham Azam
            </h2>
            <p style={{ fontSize: isMobile ? 12 : 13, color: "#888", lineHeight: 1.7 }}>
              I am a chattogram,Bangladesh-based product designer with a focus on web
              design, illustration and visual development. I have a diverse
              range of experience having worked across various industries.
            </p>
          </div>
        </Card>
      </div>

      {/* Row 2 — Experience + Education */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <Card>
          <SectionLabel>Experience</SectionLabel>
          <TimelineItem
            year="2007 - 2017"
            role="Framer Designer & Developer"
            company="Bluebase Designs"
          />
          <Divider />
          <TimelineItem
            year="2017 - 2023"
            role="Front-End Developer"
            company="Larsen & Toubro"
          />
        </Card>

        <Card>
          <SectionLabel>Education</SectionLabel>
          <TimelineItem
            year="2004 - 2007"
            role="Bachelor Degree in Psychology"
            company="University of California"
          />
          <Divider />
          <TimelineItem
            year="2007 - 2009"
            role="Master Degree in Designing"
            company="University of Texas"
          />
        </Card>
      </div>

      {/* Row 3 — Profiles + Work Together + Credentials */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr 1fr"
            : "1fr 1.4fr 1fr",
          gap: 14,
        }}
      >
        {/* Profiles */}
        <Card>
          <div style={{ display: "flex", gap: 12 }}>
            <SocialBtn><DribbbleIcon /></SocialBtn>
            <SocialBtn><TwitterIcon /></SocialBtn>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 20,
            }}
          >
            <div>
              <span style={{ fontSize: 10, color: "#555" }}>Stay with me</span>
              <h4 style={{ margin: "4px 0 0", fontSize: 15 }}>Profiles</h4>
            </div>
            <ArrowBtn />
          </div>
        </Card>

        {/* Work together */}
        <Card
          style={{
            /* On tablet, span full width in the second row */
            gridColumn: isTablet ? "1 / -1" : "auto",
          }}
        >
          <h3 style={{ fontSize: isMobile ? 22 : 28, margin: "0 0 16px" }}>
            Let's <br /> work{" "}
            <span style={{ color: "#4a90d9" }}>together.</span>
          </h3>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ArrowBtn />
          </div>
        </Card>

        {/* Credentials */}
        <Card>
          <div>
            <span style={{ fontSize: 10, color: "#555" }}>More about me</span>
            <h4 style={{ margin: "4px 0 0", fontSize: 15 }}>Credentials</h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 20,
            }}
          >
            <ArrowBtn />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;