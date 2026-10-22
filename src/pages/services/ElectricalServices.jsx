import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Lightbulb, 
  Fan, 
  Droplets, 
  Server, 
  ShieldCheck, 
  Video, 
  Building2, 
  HomeIcon, 
  MedicalCross, 
  Bed, 
  Factory, 
  Landmark, 
  ArrowRight, 
  Plus, 
  Minus 
} from '../../components/common/Icons.jsx';
import './ElectricalServices.css';

// Local project images
import electricalSwitchgearImg from '../../assets/images/services/electrical.jpg';
import lightingSystemsImg from '../../assets/images/services/lighting-systems.jpg';
import centerBuildingImg from '../../assets/images/about/integrated-systems-building.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';
import residentialImg from '../../assets/images/industries/residential.jpg';
import commercialImg from '../../assets/images/industries/commercial.jpg';
import healthcareImg from '../../assets/images/industries/healthcare.jpg';
import hospitalityImg from '../../assets/images/industries/hospitality.jpg';
import industrialImg from '../../assets/images/industries/industrial.jpg';
import institutionalImg from '../../assets/images/industries/institutional.jpg';

export default function ElectricalServices() {
  // SEO Metadata
  useEffect(() => {
    document.title = 'Electrical Services in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'RRABS delivers comprehensive electrical services for modern buildings in Madurai: Lighting systems, power distribution, and coordinated MEP solutions.');
    }
  }, []);

  // FAQ Accordion State (both open by default as shown in reference)
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
    <div className="electrical-services-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="elec-hero" aria-label="Electrical Services Hero">
        <div className="elec-hero-bg">
          <img 
            src={electricalSwitchgearImg} 
            alt="Modern industrial electrical power distribution switchgear panels" 
            className="elec-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="elec-hero-gradient"></div>
        </div>

        {/* Decorative Constellation Mesh on Left */}
        <svg className="elec-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="elec-hero-green-accent" aria-hidden="true"></div>

        <div className="elec-hero-container">
          <div className="elec-hero-content">
            {/* Breadcrumb */}
            <nav className="elec-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="elec-breadcrumb-sep">&gt;</span>
              <Link to="/services/">Services</Link>
              <span className="elec-breadcrumb-sep">&gt;</span>
              <span className="elec-breadcrumb-current">Electrical Services</span>
            </nav>

            <h1 className="elec-hero-heading">
              Electrical Services<br />
              in Madurai for<br />
              Modern Buildings
            </h1>

            <p className="elec-hero-paragraph">
              RRABS provides electrical building-system solutions focused on lighting and power distribution. Our approach considers how power is delivered and used across the facility, with attention to safe operation, practical system coordination and the requirements of the building.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LIGHTING SYSTEMS SECTION (Row 1)
          ======================================================== */}
      <section className="elec-lighting-section" aria-label="Lighting Systems">
        <div className="elec-two-col-container">
          {/* Left Column: Icon Badge, Heading and Paragraph */}
          <div className="elec-text-col">
            <div className="elec-feature-badge">
              <Lightbulb size={24} color="#079B36" />
            </div>

            <h2 className="elec-section-heading">Lighting Systems</h2>

            <p className="elec-paragraph">
              Lighting affects visibility, comfort, safety, usability and the character of a space. RRABS supports lighting requirements as part of the wider electrical system, considering the building use, functional zones and coordination with ceilings, interiors and other services.
            </p>
          </div>

          {/* Right Column: Architectural Modern Commercial Lighting Photo */}
          <div className="elec-media-box">
            <img 
              src={lightingSystemsImg} 
              alt="Modern commercial building architectural LED lighting systems" 
              className="elec-photo" 
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. POWER DISTRIBUTION SECTION (Row 2)
          ======================================================== */}
      <section className="elec-power-section" aria-label="Power Distribution">
        {/* Subtle Decorative Architectural Grid on Right */}
        <svg className="elec-blueprint-decor" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="260" y1="0" x2="260" y2="400" stroke="#0878BD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="220" y1="0" x2="220" y2="400" stroke="#0878BD" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="180" y1="50" x2="280" y2="50" stroke="#0878BD" strokeWidth="1" />
          <line x1="180" y1="150" x2="280" y2="150" stroke="#0878BD" strokeWidth="1" />
          <line x1="180" y1="250" x2="280" y2="250" stroke="#0878BD" strokeWidth="1" />
          <line x1="180" y1="350" x2="280" y2="350" stroke="#0878BD" strokeWidth="1" />
        </svg>

        <div className="elec-two-col-inverted">
          {/* Left Column: Industrial Switchgear Equipment Photo */}
          <div className="elec-media-box">
            <img 
              src={electricalSwitchgearImg} 
              alt="Industrial electrical power distribution switchgear panels and circuit breakers" 
              className="elec-photo" 
            />
          </div>

          {/* Right Column: Icon Badge, Heading and Paragraph */}
          <div className="elec-text-col">
            <span className="elec-eyebrow-line"></span>

            <div className="elec-feature-badge">
              <Zap size={24} color="#079B36" />
            </div>

            <h2 className="elec-section-heading">Power Distribution</h2>

            <p className="elec-paragraph">
              Power distribution is the backbone of a building's electrical infrastructure. The system must deliver electricity to the required areas and equipment in a controlled, reliable manner. RRABS plans and executes power-distribution work according to the approved project scope and actual load requirements provided or established for the project.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHERE ELECTRICAL SYSTEMS CONNECT SECTION
          ======================================================== */}
      <section className="elec-connect-section" aria-label="Where Electrical Systems Connect">
        <div className="elec-connect-container">
          {/* Left Column: Heading and Paragraph */}
          <div className="elec-connect-text-col">
            <span className="elec-eyebrow-line"></span>

            <h2 className="elec-section-heading">Where Electrical Systems Connect</h2>

            <p className="elec-paragraph">
              Electrical infrastructure interacts with HVAC equipment, pumps, fire-safety systems, IT infrastructure, ELV devices and BMS controls. Coordinating these interfaces early can reduce installation conflicts and support easier operation after handover.
            </p>
          </div>

          {/* Right Column: Connected Building Diagram */}
          <div className="elec-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="elec-side-nodes elec-left-nodes">
              <div className="elec-node-item elec-node-left">
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><Fan size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">HVAC Equipment</span>
                </div>
                <span className="elec-connector-line"></span>
              </div>
              <div className="elec-node-item elec-node-left">
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><Droplets size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">Pumps</span>
                </div>
                <span className="elec-connector-line"></span>
              </div>
              <div className="elec-node-item elec-node-left">
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><Server size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">IT Infrastructure</span>
                </div>
                <span className="elec-connector-line"></span>
              </div>
            </div>

            {/* Central Building Frame with Overlay Badge */}
            <div className="elec-center-frame">
              <img 
                src={centerBuildingImg} 
                alt="Modern building electrical systems hub" 
                className="elec-building-img" 
              />
              <div className="elec-center-badge">
                <Zap size={22} color="#079B36" />
                <span className="elec-center-badge-text">Electrical<br />Systems</span>
              </div>
            </div>

            {/* Right Connected Services */}
            <div className="elec-side-nodes elec-right-nodes">
              <div className="elec-node-item elec-node-right">
                <span className="elec-connector-line"></span>
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><ShieldCheck size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">Fire-safety Systems</span>
                </div>
              </div>
              <div className="elec-node-item elec-node-right">
                <span className="elec-connector-line"></span>
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><Video size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">ELV Devices</span>
                </div>
              </div>
              <div className="elec-node-item elec-node-right">
                <span className="elec-connector-line"></span>
                <div className="elec-node-card">
                  <span className="elec-node-card-icon"><Building2 size={18} color="#079B36" /></span>
                  <span className="elec-node-card-label">BMS Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. APPLICATIONS SECTION
          ======================================================== */}
      <section className="elec-applications-section" aria-label="Applications">
        <div className="elec-applications-container">
          <div className="elec-applications-header">
            <h2 className="elec-section-heading">Applications</h2>
          </div>

          <div className="elec-applications-grid">
            {applications.map((app) => (
              <Link key={app.title} to={app.route} className="elec-app-card">
                <div className="elec-app-media">
                  <img src={app.image} alt={app.title} className="elec-app-photo" />
                </div>
                <div className="elec-app-icon-wrap" aria-hidden="true">
                  {app.icon}
                </div>
                <div className="elec-app-body">
                  <span className="elec-app-title">{app.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="elec-faq-section" aria-label="Frequently Asked Questions">
        <div className="elec-faq-container">
          <div className="elec-faq-header">
            <h2 className="elec-section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="elec-faq-grid">
            {/* FAQ 1 */}
            <div className="elec-faq-card">
              <button 
                type="button" 
                className="elec-faq-top"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="elec-faq-question">What does building power distribution do?</span>
                <span className="elec-faq-toggle">
                  {openFaq1 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="elec-faq-answer">
                  <p>
                    A power-distribution system receives electrical power and distributes it through the building to lighting, equipment and other electrical loads. The design and configuration depend on the facility, connected loads and project requirements.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="elec-faq-card">
              <button 
                type="button" 
                className="elec-faq-top"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="elec-faq-question">Why should electrical work be coordinated with MEP and BMS?</span>
                <span className="elec-faq-toggle">
                  {openFaq2 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="elec-faq-answer">
                  <p>
                    Electrical power supports many mechanical, safety, IT and automation systems. Coordination helps ensure equipment receives the required supply and that routes, panels, controls and service interfaces are planned without unnecessary clashes.
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
      <section className="elec-cta-section" aria-label="Electrical Call to Action">
        <div className="elec-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="elec-cta-img" 
          />
          <div className="elec-cta-overlay"></div>
        </div>

        {/* Diagonal Green Accent Graphic */}
        <div className="elec-cta-green-accent" aria-hidden="true"></div>

        <div className="elec-cta-container">
          <div className="elec-cta-content">
            <h2 className="elec-cta-heading">
              Planning electrical works for a new or existing facility in Madurai? Discuss your lighting and power-distribution requirements with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="elec-cta-btn">
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
