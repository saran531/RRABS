import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Plus, 
  Minus,
  SettingsIcon,
  LineChartIcon,
  LeafIcon,
  Fan,
  Zap,
  GaugeIcon,
  Building2,
  BarChartIcon,
  SlidersIcon,
  MonitorIcon
} from '../../components/common/Icons.jsx';
import './BuildingManagementSystems.css';

// Project image assets
import bmsHeroImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import automationPanelImg from '../../assets/images/services/bms-automation-panel.jpg';
import monitoringWorkstationImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import hvacChillersImg from '../../assets/images/services/bms-hvac-chillers.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function BuildingManagementSystems() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Building Management System (BMS) Solutions in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'A Building Management System (BMS) provides centralized monitoring and control of selected building systems in Madurai.'
      );
    }
  }, []);

  // FAQ Accordion State (all three open by default matching screenshot)
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(true);
  const [openFaq3, setOpenFaq3] = useState(true);

  return (
    <div className="bms-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="bms-hero" aria-label="Building Management Systems Hero">
        <div className="bms-hero-bg">
          <img 
            src={automationPanelImg} 
            alt="Building automation control panels and facility monitoring systems" 
            className="bms-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="bms-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Ribbon */}
        <div className="bms-hero-accent-slash" aria-hidden="true"></div>

        {/* Constellation blueprint line-art overlay */}
        <svg className="bms-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="bms-hero-container">
          <div className="bms-hero-content">
            {/* Breadcrumb */}
            <nav className="bms-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="bms-breadcrumb-sep">›</span>
              <Link to="/services/">Services</Link>
              <span className="bms-breadcrumb-sep">›</span>
              <span className="bms-breadcrumb-current">Building Management Systems</span>
            </nav>

            <h1 className="bms-hero-heading">
              Building Management<br />
              System (BMS)<br />
              Solutions in Madurai
            </h1>

            <p className="bms-hero-paragraph">
              A Building Management System (BMS) provides centralized monitoring and control of selected building systems. RRABS supports BMS solutions for building automation, monitoring and control, helping facility teams gain better visibility over connected services and support more efficient operation.
            </p>

            <div className="bms-hero-actions">
              <Link to="/request-a-quote/" className="bms-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="bms-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>

          {/* Floating cards on the right edge of Hero */}
          <div className="bms-hero-badges-col">
            <div className="bms-hero-badge-card">
              <span className="bms-badge-icon">
                <MonitorIcon size={18} color="#24B9D6" />
              </span>
              <span>Monitor</span>
            </div>

            <div className="bms-hero-badge-card">
              <span className="bms-badge-icon">
                <SlidersIcon size={18} color="#24B9D6" />
              </span>
              <span>Control</span>
            </div>

            <div className="bms-hero-badge-card">
              <span className="bms-badge-icon">
                <GaugeIcon size={18} color="#24B9D6" />
              </span>
              <span>Optimize</span>
            </div>

            <div className="bms-hero-badge-card">
              <span className="bms-badge-icon">
                <Building2 size={18} color="#24B9D6" />
              </span>
              <span>Connected Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BUILDING AUTOMATION SECTION
          ======================================================== */}
      <section className="bms-two-col-section bms-section-white" aria-label="Building Automation">
        {/* Subtle technical line-art decoration */}
        <svg className="bms-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#0879D1" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#0879D1" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="bms-two-col-container">
          {/* Left Column: Icon badge, heading, description, button */}
          <div className="bms-text-col">
            <div className="bms-feature-badge badge-tint">
              <SettingsIcon size={26} color="#0879D1" />
            </div>

            <span className="bms-eyebrow-line"></span>

            <h2 className="bms-section-heading">Building Automation</h2>

            <p className="bms-paragraph">
              Building automation uses controls, sensors, communication and software to automate selected functions within a facility. The goal is not automation for its own sake, but better operational control, consistency and visibility.
            </p>

            <Link to="/services/" className="bms-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>

          {/* Right Column: Automation panel image with diagonal corner accents */}
          <div className="bms-media-col">
            <div className="bms-media-box">
              <img 
                src={automationPanelImg} 
                alt="Building automation control panel enclosure with relays and wiring" 
                className="bms-photo" 
              />
              <div className="bms-corner-accent-tl" aria-hidden="true"></div>
              <div className="bms-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MONITORING & CONTROL SECTION
          ======================================================== */}
      <section className="bms-two-col-section bms-section-pale bms-reverse-order" aria-label="Monitoring & Control">
        {/* Subtle technical line-art on right */}
        <svg className="bms-decor-right" viewBox="0 0 240 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="180" cy="80" r="5" fill="#24B9D6" />
          <circle cx="80" cy="140" r="4" fill="#0879D1" />
          <circle cx="160" cy="220" r="6" fill="#24B9D6" />
          <circle cx="60" cy="300" r="4" fill="#08A63F" />
          <circle cx="190" cy="340" r="5" fill="#0879D1" />
          <line x1="180" y1="80" x2="80" y2="140" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="80" y1="140" x2="160" y2="220" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="220" x2="60" y2="300" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="220" x2="190" y2="340" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="bms-two-col-container">
          {/* Left Column (visually left due to bms-reverse-order): Workstation Image */}
          <div className="bms-media-col">
            <div className="bms-media-box">
              <img 
                src={monitoringWorkstationImg} 
                alt="Facility operator viewing multi-screen building management telemetry" 
                className="bms-photo" 
              />
              <div className="bms-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right Column: Icon badge, heading, description, button */}
          <div className="bms-text-col">
            <div className="bms-feature-badge">
              <LineChartIcon size={26} color="#0879D1" />
            </div>

            <span className="bms-eyebrow-line"></span>

            <h2 className="bms-section-heading">Monitoring &amp; Control</h2>

            <p className="bms-paragraph">
              A BMS can bring selected system information into a centralized interface, allowing facility teams to view operating conditions, alarms, statuses and control points according to the approved integration scope.
            </p>

            <Link to="/services/" className="bms-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ENERGY-EFFICIENT BUILDING SOLUTIONS SECTION
          ======================================================== */}
      <section className="bms-two-col-section bms-section-white" aria-label="Energy-Efficient Building Solutions">
        <div className="bms-two-col-container">
          {/* Left Column: Icon, heading, description, button */}
          <div className="bms-text-col">
            <div className="bms-feature-badge badge-tint">
              <LeafIcon size={26} color="#0879D1" />
            </div>

            <span className="bms-eyebrow-line"></span>

            <h2 className="bms-section-heading">Energy-Efficient Building Solutions</h2>

            <p className="bms-paragraph">
              Monitoring how systems operate can help facility teams identify inefficient schedules, unnecessary operation or abnormal conditions. Actual energy savings depend on the building, equipment, controls, operating practices and the scope of automation implemented.
            </p>

            <Link to="/services/" className="bms-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>

          {/* Right Column: Chillers and mechanical HVAC plant image */}
          <div className="bms-media-col">
            <div className="bms-media-box">
              <img 
                src={hvacChillersImg} 
                alt="Central mechanical plant with HVAC chillers and insulated piping" 
                className="bms-photo" 
              />
              <div className="bms-corner-accent-tl" aria-hidden="true"></div>
              <div className="bms-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHAT CAN A BMS CONNECT TO? SECTION
          ======================================================== */}
      <section className="bms-connect-section" aria-label="What Can a BMS Connect To?">
        <div className="bms-connect-container">
          {/* Left Column: Heading & Paragraph */}
          <div className="bms-text-col">
            <h2 className="bms-section-heading">What Can a BMS Connect To?</h2>

            <p className="bms-paragraph">
              Depending on equipment compatibility and project design, BMS can interface with selected HVAC, electrical, metering and other building systems. Every integration point should be confirmed technically before implementation.
            </p>
          </div>

          {/* Right Column: Centralized BMS Diagram */}
          <div className="bms-diagram-area">
            {/* Left Connected Cards: HVAC & Electrical */}
            <div className="bms-diagram-col bms-diagram-left">
              <div className="bms-diagram-item bms-item-left">
                <div className="bms-connect-card" id="card-hvac">
                  <span className="bms-connect-icon">
                    <Fan size={22} color="#0879D1" />
                  </span>
                  <span className="bms-connect-label">HVAC</span>
                </div>
                <span className="bms-connector-line"></span>
              </div>

              <div className="bms-diagram-item bms-item-left">
                <div className="bms-connect-card" id="card-electrical">
                  <span className="bms-connect-icon">
                    <Zap size={22} color="#08A63F" />
                  </span>
                  <span className="bms-connect-label">Electrical</span>
                </div>
                <span className="bms-connector-line"></span>
              </div>
            </div>

            {/* Central BMS Circle Node */}
            <div className="bms-central-node-wrapper">
              <div className="bms-central-node-outer">
                <div className="bms-central-node-inner">
                  <Building2 size={32} color="#FFFFFF" />
                  <span className="bms-node-title">BMS</span>
                </div>
              </div>
            </div>

            {/* Right Connected Cards: Metering & Other Building Systems */}
            <div className="bms-diagram-col bms-diagram-right">
              <div className="bms-diagram-item bms-item-right">
                <span className="bms-connector-line"></span>
                <div className="bms-connect-card" id="card-metering">
                  <span className="bms-connect-icon">
                    <GaugeIcon size={22} color="#0879D1" />
                  </span>
                  <span className="bms-connect-label">Metering</span>
                </div>
              </div>

              <div className="bms-diagram-item bms-item-right">
                <span className="bms-connector-line"></span>
                <div className="bms-connect-card" id="card-other-systems">
                  <span className="bms-connect-icon">
                    <Building2 size={22} color="#08A63F" />
                  </span>
                  <span className="bms-connect-label">Other Building<br />Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHY BMS MATTERS SECTION
          ======================================================== */}
      <section className="bms-two-col-section bms-section-white bms-reverse-order" aria-label="Why BMS Matters">
        <div className="bms-two-col-container">
          {/* Left Column (visually left): Modern Building Photo */}
          <div className="bms-media-col">
            <div className="bms-media-box">
              <img 
                src={ctaBuildingImg} 
                alt="Contemporary commercial office building architecture" 
                className="bms-photo" 
              />
              <div className="bms-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right Column: Icon, heading, description */}
          <div className="bms-text-col">
            <div className="bms-feature-badge badge-tint">
              <BarChartIcon size={26} color="#0879D1" />
            </div>

            <span className="bms-eyebrow-line"></span>

            <h2 className="bms-section-heading">Why BMS Matters</h2>

            <p className="bms-paragraph">
              Large or complex facilities can be difficult to operate when every system is managed separately. Centralized monitoring can make information easier to access and help operations teams respond more consistently to system conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="bms-faq-section" aria-label="Frequently Asked Questions">
        <div className="bms-faq-container">
          <h2 className="bms-faq-heading">Frequently Asked Questions</h2>

          <div className="bms-faq-grid">
            {/* FAQ 1 */}
            <div className="bms-faq-card">
              <button 
                type="button"
                className="bms-faq-header"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="bms-faq-question">What is a BMS?</span>
                <span className="bms-faq-toggle-icon">
                  {openFaq1 ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="bms-faq-body">
                  <p className="bms-faq-answer">
                    A Building Management System is a centralized platform used to monitor and control selected building services. It can collect information from compatible equipment and provide operators with status, alarm and control functions.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bms-faq-card">
              <button 
                type="button"
                className="bms-faq-header"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="bms-faq-question">Is BMS only for large commercial buildings?</span>
                <span className="bms-faq-toggle-icon">
                  {openFaq2 ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="bms-faq-body">
                  <p className="bms-faq-answer">
                    BMS is most valuable where the number of systems, equipment items or operating requirements justifies centralized control. Suitability depends on the building, operational needs, budget and integration scope rather than building size alone.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bms-faq-card">
              <button 
                type="button"
                className="bms-faq-header"
                onClick={() => setOpenFaq3(!openFaq3)}
                aria-expanded={openFaq3}
              >
                <span className="bms-faq-question">Can BMS reduce energy consumption?</span>
                <span className="bms-faq-toggle-icon">
                  {openFaq3 ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
                </span>
              </button>
              {openFaq3 && (
                <div className="bms-faq-body">
                  <p className="bms-faq-answer">
                    BMS can support energy-efficient operation by improving visibility, scheduling and control. The actual result depends on equipment efficiency, control strategy, building use and how the facility is operated.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="bms-cta-banner" aria-label="Call to Action">
        <div className="bms-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern commercial corporate facility building at twilight" 
            className="bms-cta-img" 
          />
          <div className="bms-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="bms-cta-green-slash" aria-hidden="true"></div>
        <svg className="bms-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="bms-cta-container">
          <div className="bms-cta-content">
            <h2 className="bms-cta-text">
              Planning building automation or centralized monitoring? Share your facility requirements with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="bms-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
