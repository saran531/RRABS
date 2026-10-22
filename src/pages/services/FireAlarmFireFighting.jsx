import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  ShieldCheck, 
  LifeSafetyIcon, 
  Flame, 
  Zap, 
  Fan, 
  Network, 
  Building2, 
  ArrowRight, 
  GridIcon, 
  MessageCircle, 
  Plus, 
  Minus 
} from '../../components/common/Icons.jsx';
import './FireAlarmFireFighting.css';

// Local project images
import fireFightingImg from '../../assets/images/services/fire-fighting.jpg';
import fireAlarmPanelImg from '../../assets/images/services/fire-alarm-panel.jpg';
import centerBuildingImg from '../../assets/images/about/integrated-systems-building.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function FireAlarmFireFighting() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Fire Alarm & Fire Fighting Systems in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'RRABS provides fire alarm and fire fighting system solutions focused on early detection, effective response and protection of life and property in Madurai.');
    }
  }, []);

  // FAQ Accordion State (both open by default matching screenshot)
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(true);

  return (
    <div className="fire-services-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="fire-hero" aria-label="Fire Alarm & Fire Fighting Hero">
        <div className="fire-hero-bg">
          <img 
            src={fireFightingImg} 
            alt="Fire-protection piping, sprinkler valves, pumps and fire-safety systems" 
            className="fire-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="fire-hero-gradient"></div>
        </div>

        {/* Decorative Constellation Mesh on Left */}
        <svg className="fire-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="120" r="3" fill="#38BDF8" />
          <circle cx="180" cy="80" r="3" fill="#38BDF8" />
          <circle cx="280" cy="160" r="3" fill="#38BDF8" />
          <circle cx="140" cy="240" r="3" fill="#38BDF8" />
          <circle cx="260" cy="320" r="3" fill="#38BDF8" />
          <circle cx="80" cy="380" r="3" fill="#38BDF8" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Diagonal Green Accent on Upper Right */}
        <div className="fire-hero-green-accent" aria-hidden="true"></div>

        <div className="fire-hero-container">
          <div className="fire-hero-content">
            {/* Breadcrumb */}
            <nav className="fire-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="fire-breadcrumb-sep">&gt;</span>
              <Link to="/services/">Services</Link>
              <span className="fire-breadcrumb-sep">&gt;</span>
              <span className="fire-breadcrumb-current">Fire Alarm &amp; Fire Fighting</span>
            </nav>

            <h1 className="fire-hero-heading">
              Fire Alarm &amp;<br />
              Fire Fighting Systems<br />
              in Madurai
            </h1>

            <p className="fire-hero-paragraph">
              RRABS provides fire alarm and fire fighting system solutions focused on early detection, effective response and protection of life and property. The exact system must be selected and implemented according to the building, approved design and applicable project requirements.
            </p>

            <div className="fire-hero-actions">
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
          2. FIRE ALARM SYSTEMS SECTION
          ======================================================== */}
      <section className="fire-alarm-section" aria-label="Fire Alarm Systems">
        {/* Decorative Pipe Vector Graphic on Left Edge */}
        <svg className="fire-pipes-left-decor" viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 0 L 20 180 L 120 180 L 120 400" stroke="#0878BD" strokeWidth="1.5" />
          <path d="M 40 0 L 40 160 L 140 160 L 140 400" stroke="#079B36" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="5" fill="#0878BD" />
          <circle cx="140" cy="160" r="4" fill="#079B36" />
        </svg>

        <div className="fire-two-col-container">
          {/* Left Column: Icon Badge, Heading, Paragraph and Button */}
          <div className="fire-text-col">
            <div className="fire-feature-badge">
              <Bell size={24} color="#079B36" />
            </div>

            <span className="fire-eyebrow-line"></span>

            <h2 className="fire-section-heading">Fire Alarm Systems</h2>

            <p className="fire-paragraph">
              Fire alarm systems are intended to detect or communicate a fire-related event and alert occupants or responsible personnel. Device selection, zoning, coverage and interfaces depend on the building and approved fire-safety strategy.
            </p>

            <Link to="/services/" className="fire-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>

          {/* Right Column: Fire Alarm Control Panel & Detectors Photo */}
          <div className="fire-media-box">
            <img 
              src={fireAlarmPanelImg} 
              alt="Fire alarm control panel with digital display and wall strobe devices" 
              className="fire-photo" 
            />
            <div className="fire-media-green-corner" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FIRE FIGHTING SYSTEMS SECTION
          ======================================================== */}
      <section className="fire-fighting-section" aria-label="Fire Fighting Systems">
        {/* Decorative Pipe Vector Graphic on Right Edge */}
        <svg className="fire-pipes-right-decor" viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 240 0 L 240 220 L 140 220 L 140 400" stroke="#0878BD" strokeWidth="1.5" />
          <path d="M 220 0 L 220 200 L 120 200 L 120 400" stroke="#079B36" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="140" cy="220" r="5" fill="#0878BD" />
          <circle cx="120" cy="200" r="4" fill="#079B36" />
        </svg>

        <div className="fire-two-col-inverted">
          {/* Left Column: Fire Sprinkler Red Pipes Photo */}
          <div className="fire-media-box">
            <img 
              src={fireFightingImg} 
              alt="Bright red fire protection sprinkler pipes and valves in utility room" 
              className="fire-photo" 
            />
            <div className="fire-media-green-corner-left" aria-hidden="true"></div>
          </div>

          {/* Right Column: Icon Badge, Heading, Paragraph and Button */}
          <div className="fire-text-col">
            <div className="fire-feature-badge">
              <ShieldCheck size={24} color="#079B36" />
            </div>

            <span className="fire-eyebrow-line"></span>

            <h2 className="fire-section-heading">Fire Fighting Systems</h2>

            <p className="fire-paragraph">
              Fire fighting systems provide the infrastructure used to control or respond to fire. The appropriate solution varies by building type, risk, size and regulatory requirements. RRABS works within the confirmed project scope and approved technical requirements.
            </p>

            <Link to="/services/" className="fire-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. LIFE & PROPERTY SAFETY SECTION
          ======================================================== */}
      <section className="fire-safety-section" aria-label="Life & Property Safety">
        <div className="fire-safety-container">
          {/* Left Column: Heading, Paragraph and Button */}
          <div className="fire-safety-text-col">
            <div className="fire-feature-badge">
              <LifeSafetyIcon size={24} color="#079B36" />
            </div>

            <span className="fire-eyebrow-line"></span>

            <h2 className="fire-section-heading">Life &amp; Property Safety</h2>

            <p className="fire-paragraph">
              Fire protection is not simply another equipment package. It affects evacuation, emergency response and protection of assets. Fire systems should therefore be coordinated carefully with electrical supplies, HVAC interfaces, ELV/IT infrastructure and building controls where applicable.
            </p>

            <Link to="/services/" className="fire-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>

          {/* Right Column: Connected Building Diagram */}
          <div className="fire-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="fire-side-nodes fire-left-nodes">
              <div className="fire-node-item fire-node-left">
                <div className="fire-node-card">
                  <span className="fire-node-card-icon"><Zap size={18} color="#079B36" /></span>
                  <span className="fire-node-card-label">Electrical Supplies</span>
                </div>
                <span className="fire-connector-line"></span>
              </div>
              <div className="fire-node-item fire-node-left">
                <div className="fire-node-card">
                  <span className="fire-node-card-icon"><Fan size={18} color="#079B36" /></span>
                  <span className="fire-node-card-label">HVAC Interfaces</span>
                </div>
                <span className="fire-connector-line"></span>
              </div>
            </div>

            {/* Central Building Frame with Overlay Badge */}
            <div className="fire-center-frame">
              <img 
                src={centerBuildingImg} 
                alt="Modern commercial building fire safety and detection coordination" 
                className="fire-building-img" 
              />
              <div className="fire-center-badge">
                <Flame size={20} color="#079B36" />
                <span className="fire-center-badge-text">
                  Fire Alarm &amp;<br />
                  Fire Fighting<br />
                  Systems
                </span>
              </div>
            </div>

            {/* Right Connected Services */}
            <div className="fire-side-nodes fire-right-nodes">
              <div className="fire-node-item fire-node-right">
                <span className="fire-connector-line"></span>
                <div className="fire-node-card">
                  <span className="fire-node-card-icon"><Network size={18} color="#079B36" /></span>
                  <span className="fire-node-card-label">ELV/IT Infrastructure</span>
                </div>
              </div>
              <div className="fire-node-item fire-node-right">
                <span className="fire-connector-line"></span>
                <div className="fire-node-card">
                  <span className="fire-node-card-icon"><Building2 size={18} color="#079B36" /></span>
                  <span className="fire-node-card-label">Building Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="fire-faq-section" aria-label="Frequently Asked Questions">
        <div className="fire-faq-container">
          <div className="fire-faq-header">
            <h2 className="fire-section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="fire-faq-grid">
            {/* FAQ 1 */}
            <div className="fire-faq-card">
              <button 
                type="button" 
                className="fire-faq-top"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="fire-faq-question">What is the difference between a fire alarm and a fire fighting system?</span>
                <span className="fire-faq-toggle">
                  {openFaq1 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="fire-faq-answer">
                  <p>
                    A fire alarm system is primarily concerned with detecting and communicating a fire event. A fire fighting system provides means to control or respond to the fire. They perform different roles and may need to work as part of one coordinated fire-safety strategy.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="fire-faq-card">
              <button 
                type="button" 
                className="fire-faq-top"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="fire-faq-question">Can fire systems interact with other building systems?</span>
                <span className="fire-faq-toggle">
                  {openFaq2 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="fire-faq-answer">
                  <p>
                    Depending on the approved design, fire-related signals may interface with selected building systems. Any such integration should be defined by the project’s fire-safety design and implemented only where technically and legally appropriate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FINAL CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="fire-cta-section" aria-label="Fire Services Call to Action">
        <div className="fire-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="fire-cta-img" 
          />
          <div className="fire-cta-overlay"></div>
        </div>

        {/* Diagonal Green Accent Graphic */}
        <div className="fire-cta-green-accent" aria-hidden="true"></div>

        <div className="fire-cta-container">
          <div className="fire-cta-content">
            <h2 className="fire-cta-heading">
              Need fire alarm or fire fighting systems for a project in Madurai? Contact RRABS to discuss the building and required scope.
            </h2>

            <Link to="/request-a-quote/" className="fire-cta-btn">
              <span>Request a Quote</span>
              <span className="cta-arrow-right">
                <ArrowRight size={16} color="#079B36" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
