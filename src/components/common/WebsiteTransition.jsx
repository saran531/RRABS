import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import rrabsLogo from '../../assets/images/logo/RRABS_Logo.png';
import './WebsiteTransition.css';

export default function WebsiteTransition() {
  const location = useLocation();

  // Combine pathname, search, and key to detect every route change and navigation
  const locationId = location.pathname + location.search + location.key;
  const [prevLoc, setPrevLoc] = useState(locationId);
  const [isActive, setIsActive] = useState(true);
  const [isSplitting, setIsSplitting] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef([]);

  // Detect route change and immediately activate overlay before paint
  if (prevLoc !== locationId) {
    setPrevLoc(locationId);
    setIsActive(true);
    setIsSplitting(false);
    setAnimKey((prev) => prev + 1);
  }

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock background scroll during transition
    document.body.style.overflow = 'hidden';

    // Ensure destination page starts at top underneath overlay
    window.scrollTo(0, 0);

    let splitTimer;
    let finishTimer;
    let safetyTimer;

    if (prefersReducedMotion) {
      // Reduced motion: quick minimal split (450ms total)
      splitTimer = setTimeout(() => {
        setIsSplitting(true);
      }, 150);

      finishTimer = setTimeout(() => {
        setIsActive(false);
        setIsSplitting(false);
        document.body.style.overflow = '';
      }, 450);
    } else {
      // Full ~2.35s sequence:
      // 0.0s - 0.5s: Panels together, blueprint grid, and technical HUD markers
      // 0.5s - 1.2s: Architectural building outlines and engineered system paths
      // 1.0s - 1.6s: RRABS logo reveal, cyan/green glow, and drawing green accent line
      // 1.65s - 2.35s: Center split-panel door opening (left panel slides left, right panel slides right)
      // 2.35s: Complete opening, panels off-screen, restore scroll and interaction
      splitTimer = setTimeout(() => {
        setIsSplitting(true);
      }, 1650);

      finishTimer = setTimeout(() => {
        setIsActive(false);
        setIsSplitting(false);
        document.body.style.overflow = '';
      }, 2350);

      // Safety fallback to guarantee overlay never gets stuck under any circumstance
      safetyTimer = setTimeout(() => {
        setIsActive(false);
        setIsSplitting(false);
        document.body.style.overflow = '';
      }, 2900);
    }

    timerRef.current = [splitTimer, finishTimer, safetyTimer];

    return () => {
      timerRef.current.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, [animKey]);

  if (!isActive) return null;

  return (
    <aside
      key={animKey}
      className={`website-transition-overlay ${isSplitting ? 'transition-splitting' : ''}`}
      aria-label="RR Advanced Building Systems Page Transition"
      aria-live="polite"
      role="status"
    >
      {/* ========================================================
          LEFT SPLIT DOOR PANEL (Slides to left on split)
          ======================================================== */}
      <div className={`trans-panel trans-panel-left ${isSplitting ? 'split-open' : ''}`}>
        <div className="trans-panel-grid" aria-hidden="true"></div>
        <div className="trans-panel-border right-edge" aria-hidden="true"></div>
      </div>

      {/* ========================================================
          RIGHT SPLIT DOOR PANEL (Slides to right on split)
          ======================================================== */}
      <div className={`trans-panel trans-panel-right ${isSplitting ? 'split-open' : ''}`}>
        <div className="trans-panel-grid" aria-hidden="true"></div>
        <div className="trans-panel-border left-edge" aria-hidden="true"></div>
      </div>

      {/* Center Seam Beam (Luminous cyan/green line down the middle) */}
      <div className={`trans-center-seam ${isSplitting ? 'seam-active' : ''}`} aria-hidden="true"></div>

      {/* ========================================================
          CENTRAL BRANDING & ARCHITECTURAL CONTENT
          (Fades smoothly as the split doors part)
          ======================================================== */}
      <div className={`trans-content-wrapper ${isSplitting ? 'content-fade-out' : ''}`}>
        {/* Central Radial Depth Glow */}
        <div className="trans-radial-glow" aria-hidden="true"></div>

        {/* Technical HUD Coordinate Data (Top & Bottom Markers) */}
        <div className="trans-hud" aria-hidden="true">
          <div className="trans-hud-top-left">
            <span className="trans-hud-tag">SYS_INIT // 01</span>
            <span className="trans-hud-sub">COORD: 45.2°N 12.8°E</span>
          </div>
          <div className="trans-hud-top-right">
            <span className="trans-hud-status-dot"></span>
            <span className="trans-hud-tag">RRABS // INTEGRATED SYSTEMS</span>
          </div>
          <div className="trans-hud-bottom-left">
            <span className="trans-hud-sub">DISCIPLINES: MEP • ELV • BMS</span>
          </div>
          <div className="trans-hud-bottom-right">
            <span className="trans-hud-sub">ENGINEERING BLUEPRINT VERIFIED</span>
          </div>
        </div>

        {/* Main Architectural Building & Systems Animation SVG */}
        <div className="trans-graphic-container" aria-hidden="true">
          <svg
            className="trans-building-svg"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Linear gradient for structural blueprint outlines */}
              <linearGradient id="transBlueprintStroke" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1769AA" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#22C3D6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
              </linearGradient>

              {/* Electrical glowing gradient */}
              <linearGradient id="transElectricGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0878BD" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#22C3D6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>

              {/* RRABS Brand Green gradient */}
              <linearGradient id="transGreenAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#079B36" />
                <stop offset="100%" stopColor="#13B83F" />
              </linearGradient>

              {/* Subtle glow filter */}
              <filter id="transCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Horizon and Ground Grid Lines */}
            <line x1="100" y1="520" x2="700" y2="520" stroke="#1769AA" strokeWidth="1.2" strokeOpacity="0.6" className="trans-draw-fast" />
            <line x1="160" y1="535" x2="640" y2="535" stroke="#22C3D6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4" />
            <line x1="220" y1="548" x2="580" y2="548" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="2 4" strokeOpacity="0.3" />

            {/* Commercial Building Silhouette Outlines (Tiered Modern Architecture) */}
            <path
              d="M 220 520 L 220 460 L 260 460 L 260 320 L 300 320 L 300 180 L 340 180 L 340 100 L 400 60 L 460 100 L 460 180 L 500 180 L 500 320 L 540 320 L 540 460 L 580 460 L 580 520"
              stroke="url(#transBlueprintStroke)"
              strokeWidth="2"
              strokeLinejoin="round"
              className="trans-building-outline"
            />

            {/* Symmetrical Central Spire and Rooftop Antenna */}
            <line x1="400" y1="60" x2="400" y2="28" stroke="#22C3D6" strokeWidth="1.8" className="trans-spire" />
            <circle cx="400" cy="28" r="3.5" fill="#22C3D6" filter="url(#transCyanGlow)" className="trans-node-pulse" />

            {/* Horizontal Floor Plates & Ceilings */}
            <line x1="260" y1="460" x2="540" y2="460" stroke="#1769AA" strokeWidth="1" strokeOpacity="0.5" className="trans-draw-mid" />
            <line x1="260" y1="410" x2="540" y2="410" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="260" y1="365" x2="540" y2="365" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="300" y1="320" x2="500" y2="320" stroke="#1769AA" strokeWidth="1" strokeOpacity="0.5" className="trans-draw-mid" />
            <line x1="300" y1="275" x2="500" y2="275" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="300" y1="228" x2="500" y2="228" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="340" y1="180" x2="460" y2="180" stroke="#1769AA" strokeWidth="1" strokeOpacity="0.5" className="trans-draw-mid" />
            <line x1="340" y1="140" x2="460" y2="140" stroke="#1769AA" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />

            {/* Vertical Architectural Facade Mullions */}
            <line x1="300" y1="460" x2="300" y2="320" stroke="#22C3D6" strokeWidth="0.75" strokeOpacity="0.35" />
            <line x1="350" y1="460" x2="350" y2="180" stroke="#22C3D6" strokeWidth="0.75" strokeOpacity="0.35" />
            <line x1="450" y1="460" x2="450" y2="180" stroke="#22C3D6" strokeWidth="0.75" strokeOpacity="0.35" />
            <line x1="500" y1="460" x2="500" y2="320" stroke="#22C3D6" strokeWidth="0.75" strokeOpacity="0.35" />

            {/* Building Systems Engineering Circuits */}
            {/* Electrical Infrastructure Riser */}
            <path
              d="M 280 520 L 280 340 L 370 340 L 370 200 L 400 200"
              stroke="url(#transElectricGrad)"
              strokeWidth="1.8"
              strokeDasharray="6 4"
              filter="url(#transCyanGlow)"
              className="trans-circuit-flow-fast"
            />

            {/* HVAC & Mechanical Airflow Circuit */}
            <path
              d="M 520 520 L 520 340 L 430 340 L 430 150 L 400 150"
              stroke="#56CCF2"
              strokeWidth="1.6"
              strokeDasharray="5 3"
              strokeOpacity="0.85"
              className="trans-circuit-flow-reverse"
            />

            {/* Plumbing & Sanitary Central Riser */}
            <path
              d="M 400 520 L 400 260"
              stroke="#1769AA"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              className="trans-circuit-flow-fast"
            />

            {/* Fire Safety & Protection Network Points */}
            <circle cx="280" cy="460" r="4" fill="#079B36" filter="url(#transCyanGlow)" className="trans-safety-node" />
            <circle cx="520" cy="460" r="4" fill="#079B36" filter="url(#transCyanGlow)" className="trans-safety-node" />
            <circle cx="370" cy="320" r="4" fill="#079B36" filter="url(#transCyanGlow)" className="trans-safety-node" />
            <circle cx="430" cy="320" r="4" fill="#079B36" filter="url(#transCyanGlow)" className="trans-safety-node" />
            <circle cx="400" cy="180" r="4" fill="#079B36" filter="url(#transCyanGlow)" className="trans-safety-node" />

            {/* Technical Data Interconnect Nodes */}
            <circle cx="340" cy="410" r="3" fill="#22C3D6" className="trans-data-node" />
            <circle cx="460" cy="410" r="3" fill="#22C3D6" className="trans-data-node" />
            <circle cx="340" cy="275" r="3" fill="#22C3D6" className="trans-data-node" />
            <circle cx="460" cy="275" r="3" fill="#22C3D6" className="trans-data-node" />

            {/* Blueprint Precision Crosshairs */}
            <g stroke="#22C3D6" strokeWidth="0.8" strokeOpacity="0.5">
              <line x1="210" y1="460" x2="230" y2="460" />
              <line x1="220" y1="450" x2="220" y2="470" />
              <line x1="570" y1="460" x2="590" y2="460" />
              <line x1="580" y1="450" x2="580" y2="470" />
            </g>
          </svg>

          {/* Diagonal Soft Light Sweep Effect */}
          <div className="trans-light-sweep" aria-hidden="true"></div>
        </div>

        {/* Centered Brand Reveal (RRABS Logo Badge & Accent Line) */}
        <div className="trans-brand-wrapper">
          <div className="trans-logo-card">
            <img
              src={rrabsLogo}
              alt="RRABS - RR Advanced Building Systems"
              className="trans-logo-image"
            />
          </div>

          {/* Thin RRABS Green Accent Line Drawing Beneath Logo */}
          <div className="trans-green-line-wrap" aria-hidden="true">
            <div className="trans-green-accent-line"></div>
          </div>

          {/* Technical Subtitle */}
          <div className="trans-brand-caption">
            <span>INTEGRATED BUILDING SYSTEMS ENGINEERING</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
