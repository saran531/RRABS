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
  InstitutionalIcon,
  InstitutionalPlanningIcon,
  Zap
} from '../../components/common/Icons.jsx';
import './Institutional.css';

// Project image assets
import institutionalHeroImg from '../../assets/images/industries/institutional.jpg';
import classroomInteriorImg from '../../assets/images/industries/commercial-office-interior.jpg';
import libraryImg from '../../assets/images/industries/commercial.jpg';
import auditoriumImg from '../../assets/images/services/bms-monitoring-workstation.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/services/hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireImg from '../../assets/images/services/fire-fighting.jpg';
import cctvImg from '../../assets/images/services/elv.jpg';
import networkImg from '../../assets/images/services/network-switches.jpg';
import bmsImg from '../../assets/images/services/bms-monitoring-workstation.jpg';

export default function Institutional() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Institutional MEP, ELV & BMS Solutions | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Schools, colleges, auditoriums and other institutional buildings require safe, dependable systems for daily occupancy and operations. RRABS can coordinate core MEP, security, connectivity and automation requirements.'
      );
    }
  }, []);

  const relevantSystems = [
    {
      id: 'electrical-systems',
      label: 'Electrical systems',
      icon: Lightbulb,
      image: electricalImg,
      route: '/electrical-services/'
    },
    {
      id: 'cooling-ventilation',
      label: 'Cooling and ventilation',
      icon: Snowflake,
      image: hvacImg,
      route: '/hvac-services/'
    },
    {
      id: 'plumbing',
      label: 'Plumbing',
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
      id: 'cctv-access',
      label: 'CCTV and access control',
      icon: CctvCamera,
      image: cctvImg,
      route: '/elv-systems/'
    },
    {
      id: 'it-connectivity',
      label: 'IT/network connectivity',
      icon: NetworkNodesIcon,
      image: networkImg,
      route: '/it-networking/'
    },
    {
      id: 'bms-suitable',
      label: 'BMS where suitable',
      icon: SettingsIcon,
      image: bmsImg,
      route: '/building-management-systems/'
    }
  ];

  const row1 = relevantSystems.slice(0, 4);
  const row2 = relevantSystems.slice(4, 7);

  return (
    <div className="institutional-page">
      {/* ========================================================
          1. INSTITUTIONAL HERO BANNER
          ======================================================== */}
      <section className="inst-hero" aria-label="Institutional Facilities Hero">
        <div className="inst-hero-bg">
          <img 
            src={institutionalHeroImg} 
            alt="Educational and institutional campus facility architecture" 
            className="inst-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="inst-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="inst-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="inst-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="inst-hero-container">
          <div className="inst-hero-content">
            {/* Breadcrumb */}
            <nav className="inst-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="inst-breadcrumb-sep">&gt;</span>
              <Link to="/industries/">Industries</Link>
              <span className="inst-breadcrumb-sep">&gt;</span>
              <span className="inst-breadcrumb-current">Institutional</span>
            </nav>

            <h1 className="inst-hero-heading">
              Building Systems for<br />
              Institutional Facilities
            </h1>

            <p className="inst-hero-paragraph">
              Schools, colleges, auditoriums and other institutional buildings require safe, dependable systems for daily occupancy and operations. RRABS can coordinate core MEP, security, connectivity and automation requirements according to the facility and approved project scope.
            </p>

            <div className="inst-hero-actions">
              <Link to="/request-a-quote/" className="inst-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/industries/" className="inst-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Other Industries</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INSTITUTIONAL INTRODUCTION SECTION
          ======================================================== */}
      <section className="inst-intro-section" aria-label="Institutional Building Systems Introduction">
        {/* Subtle technical line-art decoration */}
        <svg className="inst-intro-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#1769AA" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#1769AA" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="inst-intro-container">
          {/* Left Column: Icon badge, heading, description */}
          <div className="inst-text-col">
            <div className="inst-feature-badge">
              <InstitutionalIcon size={28} color="#1769AA" />
            </div>

            <span className="inst-eyebrow-line"></span>

            <h2 className="inst-section-heading">
              Building Systems for Institutional Facilities
            </h2>

            <p className="inst-paragraph">
              Schools, colleges, auditoriums and other institutional buildings require safe, dependable systems for daily occupancy and operations. RRABS can coordinate core MEP, security, connectivity and automation requirements according to the facility and approved project scope.
            </p>
          </div>

          {/* Right Column: Institutional college campus building image with green diagonal corners */}
          <div className="inst-media-box">
            <img 
              src={institutionalHeroImg} 
              alt="Educational college campus and institutional building architecture" 
              className="inst-photo" 
            />
            <div className="inst-corner-accent-tl" aria-hidden="true"></div>
            <div className="inst-corner-accent-br" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. RELEVANT SYSTEMS SECTION
          ======================================================== */}
      <section className="inst-systems-section" aria-label="Relevant Systems">
        {/* Subtle blueprint line-art */}
        <svg className="inst-systems-decor-right" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="80" width="200" height="180" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="140" x2="250" y2="140" stroke="#1769AA" strokeWidth="1" />
          <line x1="150" y1="80" x2="150" y2="260" stroke="#1769AA" strokeWidth="1" />
          <circle cx="150" cy="140" r="6" fill="#0B9F45" />
        </svg>

        <div className="inst-systems-container">
          <h2 className="inst-systems-heading">Relevant Systems</h2>

          <div className="inst-systems-grid">
            {/* Row 1: 4 cards */}
            {row1.map((item) => {
              const IconComp = item.icon;
              return (
                <Link 
                  key={item.id} 
                  to={item.route} 
                  className="inst-system-card"
                  aria-label={item.label}
                >
                  <div className="inst-system-card-top">
                    <span className="inst-system-icon-wrap">
                      <IconComp size={24} color="#0B9F45" />
                    </span>
                    <div className="inst-system-thumb-wrap">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="inst-system-thumb" 
                      />
                    </div>
                  </div>
                  <div className="inst-system-card-bottom">
                    <h3 className="inst-system-label">{item.label}</h3>
                    <span className="inst-system-card-btn" aria-hidden="true">
                      <ArrowRight size={13} color="currentColor" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Row 2: 3 cards */}
            <div className="inst-systems-row-2">
              {row2.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link 
                    key={item.id} 
                    to={item.route} 
                    className="inst-system-card"
                    aria-label={item.label}
                  >
                    <div className="inst-system-card-top">
                      <span className="inst-system-icon-wrap">
                        <IconComp size={24} color="#1769AA" />
                      </span>
                      <div className="inst-system-thumb-wrap">
                        <img 
                          src={item.image} 
                          alt="" 
                          className="inst-system-thumb" 
                        />
                      </div>
                    </div>
                    <div className="inst-system-card-bottom">
                      <h3 className="inst-system-label">{item.label}</h3>
                      <span className="inst-system-card-btn" aria-hidden="true">
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
      <section className="inst-planning-section" aria-label="Integrated Planning">
        <div className="inst-planning-container">
          {/* Left Column: Heading and description */}
          <div className="inst-text-col">
            <div className="inst-feature-badge">
              <InstitutionalPlanningIcon size={28} color="#1769AA" />
            </div>

            <span className="inst-eyebrow-line"></span>

            <h2 className="inst-section-heading">Integrated Planning</h2>

            <p className="inst-paragraph">
              The final combination of systems should be defined by the building’s use, design, occupancy, equipment and approved technical requirements. RRABS’s role is to coordinate the confirmed scope so interfaces between services are considered early.
            </p>
          </div>

          {/* Right Column: Central Institutional Campus Diagram */}
          <div className="inst-diagram-area">
            {/* Left Connected Labels */}
            <div className="inst-diagram-col inst-diagram-left">
              <div className="inst-diagram-item inst-item-left">
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <Zap size={20} color="#0B9F45" />
                  </span>
                  <span className="inst-tag-label">Electrical</span>
                </div>
                <span className="inst-connector-line"></span>
              </div>

              <div className="inst-diagram-item inst-item-left">
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <Snowflake size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">HVAC</span>
                </div>
                <span className="inst-connector-line"></span>
              </div>

              <div className="inst-diagram-item inst-item-left">
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <Droplets size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">Plumbing</span>
                </div>
                <span className="inst-connector-line"></span>
              </div>

              <div className="inst-diagram-item inst-item-left">
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <ShieldFlameIcon size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">Fire Safety</span>
                </div>
                <span className="inst-connector-line"></span>
              </div>
            </div>

            {/* Central Institutional Building Image */}
            <div className="inst-center-bldg-wrapper">
              <img 
                src={institutionalHeroImg} 
                alt="Institutional building campus infrastructure" 
                className="inst-center-bldg-img" 
              />
            </div>

            {/* Right Connected Labels */}
            <div className="inst-diagram-col inst-diagram-right">
              <div className="inst-diagram-item inst-item-right">
                <span className="inst-connector-line"></span>
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <CctvCamera size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">ELV<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(CCTV &amp; Access Control)</small></span>
                </div>
              </div>

              <div className="inst-diagram-item inst-item-right">
                <span className="inst-connector-line"></span>
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <NetworkNodesIcon size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">IT / Networking</span>
                </div>
              </div>

              <div className="inst-diagram-item inst-item-right">
                <span className="inst-connector-line"></span>
                <div className="inst-system-tag">
                  <span className="inst-tag-icon">
                    <SettingsIcon size={20} color="#1769AA" />
                  </span>
                  <span className="inst-tag-label">BMS<br /><small style={{ fontWeight: 400, color: '#64748B' }}>(Building Automation)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INSTITUTIONAL IMAGE GALLERY SECTION (4 images)
          ======================================================== */}
      <section className="inst-gallery-section" aria-label="Institutional Facilities Gallery">
        <div className="inst-gallery-container">
          <div className="inst-gallery-grid">
            {/* Gallery Image 1: Classroom interior */}
            <div className="inst-gallery-item">
              <img 
                src={classroomInteriorImg} 
                alt="Modern institutional classroom interior with desks and presentation boards" 
                className="inst-gallery-img" 
              />
            </div>

            {/* Gallery Image 2: Institutional library */}
            <div className="inst-gallery-item">
              <img 
                src={libraryImg} 
                alt="Institutional academic library reading hall and book stacks" 
                className="inst-gallery-img" 
              />
            </div>

            {/* Gallery Image 3: Auditorium or lecture hall */}
            <div className="inst-gallery-item">
              <img 
                src={auditoriumImg} 
                alt="Institutional auditorium and conference lecture hall" 
                className="inst-gallery-img" 
              />
            </div>

            {/* Gallery Image 4: Educational campus exterior */}
            <div className="inst-gallery-item">
              <img 
                src={institutionalHeroImg} 
                alt="Modern educational university campus exterior architecture" 
                className="inst-gallery-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="inst-cta-banner" aria-label="Call to Action">
        <div className="inst-cta-bg">
          <img 
            src={institutionalHeroImg} 
            alt="Modern institutional campus architecture" 
            className="inst-cta-img" 
          />
          <div className="inst-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="inst-cta-green-slash" aria-hidden="true"></div>
        <svg className="inst-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="inst-cta-container">
          <div className="inst-cta-content">
            <h2 className="inst-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="inst-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#0B9F45" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
