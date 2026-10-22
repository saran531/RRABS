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
import './Residential.css';

// Project image assets
import residentialImg from '../../assets/images/industries/residential.jpg';
import residentialApartmentImg from '../../assets/images/industries/residential-apartment.jpg';
import residentialInteriorImg from '../../assets/images/industries/residential-interior.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function Residential() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Building Systems for Residential Projects | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS coordinates Electrical, HVAC, Plumbing, Fire Safety, ELV, IT/Networking and BMS requirements for residential developments in Madurai.'
      );
    }
  }, []);

  const relevantSystems = [
    {
      id: 'lighting-power',
      label: 'Lighting and power distribution',
      icon: Lightbulb,
      route: '/electrical-services/'
    },
    {
      id: 'cooling-ventilation',
      label: 'Comfort cooling and ventilation',
      icon: Snowflake,
      route: '/hvac-services/'
    },
    {
      id: 'water-drainage',
      label: 'Water supply and drainage',
      icon: Droplets,
      route: '/plumbing-services/'
    },
    {
      id: 'fire-safety',
      label: 'Fire-safety systems where required',
      icon: ShieldCheck,
      route: '/fire-alarm-fire-fighting/'
    },
    {
      id: 'cctv-access',
      label: 'CCTV and access control',
      icon: CctvCamera,
      route: '/elv-systems/'
    },
    {
      id: 'network-infra',
      label: 'Network infrastructure and connected spaces',
      icon: NetworkNodesIcon,
      route: '/it-networking/'
    },
    {
      id: 'building-auto',
      label: 'Building automation where appropriate',
      icon: SettingsIcon,
      route: '/building-management-systems/'
    }
  ];

  const row1 = relevantSystems.slice(0, 4);
  const row2 = relevantSystems.slice(4, 7);

  return (
    <div className="residential-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="res-hero" aria-label="Residential Projects Hero">
        <div className="res-hero-bg">
          <img 
            src={residentialImg} 
            alt="Modern residential apartment buildings and housing developments" 
            className="res-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="res-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="res-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="res-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="res-hero-container">
          <div className="res-hero-content">
            {/* Breadcrumb */}
            <nav className="res-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="res-breadcrumb-sep">&gt;</span>
              <Link to="/industries/">Industries</Link>
              <span className="res-breadcrumb-sep">&gt;</span>
              <span className="res-breadcrumb-current">Residential</span>
            </nav>

            <h1 className="res-hero-heading">
              Building Systems<br />
              for Residential<br />
              Projects
            </h1>

            <p className="res-hero-paragraph">
              Residential projects need building services that are reliable, practical to maintain and suitable for everyday living. RRABS can coordinate Electrical, HVAC, Plumbing, Fire Safety, ELV, IT/Networking and BMS requirements according to the scale and approved scope of the development.
            </p>

            <div className="res-hero-actions">
              <Link to="/request-a-quote/" className="res-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/industries/" className="res-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Other Industries</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. RELEVANT SYSTEMS SECTION
          ======================================================== */}
      <section className="res-systems-section" aria-label="Relevant Systems">
        {/* Subtle decorative architectural blueprint sketch */}
        <svg className="res-systems-decor-right" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="80" width="200" height="180" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="140" x2="250" y2="140" stroke="#0879D1" strokeWidth="1" />
          <line x1="150" y1="80" x2="150" y2="260" stroke="#0879D1" strokeWidth="1" />
          <circle cx="150" cy="140" r="6" fill="#08A63F" />
        </svg>

        <div className="res-systems-container">
          <h2 className="res-systems-heading">Relevant Systems</h2>

          <div className="res-systems-grid">
            {/* Row 1: 4 cards */}
            {row1.map((item) => {
              const IconComp = item.icon;
              return (
                <Link 
                  key={item.id} 
                  to={item.route} 
                  className="res-system-card"
                  aria-label={item.label}
                >
                  <div className="res-system-card-top">
                    <span className="res-system-icon">
                      <IconComp size={32} color="#0879D1" />
                    </span>
                    <span className="res-system-card-btn" aria-hidden="true">
                      <ArrowRight size={14} color="currentColor" />
                    </span>
                  </div>
                  <h3 className="res-system-label">{item.label}</h3>
                </Link>
              );
            })}

            {/* Row 2: 3 cards */}
            <div className="res-systems-row-2">
              {row2.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link 
                    key={item.id} 
                    to={item.route} 
                    className="res-system-card"
                    aria-label={item.label}
                  >
                    <div className="res-system-card-top">
                      <span className="res-system-icon">
                        <IconComp size={32} color="#0879D1" />
                      </span>
                      <span className="res-system-card-btn" aria-hidden="true">
                        <ArrowRight size={14} color="currentColor" />
                      </span>
                    </div>
                    <h3 className="res-system-label">{item.label}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INTEGRATED PLANNING SECTION
          ======================================================== */}
      <section className="res-planning-section" aria-label="Integrated Planning">
        <div className="res-planning-container">
          {/* Left Column: Heading and description */}
          <div className="res-text-col">
            <div className="res-feature-badge">
              <Building2 size={26} color="#0879D1" />
            </div>

            <span className="res-eyebrow-line"></span>

            <h2 className="res-section-heading">Integrated Planning</h2>

            <p className="res-paragraph">
              The final combination of systems should be defined by the building's use, design, occupancy, equipment and approved technical requirements. RRABS's role is to coordinate the confirmed scope so interfaces between services are considered early.
            </p>
          </div>

          {/* Right Column: Central Residential Building Diagram */}
          <div className="res-diagram-area">
            {/* Left Connected Labels: Electrical, HVAC, Plumbing, Fire Safety */}
            <div className="res-diagram-col res-diagram-left">
              <div className="res-diagram-item res-item-left">
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <Zap size={20} color="#08A63F" />
                  </span>
                  <span className="res-tag-label">Electrical</span>
                </div>
                <span className="res-connector-line"></span>
              </div>

              <div className="res-diagram-item res-item-left">
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <Snowflake size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">HVAC</span>
                </div>
                <span className="res-connector-line"></span>
              </div>

              <div className="res-diagram-item res-item-left">
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <Droplets size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">Plumbing</span>
                </div>
                <span className="res-connector-line"></span>
              </div>

              <div className="res-diagram-item res-item-left">
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <ShieldCheck size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">Fire Safety</span>
                </div>
                <span className="res-connector-line"></span>
              </div>
            </div>

            {/* Central Villa Image */}
            <div className="res-center-villa-wrapper">
              <img 
                src={residentialImg} 
                alt="Architectural residential villa model" 
                className="res-center-villa-img" 
              />
            </div>

            {/* Right Connected Labels: ELV, IT / Networking, BMS */}
            <div className="res-diagram-col res-diagram-right">
              <div className="res-diagram-item res-item-right">
                <span className="res-connector-line"></span>
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <CctvCamera size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">ELV<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(CCTV &amp; Access Control)</small></span>
                </div>
              </div>

              <div className="res-diagram-item res-item-right">
                <span className="res-connector-line"></span>
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <NetworkNodesIcon size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">IT / Networking</span>
                </div>
              </div>

              <div className="res-diagram-item res-item-right">
                <span className="res-connector-line"></span>
                <div className="res-system-tag">
                  <span className="res-tag-icon">
                    <SettingsIcon size={20} color="#0879D1" />
                  </span>
                  <span className="res-tag-label">BMS<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Building Automation)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. RESIDENTIAL IMAGE GALLERY SECTION
          ======================================================== */}
      <section className="res-gallery-section" aria-label="Residential Gallery">
        <div className="res-gallery-container">
          <div className="res-gallery-grid">
            {/* Gallery Image 1: Modern detached house with exterior lighting */}
            <div className="res-gallery-item">
              <img 
                src={residentialImg} 
                alt="Modern detached residential home with evening lighting" 
                className="res-gallery-img" 
              />
            </div>

            {/* Gallery Image 2: Contemporary multi-storey residential apartment building */}
            <div className="res-gallery-item">
              <img 
                src={residentialApartmentImg} 
                alt="Contemporary multi-storey residential apartment building" 
                className="res-gallery-img" 
              />
            </div>

            {/* Gallery Image 3: Modern residential interior / living room */}
            <div className="res-gallery-item">
              <img 
                src={residentialInteriorImg} 
                alt="Luxury modern residential interior living room with ambient lighting" 
                className="res-gallery-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="res-cta-banner" aria-label="Call to Action">
        <div className="res-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern residential building development at twilight" 
            className="res-cta-img" 
          />
          <div className="res-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="res-cta-green-slash" aria-hidden="true"></div>
        <svg className="res-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="res-cta-container">
          <div className="res-cta-content">
            <h2 className="res-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="res-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
