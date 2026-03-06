// src/pages/Home.jsx
import React from "react";

/* ── Icons ── */
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const PenToolIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9.5"/>
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" strokeLinecap="round"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <circle cx="12" cy="12" r="3.8"/>
    <circle cx="12" cy="12" r="7.5" strokeOpacity=".5"/>
    <circle cx="12" cy="12" r="11" strokeOpacity=".25"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4">
    <rect x="2" y="3" width="20" height="18" rx="3" ry="3"/>
    <path d="M8 10l-3 3 3 3M16 10l3 3-3 3M13 7l-2 10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowBtn = () => (
  <button
    style={{
      width: 38, height: 38, borderRadius: "50%",
      border: "1.5px solid #2a2a2a", background: "transparent",
      color: "white", display: "flex", alignItems: "center",
      justifyContent: "center", cursor: "pointer", flexShrink: 0,
      transition: "border-color .2s, background .2s"
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.background = "#1c1c1c"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.background = "transparent"; }}
  >
    <ArrowIcon />
  </button>
);

const Tag = ({ children }) => (
  <p style={{ color: "#555", fontSize: 10, letterSpacing: "0.14em", fontWeight: 500, textTransform: "uppercase", marginBottom: 4 }}>
    {children}
  </p>
);

const Home = () => {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "100vh", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mq { display: flex; width: max-content; animation: marquee 24s linear infinite; }
        .card {
          background: #141414;
          border-radius: 20px;
          transition: background .2s;
        }
        .card:hover { background: #181818; }
        .svc-icon {
          width: 52px; height: 52px; border-radius: 50%;
          border: 1.5px solid #252525;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .social-btn {
          width: 58px; height: 58px; border-radius: 50%;
          background: #1e1e1e;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background .2s;
        }
        .social-btn:hover { background: #252525; }
        .stat-num {
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -1.5px;
        }
        .stat-lbl {
          color: #555;
          font-size: 9.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 2px;
        }
      `}</style>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "22px 48px 56px" }}>

        {/* ── Top Row: empty left + Marquee right ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12, marginBottom: 12 }}>
          <div />
          <div style={{
            background: "#111",
            borderRadius: 999,
            padding: "11px 28px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center"
          }}>
            <div className="mq">
              {[...Array(8)].map((_, i) => (
                <span key={i} style={{ color: "#3a3a3a", fontSize: 11, letterSpacing: "0.22em", whiteSpace: "nowrap", paddingRight: 32, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#3a3a3a" }} />
                  LATEST WORK AND <strong style={{ color: "#6a6a6a", marginLeft: 6 }}>FEATURED</strong>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main 3-col Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>

          {/* 1 — Profile Card */}
          <div className="card" style={{ padding: "22px 22px 20px", display: "flex", alignItems: "center", gap: 18, position: "relative", minHeight: 210 }}>
            <img
              src="https://i.ibb.co.com/wZNPNjNw/97126606.jpg"
              style={{ width: 115, height: 148, borderRadius: 16, objectFit: "cover", objectPosition: "top", flexShrink: 0 }}
              alt="David Henderson"
            />
            <div style={{ flex: 1 }}>
              <Tag>A WEB DESIGNER</Tag>
              <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.03, letterSpacing: "-1.8px", marginTop: 6 }}>
                David<br />Henderson.
              </h1>
              <p style={{ color: "#555", fontSize: 11.5, marginTop: 10, lineHeight: 1.65 }}>
                I am a Web Designer based<br />in san francisco.
              </p>
            </div>
            <div style={{ position: "absolute", bottom: 18, right: 18 }}><ArrowBtn /></div>
          </div>

          {/* 2 — Credentials */}
          <div className="card" style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
                {/* Signature-like strokes */}
                <path d="M10 62 Q22 22 38 40 Q50 55 62 26 Q72 10 84 42 Q93 63 106 34 Q116 14 126 42 Q134 56 148 38"
                  stroke="#484848" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 75 Q40 68 72 74 Q104 80 148 70"
                  stroke="#333" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <path d="M108 52 Q118 48 128 56" stroke="#484848" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <Tag>MORE ABOUT ME</Tag>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.5px" }}>Credentials</h3>
              </div>
              <ArrowBtn />
            </div>
          </div>

          {/* 3 — Projects */}
          <div className="card" style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210, overflow: "hidden" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Mockup browser window */}
              <div style={{ background: "#1c1c1c", borderRadius: 12, padding: "12px 14px", width: "100%", maxWidth: 200, border: "1px solid #242424" }}>
                {/* Browser top bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 10 }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#2a2a2a" }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#222", borderRadius: 4, height: 8 }} />
                </div>
                {/* Content area */}
                <div style={{ background: "#222", borderRadius: 8, overflow: "hidden" }}>
                  {/* Header */}
                  <div style={{ background: "#262626", padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#555", fontSize: 8, letterSpacing: "0.12em" }}>MY WORKS</span>
                    <div style={{ display: "flex", gap: 4 }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: 14, height: 4, borderRadius: 2, background: "#2e2e2e" }} />)}
                    </div>
                  </div>
                  {/* Main image area */}
                  <div style={{ padding: 10 }}>
                    <div style={{
                      background: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
                      borderRadius: 6,
                      height: 68,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      border: "1px solid #2e2e2e"
                    }}>
                      {/* Small course cover design */}
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#333", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 2 }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#3a3a3a" }} />
                      </div>
                      <span style={{ color: "#4a4a4a", fontSize: 7, letterSpacing: "0.1em", textAlign: "center", lineHeight: 1.6 }}>
                        MEDITATION<br />COURSE
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                      <div style={{ background: "#2a2a2a", borderRadius: 3, height: 5, flex: 1 }} />
                      <div style={{ background: "#2a2a2a", borderRadius: 3, height: 5, flex: 2 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <Tag>SHOWCASE</Tag>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.5px" }}>Projects</h3>
              </div>
              <ArrowBtn />
            </div>
          </div>

          {/* 4 — GFonts */}
          <div className="card" style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "flex-start", paddingTop: 8 }}>
              {/* Google Fonts-like logo */}
              <div style={{ position: "relative", width: 88, height: 82 }}>
                {/* Red circle top-left */}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E53935", position: "absolute", top: 0, left: 0 }} />
                {/* Yellow square overlapping */}
                <div style={{ width: 32, height: 32, background: "#FDD835", position: "absolute", top: 12, left: 14, borderRadius: 6, zIndex: 1 }} />
                {/* Blue rectangle bottom-right */}
                <div style={{ width: 40, height: 56, background: "#1E88E5", borderRadius: "10px 10px 0 0", position: "absolute", bottom: 0, right: 0 }} />
                {/* Red overlap on blue bottom */}
                <div style={{ width: 40, height: 28, background: "#E53935", position: "absolute", bottom: 0, right: 0, borderRadius: "0 0 10px 10px" }} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <Tag>BLOG</Tag>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.5px" }}>GFonts</h3>
              </div>
              <ArrowBtn />
            </div>
          </div>

          {/* 5 — Services Offering */}
          <div className="card" style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div className="svc-icon"><CameraIcon /></div>
              <div className="svc-icon"><PenToolIcon /></div>
              <div className="svc-icon"><LayersIcon /></div>
              <div className="svc-icon"><CodeIcon /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <Tag>SPECIALIZATION</Tag>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.5px" }}>Services Offering</h3>
              </div>
              <ArrowBtn />
            </div>
          </div>

          {/* 6 — Profiles */}
          <div className="card" style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div className="social-btn"><DribbbleIcon /></div>
              <div className="social-btn"><TwitterIcon /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <Tag>STAY WITH ME</Tag>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.5px" }}>Profiles</h3>
              </div>
              <ArrowBtn />
            </div>
          </div>

        </div>

        {/* ── Bottom Row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>

          {/* Stats Card */}
          <div className="card" style={{ padding: "28px 36px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              {/* Stat 1 */}
              <div style={{ textAlign: "center" }}>
                <div className="stat-num">07</div>
                <div className="stat-lbl">YEARS</div>
                <div className="stat-lbl" style={{ color: "#666" }}>EXPERIENCE</div>
              </div>
              <div style={{ width: 1, height: 48, background: "#242424" }} />
              {/* Stat 2 */}
              <div style={{ textAlign: "center" }}>
                <div className="stat-num">+125</div>
                <div className="stat-lbl">CLIENTS</div>
                <div className="stat-lbl" style={{ color: "#666" }}>WORLDWIDE</div>
              </div>
              <div style={{ width: 1, height: 48, background: "#242424" }} />
              {/* Stat 3 */}
              <div style={{ textAlign: "center" }}>
                <div className="stat-num">+210</div>
                <div className="stat-lbl">TOTAL</div>
                <div className="stat-lbl" style={{ color: "#666" }}>PROJECTS</div>
              </div>
            </div>
          </div>

          {/* Let's work together */}
          <div className="card" style={{
            padding: "32px 34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            minHeight: 160
          }}>
            {/* Decorative 4-point star */}
            <div style={{ position: "absolute", top: 22, left: 34 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z"
                  fill="none" stroke="#3a3a3a" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Text */}
            <div style={{ marginTop: 8 }}>
              <h2 style={{
                fontSize: 44,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2.5px",
              }}>
                Let's<br />
                <span>work </span>
                <span style={{ color: "#2196F3" }}>together.</span>
              </h2>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ArrowBtn />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
