import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  ScopeIcon, 
  Zap, 
  Snowflake, 
  Droplets, 
  ShieldFlameIcon, 
  CctvCamera, 
  NetworkNodesIcon, 
  SettingsIcon,
  Building2
} from '../components/common/Icons.jsx';
import './Insights.css';

// Project image assets
import insightsHeroImg from '../assets/images/about/who-we-are-hvac.jpg';
import approachPlansImg from '../assets/images/about/approach-plans-helmet.jpg';
import electricalImg from '../assets/images/services/electrical.jpg';
import hvacImg from '../assets/images/about/who-we-are-hvac.jpg';
import plumbingImg from '../assets/images/services/plumbing.jpg';
import fireImg from '../assets/images/services/fire-fighting.jpg';
import elvImg from '../assets/images/services/elv.jpg';
import networkImg from '../assets/images/services/network-switches.jpg';
import bmsImg from '../assets/images/services/bms-monitoring-workstation.jpg';
import commercialAtriumImg from '../assets/images/industries/commercial.jpg';
import integratedSystemsImg from '../assets/images/about/integrated-systems-building.jpg';
import maduraiSkylineImg from '../assets/images/about/madurai-skyline.jpg';
import ctaBuildingImg from '../assets/images/services/services-cta.jpg';

export default function Insights() {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  // Set SEO metadata
  useEffect(() => {
    document.title = 'Building Systems Insights & Engineering Knowledge | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical information for owners, architects, builders, facility teams and project stakeholders planning modern building systems.'
      );
    }
  }, []);

  const filterTopics = [
    'All Topics',
    'MEP Planning',
    'Electrical',
    'HVAC',
    'Plumbing',
    'Fire Safety',
    'ELV Systems',
    'IT Networking',
    'BMS'
  ];

  const articles = [
    {
      id: 1,
      category: 'MEP Planning',
      title: 'How to Plan MEP Services Before Construction Starts',
      image: approachPlansImg,
      link: '/insights/'
    },
    {
      id: 2,
      category: 'Electrical',
      title: 'Electrical Power Distribution: What Building Owners Should Understand',
      image: electricalImg,
      link: '/electrical-services/'
    },
    {
      id: 3,
      category: 'HVAC',
      title: 'Comfort Cooling vs Ventilation: What Is the Difference?',
      image: hvacImg,
      link: '/hvac-services/'
    },
    {
      id: 4,
      category: 'Plumbing',
      title: 'Water Supply and Drainage Planning for Commercial Buildings',
      image: plumbingImg,
      link: '/plumbing-services/'
    },
    {
      id: 5,
      category: 'Fire Safety',
      title: 'Fire Alarm vs Fire Fighting Systems: Understanding Their Roles',
      image: fireImg,
      link: '/fire-alarm-fire-fighting/'
    },
    {
      id: 6,
      category: 'ELV Systems',
      title: 'What Is an ELV System? CCTV, Access Control and Connectivity Explained',
      image: elvImg,
      link: '/elv-systems/'
    },
    {
      id: 7,
      category: 'IT Networking',
      title: 'ELV vs IT Networking: Where Each Fits in a Modern Building',
      image: networkImg,
      link: '/it-networking/'
    },
    {
      id: 8,
      category: 'BMS',
      title: 'What Is a Building Management System (BMS)?',
      image: bmsImg,
      link: '/building-management-systems/'
    },
    {
      id: 9,
      category: 'BMS',
      title: 'How BMS Supports Smarter Building Operations',
      image: commercialAtriumImg,
      link: '/building-management-systems/'
    },
    {
      id: 10,
      category: 'Integrated Systems',
      title: 'Why MEP, ELV, IT and BMS Coordination Matters',
      image: integratedSystemsImg,
      link: '/about/'
    },
    {
      id: 11,
      category: 'Local Insights',
      title: 'MEP Services in Madurai: What to Check Before Selecting a Contractor',
      image: maduraiSkylineImg,
      link: '/mep-services-madurai/'
    },
    {
      id: 12,
      category: 'Commercial Projects',
      title: 'Building Systems Checklist for Commercial Projects',
      image: approachPlansImg,
      link: '/industries/commercial/'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'MEP Planning':
        return <ScopeIcon size={12} color="#0B9F45" />;
      case 'Electrical':
        return <Zap size={12} color="#0B9F45" />;
      case 'HVAC':
        return <Snowflake size={12} color="#0879D1" />;
      case 'Plumbing':
        return <Droplets size={12} color="#0879D1" />;
      case 'Fire Safety':
        return <ShieldFlameIcon size={12} color="#0B9F45" />;
      case 'ELV Systems':
        return <CctvCamera size={12} color="#0B9F45" />;
      case 'IT Networking':
        return <NetworkNodesIcon size={12} color="#0B9F45" />;
      case 'BMS':
        return <SettingsIcon size={12} color="#0B9F45" />;
      case 'Integrated Systems':
        return <Building2 size={12} color="#0B9F45" />;
      case 'Local Insights':
        return <MapPin size={12} color="#0B9F45" />;
      case 'Commercial Projects':
        return <Building2 size={12} color="#0B9F45" />;
      default:
        return <Building2 size={12} color="#0B9F45" />;
    }
  };

  const filteredArticles = selectedTopic === 'All Topics'
    ? articles
    : articles.filter((article) => article.category === selectedTopic);

  return (
    <div className="insights-page">
      {/* ========================================================
          1. HERO BANNER
          ======================================================== */}
      <section className="insights-hero" aria-label="Building Systems Insights Hero">
        <div className="insights-hero-bg">
          <img 
            src={insightsHeroImg} 
            alt="Contemporary architecture with engineering and building systems context" 
            className="insights-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="insights-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Stripe */}
        <div className="insights-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint mesh overlay */}
        <svg className="insights-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="insights-hero-container">
          <div className="insights-hero-content">
            {/* Breadcrumb */}
            <nav className="insights-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="insights-breadcrumb-sep">›</span>
              <span className="insights-breadcrumb-current">Insights</span>
            </nav>

            <h1 className="insights-hero-heading">
              Building Systems<br />
              Insights
            </h1>

            <p className="insights-hero-paragraph">
              Practical information for owners, architects, builders, facility teams and project stakeholders planning modern building systems.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ARTICLE CATEGORY FILTER BAR
          ======================================================== */}
      <section className="insights-filters-section" aria-label="Article Categories">
        <div className="insights-filters-container">
          <div className="insights-filters-bar" role="tablist" aria-label="Filter insights by topic">
            {filterTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`insights-filter-btn ${selectedTopic === topic ? 'active' : ''}`}
                onClick={() => setSelectedTopic(topic)}
                role="tab"
                aria-selected={selectedTopic === topic}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INSIGHTS ARTICLE GRID
          ======================================================== */}
      <section className="insights-grid-section" aria-label="Insights Articles">
        <div className="insights-grid-container">
          <div className="insights-articles-grid">
            {filteredArticles.map((article) => (
              <Link 
                key={article.id} 
                to={article.link} 
                className="insights-card"
                aria-label={article.title}
              >
                <div className="insights-card-media">
                  <img 
                    src={article.image} 
                    alt="" 
                    className="insights-card-img" 
                  />
                  <span className="insights-category-badge">
                    <span className="insights-badge-icon">
                      {getCategoryIcon(article.category)}
                    </span>
                    <span>{article.category}</span>
                  </span>
                </div>

                <div className="insights-card-body">
                  <h3 className="insights-card-title">{article.title}</h3>

                  <div className="insights-card-footer">
                    <span className="insights-arrow-btn" aria-hidden="true">
                      <ArrowRight size={13} color="currentColor" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="insights-cta-banner" aria-label="Call to Action">
        <div className="insights-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Commercial architectural facility building at dusk" 
            className="insights-cta-img" 
          />
          <div className="insights-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="insights-cta-green-slash" aria-hidden="true"></div>
        <svg className="insights-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="insights-cta-container">
          <div className="insights-cta-content">
            <h2 className="insights-cta-text">
              Need an MEP, ELV, networking or BMS partner in Madurai? Share your project details with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="insights-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#0B9F45" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
