import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Lightbulb, 
  Snowflake, 
  Droplets, 
  ShieldFlameIcon,
  CctvCamera, 
  NetworkNodesIcon, 
  SettingsIcon,
  Building2,
  Zap
} from '../../components/common/Icons.jsx';
import './Hospitality.css';

// Project image assets
import hospitalityHeroImg from '../../assets/images/industries/hospitality.jpg';
import hotelLobbyImg from '../../assets/images/about/who-we-are-hvac.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/services/hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireImg from '../../assets/images/services/fire-fighting.jpg';
import cctvImg from '../../assets/images/services/elv.jpg';
import networkImg from '../../assets/images/services/network-switches.jpg';
import bmsImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import hotelGuestBedroomImg from '../../assets/images/industries/hotel-guest-bedroom.jpg';
import hotelDiningRestaurantImg from '../../assets/images/industries/hotel-dining-restaurant.jpg';
import hotelAtriumImg from '../../assets/images/industries/commercial-atrium.jpg';

export default function Hospitality() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Building Systems for Hotels & Hospitality | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Hospitality properties must balance guest comfort, safety, reliable operations and connected services. RRABS can coordinate building systems around the operational needs of hotels, resorts and hospitality spaces.'
      );
    }
  }, []);

  const relevantSystems = [
    {
      id: 'lighting-power',
      label: 'Lighting and power',
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
      label: 'Water supply and drainage',
      icon: Droplets,
      image: plumbingImg,
      route: '/plumbing-services/'
    },
    {
      id: 'fire-safety',
      label: 'Fire safety',
      icon: ShieldFlameIcon,
      image: fireImg,
      route: '/fire-alarm-fire-fighting/'
    },
    {
      id: 'security-access',
      label: 'Security and access control',
      icon: CctvCamera,
      image: cctvImg,
      route: '/elv-systems/'
    },
    {
      id: 'connectivity',
      label: 'Guest/operational connectivity',
      icon: NetworkNodesIcon,
      image: networkImg,
      route: '/it-networking/'
    },
    {
      id: 'bms-automation',
      label: 'Building monitoring and automation',
      icon: SettingsIcon,
      image: bmsImg,
      route: '/building-management-systems/'
    }
  ];

  const row1 = relevantSystems.slice(0, 4);
  const row2 = relevantSystems.slice(4, 7);

  return (
    <div className="hospitality-page">
      {/* ========================================================
          1. HERO BANNER
          ======================================================== */}
      <section className="hosp-hero" aria-label="Hotels & Hospitality Hero">
        <div className="hosp-hero-bg">
          <img 
            src={hospitalityHeroImg} 
            alt="Luxury hotel and resort hospitality building architecture" 
            className="hosp-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hosp-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="hosp-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="hosp-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="hosp-hero-container">
          <div className="hosp-hero-content">
            {/* Breadcrumb */}
            <nav className="hosp-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="hosp-breadcrumb-sep">&gt;</span>
              <Link to="/industries/">Industries</Link>
              <span className="hosp-breadcrumb-sep">&gt;</span>
              <span className="hosp-breadcrumb-current">Hospitality</span>
            </nav>

            <h1 className="hosp-hero-heading">
              Building Systems<br />
              for Hotels &amp;<br />
              Hospitality
            </h1>

            <p className="hosp-hero-paragraph">
              Hospitality properties must balance guest comfort, safety, reliable operations and connected services. RRABS can coordinate building systems around the operational needs of hotels, resorts and hospitality spaces.
            </p>

            <div className="hosp-hero-actions">
              <Link to="/request-a-quote/" className="hosp-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/industries/" className="hosp-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Other Industries</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOSPITALITY INTRODUCTION SECTION
          ======================================================== */}
      <section className="hosp-intro-section" aria-label="Hospitality Building Systems Introduction">
        {/* Subtle technical line-art decoration */}
        <svg className="hosp-intro-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#0879D1" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#0879D1" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="hosp-intro-container">
          {/* Left Column: Icon badge, heading, description */}
          <div className="hosp-text-col">
            <div className="hosp-feature-badge">
              <Building2 size={28} color="#0879D1" />
            </div>

            <span className="hosp-eyebrow-line"></span>

            <h2 className="hosp-section-heading">
              Building Systems for Hotels &amp; Hospitality
            </h2>

            <p className="hosp-paragraph">
              Hospitality properties must balance guest comfort, safety, reliable operations and connected services. RRABS can coordinate building systems around the operational needs of hotels, resorts and hospitality spaces.
            </p>
          </div>

          {/* Right Column: Hotel lobby/reception image with green diagonal corners */}
          <div className="hosp-media-box">
            <img 
              src={hotelLobbyImg} 
              alt="Luxury hotel lobby and reception interior with chandeliers" 
              className="hosp-photo" 
            />
            <div className="hosp-corner-accent-tl" aria-hidden="true"></div>
            <div className="hosp-corner-accent-br" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. RELEVANT SYSTEMS SECTION
          ======================================================== */}
      <section className="hosp-systems-section" aria-label="Relevant Systems">
        {/* Subtle blueprint line-art */}
        <svg className="hosp-systems-decor-right" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="80" width="200" height="180" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="140" x2="250" y2="140" stroke="#0879D1" strokeWidth="1" />
          <line x1="150" y1="80" x2="150" y2="260" stroke="#0879D1" strokeWidth="1" />
          <circle cx="150" cy="140" r="6" fill="#08A63F" />
        </svg>

        <div className="hosp-systems-container">
          <h2 className="hosp-systems-heading">Relevant Systems</h2>

          <div className="hosp-systems-grid">
            {/* Row 1: 4 cards */}
            {row1.map((item) => {
              const IconComp = item.icon;
              return (
                <Link 
                  key={item.id} 
                  to={item.route} 
                  className="hosp-system-card"
                  aria-label={item.label}
                >
                  <div className="hosp-system-card-top">
                    <span className="hosp-system-icon-wrap">
                      <IconComp size={24} color="#0879D1" />
                    </span>
                    <div className="hosp-system-thumb-wrap">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="hosp-system-thumb" 
                      />
                    </div>
                  </div>
                  <div className="hosp-system-card-bottom">
                    <h3 className="hosp-system-label">{item.label}</h3>
                    <span className="hosp-system-card-btn" aria-hidden="true">
                      <ArrowRight size={13} color="currentColor" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Row 2: 3 cards */}
            <div className="hosp-systems-row-2">
              {row2.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link 
                    key={item.id} 
                    to={item.route} 
                    className="hosp-system-card"
                    aria-label={item.label}
                  >
                    <div className="hosp-system-card-top">
                      <span className="hosp-system-icon-wrap">
                        <IconComp size={24} color="#0879D1" />
                      </span>
                      <div className="hosp-system-thumb-wrap">
                        <img 
                          src={item.image} 
                          alt="" 
                          className="hosp-system-thumb" 
                        />
                      </div>
                    </div>
                    <div className="hosp-system-card-bottom">
                      <h3 className="hosp-system-label">{item.label}</h3>
                      <span className="hosp-system-card-btn" aria-hidden="true">
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
      <section className="hosp-planning-section" aria-label="Integrated Planning">
        <div className="hosp-planning-container">
          {/* Left Column: Heading and description */}
          <div className="hosp-text-col">
            <div className="hosp-feature-badge">
              <Building2 size={28} color="#0879D1" />
            </div>

            <span className="hosp-eyebrow-line"></span>

            <h2 className="hosp-section-heading">Integrated Planning</h2>

            <p className="hosp-paragraph">
              The final combination of systems should be defined by the building’s use, design, occupancy, equipment and approved technical requirements. RRABS’s role is to coordinate the confirmed scope so interfaces between services are considered early.
            </p>
          </div>

          {/* Right Column: Central Hotel Building Diagram */}
          <div className="hosp-diagram-area">
            {/* Left Connected Labels */}
            <div className="hosp-diagram-col hosp-diagram-left">
              <div className="hosp-diagram-item hosp-item-left">
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <Zap size={20} color="#08A63F" />
                  </span>
                  <span className="hosp-tag-label">Electrical</span>
                </div>
                <span className="hosp-connector-line"></span>
              </div>

              <div className="hosp-diagram-item hosp-item-left">
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <Snowflake size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">HVAC</span>
                </div>
                <span className="hosp-connector-line"></span>
              </div>

              <div className="hosp-diagram-item hosp-item-left">
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <Droplets size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">Plumbing</span>
                </div>
                <span className="hosp-connector-line"></span>
              </div>

              <div className="hosp-diagram-item hosp-item-left">
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <ShieldFlameIcon size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">Fire Safety</span>
                </div>
                <span className="hosp-connector-line"></span>
              </div>
            </div>

            {/* Central Hotel Building Image */}
            <div className="hosp-center-bldg-wrapper">
              <img 
                src={hospitalityHeroImg} 
                alt="Hotel and hospitality building infrastructure" 
                className="hosp-center-bldg-img" 
              />
            </div>

            {/* Right Connected Labels */}
            <div className="hosp-diagram-col hosp-diagram-right">
              <div className="hosp-diagram-item hosp-item-right">
                <span className="hosp-connector-line"></span>
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <CctvCamera size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">ELV<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Security &amp; Access Control)</small></span>
                </div>
              </div>

              <div className="hosp-diagram-item hosp-item-right">
                <span className="hosp-connector-line"></span>
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <NetworkNodesIcon size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">IT / Networking</span>
                </div>
              </div>

              <div className="hosp-diagram-item hosp-item-right">
                <span className="hosp-connector-line"></span>
                <div className="hosp-system-tag">
                  <span className="hosp-tag-icon">
                    <SettingsIcon size={20} color="#0879D1" />
                  </span>
                  <span className="hosp-tag-label">BMS<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Building Automation)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HOSPITALITY IMAGE GALLERY SECTION (4 images)
          ======================================================== */}
      <section className="hosp-gallery-section" aria-label="Hospitality Facilities Gallery">
        <div className="hosp-gallery-container">
          <div className="hosp-gallery-grid">
            {/* Gallery Image 1: Luxury hotel exterior with swimming pool */}
            <div className="hosp-gallery-item">
              <img 
                src={hospitalityHeroImg} 
                alt="Luxury hotel exterior with swimming pool and ambient lighting" 
                className="hosp-gallery-img" 
              />
            </div>

            {/* Gallery Image 2: Premium guest bedroom with a large window */}
            <div className="hosp-gallery-item">
              <img 
                src={hotelGuestBedroomImg} 
                alt="Premium hotel guest bedroom suite with scenic large window" 
                className="hosp-gallery-img" 
              />
            </div>

            {/* Gallery Image 3: Hotel restaurant or dining area */}
            <div className="hosp-gallery-item">
              <img 
                src={hotelDiningRestaurantImg} 
                alt="Luxury hotel dining area and restaurant interior" 
                className="hosp-gallery-img" 
              />
            </div>

            {/* Gallery Image 4: Grand hotel atrium lobby */}
            <div className="hosp-gallery-item">
              <img 
                src={hotelAtriumImg} 
                alt="Grand luxury hotel atrium lobby architecture with architectural glass lighting" 
                className="hosp-gallery-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="hosp-cta-banner" aria-label="Call to Action">
        <div className="hosp-cta-bg">
          <img 
            src={hospitalityHeroImg} 
            alt="Luxury hotel building architecture" 
            className="hosp-cta-img" 
          />
          <div className="hosp-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="hosp-cta-green-slash" aria-hidden="true"></div>
        <svg className="hosp-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="hosp-cta-container">
          <div className="hosp-cta-content">
            <h2 className="hosp-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="hosp-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
