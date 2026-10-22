import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Zap, 
  Snowflake, 
  Droplets, 
  ShieldFlameIcon, 
  CctvCamera, 
  NetworkNodesIcon, 
  SettingsIcon,
  FactoryIcon,
  FactoryPlanningIcon
} from '../../components/common/Icons.jsx';
import './Industrial.css';

// Project image assets
import industrialHeroImg from '../../assets/images/industries/industrial.jpg';
import industrialInteriorImg from '../../assets/images/industries/industrial-production-floor.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/services/hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireImg from '../../assets/images/services/fire-fighting.jpg';
import cctvImg from '../../assets/images/services/elv.jpg';
import networkImg from '../../assets/images/services/network-switches.jpg';
import bmsImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import plantChillersImg from '../../assets/images/services/bms-hvac-chillers.jpg';
import controlPanelImg from '../../assets/images/services/bms-automation-panel.jpg';

export default function Industrial() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Industrial Building Systems & MEP Solutions | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Industrial facilities need dependable infrastructure aligned with the way the site operates. RRABS can support electrical, ventilation, plumbing, fire-safety, ELV, networking and automation requirements.'
      );
    }
  }, []);

  const relevantSystems = [
    {
      id: 'power-lighting',
      label: 'Power and lighting',
      icon: Zap,
      image: electricalImg,
      route: '/electrical-services/'
    },
    {
      id: 'ventilation-cooling',
      label: 'Ventilation / comfort cooling where required',
      icon: Snowflake,
      image: hvacImg,
      route: '/hvac-services/'
    },
    {
      id: 'water-drainage',
      label: 'Water and drainage',
      icon: Droplets,
      image: plumbingImg,
      route: '/plumbing-services/'
    },
    {
      id: 'fire-alarm-fighting',
      label: 'Fire alarm and firefighting',
      icon: ShieldFlameIcon,
      image: fireImg,
      route: '/fire-alarm-fire-fighting/'
    },
    {
      id: 'cctv-access',
      label: 'CCTV and access control',
      icon: CctvCamera,
      image: cctvImg,
      route: '/elv-systems/'
    },
    {
      id: 'industrial-network',
      label: 'Industrial network infrastructure',
      icon: NetworkNodesIcon,
      image: networkImg,
      route: '/it-networking/'
    },
    {
      id: 'monitoring-automation',
      label: 'Monitoring and building automation',
      icon: SettingsIcon,
      image: bmsImg,
      route: '/building-management-systems/'
    }
  ];

  const row1 = relevantSystems.slice(0, 4);
  const row2 = relevantSystems.slice(4, 7);

  return (
    <div className="industrial-page">
      {/* ========================================================
          1. INDUSTRIAL HERO BANNER
          ======================================================== */}
      <section className="ind-hero" aria-label="Industrial Facilities Hero">
        <div className="ind-hero-bg">
          <img 
            src={industrialHeroImg} 
            alt="Modern industrial facility and manufacturing infrastructure" 
            className="ind-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="ind-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="ind-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="ind-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="ind-hero-container">
          <div className="ind-hero-content">
            {/* Breadcrumb */}
            <nav className="ind-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="ind-breadcrumb-sep">&gt;</span>
              <Link to="/industries/">Industries</Link>
              <span className="ind-breadcrumb-sep">&gt;</span>
              <span className="ind-breadcrumb-current">Industrial</span>
            </nav>

            <h1 className="ind-hero-heading">
              Building Systems for<br />
              Industrial Facilities
            </h1>

            <p className="ind-hero-paragraph">
              Industrial facilities need dependable infrastructure aligned with the way the site operates. RRABS can support electrical, ventilation, plumbing, fire-safety, ELV, networking and automation requirements within the approved industrial project scope.
            </p>

            <div className="ind-hero-actions">
              <Link to="/request-a-quote/" className="ind-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/industries/" className="ind-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Other Industries</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INDUSTRIAL INTRODUCTION SECTION
          ======================================================== */}
      <section className="ind-intro-section" aria-label="Industrial Building Systems Introduction">
        {/* Subtle technical line-art decoration */}
        <svg className="ind-intro-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#1769AA" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#1769AA" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="ind-intro-container">
          {/* Left Column: Icon badge, heading, description */}
          <div className="ind-text-col">
            <div className="ind-feature-badge">
              <FactoryIcon size={28} color="#1769AA" />
            </div>

            <span className="ind-eyebrow-line"></span>

            <h2 className="ind-section-heading">
              Building Systems for Industrial Facilities
            </h2>

            <p className="ind-paragraph">
              Industrial facilities need dependable infrastructure aligned with the way the site operates. RRABS can support electrical, ventilation, plumbing, fire-safety, ELV, networking and automation requirements within the approved industrial project scope.
            </p>
          </div>

          {/* Right Column: Industrial facility production interior image with green diagonal corners */}
          <div className="ind-media-box">
            <img 
              src={industrialInteriorImg} 
              alt="Industrial manufacturing facility production floor interior" 
              className="ind-photo" 
            />
            <div className="ind-corner-accent-tl" aria-hidden="true"></div>
            <div className="ind-corner-accent-br" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. RELEVANT SYSTEMS SECTION
          ======================================================== */}
      <section className="ind-systems-section" aria-label="Relevant Systems">
        {/* Subtle blueprint line-art */}
        <svg className="ind-systems-decor-right" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="80" width="200" height="180" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="140" x2="250" y2="140" stroke="#1769AA" strokeWidth="1" />
          <line x1="150" y1="80" x2="150" y2="260" stroke="#1769AA" strokeWidth="1" />
          <circle cx="150" cy="140" r="6" fill="#0B9F45" />
        </svg>

        <div className="ind-systems-container">
          <h2 className="ind-systems-heading">Relevant Systems</h2>

          <div className="ind-systems-grid">
            {/* Row 1: 4 cards */}
            {row1.map((item) => {
              const IconComp = item.icon;
              return (
                <Link 
                  key={item.id} 
                  to={item.route} 
                  className="ind-system-card"
                  aria-label={item.label}
                >
                  <div className="ind-system-card-top">
                    <span className="ind-system-icon-wrap">
                      <IconComp size={24} color="#0B9F45" />
                    </span>
                    <div className="ind-system-thumb-wrap">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="ind-system-thumb" 
                      />
                    </div>
                  </div>
                  <div className="ind-system-card-bottom">
                    <h3 className="ind-system-label">{item.label}</h3>
                    <span className="ind-system-card-btn" aria-hidden="true">
                      <ArrowRight size={13} color="currentColor" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Row 2: 3 cards */}
            <div className="ind-systems-row-2">
              {row2.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link 
                    key={item.id} 
                    to={item.route} 
                    className="ind-system-card"
                    aria-label={item.label}
                  >
                    <div className="ind-system-card-top">
                      <span className="ind-system-icon-wrap">
                        <IconComp size={24} color="#1769AA" />
                      </span>
                      <div className="ind-system-thumb-wrap">
                        <img 
                          src={item.image} 
                          alt="" 
                          className="ind-system-thumb" 
                        />
                      </div>
                    </div>
                    <div className="ind-system-card-bottom">
                      <h3 className="ind-system-label">{item.label}</h3>
                      <span className="ind-system-card-btn" aria-hidden="true">
                        <ArrowRight size={13} color="currentColor" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. INTEGRATED PLANNING SECTION
          ======================================================== */}
      <section className="ind-planning-section" aria-label="Integrated Planning">
        <div className="ind-planning-container">
          {/* Left Column: Heading and description */}
          <div className="ind-text-col">
            <div className="ind-feature-badge">
              <FactoryPlanningIcon size={28} color="#1769AA" />
            </div>

            <span className="ind-eyebrow-line"></span>

            <h2 className="ind-section-heading">Integrated Planning</h2>

            <p className="ind-paragraph">
              The final combination of systems should be defined by the building’s use, design, occupancy, equipment and approved technical requirements. RRABS’s role is to coordinate the confirmed scope so interfaces between services are considered early.
            </p>
          </div>

          {/* Right Column: Central Industrial Facility Diagram */}
          <div className="ind-diagram-area">
            {/* Left Connected Labels */}
            <div className="ind-diagram-col ind-diagram-left">
              <div className="ind-diagram-item ind-item-left">
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <Zap size={20} color="#0B9F45" />
                  </span>
                  <span className="ind-tag-label">Electrical</span>
                </div>
                <span className="ind-connector-line"></span>
              </div>

              <div className="ind-diagram-item ind-item-left">
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <Snowflake size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">HVAC</span>
                </div>
                <span className="ind-connector-line"></span>
              </div>

              <div className="ind-diagram-item ind-item-left">
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <Droplets size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">Plumbing</span>
                </div>
                <span className="ind-connector-line"></span>
              </div>

              <div className="ind-diagram-item ind-item-left">
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <ShieldFlameIcon size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">Fire Safety</span>
                </div>
                <span className="ind-connector-line"></span>
              </div>
            </div>

            {/* Central Industrial Facility Image */}
            <div className="ind-center-bldg-wrapper">
              <img 
                src={industrialHeroImg} 
                alt="Industrial facility building infrastructure" 
                className="ind-center-bldg-img" 
              />
            </div>

            {/* Right Connected Labels */}
            <div className="ind-diagram-col ind-diagram-right">
              <div className="ind-diagram-item ind-item-right">
                <span className="ind-connector-line"></span>
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <CctvCamera size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">ELV<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(CCTV &amp; Access Control)</small></span>
                </div>
              </div>

              <div className="ind-diagram-item ind-item-right">
                <span className="ind-connector-line"></span>
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <NetworkNodesIcon size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">IT / Networking</span>
                </div>
              </div>

              <div className="ind-diagram-item ind-item-right">
                <span className="ind-connector-line"></span>
                <div className="ind-system-tag">
                  <span className="ind-tag-icon">
                    <SettingsIcon size={20} color="#1769AA" />
                  </span>
                  <span className="ind-tag-label">BMS<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Building Automation)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INDUSTRIAL IMAGE GALLERY SECTION (4 images)
          ======================================================== */}
      <section className="ind-gallery-section" aria-label="Industrial Facilities Gallery">
        <div className="ind-gallery-container">
          <div className="ind-gallery-grid">
            {/* Gallery Image 1: Modern industrial facility exterior */}
            <div className="ind-gallery-item">
              <img 
                src={industrialHeroImg} 
                alt="Modern industrial manufacturing facility exterior with silos" 
                className="ind-gallery-img" 
              />
            </div>

            {/* Gallery Image 2: Industrial manufacturing production floor interior */}
            <div className="ind-gallery-item">
              <img 
                src={industrialInteriorImg} 
                alt="Industrial manufacturing plant production floor and processing equipment" 
                className="ind-gallery-img" 
              />
            </div>

            {/* Gallery Image 3: Industrial HVAC chillers and plant equipment */}
            <div className="ind-gallery-item">
              <img 
                src={plantChillersImg} 
                alt="Industrial HVAC mechanical chillers and plant ventilation machinery" 
                className="ind-gallery-img" 
              />
            </div>

            {/* Gallery Image 4: Electrical panels and power distribution infrastructure */}
            <div className="ind-gallery-item">
              <img 
                src={controlPanelImg} 
                alt="Industrial electrical control panels and automated switchgear" 
                className="ind-gallery-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="ind-cta-banner" aria-label="Call to Action">
        <div className="ind-cta-bg">
          <img 
            src={industrialHeroImg} 
            alt="Modern industrial plant architecture" 
            className="ind-cta-img" 
          />
          <div className="ind-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="ind-cta-green-slash" aria-hidden="true"></div>
        <svg className="ind-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="ind-cta-container">
          <div className="ind-cta-content">
            <h2 className="ind-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="ind-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#0B9F45" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
