import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Lightbulb, 
  Snowflake, 
  Droplets, 
  ShieldCheck, 
  CctvCamera, 
  NetworkNodesIcon, 
  SettingsIcon,
  Zap,
  Building2
} from '../../components/common/Icons.jsx';
import './Commercial.css';

// Project image assets
import commercialImg from '../../assets/images/industries/commercial.jpg';
import integratedSystemsImg from '../../assets/images/about/integrated-systems-building.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/about/who-we-are-hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireImg from '../../assets/images/services/fire-fighting.jpg';
import cctvImg from '../../assets/images/services/elv.jpg';
import networkImg from '../../assets/images/services/network-switches.jpg';
import bmsImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import commercialOfficeInteriorImg from '../../assets/images/industries/commercial-office-interior.jpg';
import commercialAtriumImg from '../../assets/images/industries/commercial-atrium.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function Commercial() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Integrated Building Systems for Commercial Facilities | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS supports coordinated electrical, HVAC, plumbing, fire-safety, security, networking and automation requirements for commercial facilities in Madurai.'
      );
    }
  }, []);

  const relevantSystems = [
    {
      id: 'reliable-power',
      label: 'Reliable power and lighting',
      icon: Lightbulb,
      image: electricalImg,
      route: '/electrical-services/'
    },
    {
      id: 'comfort-cooling',
      label: 'Comfort cooling and ventilation',
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
      id: 'fire-detection',
      label: 'Fire detection and protection',
      icon: ShieldCheck,
      image: fireImg,
      route: '/fire-alarm-fire-fighting/'
    },
    {
      id: 'cctv-access',
      label: 'CCTV and controlled access',
      icon: CctvCamera,
      image: cctvImg,
      route: '/elv-systems/'
    },
    {
      id: 'network-infra',
      label: 'Business network infrastructure',
      icon: NetworkNodesIcon,
      image: networkImg,
      route: '/it-networking/'
    },
    {
      id: 'central-bms',
      label: 'Centralized monitoring and automation',
      icon: SettingsIcon,
      image: bmsImg,
      route: '/building-management-systems/'
    }
  ];

  const row1 = relevantSystems.slice(0, 4);
  const row2 = relevantSystems.slice(4, 7);

  return (
    <div className="commercial-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="com-hero" aria-label="Commercial Facilities Hero">
        <div className="com-hero-bg">
          <img 
            src={commercialImg} 
            alt="Contemporary commercial office building and corporate property architecture" 
            className="com-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="com-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="com-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="com-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="com-hero-container">
          <div className="com-hero-content">
            {/* Breadcrumb */}
            <nav className="com-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="com-breadcrumb-sep">&gt;</span>
              <Link to="/industries/">Industries</Link>
              <span className="com-breadcrumb-sep">&gt;</span>
              <span className="com-breadcrumb-current">Commercial</span>
            </nav>

            <h1 className="com-hero-heading">
              Integrated Building<br />
              Systems for<br />
              Commercial Facilities
            </h1>

            <p className="com-hero-paragraph">
              Commercial buildings depend on multiple systems operating reliably throughout working hours. RRABS supports coordinated electrical, HVAC, plumbing, fire-safety, security, networking and automation requirements for offices, retail spaces, halls and other commercial facilities.
            </p>

            <div className="com-hero-actions">
              <Link to="/request-a-quote/" className="com-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/industries/" className="com-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Other Industries</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INTEGRATED BUILDING SYSTEMS FOR COMMERCIAL FACILITIES
          ======================================================== */}
      <section className="com-feature-section" aria-label="Integrated Building Systems Overview">
        {/* Subtle technical line-art decoration */}
        <svg className="com-feature-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#0879D1" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#0879D1" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="com-feature-container">
          {/* Left Column: Icon badge, heading, description */}
          <div className="com-text-col">
            <div className="com-feature-badge">
              <Building2 size={26} color="#0879D1" />
            </div>

            <span className="com-eyebrow-line"></span>

            <h2 className="com-section-heading">
              Integrated Building Systems for Commercial Facilities
            </h2>

            <p className="com-paragraph">
              Commercial buildings depend on multiple systems operating reliably throughout working hours. RRABS supports coordinated electrical, HVAC, plumbing, fire-safety, security, networking and automation requirements for offices, retail spaces, halls and other commercial facilities.
            </p>
          </div>

          {/* Right Column: Commercial building image with diagonal accents */}
          <div className="com-media-box">
            <img 
              src={commercialImg} 
              alt="Modern commercial corporate facility building architecture" 
              className="com-photo" 
            />
            <div className="com-corner-accent-tl" aria-hidden="true"></div>
            <div className="com-corner-accent-br" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. RELEVANT SYSTEMS SECTION
          ======================================================== */}
      <section className="com-systems-section" aria-label="Relevant Systems">
        {/* Subtle blueprint line-art */}
        <svg className="com-systems-decor-right" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="80" width="200" height="180" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="140" x2="250" y2="140" stroke="#0879D1" strokeWidth="1" />
          <line x1="150" y1="80" x2="150" y2="260" stroke="#0879D1" strokeWidth="1" />
          <circle cx="150" cy="140" r="6" fill="#08A63F" />
        </svg>

        <div className="com-systems-container">
          <h2 className="com-systems-heading">Relevant Systems</h2>

          <div className="com-systems-grid">
            {/* Row 1: 4 cards */}
            {row1.map((item) => {
              const IconComp = item.icon;
              return (
                <Link 
                  key={item.id} 
                  to={item.route} 
                  className="com-system-card"
                  aria-label={item.label}
                >
                  <div className="com-system-card-top">
                    <span className="com-system-icon-wrap">
                      <IconComp size={24} color="#0879D1" />
                    </span>
                    <div className="com-system-thumb-wrap">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="com-system-thumb" 
                      />
                    </div>
                  </div>
                  <div className="com-system-card-bottom">
                    <h3 className="com-system-label">{item.label}</h3>
                    <span className="com-system-card-btn" aria-hidden="true">
                      <ArrowRight size={13} color="currentColor" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Row 2: 3 cards */}
            <div className="com-systems-row-2">
              {row2.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link 
                    key={item.id} 
                    to={item.route} 
                    className="com-system-card"
                    aria-label={item.label}
                  >
                    <div className="com-system-card-top">
                      <span className="com-system-icon-wrap">
                        <IconComp size={24} color="#0879D1" />
                      </span>
                      <div className="com-system-thumb-wrap">
                        <img 
                          src={item.image} 
                          alt="" 
                          className="com-system-thumb" 
                        />
                      </div>
                    </div>
                    <div className="com-system-card-bottom">
                      <h3 className="com-system-label">{item.label}</h3>
                      <span className="com-system-card-btn" aria-hidden="true">
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
      <section className="com-planning-section" aria-label="Integrated Planning">
        <div className="com-planning-container">
          {/* Left Column: Heading and description */}
          <div className="com-text-col">
            <div className="com-feature-badge">
              <Building2 size={26} color="#0879D1" />
            </div>

            <span className="com-eyebrow-line"></span>

            <h2 className="com-section-heading">Integrated Planning</h2>

            <p className="com-paragraph">
              The final combination of systems should be defined by the building’s use, design, occupancy, equipment and approved technical requirements. RRABS’s role is to coordinate the confirmed scope so interfaces between services are considered early.
            </p>
          </div>

          {/* Right Column: Central Commercial Building Diagram */}
          <div className="com-diagram-area">
            {/* Left Connected Labels */}
            <div className="com-diagram-col com-diagram-left">
              <div className="com-diagram-item com-item-left">
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <Zap size={20} color="#08A63F" />
                  </span>
                  <span className="com-tag-label">Electrical</span>
                </div>
                <span className="com-connector-line"></span>
              </div>

              <div className="com-diagram-item com-item-left">
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <Snowflake size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">HVAC</span>
                </div>
                <span className="com-connector-line"></span>
              </div>

              <div className="com-diagram-item com-item-left">
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <Droplets size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">Plumbing</span>
                </div>
                <span className="com-connector-line"></span>
              </div>

              <div className="com-diagram-item com-item-left">
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <ShieldCheck size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">Fire Safety</span>
                </div>
                <span className="com-connector-line"></span>
              </div>
            </div>

            {/* Central Building Image */}
            <div className="com-center-bldg-wrapper">
              <img 
                src={integratedSystemsImg} 
                alt="Architectural commercial building model" 
                className="com-center-bldg-img" 
              />
            </div>

            {/* Right Connected Labels */}
            <div className="com-diagram-col com-diagram-right">
              <div className="com-diagram-item com-item-right">
                <span className="com-connector-line"></span>
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <CctvCamera size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">ELV<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(CCTV &amp; Access Control)</small></span>
                </div>
              </div>

              <div className="com-diagram-item com-item-right">
                <span className="com-connector-line"></span>
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <NetworkNodesIcon size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">IT / Networking</span>
                </div>
              </div>

              <div className="com-diagram-item com-item-right">
                <span className="com-connector-line"></span>
                <div className="com-system-tag">
                  <span className="com-tag-icon">
                    <SettingsIcon size={20} color="#0879D1" />
                  </span>
                  <span className="com-tag-label">BMS<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Building Automation)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. COMMERCIAL IMAGE GALLERY SECTION
          ======================================================== */}
      <section className="com-gallery-section" aria-label="Commercial Facilities Gallery">
        <div className="com-gallery-container">
          <div className="com-gallery-grid">
            {/* Gallery Image 1: Modern office interior with workstations */}
            <div className="com-gallery-item">
              <img 
                src={commercialOfficeInteriorImg} 
                alt="Modern corporate office interior with workstations and natural daylight" 
                className="com-gallery-img" 
              />
            </div>

            {/* Gallery Image 2: Commercial shopping / atrium interior */}
            <div className="com-gallery-item">
              <img 
                src={commercialAtriumImg} 
                alt="Contemporary commercial atrium facility architecture" 
                className="com-gallery-img" 
              />
            </div>

            {/* Gallery Image 3: Modern multi-storey commercial building exterior */}
            <div className="com-gallery-item">
              <img 
                src={commercialImg} 
                alt="Modern multi-storey commercial office building with illuminated windows" 
                className="com-gallery-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="com-cta-banner" aria-label="Call to Action">
        <div className="com-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern commercial corporate facility building at twilight" 
            className="com-cta-img" 
          />
          <div className="com-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="com-cta-green-slash" aria-hidden="true"></div>
        <svg className="com-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="com-cta-container">
          <div className="com-cta-content">
            <h2 className="com-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="com-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
