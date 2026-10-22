import { Link } from 'react-router-dom';
import { 
  Zap, 
  Fan, 
  Droplets, 
  ShieldCheck, 
  Video, 
  Network, 
  Building2, 
  ArrowRight, 
  MapPin, 
  MessageCircle,
  TrendingUp,
  Users,
  SettingsIcon,
  Wrench,
  Share2
} from '../components/common/Icons.jsx';
import './About.css';

// Imported local image assets matching the design requirements
import heroBuildingImg from '../assets/images/about/hero-building.jpg';
import whoWeAreHvacImg from '../assets/images/about/who-we-are-hvac.jpg';
import approachPlansImg from '../assets/images/about/approach-plans-helmet.jpg';
import integratedBuildingImg from '../assets/images/about/integrated-systems-building.jpg';
import maduraiSkylineImg from '../assets/images/about/madurai-skyline.jpg';
import ctaBuildingImg from '../assets/images/about/cta-building.jpg';

export default function About() {
  // Service items for Who We Are and Integrated Building Systems
  const servicesList = [
    { name: 'Electrical', icon: <Zap size={16} color="#079B36" /> },
    { name: 'HVAC', icon: <Fan size={16} color="#079B36" /> },
    { name: 'Plumbing', icon: <Droplets size={16} color="#079B36" /> },
    { name: 'Fire Alarm & Fire Fighting', icon: <ShieldCheck size={16} color="#079B36" /> },
    { name: 'ELV Systems', icon: <Video size={16} color="#079B36" /> },
    { name: 'IT & Networking', icon: <Network size={16} color="#079B36" /> },
    { name: 'Building Management Systems', icon: <Building2 size={16} color="#079B36" /> },
  ];

  // 6 What We Focus On features with respective icons
  const focusFeatures = [
    { label: 'Reliable system performance', icon: <TrendingUp size={22} color="#079B36" /> },
    { label: 'Clear coordination', icon: <Users size={22} color="#079B36" /> },
    { label: 'Practical engineering', icon: <SettingsIcon size={22} color="#079B36" /> },
    { label: 'Safety-conscious execution', icon: <ShieldCheck size={22} color="#079B36" /> },
    { label: 'Maintainability', icon: <Wrench size={22} color="#079B36" /> },
    { label: 'Connected infrastructure', icon: <Share2 size={22} color="#079B36" /> },
  ];

  return (
    <div className="about-page">
      {/* ========================================================
          1. HERO BANNER — ABOUT RRABS
          ======================================================== */}
      <section className="about-hero" aria-label="About RRABS Hero Banner">
        <div className="about-hero-bg">
          <img 
            src={integratedBuildingImg} 
            alt="Contemporary architectural engineering building with coordinated systems" 
            className="about-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="about-hero-gradient"></div>
        </div>

        {/* Subtle Architectural Technical Mesh Overlay */}
        <svg className="about-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="120" r="3" fill="#38BDF8" />
          <circle cx="180" cy="80" r="3" fill="#38BDF8" />
          <circle cx="280" cy="160" r="3" fill="#38BDF8" />
          <circle cx="140" cy="240" r="3" fill="#38BDF8" />
          <circle cx="260" cy="320" r="3" fill="#38BDF8" />
          <circle cx="80" cy="380" r="3" fill="#38BDF8" />
          <circle cx="380" cy="240" r="3" fill="#38BDF8" />
          <circle cx="480" cy="180" r="3" fill="#38BDF8" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M180 80 L280 160 L380 240 L480 180" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M280 160 L380 240 L260 320" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M20 300 Q150 150 350 280 T550 200" stroke="#0878BD" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>

        {/* Subtle Green Diagonal Accent on Upper Right */}
        <div className="about-hero-green-accent" aria-hidden="true"></div>

        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-hero-eyebrow">
              <span className="about-hero-eyebrow-line"></span>
              ABOUT RRABS
            </span>

            <h1 className="about-hero-heading">
              Engineering<br />
              Better-Connected<br />
              Building Systems
            </h1>

            <p className="about-hero-paragraph">
              RR Advanced Building Systems (RRABS) is a Madurai-based building systems company focused on the services that keep modern facilities powered, comfortable, safe, connected and controllable.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION — WHO WE ARE
          ======================================================== */}
      <section className="who-we-are-section" aria-label="Who We Are Section">
        {/* Subtle blueprint decorative markings on left */}
        <svg className="who-we-are-blueprint-decor" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="0" x2="20" y2="400" stroke="#0878BD" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="400" stroke="#0878BD" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="10" y1="50" x2="30" y2="50" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="100" x2="30" y2="100" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="150" x2="30" y2="150" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="200" x2="30" y2="200" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="250" x2="30" y2="250" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="300" x2="30" y2="300" stroke="#0878BD" strokeWidth="1" />
          <line x1="10" y1="350" x2="30" y2="350" stroke="#0878BD" strokeWidth="1" />
        </svg>

        <div className="who-we-are-container">
          {/* Left Column: Heading, Paragraph, and Button */}
          <div className="who-we-are-text-col">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              WHO WE ARE
            </span>

            <h2 className="about-section-heading">Who We Are</h2>

            <p className="about-paragraph">
              Our work spans Electrical, HVAC, Plumbing, Fire Alarm &amp; Fire Fighting, ELV, IT &amp; Networking and Building Management Systems. By bringing these disciplines into a coordinated service environment, we help project teams reduce fragmentation and make better decisions across the building lifecycle.
            </p>

            <div className="who-we-are-btn-wrap">
              <Link to="/services/" className="btn-outline-pill">
                <span>Learn More About RRABS</span>
                <span className="btn-circle-arrow">
                  <ArrowRight size={14} color="#079B36" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Mechanical Infrastructure Photo & Compact Service List */}
          <div className="who-we-are-media-panel">
            <div className="who-we-are-photo-box">
              <img 
                src={whoWeAreHvacImg} 
                alt="Modern HVAC ductwork and building mechanical infrastructure" 
                className="who-we-are-photo" 
              />
            </div>

            <div className="who-we-are-service-list">
              {servicesList.map((svc) => (
                <div key={svc.name} className="service-list-item">
                  <span className="service-list-icon">{svc.icon}</span>
                  <span className="service-list-label">{svc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION — OUR APPROACH
          ======================================================== */}
      <section className="our-approach-section" aria-label="Our Approach Section">
        {/* Subtle decorative architectural wireframe on right side */}
        <svg className="approach-architectural-decor" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="80" width="220" height="260" stroke="#0878BD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="120" y1="140" x2="340" y2="140" stroke="#0878BD" strokeWidth="0.75" />
          <line x1="120" y1="200" x2="340" y2="200" stroke="#0878BD" strokeWidth="0.75" />
          <line x1="120" y1="260" x2="340" y2="260" stroke="#0878BD" strokeWidth="0.75" />
          <line x1="180" y1="80" x2="180" y2="340" stroke="#0878BD" strokeWidth="0.75" />
          <line x1="240" y1="80" x2="240" y2="340" stroke="#0878BD" strokeWidth="0.75" />
          <line x1="300" y1="80" x2="300" y2="340" stroke="#0878BD" strokeWidth="0.75" />
          <polygon points="120,80 180,40 380,40 340,80" stroke="#0878BD" strokeWidth="1" />
          <line x1="380" y1="40" x2="380" y2="280" stroke="#0878BD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="340" y1="340" x2="380" y2="280" stroke="#0878BD" strokeWidth="1" />
        </svg>

        <div className="our-approach-container">
          {/* Left Column: Photograph of Architectural Plans & Construction Helmet */}
          <div className="our-approach-media-col">
            <img 
              src={approachPlansImg} 
              alt="Architectural plans and construction helmet in engineering office" 
              className="our-approach-img" 
            />
          </div>

          {/* Right Column: Eyebrow, Heading, Paragraph */}
          <div className="our-approach-text-col">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              OUR APPROACH
            </span>

            <h2 className="about-section-heading">Our Approach</h2>

            <p className="about-paragraph">
              Every project begins with the actual use of the building. A hospital, commercial property, industrial facility, hotel or residential development has different operating priorities. We therefore approach each scope by understanding the facility, identifying system requirements and coordinating the relevant services around practical operation and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SECTION — WHAT WE FOCUS ON
          ======================================================== */}
      <section className="what-we-focus-section" aria-label="What We Focus On Section">
        <div className="what-we-focus-container">
          {/* Left Column: Text */}
          <div className="what-we-focus-text-col">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              WHAT WE FOCUS ON
            </span>

            <h2 className="about-section-heading">What We Focus On</h2>

            <p className="about-paragraph">
              Reliable system performance. Clear coordination. Practical engineering. Safety-conscious execution. Maintainability. Connected infrastructure. These principles guide both the technical solution and the way RRABS communicates with clients and project stakeholders.
            </p>
          </div>

          {/* Right Column: Six Feature Cards Grid (3 cols x 2 rows) */}
          <div className="focus-cards-grid">
            {focusFeatures.map((feat) => (
              <div key={feat.label} className="focus-card">
                <div className="focus-card-icon-wrap">
                  {feat.icon}
                </div>
                <span className="focus-card-label">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTION — INTEGRATED BUILDING SYSTEMS
          ======================================================== */}
      <section className="integrated-systems-section" aria-label="Integrated Building Systems Section">
        {/* Subtle contour lines decorative graphic on right */}
        <svg className="integrated-systems-decor" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0 C 250 120, 300 280, 500 380" stroke="#0878BD" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M150 0 C 300 140, 350 300, 500 340" stroke="#0878BD" strokeWidth="0.8" />
          <path d="M200 0 C 350 160, 400 320, 500 300" stroke="#079B36" strokeWidth="0.8" strokeDasharray="4 4" />
          <path d="M250 0 C 400 180, 450 340, 500 260" stroke="#0878BD" strokeWidth="0.6" />
        </svg>

        <div className="integrated-systems-container">
          {/* Left Column: Connected Building Systems Diagram */}
          <div className="integrated-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="diagram-side-nodes left-nodes">
              <div className="diagram-node-item">
                <span className="diagram-node-label">Electrical</span>
                <span className="diagram-node-badge"><Zap size={18} color="#079B36" /></span>
                <span className="diagram-connector-line left-line" aria-hidden="true"></span>
              </div>
              <div className="diagram-node-item">
                <span className="diagram-node-label">HVAC</span>
                <span className="diagram-node-badge"><Fan size={18} color="#079B36" /></span>
                <span className="diagram-connector-line left-line" aria-hidden="true"></span>
              </div>
              <div className="diagram-node-item">
                <span className="diagram-node-label">Plumbing</span>
                <span className="diagram-node-badge"><Droplets size={18} color="#079B36" /></span>
                <span className="diagram-connector-line left-line" aria-hidden="true"></span>
              </div>
            </div>

            {/* Central Building Architecture Visual */}
            <div className="diagram-center-frame">
              <img 
                src={integratedBuildingImg} 
                alt="Modern building systems architectural illustration" 
                className="diagram-building-img" 
              />
            </div>

            {/* Right Connected Services */}
            <div className="diagram-side-nodes right-nodes">
              <div className="diagram-node-item">
                <span className="diagram-connector-line right-line" aria-hidden="true"></span>
                <span className="diagram-node-badge"><ShieldCheck size={18} color="#079B36" /></span>
                <span className="diagram-node-label">Fire Alarm &amp; Fire Fighting</span>
              </div>
              <div className="diagram-node-item">
                <span className="diagram-connector-line right-line" aria-hidden="true"></span>
                <span className="diagram-node-badge"><Video size={18} color="#079B36" /></span>
                <span className="diagram-node-label">ELV Systems</span>
              </div>
              <div className="diagram-node-item">
                <span className="diagram-connector-line right-line" aria-hidden="true"></span>
                <span className="diagram-node-badge"><Network size={18} color="#079B36" /></span>
                <span className="diagram-node-label">IT &amp; Networking</span>
              </div>
              <div className="diagram-node-item">
                <span className="diagram-connector-line right-line" aria-hidden="true"></span>
                <span className="diagram-node-badge"><Building2 size={18} color="#079B36" /></span>
                <span className="diagram-node-label">Building Management Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Eyebrow, Heading, Paragraph */}
          <div className="integrated-systems-text-col">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              INTEGRATED BUILDING SYSTEMS
            </span>

            <h2 className="about-section-heading">Integrated Building Systems</h2>

            <p className="about-paragraph">
              RRABS is not positioned as only an electrical, HVAC or plumbing vendor. Our scope connects conventional MEP services with ELV, IT infrastructure and BMS, creating a broader building-systems capability for projects that need multiple disciplines to work together.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SECTION — BASED IN MADURAI
          ======================================================== */}
      <section className="based-madurai-section" aria-label="Based in Madurai Section">
        <div className="based-madurai-container">
          {/* Left Column: Eyebrow, Heading, Paragraph */}
          <div className="based-madurai-text-col">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              BASED IN MADURAI
            </span>

            <h2 className="about-section-heading">Based in Madurai</h2>

            <p className="about-paragraph">
              RRABS operates from Mahaboopalayam, Madurai. Our local presence helps us understand project requirements in the region while supporting clients who need coordinated building-system execution and consultation.
            </p>
          </div>

          {/* Right Column: Panoramic Madurai Photograph with Diagonal Accent & Location Badge */}
          <div className="based-madurai-media-frame">
            <img 
              src={maduraiSkylineImg} 
              alt="Panoramic Madurai city skyline featuring temple gopurams" 
              className="based-madurai-photo" 
            />

            {/* Restrained Diagonal Green Accent */}
            <div className="based-madurai-diagonal-accent" aria-hidden="true"></div>

            {/* Overlaid Location Badge */}
            <div className="madurai-location-badge">
              <span className="madurai-pin-circle">
                <MapPin size={16} color="#FFFFFF" />
              </span>
              <span className="madurai-badge-text">Madurai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FINAL CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="about-final-cta-section" aria-label="Discuss Project Call to Action">
        <div className="about-final-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="about-final-cta-img" 
          />
          <div className="about-final-cta-overlay"></div>
        </div>

        {/* Subtle Architectural Mesh Vector */}
        <svg className="about-final-cta-mesh" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="2.5" fill="#38BDF8" />
          <circle cx="120" cy="30" r="2.5" fill="#38BDF8" />
          <circle cx="180" cy="80" r="2.5" fill="#38BDF8" />
          <circle cx="90" cy="120" r="2.5" fill="#38BDF8" />
          <circle cx="200" cy="140" r="2.5" fill="#38BDF8" />
          <path d="M40 40 L120 30 L180 80 L90 120 Z" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M180 80 L200 140 L90 120" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>

        <div className="about-final-cta-container">
          <div className="about-final-cta-content">
            <h2 className="about-final-cta-heading">
              Have a project to discuss? Share the building type, location and required services with RRABS.
            </h2>

            <Link to="/contact/" className="about-final-cta-btn">
              <span className="chat-icon-green">
                <MessageCircle size={18} color="#079B36" />
              </span>
              <span>Talk to Our Team</span>
              <span className="cta-arrow-right">
                <ArrowRight size={16} color="#07345B" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
