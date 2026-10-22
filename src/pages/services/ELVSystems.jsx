import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CctvCamera, 
  Lock, 
  Network, 
  Server, 
  Wifi, 
  TwoWayArrow, 
  AccessCardReader, 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Plus, 
  Minus 
} from '../../components/common/Icons.jsx';
import './ELVSystems.css';

import elvHeroImg from '../../assets/images/services/elv.jpg';
import cctvDualImg from '../../assets/images/services/cctv-dual.jpg';
import accessControlImg from '../../assets/images/services/access-control.jpg';
import itNetworkingImg from '../../assets/images/services/it-networking.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function ELVSystems() {
  // Set document title and SEO meta tag
  useEffect(() => {
    document.title = 'ELV Systems in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS provides Extra-Low Voltage (ELV) solutions covering CCTV, access control and supporting connectivity for safer, better-controlled buildings in Madurai.'
      );
    }
  }, []);

  // FAQ Accordion State (open by default matching reference screenshot)
  const [faqOpen, setFaqOpen] = useState(true);

  return (
    <div className="elv-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="elv-hero" aria-label="ELV Systems Hero">
        <div className="elv-hero-bg">
          <img 
            src={elvHeroImg} 
            alt="CCTV surveillance cameras, access control and low-voltage security systems" 
            className="elv-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="elv-hero-gradient"></div>
        </div>

        {/* Diagonal Green/Cyan Accent Shape */}
        <div className="elv-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint constellation mesh overlay */}
        <svg className="elv-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="elv-hero-container">
          <div className="elv-hero-content">
            {/* Breadcrumb */}
            <nav className="elv-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="elv-breadcrumb-sep">&gt;</span>
              <Link to="/services/">Services</Link>
              <span className="elv-breadcrumb-sep">&gt;</span>
              <span className="elv-breadcrumb-current">ELV Systems</span>
            </nav>

            <h1 className="elv-hero-heading">
              ELV Systems in Madurai for Safer, Better-Controlled Buildings
            </h1>

            <p className="elv-hero-paragraph">
              RRABS provides Extra-Low Voltage (ELV) solutions covering CCTV, access control and supporting connectivity. These systems help facilities improve visibility, control access and connect low-voltage devices within a structured building environment.
            </p>

            <div className="elv-hero-actions">
              <Link to="/request-a-quote/" className="btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CCTV SECTION (White Background, Image on Right)
          ======================================================== */}
      <section className="elv-section bg-white" aria-labelledby="heading-cctv">
        {/* Subtle CAD line decoration */}
        <svg className="elv-cad-bg elv-cad-left" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="20" y1="50" x2="280" y2="50" stroke="#0879D1" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="120" x2="260" y2="120" stroke="#0879D1" strokeWidth="1" />
          <line x1="40" y1="200" x2="280" y2="200" stroke="#0879D1" strokeWidth="1" strokeDasharray="2 4" />
          <rect x="50" y="80" width="120" height="90" stroke="#0879D1" strokeWidth="1" />
          <circle cx="110" cy="125" r="25" stroke="#0879D1" strokeWidth="1" />
        </svg>

        <div className="elv-section-container">
          <div className="elv-two-col">
            <div className="elv-content-col">
              <div className="elv-icon-badge" aria-hidden="true">
                <CctvCamera size={28} color="#0879D1" />
              </div>
              <h2 id="heading-cctv" className="elv-section-heading">CCTV</h2>
              <p className="elv-section-desc">
                CCTV systems support visual monitoring of selected areas within or around a property. Camera placement, coverage, recording requirements, network availability and operational needs should be considered together rather than selecting equipment in isolation.
              </p>
              <Link to="/request-a-quote/" className="btn-learn-more">
                <span>Learn More</span>
                <ArrowRight size={14} color="#0879D1" />
              </Link>
            </div>

            <div className="elv-image-col">
              <div className="elv-image-wrapper">
                <img 
                  src={cctvDualImg} 
                  alt="Outdoor surveillance bullet CCTV cameras mounted on bracket" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ACCESS CONTROL SECTION (Pale Blue BG, Image on Left)
          ======================================================== */}
      <section className="elv-section bg-pale" aria-labelledby="heading-access-control">
        <div className="elv-section-container">
          <div className="elv-two-col reverse">
            <div className="elv-image-col">
              <div className="elv-image-wrapper">
                <img 
                  src={accessControlImg} 
                  alt="Person holding RFID smart card near access control reader with keypad" 
                  loading="lazy"
                />
              </div>
            </div>

            <div className="elv-content-col">
              <div className="elv-icon-badge" aria-hidden="true">
                <Lock size={26} color="#08A63F" />
              </div>
              <h2 id="heading-access-control" className="elv-section-heading">Access Control</h2>
              <p className="elv-section-desc">
                Access-control systems help manage who can enter controlled areas. The solution can vary according to the building, number of access points, user groups and required level of control.
              </p>
              <Link to="/request-a-quote/" className="btn-learn-more">
                <span>Learn More</span>
                <ArrowRight size={14} color="#0879D1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. NETWORKING WITHIN ELV SECTION (White BG, Image on Right)
          ======================================================== */}
      <section className="elv-section bg-white" aria-labelledby="heading-networking-elv">
        {/* Subtle CAD line decoration */}
        <svg className="elv-cad-bg elv-cad-right" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="20" y1="80" x2="280" y2="80" stroke="#0879D1" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="60" y1="160" x2="260" y2="160" stroke="#0879D1" strokeWidth="1" />
          <circle cx="160" cy="220" r="35" stroke="#0879D1" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="elv-section-container">
          <div className="elv-two-col">
            <div className="elv-content-col">
              <div className="elv-icon-badge" aria-hidden="true">
                <Network size={26} color="#0879D1" />
              </div>
              <h2 id="heading-networking-elv" className="elv-section-heading">Networking Within ELV</h2>
              <p className="elv-section-desc">
                Many modern ELV devices depend on network connectivity. RRABS considers the relationship between devices, cabling, network infrastructure and IT requirements so the system can be planned as part of the wider connected-building environment.
              </p>
              <Link to="/request-a-quote/" className="btn-learn-more">
                <span>Learn More</span>
                <ArrowRight size={14} color="#0879D1" />
              </Link>
            </div>

            <div className="elv-image-col">
              <div className="elv-image-wrapper">
                <img 
                  src={itNetworkingImg} 
                  alt="Network switches, Ethernet ports, and blue structured network cabling" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ELV VS IT NETWORKING COMPARISON SECTION
          ======================================================== */}
      <section className="elv-comparison-section" aria-labelledby="heading-comparison">
        <div className="elv-comparison-container">
          <div className="elv-comparison-grid">
            {/* Left Column: Intro description */}
            <div className="elv-comparison-intro">
              <div className="elv-accent-line" aria-hidden="true"></div>
              <h2 id="heading-comparison" className="elv-comparison-heading">ELV vs IT Networking</h2>
              <p className="elv-comparison-desc">
                ELV focuses on low-voltage building systems such as CCTV and access control.{' '}
                <Link to="/it-networking/">IT &amp; Networking</Link> focuses more broadly on the digital infrastructure that carries data and supports users, devices and connected spaces. The two areas often interact, so coordination is important.
              </p>
            </div>

            {/* Right Column: Two comparison cards with center two-way arrow badge */}
            <div className="elv-cards-row">
              {/* Card 1: ELV */}
              <div className="elv-compare-card">
                <div className="elv-card-header header-dark-blue">
                  ELV
                </div>
                <div className="elv-card-body">
                  <div className="elv-icons-combo">
                    <CctvCamera size={28} color="#0879D1" />
                    <span className="elv-plus-sign">+</span>
                    <AccessCardReader size={26} color="#0879D1" />
                  </div>
                  <p className="elv-card-label">
                    CCTV and<br />
                    Access Control
                  </p>
                </div>
              </div>

              {/* Center Green Exchange Arrow */}
              <div className="elv-exchange-badge" aria-label="Two-way connection">
                <TwoWayArrow size={20} color="#FFFFFF" />
              </div>

              {/* Card 2: IT & Networking */}
              <div className="elv-compare-card">
                <div className="elv-card-header header-eng-blue">
                  IT &amp; Networking
                </div>
                <div className="elv-card-body">
                  <div className="elv-icons-combo">
                    <Server size={26} color="#0879D1" />
                    <span className="elv-plus-sign">+</span>
                    <Wifi size={26} color="#0879D1" />
                  </div>
                  <p className="elv-card-label">
                    Digital infrastructure<br />
                    for users and devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="elv-faq-section" aria-labelledby="heading-faq">
        <div className="elv-faq-container">
          <h2 id="heading-faq" className="elv-faq-heading">Frequently Asked Questions</h2>
          
          <div className="elv-accordion-card">
            <button 
              type="button" 
              className="elv-accordion-header"
              onClick={() => setFaqOpen(!faqOpen)}
              aria-expanded={faqOpen}
              aria-controls="faq-content-elv"
            >
              <span className="elv-accordion-title">What does ELV mean in a building?</span>
              <span className="elv-accordion-icon" aria-hidden="true">
                {faqOpen ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
              </span>
            </button>
            {faqOpen && (
              <div id="faq-content-elv" className="elv-accordion-body">
                <p>
                  ELV stands for Extra-Low Voltage. In building projects, the term commonly refers to low-voltage systems used for functions such as security, access, communication and connected devices. The exact scope varies from project to project.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="elv-cta-banner" aria-label="ELV Systems Call to Action">
        <div className="elv-cta-container">
          <div className="elv-cta-left">
            {/* Background CAD line decoration */}
            <svg className="elv-cta-mesh" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="0" y1="40" x2="600" y2="40" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="5 5" />
              <line x1="0" y1="120" x2="600" y2="120" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="3 6" />
              <circle cx="80" cy="40" r="15" stroke="#24B9D6" strokeWidth="0.8" />
              <circle cx="340" cy="120" r="22" stroke="#24B9D6" strokeWidth="0.8" />
            </svg>

            <h2 className="elv-cta-text">
              Planning CCTV, access control or an integrated ELV package? Discuss your project with RRABS.
            </h2>
            <Link to="/request-a-quote/" className="btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#0879D1" />
            </Link>
          </div>

          <div className="elv-cta-right">
            <div className="elv-cta-diagonal-overlay" aria-hidden="true"></div>
            <img 
              src={ctaBuildingImg} 
              alt="Modern illuminated commercial architectural building" 
              className="elv-cta-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
