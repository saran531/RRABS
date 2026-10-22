import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  Fan, 
  Droplets, 
  ShieldCheck, 
  Video, 
  Network, 
  Building2, 
  ArrowRight, 
  MessageCircle, 
  GridIcon, 
  Plus, 
  Minus,
  HubIcon,
  SettingsIcon,
  LayersIcon,
  MapPin
} from '../components/common/Icons.jsx';
import './Home.css';

// Project local image assets matching target reference
import heroBuildingImg from '../assets/images/about/hero-building.jpg';
import introHvacImg from '../assets/images/about/who-we-are-hvac.jpg';
import electricalImg from '../assets/images/services/electrical.jpg';
import hvacImg from '../assets/images/services/hvac.jpg';
import plumbingImg from '../assets/images/services/plumbing.jpg';
import fireFightingImg from '../assets/images/services/fire-fighting.jpg';
import elvImg from '../assets/images/services/elv.jpg';
import itNetworkingImg from '../assets/images/services/structured-cabling.jpg';
import bmsImg from '../assets/images/services/control-room.jpg';
import integratedBuildingImg from '../assets/images/about/integrated-systems-building.jpg';
import residentialImg from '../assets/images/industries/residential.jpg';
import commercialImg from '../assets/images/industries/commercial.jpg';
import healthcareImg from '../assets/images/industries/healthcare.jpg';
import hospitalityImg from '../assets/images/industries/hospitality.jpg';
import industrialImg from '../assets/images/industries/industrial.jpg';
import institutionalImg from '../assets/images/industries/institutional.jpg';
import ctaBuildingImg from '../assets/images/about/cta-building.jpg';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const location = useLocation();
  const [replayKey, setReplayKey] = useState(0);

  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    intro: false,
    services: false,
    approach: false,
    sectors: false,
    whyHow: false,
    faqCta: false,
  });

  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const approachRef = useRef(null);
  const sectorsRef = useRef(null);
  const whyHowRef = useRef(null);
  const faqCtaRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Replay animation and smooth-scroll to top when Home link or Logo is clicked while already on Home
  useEffect(() => {
    const handleHomeClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href === '/' || href === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setReplayKey((prev) => prev + 1);
        }
      }
    };
    window.addEventListener('click', handleHomeClick);
    return () => window.removeEventListener('click', handleHomeClick);
  }, []);

  // IntersectionObserver for scroll-triggered entrance animations
  useEffect(() => {
    const observers = [];
    const entriesToObserve = [
      { key: 'intro', ref: introRef },
      { key: 'services', ref: servicesRef },
      { key: 'approach', ref: approachRef },
      { key: 'sectors', ref: sectorsRef },
      { key: 'whyHow', ref: whyHowRef },
      { key: 'faqCta', ref: faqCtaRef },
    ];

    entriesToObserve.forEach(({ key, ref }) => {
      if (ref.current) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => ({ ...prev, [key]: true }));
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        obs.observe(ref.current);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [location.key, replayKey]);

  // 7 Core Services Data with verified matching local assets
  const services = [
    {
      id: 'electrical',
      title: 'Electrical',
      description: 'Lighting and power distribution solutions for dependable day-to-day building operation.',
      route: '/electrical-services/',
      icon: <Zap size={22} color="#079B36" />,
      image: electricalImg,
    },
    {
      id: 'hvac',
      title: 'HVAC',
      description: 'Comfort cooling and ventilation solutions designed around indoor comfort, airflow and operational requirements.',
      route: '/hvac-services/',
      icon: <Fan size={22} color="#079B36" />,
      image: hvacImg,
    },
    {
      id: 'plumbing',
      title: 'Plumbing',
      description: 'Water supply and drainage systems planned for reliable flow and effective building operation.',
      route: '/plumbing-services/',
      icon: <Droplets size={22} color="#079B36" />,
      image: plumbingImg,
    },
    {
      id: 'fire-fighting',
      title: 'Fire Alarm & Fire Fighting',
      description: 'Detection and fire-protection systems focused on life safety and protection of property.',
      route: '/fire-alarm-fire-fighting/',
      icon: <ShieldCheck size={22} color="#079B36" />,
      image: fireFightingImg,
    },
    {
      id: 'elv',
      title: 'ELV Systems',
      description: 'CCTV, access control and supporting low-voltage infrastructure for safer, more controlled facilities.',
      route: '/elv-systems/',
      icon: <Video size={22} color="#079B36" />,
      image: elvImg,
    },
    {
      id: 'it-networking',
      title: 'IT & Networking',
      description: 'IT infrastructure and network solutions that support reliable communication and connected spaces.',
      route: '/it-networking/',
      icon: <Network size={22} color="#079B36" />,
      image: itNetworkingImg,
    },
    {
      id: 'bms',
      title: 'Building Management Systems',
      description: 'Building automation, monitoring and control solutions that improve visibility across connected building services.',
      route: '/building-management-systems/',
      icon: <Building2 size={22} color="#079B36" />,
      image: bmsImg,
    },
  ];

  // 6 Sectors We Support Data with verified matching local assets
  const sectors = [
    {
      name: 'Residential',
      route: '/industries/residential/',
      image: residentialImg,
    },
    {
      name: 'Commercial Buildings',
      route: '/industries/commercial/',
      image: commercialImg,
    },
    {
      name: 'Healthcare',
      route: '/industries/healthcare/',
      image: healthcareImg,
    },
    {
      name: 'Hospitality',
      route: '/industries/hospitality/',
      image: hospitalityImg,
    },
    {
      name: 'Industrial',
      route: '/industries/industrial/',
      image: industrialImg,
    },
    {
      name: 'Institutional',
      route: '/industries/institutional/',
      image: institutionalImg,
    },
  ];

  // 5 Why RRABS statements
  const whyRRABS = [
    {
      icon: <HubIcon size={24} color="#0878BD" />,
      text: 'One point of coordination across multiple building systems',
    },
    {
      icon: <SettingsIcon size={24} color="#0878BD" />,
      text: 'Solutions planned around project requirements, building use and future operation',
    },
    {
      icon: <ShieldCheck size={24} color="#0878BD" />,
      text: 'Focus on safety, reliability, maintainability and efficient system performance',
    },
    {
      icon: <LayersIcon size={24} color="#0878BD" />,
      text: 'Integration between conventional MEP services, ELV, IT infrastructure and building automation',
    },
    {
      icon: <MapPin size={24} color="#0878BD" />,
      text: 'Local project support from Madurai',
      link: '/mep-services-madurai/',
    },
  ];

  // 5 How We Work steps
  const howWeWork = [
    {
      step: '01',
      text: 'Understand the project, building type, scope and operational requirements.',
    },
    {
      step: '02',
      text: 'Plan the relevant systems and coordinate interfaces between services.',
    },
    {
      step: '03',
      text: 'Execute the approved scope with attention to installation quality and site coordination.',
    },
    {
      step: '04',
      text: 'Test and verify system operation according to the confirmed project scope.',
    },
    {
      step: '05',
      text: 'Support handover with clear project communication and documentation where included.',
    },
  ];

  // 3 FAQs Data
  const faqs = [
    {
      question: 'What services does RRABS provide?',
      answer: 'RRABS provides Electrical, HVAC, Plumbing, Fire Alarm & Fire Fighting, ELV, IT & Networking and Building Management System solutions. The exact combination of services can be planned according to the building type and project requirement.',
    },
    {
      question: 'Does RRABS provide integrated MEP solutions in Madurai?',
      answer: (
        <>
          Yes. RRABS is based in Madurai and supports building-system requirements across core{' '}
          <Link to="/mep-services-madurai/" style={{ color: 'inherit', textDecoration: 'underline' }}>
            MEP services
          </Link>{' '}
          together with ELV, networking and BMS capabilities. Project availability and scope should be confirmed directly with the RRABS team.
        </>
      ),
    },
    {
      question: 'Can RRABS work on smart and connected building systems?',
      answer: 'RRABS includes IT infrastructure, network solutions, ELV systems and BMS within its service portfolio, allowing connected-building requirements to be considered alongside core building services.',
    },
  ];

  return (
    <div className="home-page" key={`${location.key}-${replayKey}`}>
      {/* SECTION 1: HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-bg-media">
          <img 
            src={heroBuildingImg} 
            alt="Modern illuminated commercial architectural building with integrated MEP systems" 
            className="hero-image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-gradient-overlay" aria-hidden="true"></div>
        <div className="hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg
          className="hero-mesh"
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
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="280" y1="160" x2="380" y2="120" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="260" y1="320" x2="420" y2="280" stroke="#24B9D6" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              INTEGRATED BUILDING SYSTEMS FOR A <span className="highlight-green">SMARTER TOMORROW</span>
            </span>

            <h1 className="hero-heading">
              Integrated MEP, ELV, IT &amp; Building Automation Solutions in Madurai
            </h1>

            <p className="hero-paragraph">
              From essential building services to smart monitoring and connected infrastructure, RR Advanced Building Systems brings Electrical, HVAC, Plumbing, Fire Safety, ELV, IT &amp; Networking and BMS solutions together under one coordinated approach.
            </p>

            <div className="hero-actions">
              <Link to="/contact/" className="btn-hero-primary">
                <MessageCircle size={18} color="#FFFFFF" />
                <span>Discuss Your Project</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="btn-hero-secondary">
                <GridIcon size={18} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="intro-section" ref={introRef}>
        <svg
          className="intro-mesh"
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

        <div className="intro-container">
          {/* Left Column: Text & Button */}
          <div className={`intro-text-col anim-left ${visibleSections.intro ? 'is-visible' : ''}`}>
            <h2 className="section-title">
              Building Systems That Work Together
            </h2>
            <p className="intro-paragraph">
              A modern building depends on more than individual systems. Power, cooling, water, safety, security, connectivity and automation must work reliably together. RRABS supports residential, commercial, healthcare, hospitality, industrial and institutional projects with building-system solutions planned around the needs of each facility.
            </p>
            <div className="intro-btn-wrapper">
              <Link to="/about/" className="btn-outline-pill">
                <span>Learn More About RRABS</span>
                <span className="btn-circle-arrow">
                  <ArrowRight size={14} color="#079B36" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Mechanical Photo & Core Services List */}
          <div className={`intro-visual-col anim-right ${visibleSections.intro ? 'is-visible' : ''}`}>
            <div className="intro-image-wrapper">
              <img 
                src={introHvacImg} 
                alt="Modern commercial building HVAC ceiling unit, exposed ductwork and mechanical infrastructure" 
                className="intro-photo"
              />
            </div>
            <div className="intro-services-sidebar">
              <ul className="sidebar-service-list">
                <li>
                  <span className="sidebar-icon"><Zap size={16} color="#079B36" /></span>
                  <span>Electrical</span>
                </li>
                <li>
                  <span className="sidebar-icon"><Fan size={16} color="#079B36" /></span>
                  <span>HVAC</span>
                </li>
                <li>
                  <span className="sidebar-icon"><Droplets size={16} color="#079B36" /></span>
                  <span>Plumbing</span>
                </li>
                <li>
                  <span className="sidebar-icon"><ShieldCheck size={16} color="#079B36" /></span>
                  <span>Fire Alarm &amp; Fire Fighting</span>
                </li>
                <li>
                  <span className="sidebar-icon"><Video size={16} color="#079B36" /></span>
                  <span>ELV Systems</span>
                </li>
                <li>
                  <span className="sidebar-icon"><Network size={16} color="#079B36" /></span>
                  <span>IT &amp; Networking</span>
                </li>
                <li>
                  <span className="sidebar-icon"><Building2 size={16} color="#079B36" /></span>
                  <span>Building Management Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR CORE SERVICES */}
      <section className="services-section" ref={servicesRef}>
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Our Core Services</h2>
          </div>

          <div className={`services-grid ${visibleSections.services ? 'is-visible' : ''}`}>
            {services.map((svc, idx) => {
              const animClass =
                idx < 3
                  ? `service-card-left card-idx-${idx}`
                  : idx === 3
                    ? 'service-card-stationary card-idx-3'
                    : `service-card-right card-idx-${idx}`;

              return (
                <div key={svc.id} className={`service-card ${animClass}`}>
                  <div className="service-card-top">
                    <span className="service-card-icon">{svc.icon}</span>
                    <h3 className="service-card-title">{svc.title}</h3>
                  </div>

                  <div className="service-card-thumb">
                    <img src={svc.image} alt={svc.title} className="service-thumb-img" />
                  </div>

                  <div className="service-card-body">
                    <p className="service-card-desc">{svc.description}</p>
                    <Link to={svc.route} className="service-card-arrow" aria-label={`View ${svc.title}`}>
                      <ArrowRight size={14} color="#079B36" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATED APPROACH */}
      <section className="approach-section" ref={approachRef}>
        <svg
          className="approach-mesh"
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

        <div className="approach-container">
          <div className={`approach-text-col anim-left ${visibleSections.approach ? 'is-visible' : ''}`}>
            <h2 className="section-title">Integrated Approach</h2>
            <p className="approach-paragraph">
              Instead of treating every building service as an isolated package, RRABS focuses on coordination. This helps reduce clashes between systems, improves maintainability and creates a clearer path from planning and installation to testing and handover.
            </p>
            <Link to="/services/" className="btn-outline-pill">
              <span>Explore Our Approach</span>
              <span className="btn-circle-arrow">
                <ArrowRight size={14} color="#079B36" />
              </span>
            </Link>
          </div>

          <div className={`approach-visual-col anim-right ${visibleSections.approach ? 'is-visible' : ''}`}>
            <div className="approach-interactive-diagram">
              {/* Left Connected Nodes */}
              <div className="nodes-column left-nodes">
                <div className="node-item">
                  <span className="node-label">Electrical</span>
                  <span className="node-circle"><Zap size={18} color="#079B36" /></span>
                  <div className="node-line right-line"></div>
                </div>
                <div className="node-item">
                  <span className="node-label">HVAC</span>
                  <span className="node-circle"><Fan size={18} color="#079B36" /></span>
                  <div className="node-line right-line"></div>
                </div>
                <div className="node-item">
                  <span className="node-label">Plumbing</span>
                  <span className="node-circle"><Droplets size={18} color="#079B36" /></span>
                  <div className="node-line right-line"></div>
                </div>
              </div>

              {/* Central Building Graphic */}
              <div className="central-building-frame">
                <img 
                  src={integratedBuildingImg} 
                  alt="Modern commercial architectural building" 
                  className="central-building-img"
                />
                <div className="building-pulse-indicator"></div>
              </div>

              {/* Right Connected Nodes */}
              <div className="nodes-column right-nodes">
                <div className="node-item">
                  <div className="node-line left-line"></div>
                  <span className="node-circle"><ShieldCheck size={18} color="#0878BD" /></span>
                  <span className="node-label">Fire Alarm &amp; Fire Fighting</span>
                </div>
                <div className="node-item">
                  <div className="node-line left-line"></div>
                  <span className="node-circle"><Video size={18} color="#0878BD" /></span>
                  <span className="node-label">ELV Systems</span>
                </div>
                <div className="node-item">
                  <div className="node-line left-line"></div>
                  <span className="node-circle"><Network size={18} color="#0878BD" /></span>
                  <span className="node-label">IT &amp; Networking</span>
                </div>
                <div className="node-item">
                  <div className="node-line left-line"></div>
                  <span className="node-circle"><Building2 size={18} color="#0878BD" /></span>
                  <span className="node-label">Building Management Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECTORS WE SUPPORT */}
      <section className="sectors-section" ref={sectorsRef}>
        <div className="sectors-container">
          <div className="sectors-header">
            <h2 className="section-title">Sectors We Support</h2>
            <p className="sectors-paragraph">
              Our solutions can be planned for residential developments, commercial buildings, hospitals and healthcare facilities, hotels and hospitality properties, industrial facilities and institutional buildings. Sector pages and project case studies should use only client-approved experience.
            </p>
          </div>

          <div className={`sectors-grid ${visibleSections.sectors ? 'is-visible' : ''}`}>
            {sectors.map((sector, idx) => {
              const animClass = idx % 2 === 0 
                ? `sector-card-left sector-idx-${idx}` 
                : `sector-card-right sector-idx-${idx}`;

              return (
                <Link key={sector.name} to={sector.route} className={`sector-card ${animClass}`}>
                  <div className="sector-image-box">
                    <img src={sector.image} alt={sector.name} className="sector-img" />
                  </div>
                  <div className="sector-info-bar">
                    <span className="sector-name">{sector.name}</span>
                    <span className="sector-circle-arrow">
                      <ArrowRight size={13} color="#079B36" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: WHY RRABS & HOW WE WORK */}
      <section className="why-and-how-section" ref={whyHowRef}>
        <div className="why-and-how-container">
          {/* Left Box: Why RRABS */}
          <div className={`why-box anim-left ${visibleSections.whyHow ? 'is-visible' : ''}`}>
            <h2 className="section-title">Why RRABS</h2>
            <div className="why-items-grid">
              {whyRRABS.map((item, idx) => (
                item.link ? (
                  <Link key={idx} to={item.link} className="why-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="why-item-icon">{item.icon}</div>
                    <p className="why-item-text">{item.text}</p>
                  </Link>
                ) : (
                  <div key={idx} className="why-item">
                    <div className="why-item-icon">{item.icon}</div>
                    <p className="why-item-text">{item.text}</p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right Box: How We Work */}
          <div className={`how-box anim-right ${visibleSections.whyHow ? 'is-visible' : ''}`}>
            <h2 className="section-title">How We Work</h2>
            <div className="how-timeline">
              {howWeWork.map((step, idx) => (
                <div key={step.step} className="how-step-item">
                  <div className="how-step-header">
                    <span className="how-step-circle">{step.step}</span>
                    {idx < howWeWork.length - 1 && <span className="how-step-connector"></span>}
                  </div>
                  <p className="how-step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: FAQS & FINAL CTA BANNER */}
      <section className="faq-and-cta-section" ref={faqCtaRef}>
        <div className="faq-and-cta-container">
          {/* Left Column: FAQs Accordion */}
          <div className={`faq-column anim-left ${visibleSections.faqCta ? 'is-visible' : ''}`}>
            <h2 className="section-title">FAQs</h2>
            <div className="faq-accordion-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                    <button 
                      type="button" 
                      className="faq-question-btn"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Final CTA Banner */}
          <div className={`final-cta-column anim-right ${visibleSections.faqCta ? 'is-visible' : ''}`}>
            <div className="final-cta-card">
              <div className="final-cta-content">
                <h3 className="final-cta-heading">
                  Planning a new building, upgrade or system package?
                </h3>
                <p className="final-cta-desc">
                  Tell us what your project needs and our team will help you identify the right building-system scope.
                </p>
                <Link to="/request-a-quote/" className="final-cta-btn">
                  <span>Request a Project Consultation</span>
                  <ArrowRight size={16} color="#079B36" />
                </Link>
              </div>
              <div className="final-cta-image-side">
                <img 
                  src={ctaBuildingImg} 
                  alt="Illuminated commercial building facade" 
                  className="final-cta-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
