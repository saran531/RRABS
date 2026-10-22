import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Fan, 
  Snowflake, 
  Wind, 
  CoordinationIcon, 
  Zap, 
  Droplets, 
  CeilingSpace, 
  ShieldCheck, 
  Building2, 
  Server, 
  HomeIcon, 
  MedicalCross, 
  Bed, 
  Factory, 
  Landmark, 
  ArrowRight, 
  Plus, 
  Minus 
} from '../../components/common/Icons.jsx';
import './HVACServices.css';

// Local project images
import hvacHeroImg from '../../assets/images/services/hvac.jpg';
import comfortCoolingImg from '../../assets/images/services/comfort-cooling.jpg';
import centerBuildingImg from '../../assets/images/about/integrated-systems-building.jpg';
import ductworkImg from '../../assets/images/about/who-we-are-hvac.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';
import residentialImg from '../../assets/images/industries/residential.jpg';
import commercialImg from '../../assets/images/industries/commercial.jpg';
import healthcareImg from '../../assets/images/industries/healthcare.jpg';
import hospitalityImg from '../../assets/images/industries/hospitality.jpg';
import industrialImg from '../../assets/images/industries/industrial.jpg';
import institutionalImg from '../../assets/images/industries/institutional.jpg';

export default function HVACServices() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'HVAC Services in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'RRABS provides HVAC solutions in Madurai focused on comfort cooling and ventilation for modern residential, commercial and industrial buildings.');
    }
  }, []);

  // FAQ Accordion State (both open by default matching screenshot)
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(true);

  // Six Applications Data with matching authentic local assets
  const applications = [
    {
      title: 'Residential buildings',
      image: residentialImg,
      icon: <HomeIcon size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/residential/',
    },
    {
      title: 'Commercial facilities',
      image: commercialImg,
      icon: <Building2 size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/commercial/',
    },
    {
      title: 'Hospitals and healthcare',
      image: healthcareImg,
      icon: <MedicalCross size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/healthcare/',
    },
    {
      title: 'Hotels and hospitality',
      image: hospitalityImg,
      icon: <Bed size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/hospitality/',
    },
    {
      title: 'Industrial facilities',
      image: industrialImg,
      icon: <Factory size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/industrial/',
    },
    {
      title: 'Institutional buildings',
      image: institutionalImg,
      icon: <Landmark size={20} color="#079B36" strokeWidth={2.2} />,
      route: '/industries/institutional/',
    },
  ];

  return (
    <div className="hvac-services-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="hvac-hero" aria-label="HVAC Services Hero">
        <div className="hvac-hero-bg">
          <img 
            src={hvacHeroImg} 
            alt="Modern rooftop HVAC chiller units and commercial ventilation systems" 
            className="hvac-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hvac-hero-gradient"></div>
        </div>

        {/* Decorative Constellation Mesh on Left */}
        <svg className="hvac-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="hvac-hero-green-accent" aria-hidden="true"></div>

        <div className="hvac-hero-container">
          <div className="hvac-hero-content">
            {/* Breadcrumb */}
            <nav className="hvac-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="hvac-breadcrumb-sep">&gt;</span>
              <Link to="/services/">Services</Link>
              <span className="hvac-breadcrumb-sep">&gt;</span>
              <span className="hvac-breadcrumb-current">HVAC Services</span>
            </nav>

            <h1 className="hvac-hero-heading">
              HVAC Services<br />
              in Madurai for<br />
              Comfort Cooling &amp;<br />
              Ventilation
            </h1>

            <p className="hvac-hero-paragraph">
              RRABS provides HVAC solutions focused on comfort cooling and ventilation. The aim is to create indoor environments that support the building’s use through appropriate cooling, airflow and coordination with electrical, architectural and other building systems.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMFORT COOLING SECTION
          ======================================================== */}
      <section className="hvac-cooling-section" aria-label="Comfort Cooling">
        <div className="hvac-two-col-container">
          {/* Left Column: Icon Badge, Heading and Paragraph */}
          <div className="hvac-text-col">
            <div className="hvac-feature-badge-cooling">
              <Snowflake size={24} color="#13B83F" />
            </div>

            <h2 className="hvac-section-heading">Comfort Cooling</h2>

            <p className="hvac-paragraph">
              Comfort cooling helps maintain suitable indoor conditions for occupants and spaces. The right approach depends on building type, occupancy, room function, operating hours and project requirements. RRABS develops the HVAC scope around these practical factors rather than treating cooling as a one-size-fits-all installation.
            </p>
          </div>

          {/* Right Column: Ceiling Cassette AC Photo */}
          <div className="hvac-media-box">
            <img 
              src={comfortCoolingImg} 
              alt="Modern commercial ceiling cassette comfort cooling installation" 
              className="hvac-photo" 
            />
            <div className="hvac-media-green-corner" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VENTILATION SECTION
          ======================================================== */}
      <section className="hvac-ventilation-section" aria-label="Ventilation">
        {/* Subtle Decorative Flow Contour Lines */}
        <svg className="hvac-flow-decor" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 40 Q 200 120 380 80" stroke="#0878BD" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 20 120 Q 180 200 380 160" stroke="#079B36" strokeWidth="0.8" />
          <path d="M 80 200 Q 220 280 380 240" stroke="#0878BD" strokeWidth="0.6" strokeDasharray="4 4" />
        </svg>

        <div className="hvac-two-col-inverted">
          {/* Left Column: Ventilation Spiral Ductwork & Diffuser Photo */}
          <div className="hvac-media-box">
            <img 
              src={ductworkImg} 
              alt="Galvanized spiral ventilation ductwork and round ceiling diffusers" 
              className="hvac-photo" 
            />
          </div>

          {/* Right Column: Icon Badge, Heading and Paragraph */}
          <div className="hvac-text-col">
            <div className="hvac-feature-badge-vent">
              <Wind size={24} color="#079B36" />
            </div>

            <h2 className="hvac-section-heading">Ventilation</h2>

            <p className="hvac-paragraph">
              Ventilation supports the movement and replacement of air within a building. Depending on the space, it can help manage heat, stale air, odours and indoor environmental conditions. Ventilation requirements should be coordinated with the building layout and the intended use of each area.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HVAC COORDINATION SECTION
          ======================================================== */}
      <section className="hvac-coord-section" aria-label="HVAC Coordination">
        <div className="hvac-coord-container">
          {/* Left Column: Heading and Paragraph */}
          <div className="hvac-coord-text-col">
            <div className="hvac-feature-badge-coord">
              <CoordinationIcon size={24} color="#13B83F" />
            </div>

            <h2 className="hvac-section-heading">HVAC Coordination</h2>

            <p className="hvac-paragraph">
              HVAC systems require coordination with electrical power, drainage, ceiling space, fire-safety provisions and BMS where automation or centralized monitoring is included. This is where RRABS’s integrated building-systems approach adds value.
            </p>
          </div>

          {/* Right Column: Connected Building Diagram */}
          <div className="hvac-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="hvac-side-nodes hvac-left-nodes">
              <div className="hvac-node-item hvac-node-left">
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><Zap size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">Electrical Power</span>
                </div>
                <span className="hvac-connector-line"></span>
              </div>
              <div className="hvac-node-item hvac-node-left">
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><Droplets size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">Drainage</span>
                </div>
                <span className="hvac-connector-line"></span>
              </div>
              <div className="hvac-node-item hvac-node-left">
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><CeilingSpace size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">Ceiling Space</span>
                </div>
                <span className="hvac-connector-line"></span>
              </div>
            </div>

            {/* Central Building Frame with Overlay Badge */}
            <div className="hvac-center-frame">
              <img 
                src={centerBuildingImg} 
                alt="Modern building HVAC systems hub" 
                className="hvac-building-img" 
              />
              <div className="hvac-center-badge">
                <Fan size={22} color="#079B36" />
                <span className="hvac-center-badge-text">HVAC<br />Systems</span>
              </div>
            </div>

            {/* Right Connected Services */}
            <div className="hvac-side-nodes hvac-right-nodes">
              <div className="hvac-node-item hvac-node-right">
                <span className="hvac-connector-line"></span>
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><ShieldCheck size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">Fire-safety Provisions</span>
                </div>
              </div>
              <div className="hvac-node-item hvac-node-right">
                <span className="hvac-connector-line"></span>
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><Building2 size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">BMS Controls</span>
                </div>
              </div>
              <div className="hvac-node-item hvac-node-right">
                <span className="hvac-connector-line"></span>
                <div className="hvac-node-card">
                  <span className="hvac-node-card-icon"><Server size={18} color="#079B36" /></span>
                  <span className="hvac-node-card-label">IT Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. APPLICATIONS SECTION
          ======================================================== */}
      <section className="hvac-applications-section" aria-label="Applications">
        <div className="hvac-applications-container">
          <div className="hvac-applications-header">
            <h2 className="hvac-section-heading">Applications</h2>
          </div>

          <div className="hvac-applications-grid">
            {applications.map((app) => (
              <Link key={app.title} to={app.route} className="hvac-app-card">
                <div className="hvac-app-media">
                  <img src={app.image} alt={app.title} className="hvac-app-photo" />
                </div>
                <div className="hvac-app-icon-wrap" aria-hidden="true">
                  {app.icon}
                </div>
                <div className="hvac-app-body">
                  <span className="hvac-app-title">{app.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="hvac-faq-section" aria-label="Frequently Asked Questions">
        <div className="hvac-faq-container">
          <div className="hvac-faq-header">
            <h2 className="hvac-section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="hvac-faq-grid">
            {/* FAQ 1 */}
            <div className="hvac-faq-card">
              <button 
                type="button" 
                className="hvac-faq-top"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="hvac-faq-question">What is the difference between comfort cooling and ventilation?</span>
                <span className="hvac-faq-toggle">
                  {openFaq1 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="hvac-faq-answer">
                  <p>
                    Comfort cooling primarily manages indoor temperature for occupant comfort. Ventilation focuses on air movement and air replacement. Many buildings require both, but the exact system depends on the use and design of the facility.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="hvac-faq-card">
              <button 
                type="button" 
                className="hvac-faq-top"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="hvac-faq-question">Can HVAC connect to a BMS?</span>
                <span className="hvac-faq-toggle">
                  {openFaq2 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="hvac-faq-answer">
                  <p>
                    Where the selected HVAC equipment and project scope support integration, a BMS can provide centralized monitoring and control of relevant HVAC functions. The exact integration points should be defined during system planning.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FINAL CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="hvac-cta-section" aria-label="HVAC Call to Action">
        <div className="hvac-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="hvac-cta-img" 
          />
          <div className="hvac-cta-overlay"></div>
        </div>

        {/* Diagonal Green Accent Graphic */}
        <div className="hvac-cta-green-accent" aria-hidden="true"></div>

        <div className="hvac-cta-container">
          <div className="hvac-cta-content">
            <h2 className="hvac-cta-heading">
              Need comfort cooling or ventilation for a project in Madurai? Share the building type and requirements with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="hvac-cta-btn">
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
