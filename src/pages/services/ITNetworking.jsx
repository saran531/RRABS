import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Plus, 
  Minus,
  ServerRackIcon,
  NetworkNodesIcon,
  Building2,
  CctvCamera,
  Lock,
  SettingsIcon,
  CloudIcon,
  CableIcon,
  SwitchIcon,
  Wifi,
  MonitorIcon
} from '../../components/common/Icons.jsx';
import './ITNetworking.css';

// Project image assets
import itServerRoomImg from '../../assets/images/services/it-server-room.jpg';
import itNetworkingImg from '../../assets/images/services/it-networking.jpg';
import buildingDiagramImg from '../../assets/images/about/integrated-systems-building.jpg';
import structuredCablingImg from '../../assets/images/services/structured-cabling.jpg';
import networkSwitchesImg from '../../assets/images/services/network-switches.jpg';
import serverRacksImg from '../../assets/images/services/server-racks.jpg';
import wirelessApImg from '../../assets/images/services/wireless-access-point.jpg';
import controlRoomImg from '../../assets/images/services/control-room.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function ITNetworking() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'IT Infrastructure & Network Solutions in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS provides IT infrastructure and network solutions that support reliable connectivity across modern buildings in Madurai.'
      );
    }
  }, []);

  // FAQ Accordion State (both open by default matching screenshot)
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(true);

  return (
    <div className="it-networking-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="it-hero" aria-label="IT Infrastructure & Network Solutions Hero">
        <div className="it-hero-bg">
          <img 
            src={itServerRoomImg} 
            alt="Data center server racks, structured cabling and IT network infrastructure" 
            className="it-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="it-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Ribbon */}
        <div className="it-hero-accent-slash" aria-hidden="true"></div>

        {/* Constellation blueprint line-art overlay */}
        <svg className="it-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="it-hero-container">
          <div className="it-hero-content">
            {/* Breadcrumb */}
            <nav className="it-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="it-breadcrumb-sep">›</span>
              <Link to="/services/">Services</Link>
              <span className="it-breadcrumb-sep">›</span>
              <span className="it-breadcrumb-current">IT &amp; Networking</span>
            </nav>

            <h1 className="it-hero-heading">
              IT Infrastructure &amp;<br />
              Network Solutions<br />
              in Madurai
            </h1>

            <p className="it-hero-paragraph">
              RRABS provides IT infrastructure and network solutions that support reliable connectivity across modern buildings. Our scope is focused on the physical and network foundation required for users, devices and connected building systems to communicate effectively.
            </p>

            <div className="it-hero-actions">
              <Link to="/request-a-quote/" className="it-btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="it-btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. IT INFRASTRUCTURE SECTION
          ======================================================== */}
      <section className="it-two-col-section it-section-white" aria-label="IT Infrastructure">
        {/* Subtle technical line-art decoration */}
        <svg className="it-decor-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 0 V180 H120 V400" stroke="#0879D1" strokeWidth="1.2" />
          <path d="M50 0 V150 H150 V400" stroke="#24B9D6" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="4" fill="#0879D1" />
          <circle cx="150" cy="150" r="3" fill="#24B9D6" />
        </svg>

        <div className="it-two-col-container">
          {/* Left Column: Icon badge, heading, description, button */}
          <div className="it-text-col">
            <div className="it-feature-badge badge-tint">
              <ServerRackIcon size={26} color="#0879D1" />
            </div>

            <span className="it-eyebrow-line"></span>

            <h2 className="it-section-heading">IT Infrastructure</h2>

            <p className="it-paragraph">
              A building’s IT infrastructure provides the foundation for digital communication and connected operations. The required architecture depends on the number of users and devices, building layout, performance expectations and future expansion needs.
            </p>

            <Link to="/services/" className="it-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>

          {/* Right Column: Server room image with diagonal corner accents */}
          <div className="it-media-col">
            <div className="it-media-box">
              <img 
                src={itServerRoomImg} 
                alt="Modern data center server cabinets with clean cable layout" 
                className="it-photo" 
              />
              <div className="it-corner-accent-tl" aria-hidden="true"></div>
              <div className="it-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. NETWORK SOLUTIONS SECTION
          ======================================================== */}
      <section className="it-two-col-section it-section-pale it-reverse-order" aria-label="Network Solutions">
        {/* Subtle network node constellation line-art on right */}
        <svg className="it-decor-right" viewBox="0 0 240 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="180" cy="80" r="5" fill="#24B9D6" />
          <circle cx="80" cy="140" r="4" fill="#0879D1" />
          <circle cx="160" cy="220" r="6" fill="#24B9D6" />
          <circle cx="60" cy="300" r="4" fill="#08A63F" />
          <circle cx="190" cy="340" r="5" fill="#0879D1" />
          <line x1="180" y1="80" x2="80" y2="140" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="80" y1="140" x2="160" y2="220" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="220" x2="60" y2="300" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="220" x2="190" y2="340" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="it-two-col-container">
          {/* Left Column (in normal source, visually left due to it-reverse-order): Switches Image */}
          <div className="it-media-col">
            <div className="it-media-box">
              <img 
                src={itNetworkingImg} 
                alt="Close-up of enterprise network switches with blue Ethernet cabling" 
                className="it-photo" 
              />
              <div className="it-corner-accent-br" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right Column: Icon badge, heading, description, button */}
          <div className="it-text-col">
            <div className="it-feature-badge">
              <NetworkNodesIcon size={26} color="#0879D1" />
            </div>

            <span className="it-eyebrow-line"></span>

            <h2 className="it-section-heading">Network Solutions</h2>

            <p className="it-paragraph">
              Network solutions connect people, systems and devices. Planning should consider coverage, capacity, reliability, equipment locations and the interfaces between user networks and building technologies.
            </p>

            <Link to="/services/" className="it-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SMART & CONNECTED SPACES SECTION
          ======================================================== */}
      <section className="it-smart-spaces-section" aria-label="Smart & Connected Spaces">
        <div className="it-smart-spaces-container">
          {/* Left Column: Icon, heading, description, button */}
          <div className="it-text-col">
            <div className="it-feature-badge badge-tint">
              <Building2 size={26} color="#0879D1" />
            </div>

            <span className="it-eyebrow-line"></span>

            <h2 className="it-section-heading">Smart &amp; Connected Spaces</h2>

            <p className="it-paragraph">
              Modern facilities increasingly depend on connected devices and integrated systems. A well-planned network helps support CCTV, access control, automation and other IP-based services while also meeting the operational needs of the facility.
            </p>

            <Link to="/services/" className="it-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0879D1" />
            </Link>
          </div>

          {/* Right Column: Connected diagram surrounding modern building */}
          <div className="it-diagram-area">
            {/* Left Connected Cards: CCTV & Access Control */}
            <div className="it-diagram-col it-diagram-left">
              <div className="it-diagram-item it-item-left">
                <div className="it-system-card" id="card-cctv">
                  <span className="it-card-icon">
                    <CctvCamera size={22} color="#0879D1" />
                  </span>
                  <span className="it-card-label">CCTV</span>
                </div>
                <span className="it-connector-line"></span>
              </div>

              <div className="it-diagram-item it-item-left">
                <div className="it-system-card" id="card-access-control">
                  <span className="it-card-icon">
                    <Lock size={22} color="#0879D1" />
                  </span>
                  <span className="it-card-label">Access<br />Control</span>
                </div>
                <span className="it-connector-line"></span>
              </div>
            </div>

            {/* Central Building Visual */}
            <div className="it-center-building-wrapper">
              <img 
                src={buildingDiagramImg} 
                alt="Architectural modern connected commercial building" 
                className="it-center-building-img" 
              />
            </div>

            {/* Right Connected Cards: Automation & IP-based Services */}
            <div className="it-diagram-col it-diagram-right">
              <div className="it-diagram-item it-item-right">
                <span className="it-connector-line"></span>
                <div className="it-system-card" id="card-automation">
                  <span className="it-card-icon">
                    <SettingsIcon size={22} color="#0879D1" />
                  </span>
                  <span className="it-card-label">Automation</span>
                </div>
              </div>

              <div className="it-diagram-item it-item-right">
                <span className="it-connector-line"></span>
                <div className="it-system-card" id="card-ip-services">
                  <span className="it-card-icon">
                    <CloudIcon size={22} color="#0879D1" />
                  </span>
                  <span className="it-card-label">IP-based<br />Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. TYPICAL COMPONENTS SECTION
          ======================================================== */}
      <section className="it-components-section" aria-label="Typical Components">
        <div className="it-components-container">
          <h2 className="it-components-heading">Typical Components</h2>

          <div className="it-components-row">
            {/* Card 1: Structured Cabling */}
            <div className="it-comp-card">
              <div className="it-comp-img-wrapper">
                <img 
                  src={structuredCablingImg} 
                  alt="Close-up of blue structured network cables" 
                  className="it-comp-img" 
                />
              </div>
              <div className="it-comp-badge">
                <CableIcon size={18} color="#0879D1" />
              </div>
              <h3 className="it-comp-label">Structured Cabling</h3>
            </div>

            {/* Card 2: Network Switches */}
            <div className="it-comp-card">
              <div className="it-comp-img-wrapper">
                <img 
                  src={networkSwitchesImg} 
                  alt="Network switches with Ethernet cables connected to ports" 
                  className="it-comp-img" 
                />
              </div>
              <div className="it-comp-badge">
                <SwitchIcon size={18} color="#0879D1" />
              </div>
              <h3 className="it-comp-label">Network Switches</h3>
            </div>

            {/* Card 3: Server Racks */}
            <div className="it-comp-card">
              <div className="it-comp-img-wrapper">
                <img 
                  src={serverRacksImg} 
                  alt="Professional server racks in a data room" 
                  className="it-comp-img" 
                />
              </div>
              <div className="it-comp-badge">
                <ServerRackIcon size={18} color="#0879D1" />
              </div>
              <h3 className="it-comp-label">Server Racks</h3>
            </div>

            {/* Card 4: Wireless Access Points */}
            <div className="it-comp-card">
              <div className="it-comp-img-wrapper">
                <img 
                  src={wirelessApImg} 
                  alt="Ceiling-mounted wireless access point" 
                  className="it-comp-img" 
                />
              </div>
              <div className="it-comp-badge">
                <Wifi size={18} color="#0879D1" />
              </div>
              <h3 className="it-comp-label">Wireless Access Points</h3>
            </div>

            {/* Card 5: Network Monitoring */}
            <div className="it-comp-card">
              <div className="it-comp-img-wrapper">
                <img 
                  src={controlRoomImg} 
                  alt="Network operations and monitoring control room" 
                  className="it-comp-img" 
                />
              </div>
              <div className="it-comp-badge">
                <MonitorIcon size={18} color="#0879D1" />
              </div>
              <h3 className="it-comp-label">Network Monitoring</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="it-faq-section" aria-label="Frequently Asked Questions">
        <div className="it-faq-container">
          <h2 className="it-faq-heading">Frequently Asked Questions</h2>

          <div className="it-faq-grid">
            {/* FAQ 1 */}
            <div className="it-faq-card">
              <button 
                type="button"
                className="it-faq-header"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="it-faq-question">What is IT infrastructure in a building?</span>
                <span className="it-faq-toggle-icon">
                  {openFaq1 ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="it-faq-body">
                  <p className="it-faq-answer">
                    IT infrastructure is the combination of network hardware, connectivity and supporting physical infrastructure that allows computers, devices and systems to communicate. The exact design depends on the building and its users.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="it-faq-card">
              <button 
                type="button"
                className="it-faq-header"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="it-faq-question">How is networking related to BMS and ELV?</span>
                <span className="it-faq-toggle-icon">
                  {openFaq2 ? <Minus size={20} color="#08A63F" /> : <Plus size={20} color="#08A63F" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="it-faq-body">
                  <p className="it-faq-answer">
                    Many ELV and automation systems use network connectivity for communication, monitoring or management. Coordinating IT, ELV and BMS requirements can make connected-building systems easier to implement and manage.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="it-cta-banner" aria-label="Call to Action">
        <div className="it-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern commercial corporate facility building at twilight" 
            className="it-cta-img" 
          />
          <div className="it-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="it-cta-green-slash" aria-hidden="true"></div>
        <svg className="it-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="it-cta-container">
          <div className="it-cta-content">
            <h2 className="it-cta-text">
              Need a reliable network foundation for your building? Talk to RRABS about your IT infrastructure and connectivity requirements.
            </h2>

            <Link to="/request-a-quote/" className="it-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
