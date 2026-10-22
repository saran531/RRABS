import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Zap,
  Snowflake,
  Droplets,
  ShieldFlameIcon,
  CctvCamera,
  NetworkNodesIcon,
  SettingsIcon,
  MonitorIcon,
  ViewGridIcon,
  Plus,
  Minus
} from '../components/common/Icons.jsx';
import './MEPServicesMadurai.css';

// Project image assets
import heroBuildingImg from '../assets/images/about/hero-building.jpg';
import ctaBuildingImg from '../assets/images/about/cta-building.jpg';
import maduraiSkylineImg from '../assets/images/about/madurai-skyline.jpg';
import electricalImg from '../assets/images/services/electrical.jpg';
import hvacImg from '../assets/images/about/who-we-are-hvac.jpg';
import plumbingImg from '../assets/images/services/plumbing.jpg';
import fireFightingImg from '../assets/images/services/fire-fighting.jpg';
import elvImg from '../assets/images/services/elv.jpg';
import itNetworkingImg from '../assets/images/services/structured-cabling.jpg';
import bmsImg from '../assets/images/services/control-room.jpg';

export default function MEPServicesMadurai() {
  // Set SEO page metadata
  useEffect(() => {
    document.title = 'Integrated MEP & Building Systems Services in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS is a Madurai-based provider of integrated building-system solutions covering Electrical, HVAC, Plumbing and Fire Alarm & Fire Fighting, supported by ELV, IT & Networking and BMS.'
      );
    }
  }, []);

  // FAQ Accordion State (open by default to match screenshot)
  const [openFaqs, setOpenFaqs] = useState({
    1: true,
    2: true,
    3: true
  });

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const servicesData = [
    {
      id: 1,
      title: 'Electrical',
      description: 'lighting and power distribution.',
      icon: Zap,
      iconColor: '#00A85A',
      image: electricalImg,
      link: '/electrical-services/'
    },
    {
      id: 2,
      title: 'HVAC',
      description: 'comfort cooling and ventilation.',
      icon: Snowflake,
      iconColor: '#0066E8',
      image: hvacImg,
      link: '/hvac-services/'
    },
    {
      id: 3,
      title: 'Plumbing',
      description: 'water supply and drainage.',
      icon: Droplets,
      iconColor: '#0066E8',
      image: plumbingImg,
      link: '/plumbing-services/'
    },
    {
      id: 4,
      title: 'Fire',
      description: 'alarm and firefighting.',
      icon: ShieldFlameIcon,
      iconColor: '#0066E8',
      image: fireFightingImg,
      link: '/fire-alarm-fire-fighting/'
    },
    {
      id: 5,
      title: 'ELV',
      description: 'CCTV and access control.',
      icon: CctvCamera,
      iconColor: '#0066E8',
      image: elvImg,
      link: '/elv-systems/'
    },
    {
      id: 6,
      title: 'IT/Networking',
      description: 'infrastructure and network solutions.',
      icon: NetworkNodesIcon,
      iconColor: '#0066E8',
      image: itNetworkingImg,
      link: '/it-networking/'
    },
    {
      id: 7,
      title: 'BMS',
      description: 'automation, monitoring and control.',
      icon: MonitorIcon,
      iconColor: '#0066E8',
      image: bmsImg,
      link: '/building-management-systems/'
    }
  ];

  return (
    <div className="mep-madurai-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="mep-hero" aria-label="MEP Services in Madurai Hero Banner">
        <div className="mep-hero-bg">
          <div className="mep-hero-images-wrap">
            <img
              src={heroBuildingImg}
              alt="Modern architectural commercial building illuminated"
              className="mep-hero-bldg-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <img
              src={maduraiSkylineImg}
              alt="Madurai skyline and temple towers context"
              className="mep-hero-temple-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="mep-hero-gradient"></div>
        </div>

        {/* Diagonal green accent stripe */}
        <div className="mep-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg
          className="mep-hero-mesh"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path
            d="M60 120 L180 80 L280 160 L140 240 L60 120 Z"
            stroke="#24B9D6"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <path
            d="M140 240 L260 320 L80 380 L140 240 Z"
            stroke="#24B9D6"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line x1="280" y1="160" x2="380" y2="120" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="260" y1="320" x2="420" y2="280" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>

        <div className="mep-hero-container">
          <div className="mep-hero-content">
            {/* Breadcrumb */}
            <nav className="mep-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="mep-breadcrumb-sep">&gt;</span>
              <span className="mep-breadcrumb-current">MEP Services in Madurai</span>
            </nav>

            <h1 className="mep-hero-heading">
              Integrated MEP &amp;<br />
              Building Systems<br />
              Services in Madurai
            </h1>

            <p className="mep-hero-paragraph">
              RRABS is a Madurai-based provider of integrated building-system solutions covering Electrical, HVAC, Plumbing and Fire Alarm &amp; Fire Fighting, supported by ELV, IT &amp; Networking and Building Management Systems. We work with project teams to coordinate the systems required for modern residential, commercial and institutional facilities.
            </p>

            <div className="mep-hero-actions">
              <Link to="/request-a-quote/" className="mep-btn-primary">
                <MapPin size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="mep-btn-secondary">
                <ViewGridIcon size={16} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LOCAL CAPABILITY SECTION
          ======================================================== */}
      <section className="mep-capability-section" aria-label="Local Capability">
        {/* Subtle architectural wireframe background on left */}
        <svg
          className="mep-capability-mesh"
          viewBox="0 0 280 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M20 180 L20 40 L60 20 L100 40 L100 180" stroke="#0066E8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M60 20 L60 180" stroke="#0066E8" strokeWidth="0.8" strokeDasharray="2 2" />
          <path d="M120 180 L120 80 L160 60 L200 80 L200 180" stroke="#0066E8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M160 60 L160 180" stroke="#0066E8" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>

        <div className="mep-capability-container">
          <div className="mep-capability-card">
            {/* Left Location Icon inside light-blue outlined square */}
            <div className="mep-capability-icon-box">
              <MapPin size={28} color="#00A85A" />
            </div>

            {/* Center Heading & Paragraph */}
            <div className="mep-capability-text-wrap">
              <h2 className="mep-capability-heading">Local Capability</h2>
              <p className="mep-capability-paragraph">
                Being based in Madurai gives RRABS a practical local point of contact for project discussions, site coordination and building-system requirements in the region. The exact service area and project availability should be confirmed with the team before commitment.
              </p>
            </div>

            {/* Right Wide Photograph of Madurai Temple Skyline */}
            <div className="mep-capability-image-wrap">
              <img
                src={maduraiSkylineImg}
                alt="Madurai temple skyline at sunset"
                className="mep-capability-image"
              />
              <div className="mep-capability-image-accent" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHAT WE PROVIDE IN MADURAI
          ======================================================== */}
      <section className="mep-services-section" aria-label="What We Provide in Madurai">
        <div className="mep-services-container">
          <div className="mep-services-header">
            <h2 className="mep-services-title">What We Provide in Madurai</h2>
            <p className="mep-services-intro">
              Electrical: lighting and power distribution. HVAC: comfort cooling and ventilation. Plumbing: water supply and drainage. Fire: alarm and firefighting. ELV: CCTV and access control. IT/Networking: infrastructure and network solutions. BMS: automation, monitoring and control.
            </p>
          </div>

          <div className="mep-services-grid">
            {/* Row 1: 4 Cards across */}
            <div className="mep-services-row-top">
              {servicesData.slice(0, 4).map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="mep-service-card"
                    aria-label={`View ${service.title} services`}
                  >
                    <div className="mep-card-top">
                      <div className="mep-card-icon-badge">
                        <IconComponent size={22} color={service.iconColor} />
                      </div>
                      <div className="mep-card-thumb-wrap">
                        <img
                          src={service.image}
                          alt={`${service.title} system equipment`}
                          className="mep-card-thumb"
                        />
                      </div>
                    </div>

                    <div className="mep-card-body">
                      <h3 className="mep-card-title">{service.title}</h3>
                      <p className="mep-card-desc">{service.description}</p>
                    </div>

                    <div className="mep-card-footer">
                      <span className="mep-card-arrow-circle">
                        <ArrowRight size={14} color="currentColor" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Row 2: 3 Cards across */}
            <div className="mep-services-row-bottom">
              {servicesData.slice(4, 7).map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="mep-service-card"
                    aria-label={`View ${service.title} services`}
                  >
                    <div className="mep-card-top">
                      <div className="mep-card-icon-badge">
                        <IconComponent size={22} color={service.iconColor} />
                      </div>
                      <div className="mep-card-thumb-wrap">
                        <img
                          src={service.image}
                          alt={`${service.title} system equipment`}
                          className="mep-card-thumb"
                        />
                      </div>
                    </div>

                    <div className="mep-card-body">
                      <h3 className="mep-card-title">{service.title}</h3>
                      <p className="mep-card-desc">{service.description}</p>
                    </div>

                    <div className="mep-card-footer">
                      <span className="mep-card-arrow-circle">
                        <ArrowRight size={14} color="currentColor" />
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
          4. WHY INTEGRATED BUILDING SYSTEMS MATTER
          ======================================================== */}
      <section className="mep-integrated-section" aria-label="Why Integrated Building Systems Matter">
        {/* Subtle wireframe background */}
        <svg
          className="mep-integrated-mesh"
          viewBox="0 0 320 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="40" cy="60" r="2.5" fill="#38BDF8" />
          <circle cx="120" cy="30" r="2.5" fill="#38BDF8" />
          <circle cx="180" cy="80" r="2.5" fill="#38BDF8" />
          <circle cx="90" cy="140" r="2.5" fill="#38BDF8" />
          <circle cx="190" cy="190" r="2.5" fill="#38BDF8" />
          <path d="M40 60 L120 30 L180 80 L90 140 Z" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M180 80 L190 190 L90 140" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>

        <div className="mep-integrated-container">
          <div className="mep-integrated-grid">
            {/* Left Content */}
            <div className="mep-integrated-text-col">
              <h2 className="mep-integrated-heading">
                Why Integrated<br />
                Building Systems Matter
              </h2>
              <p className="mep-integrated-paragraph">
                Using separate vendors without coordination can create clashes between routes, equipment, controls and service requirements. An integrated approach helps project stakeholders consider interfaces earlier and creates clearer responsibility across connected systems.
              </p>
            </div>

            {/* Right Connected Systems Diagram */}
            <div className="mep-diagram-wrapper">
              {/* Connector lines SVG */}
              <svg className="mep-diagram-svg-overlay" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left connectors */}
                <path d="M140 45 L200 45 L240 100" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M140 105 L220 105 L240 120" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M140 165 L220 165 L240 160" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M140 225 L200 225 L240 180" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Right connectors */}
                <path d="M460 65 L400 65 L360 100" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M460 145 L390 145 L360 140" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M460 225 L400 225 L360 180" stroke="#0066E8" strokeWidth="1.2" strokeDasharray="3 3" />
              </svg>

              {/* Left-side System Labels */}
              <div className="mep-diagram-col-left">
                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <Zap size={18} color="#00A85A" />
                  </span>
                  <span>Electrical</span>
                </div>

                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <Snowflake size={18} color="#0066E8" />
                  </span>
                  <span>HVAC</span>
                </div>

                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <Droplets size={18} color="#0066E8" />
                  </span>
                  <span>Plumbing</span>
                </div>

                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <ShieldFlameIcon size={18} color="#0066E8" />
                  </span>
                  <span>Fire</span>
                </div>
              </div>

              {/* Center Building Visual */}
              <div className="mep-diagram-center-img-wrap">
                <img
                  src={heroBuildingImg}
                  alt="Integrated building systems model with modern architecture"
                  className="mep-diagram-center-img"
                />
              </div>

              {/* Right-side System Labels */}
              <div className="mep-diagram-col-right">
                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <CctvCamera size={18} color="#0066E8" />
                  </span>
                  <div>
                    <span>ELV</span>
                    <span className="mep-tag-label-sub">(CCTV &amp; Access Control)</span>
                  </div>
                </div>

                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <NetworkNodesIcon size={18} color="#0066E8" />
                  </span>
                  <span>IT / Networking</span>
                </div>

                <div className="mep-diagram-tag">
                  <span className="mep-tag-icon">
                    <SettingsIcon size={18} color="#0066E8" />
                  </span>
                  <div>
                    <span>BMS</span>
                    <span className="mep-tag-label-sub">(Building Automation)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FAQS SECTION
          ======================================================== */}
      <section className="mep-faqs-section" aria-label="Frequently Asked Questions">
        <div className="mep-faqs-container">
          <h2 className="mep-faqs-heading">FAQs</h2>

          <div className="mep-faqs-list">
            {/* FAQ 1 */}
            <div
              className="mep-faq-card"
              onClick={() => toggleFaq(1)}
              role="button"
              tabIndex={0}
              aria-expanded={openFaqs[1]}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleFaq(1);
                }
              }}
            >
              <div className="mep-faq-row">
                <div className="mep-faq-left">
                  <span className="mep-faq-badge">1</span>
                  <div className="mep-faq-content">
                    <h3 className="mep-faq-question">What MEP services does RRABS provide in Madurai?</h3>
                    {openFaqs[1] && (
                      <p className="mep-faq-answer">
                        RRABS provides Electrical, HVAC, Plumbing and Fire Alarm &amp; Fire Fighting services, with additional ELV, IT/Networking and BMS capabilities for projects that need security, connectivity or automation.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mep-faq-btn" aria-hidden="true">
                  {openFaqs[1] ? <Minus size={14} color="#0066E8" /> : <Plus size={14} color="#0066E8" />}
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              className="mep-faq-card"
              onClick={() => toggleFaq(2)}
              role="button"
              tabIndex={0}
              aria-expanded={openFaqs[2]}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleFaq(2);
                }
              }}
            >
              <div className="mep-faq-row">
                <div className="mep-faq-left">
                  <span className="mep-faq-badge">2</span>
                  <div className="mep-faq-content">
                    <h3 className="mep-faq-question">Does RRABS handle commercial building systems?</h3>
                    {openFaqs[2] && (
                      <p className="mep-faq-answer">
                        RRABS supports commercial building-system requirements. The exact services, project scale and scope should be confirmed directly based on the building and project stage.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mep-faq-btn" aria-hidden="true">
                  {openFaqs[2] ? <Minus size={14} color="#0066E8" /> : <Plus size={14} color="#0066E8" />}
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div
              className="mep-faq-card"
              onClick={() => toggleFaq(3)}
              role="button"
              tabIndex={0}
              aria-expanded={openFaqs[3]}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleFaq(3);
                }
              }}
            >
              <div className="mep-faq-row">
                <div className="mep-faq-left">
                  <span className="mep-faq-badge">3</span>
                  <div className="mep-faq-content">
                    <h3 className="mep-faq-question">Where is RRABS located?</h3>
                    {openFaqs[3] && (
                      <p className="mep-faq-answer">
                        RRABS is located in Mahaboopalayam, Madurai, Tamil Nadu. The current public business address is No. 61/1B, Travelers Bunglow Road / Bharathidasan Salai area, near Nook Hotel, Madurai 625016. The final website should use the exact client-approved postal format consistently.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mep-faq-btn" aria-hidden="true">
                  {openFaqs[3] ? <Minus size={14} color="#0066E8" /> : <Plus size={14} color="#0066E8" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CTA BANNER
          ======================================================== */}
      <section className="mep-cta-banner" aria-label="Project Consultation Call to Action">
        <div className="mep-cta-bg">
          <img
            src={ctaBuildingImg}
            alt="Modern commercial facility illuminated at twilight"
            className="mep-cta-img"
          />
          <div className="mep-cta-gradient"></div>
        </div>

        {/* Diagonal green slash */}
        <div className="mep-cta-green-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg
          className="mep-cta-mesh"
          viewBox="0 0 440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="40" cy="70" r="2.5" fill="#24B9D6" />
          <circle cx="130" cy="40" r="2.5" fill="#24B9D6" />
          <circle cx="210" cy="100" r="2.5" fill="#24B9D6" />
          <circle cx="100" cy="170" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="220" r="2.5" fill="#24B9D6" />
          <path
            d="M40 70 L130 40 L210 100 L100 170 L40 70 Z"
            stroke="#24B9D6"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <path
            d="M100 170 L200 220"
            stroke="#24B9D6"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>

        <div className="mep-cta-container">
          <div className="mep-cta-content">
            <h2 className="mep-cta-title">
              Need an MEP, ELV, networking or BMS partner in Madurai?<br />
              Share your project details with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="mep-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={16} color="#00A85A" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
