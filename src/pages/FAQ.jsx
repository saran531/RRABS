import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Plus,
  Minus,
  GridIcon,
  MessageCircle,
  Zap,
  Snowflake,
  Droplets,
  ShieldFlameIcon,
  NetworkNodesIcon,
  SettingsIcon,
  FileTextIcon,
  CctvCamera,
  Building2,
  ChevronRight,
  ArrowRight,
  HelpCircleIcon
} from '../components/common/Icons.jsx';
import './FAQ.css';

// Project images
import bmsImg from '../assets/images/services/bms.jpg';
import ctaBuildingImg from '../assets/images/services/services-cta.jpg';
import scopeBuildingImg from '../assets/images/services/scope-building.jpg';

export default function FAQ() {
  // Page SEO metadata
  useEffect(() => {
    document.title = 'Frequently Asked Questions | RRABS Madurai';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Find answers to common questions about RRABS MEP, ELV, IT networking and BMS solutions for buildings in Madurai and across Tamil Nadu.'
      );
    }
  }, []);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 9 Categories matching reference
  const categories = [
    { label: 'All Questions', icon: <GridIcon size={16} /> },
    { label: 'General', icon: <MessageCircle size={16} /> },
    { label: 'Electrical', icon: <Zap size={16} /> },
    { label: 'HVAC', icon: <Snowflake size={16} /> },
    { label: 'Plumbing', icon: <Droplets size={16} /> },
    { label: 'Fire Safety', icon: <ShieldFlameIcon size={16} /> },
    { label: 'ELV & Networking', icon: <NetworkNodesIcon size={16} /> },
    { label: 'BMS', icon: <SettingsIcon size={16} /> },
    { label: 'Projects & Quotes', icon: <FileTextIcon size={16} /> },
  ];

  // 14 Exact Questions from Reference Image
  const faqList = [
    {
      id: '01',
      category: 'General',
      question: 'What services does RRABS provide?',
      answer:
        'RRABS provides comprehensive building-system services including Electrical, HVAC, Plumbing, Fire Alarm & Fire Fighting, ELV Systems, IT & Networking, and Building Management Systems (BMS). The exact combination of services is planned according to the building type and project requirements.',
    },
    {
      id: '02',
      category: 'General',
      question: 'Where is RRABS based?',
      answer:
        'RRABS is based in Madurai, Tamil Nadu, and supports building systems and MEP engineering projects across Madurai, Tamil Nadu, and surrounding regions.',
    },
    {
      id: '03',
      category: 'Electrical',
      question: 'What is included in RRABS electrical services?',
      answer:
        'RRABS electrical services include lighting systems, power distribution, panels, cabling, and coordinated electrical infrastructure planned safely alongside other MEP and automation services.',
    },
    {
      id: '04',
      category: 'HVAC',
      question: 'What HVAC services does RRABS provide?',
      answer:
        'RRABS provides comfort cooling, ventilation, ductwork coordination, and air distribution systems tailored to the building type, thermal load, and operational requirements.',
    },
    {
      id: '05',
      category: 'Plumbing',
      question: 'What plumbing services are available?',
      answer:
        'RRABS supports water supply, drainage, piping networks, and plumbing infrastructure planned for reliable water management and coordinated service routes.',
    },
    {
      id: '06',
      category: 'Fire Safety',
      question: 'Does RRABS provide fire alarm and fire fighting systems?',
      answer:
        'Yes. RRABS delivers fire detection and alarm systems alongside fire fighting and life safety solutions planned in compliance with safety standards.',
    },
    {
      id: '07',
      category: 'ELV & Networking',
      question: 'What ELV systems does RRABS provide?',
      answer:
        'RRABS provides CCTV surveillance, access control, communication networks, and supporting extra-low voltage infrastructure for secure, controlled facilities.',
    },
    {
      id: '08',
      category: 'ELV & Networking',
      question: 'What is the difference between ELV and IT networking?',
      answer:
        'ELV covers extra-low voltage building systems such as security and access control, while IT networking provides the data communication and network infrastructure connecting devices across the facility.',
    },
    {
      id: '09',
      category: 'BMS',
      question: 'Does RRABS provide BMS solutions?',
      answer:
        'Yes. RRABS implements Building Management Systems for centralized monitoring, automation, and supervisory control of connected building systems.',
    },
    {
      id: '10',
      category: 'BMS',
      question: 'What is a Building Management System?',
      answer:
        'A Building Management System (BMS) is a centralized computer-based platform used to monitor, control, and optimize building equipment such as HVAC, electrical, and life-safety systems.',
    },
    {
      id: '11',
      category: 'BMS',
      question: 'Can BMS integrate with HVAC and electrical systems?',
      answer:
        'Yes. Compatible HVAC chillers, air handlers, and electrical metering systems can be integrated into the BMS for real-time monitoring and coordinated control.',
    },
    {
      id: '12',
      category: 'General',
      question: 'What types of buildings can RRABS support?',
      answer:
        'RRABS supports residential, commercial, healthcare, hospitality, industrial, and institutional buildings with tailored MEP and low-voltage engineering packages.',
    },
    {
      id: '13',
      category: 'Projects & Quotes',
      question: 'How do I request a quote?',
      answer:
        'You can request a quote by sharing your drawings, equipment schedules, or project details through our website form, contacting us via email at info@rrabs.com, or calling +91 70108 09807.',
    },
    {
      id: '14',
      category: 'Projects & Quotes',
      question: 'What is the typical process after I share project details?',
      answer:
        'After receiving your project information, our engineering team reviews your requirements, clarifies the scope of work, prepares a detailed technical and commercial proposal, and coordinates execution milestones.',
    },
  ];

  // Filtered FAQ Items
  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Questions' || item.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Related Services links (9 items)
  const relatedServices = [
    { name: 'Electrical Services', route: '/electrical-services/', icon: <Zap size={18} color="#0866D8" /> },
    { name: 'HVAC Services', route: '/hvac-services/', icon: <Snowflake size={18} color="#0866D8" /> },
    { name: 'Plumbing Services', route: '/plumbing-services/', icon: <Droplets size={18} color="#0866D8" /> },
    { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/', icon: <ShieldFlameIcon size={18} color="#0866D8" /> },
    { name: 'ELV Systems', route: '/elv-systems/', icon: <CctvCamera size={18} color="#0866D8" /> },
    { name: 'IT & Networking', route: '/it-networking/', icon: <NetworkNodesIcon size={18} color="#0866D8" /> },
    { name: 'Building Management Systems', route: '/building-management-systems/', icon: <SettingsIcon size={18} color="#0866D8" /> },
    { name: 'MEP Services in Madurai', route: '/mep-services-madurai/', icon: <Building2 size={18} color="#0866D8" /> },
    { name: 'Request a Quote', route: '/request-a-quote/', icon: <FileTextIcon size={18} color="#0866D8" /> },
  ];

  return (
    <div className="faq-page">
      {/* =========================================================================
          1. HERO BANNER
          ========================================================================= */}
      <section className="faq-hero" aria-label="Frequently Asked Questions Hero">
        <div className="faq-hero-bg">
          <img
            src={bmsImg}
            alt="Commercial building engineering and automation systems"
            className="faq-hero-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="faq-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Stripe */}
        <div className="faq-hero-accent-slash" aria-hidden="true"></div>

        {/* Blue Architectural Wireframe Mesh */}
        <svg
          className="faq-hero-mesh"
          viewBox="0 0 520 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="20" y1="50" x2="500" y2="50" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="130" x2="500" y2="130" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="210" x2="500" y2="210" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="290" x2="500" y2="290" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="370" x2="500" y2="370" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="100" y1="20" x2="100" y2="400" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="220" y1="20" x2="220" y2="400" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="340" y1="20" x2="340" y2="400" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="460" y1="20" x2="460" y2="400" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="100" cy="130" r="4" fill="#38BDF8" />
          <circle cx="220" cy="210" r="4" fill="#38BDF8" />
          <circle cx="340" cy="130" r="4" fill="#38BDF8" />
          <circle cx="340" cy="290" r="4" fill="#38BDF8" />
          <path d="M100 130 L220 210 L340 130 L460 210" stroke="#00A94F" strokeWidth="1.5" />
          <path d="M100 290 L220 210 L340 290" stroke="#0866D8" strokeWidth="1.2" />
        </svg>

        <div className="faq-hero-container">
          {/* Left: Breadcrumb & Heading */}
          <div className="faq-hero-content">
            <nav className="faq-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="faq-breadcrumb-sep">&gt;</span>
              <span className="faq-breadcrumb-current">FAQ</span>
            </nav>

            <h1 className="faq-hero-heading">
              Frequently<br />Asked Questions
            </h1>
          </div>

          {/* Right: Information Card */}
          <div className="faq-hero-card">
            <div className="faq-hero-card-icon" aria-hidden="true">
              <HelpCircleIcon size={26} color="#00A94F" />
            </div>
            <h3 className="faq-hero-card-title">Have a Question?</h3>
            <span className="faq-hero-card-subtitle">We are here to help.</span>
            <p className="faq-hero-card-text">
              Find answers to common questions about our building system services.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FAQ CATEGORY FILTER BAR
          ========================================================================= */}
      <section className="faq-filters-section" aria-label="FAQ Categories">
        <div className="faq-filters-container">
          <div className="faq-filters-bar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.label}
                className={`faq-filter-btn ${selectedCategory === cat.label ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <span className="faq-filter-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN CONTENT: ACCORDION LIST + SIDEBAR
          ========================================================================= */}
      <section className="faq-main-section">
        <div className="faq-main-container">
          {/* LEFT COLUMN: SEARCH + NUMBERED ACCORDION LIST */}
          <div className="faq-left-col">
            {/* Search Box */}
            <div className="faq-search-box">
              <span className="faq-search-icon" aria-hidden="true">
                <Search size={18} color="#0866D8" />
              </span>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
              />
            </div>

            {/* Accordion List */}
            <div className="faq-accordion-list" role="region" aria-label="FAQ List">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`faq-card ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-card-header"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                      >
                        <div className="faq-card-left">
                          <span className="faq-num-badge">{item.id}</span>
                          <span className="faq-question-text">{item.question}</span>
                        </div>
                        <span className="faq-toggle-btn" aria-hidden="true">
                          {isOpen ? (
                            <Minus size={16} color="currentColor" />
                          ) : (
                            <Plus size={16} color="currentColor" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="faq-card-body">
                          <p className="faq-answer-text">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="faq-empty-state">
                  <p>No questions found matching your search. Try adjusting your query or category filter.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="faq-sidebar" aria-label="Sidebar">
            {/* 1. Related Services Panel */}
            <div className="faq-services-panel">
              <span className="faq-eyebrow-line" aria-hidden="true"></span>
              <h2 className="faq-services-title">Related Services</h2>

              <nav className="faq-services-list" aria-label="Related Services Navigation">
                {relatedServices.map((svc) => (
                  <Link key={svc.name} to={svc.route} className="faq-service-link">
                    <div className="faq-service-link-left">
                      <span className="faq-service-icon">{svc.icon}</span>
                      <span className="faq-service-name">{svc.name}</span>
                    </div>
                    <span className="faq-service-chevron" aria-hidden="true">
                      <ChevronRight size={16} color="#00A94F" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* 2. Building Systems Illustration */}
            <div className="faq-systems-illustration-card">
              {/* 4 Tags Above */}
              <div className="faq-tags-top">
                <div className="faq-micro-tag">
                  <Zap size={14} color="#00A94F" />
                  <span className="faq-micro-tag-label">Electrical</span>
                </div>
                <div className="faq-micro-tag">
                  <Snowflake size={14} color="#0866D8" />
                  <span className="faq-micro-tag-label">HVAC</span>
                </div>
                <div className="faq-micro-tag">
                  <Droplets size={14} color="#0866D8" />
                  <span className="faq-micro-tag-label">Plumbing</span>
                </div>
                <div className="faq-micro-tag">
                  <ShieldFlameIcon size={14} color="#E11D48" />
                  <span className="faq-micro-tag-label">Fire Safety</span>
                </div>
              </div>

              {/* Center Cutaway Building Illustration */}
              <div className="faq-illustration-img-wrapper">
                <img
                  src={scopeBuildingImg}
                  alt="Building systems cross-section showing electrical, HVAC, plumbing and fire safety"
                  className="faq-illustration-img"
                />
              </div>

              {/* 3 Tags Below */}
              <div className="faq-tags-bottom">
                <div className="faq-micro-tag">
                  <CctvCamera size={14} color="#0866D8" />
                  <span className="faq-micro-tag-label">ELV</span>
                  <span className="faq-micro-tag-sub">(CCTV &amp; Access Control)</span>
                </div>
                <div className="faq-micro-tag">
                  <NetworkNodesIcon size={14} color="#00A94F" />
                  <span className="faq-micro-tag-label">IT / Networking</span>
                  <span className="faq-micro-tag-sub">-</span>
                </div>
                <div className="faq-micro-tag">
                  <SettingsIcon size={14} color="#0866D8" />
                  <span className="faq-micro-tag-label">BMS</span>
                  <span className="faq-micro-tag-sub">(Building Automation)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================================
          4. BOTTOM CALL-TO-ACTION BANNER
          ========================================================================= */}
      <section className="faq-cta-banner" aria-label="Call to Action">
        <div className="faq-cta-bg">
          <img
            src={ctaBuildingImg}
            alt="Modern illuminated commercial building"
            className="faq-cta-img"
          />
          <div className="faq-cta-gradient"></div>
        </div>

        {/* Diagonal Green Accent Stripe */}
        <div className="faq-cta-green-slash" aria-hidden="true"></div>

        {/* Blueprint mesh */}
        <svg
          className="faq-cta-mesh"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="0" y1="40" x2="400" y2="40" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="100" x2="400" y2="100" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="160" x2="400" y2="160" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="80" cy="100" r="16" stroke="#00A94F" strokeWidth="1" />
          <circle cx="240" cy="100" r="24" stroke="#38BDF8" strokeWidth="1" />
        </svg>

        <div className="faq-cta-container">
          <div className="faq-cta-content">
            <h2 className="faq-cta-text">
              Need an MEP, ELV, networking or BMS partner in Madurai? Share your project details with RRABS.
            </h2>
            <Link to="/request-a-quote/" className="faq-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={16} color="#00A94F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
