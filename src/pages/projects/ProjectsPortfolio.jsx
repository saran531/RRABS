import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  ScopeIcon, 
  ViewGridIcon, 
  ViewListIcon, 
  PlusIcon,
  HouseIcon,
  HospitalIcon,
  Building2,
  InstitutionalIcon,
  Zap,
  Snowflake,
  Droplets,
  ShieldFlameIcon,
  CctvCamera,
  NetworkNodesIcon,
  SettingsIcon
} from '../../components/common/Icons.jsx';
import './ProjectsPortfolio.css';

// Project image assets
import heroBuildingImg from '../../assets/images/services/bms-hvac-chillers.jpg';
import commercialImg from '../../assets/images/industries/commercial.jpg';
import hvacImg from '../../assets/images/about/who-we-are-hvac.jpg';
import fireImg from '../../assets/images/services/fire-fighting.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import residentialImg from '../../assets/images/industries/residential.jpg';
import healthcareImg from '../../assets/images/industries/healthcare.jpg';
import approachPlansImg from '../../assets/images/about/approach-plans-helmet.jpg';
import hospitalityImg from '../../assets/images/industries/hospitality.jpg';
import institutionalImg from '../../assets/images/industries/institutional.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function ProjectsPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Set SEO metadata
  useEffect(() => {
    document.title = 'Building Systems Projects & Engineering Portfolio | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore RRABS building systems projects across residential, commercial, healthcare, hospitality and institutional sectors with verified project scopes.'
      );
    }
  }, []);

  const categories = [
    'All Projects',
    'Residential',
    'Commercial',
    'Healthcare',
    'Hospitality',
    'Industrial',
    'Institutional'
  ];

  const serviceTiles = [
    { id: 'electrical', label: 'Electrical', icon: Zap },
    { id: 'hvac', label: 'HVAC', icon: Snowflake },
    { id: 'plumbing', label: 'Plumbing', icon: Droplets },
    { id: 'fire', label: 'Fire Safety', icon: ShieldFlameIcon },
    { id: 'elv', label: 'ELV', icon: CctvCamera },
    { id: 'it', label: 'IT / Networking', icon: NetworkNodesIcon },
    { id: 'bms', label: 'BMS', icon: SettingsIcon }
  ];

  const projects = [
    {
      id: 1,
      name: 'Gopuram Cinema / Residency',
      category: 'Residential',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: residentialImg,
      slug: 'gopuram-cinema-residency'
    },
    {
      id: 2,
      name: 'JJ Arul Hospital',
      category: 'Healthcare',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: healthcareImg,
      slug: 'jj-arul-hospital'
    },
    {
      id: 3,
      name: 'Marutham',
      category: 'Residential',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: approachPlansImg,
      slug: 'marutham'
    },
    {
      id: 4,
      name: 'Silver Stone Resort',
      category: 'Hospitality',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: hospitalityImg,
      slug: 'silver-stone-resort'
    },
    {
      id: 5,
      name: 'Sri Kamatchi Medical Centre',
      category: 'Healthcare',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: healthcareImg,
      slug: 'sri-kamatchi-medical-centre'
    },
    {
      id: 6,
      name: 'Peral City Engineering Builders',
      category: 'Commercial',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: commercialImg,
      slug: 'peral-city-engineering-builders'
    },
    {
      id: 7,
      name: 'D.A.S.P Smart Hall',
      category: 'Institutional',
      location: 'To be confirmed',
      scope: 'To be confirmed',
      image: institutionalImg,
      slug: 'dasp-smart-hall'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Residential':
        return <HouseIcon size={13} color="#0B9F45" />;
      case 'Healthcare':
        return <HospitalIcon size={13} color="#0B9F45" />;
      case 'Commercial':
        return <Building2 size={13} color="#0B9F45" />;
      case 'Hospitality':
        return <Building2 size={13} color="#0B9F45" />;
      case 'Institutional':
        return <InstitutionalIcon size={13} color="#0B9F45" />;
      default:
        return <Building2 size={13} color="#0B9F45" />;
    }
  };

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-portfolio-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="port-hero" aria-label="Our Building Systems Projects Hero">
        <div className="port-hero-bg">
          <img 
            src={heroBuildingImg} 
            alt="Completed modern facility projects and integrated building systems" 
            className="port-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="port-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Stripe */}
        <div className="port-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint mesh overlay */}
        <svg className="port-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="port-hero-container">
          <div className="port-hero-content">
            <h1 className="port-hero-heading">
              Our Building<br />
              Systems Projects
            </h1>

            <p className="port-hero-paragraph">
              Projects are where engineering claims become real. This section should show approved RRABS work with factual information about the building, location, sector, systems delivered and project scope.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PROJECTS PORTFOLIO INTRODUCTION SECTION
          ======================================================== */}
      <section className="port-intro-section" aria-label="Projects Portfolio Introduction">
        <div className="port-intro-container">
          {/* Left Column: Heading, description, and 7 service tiles */}
          <div className="port-intro-left">
            <span className="port-eyebrow-line"></span>

            <h2 className="port-intro-heading">
              Projects Portfolio
            </h2>

            <p className="port-intro-paragraph">
              Each project reflects our approach to delivering coordinated building systems based on the client’s requirements and the approved project scope.
            </p>

            <div className="port-services-tiles">
              {serviceTiles.map((tile) => {
                const IconComponent = tile.icon;
                return (
                  <div key={tile.id} className="port-service-tile">
                    <span className="port-tile-icon">
                      <IconComponent size={20} color="#0879D1" />
                    </span>
                    <span className="port-tile-label">{tile.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4 angled image panels */}
          <div className="port-collage-container" aria-label="Building systems visual collage">
            <div className="port-collage-panel">
              <img 
                src={commercialImg} 
                alt="Commercial office glass building exterior" 
                className="port-collage-img" 
              />
            </div>
            <div className="port-collage-panel">
              <img 
                src={hvacImg} 
                alt="Ceiling HVAC ventilation unit and ducting" 
                className="port-collage-img" 
              />
            </div>
            <div className="port-collage-panel">
              <img 
                src={fireImg} 
                alt="Fire protection sprinkler piping systems" 
                className="port-collage-img" 
              />
            </div>
            <div className="port-collage-panel">
              <img 
                src={electricalImg} 
                alt="Electrical distribution switchgear and control panels" 
                className="port-collage-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR PROJECTS SECTION
          ======================================================== */}
      <section className="port-projects-section" aria-label="Our Projects Directory">
        <div className="port-projects-container">
          {/* Top Bar: Heading & View Controls */}
          <div className="port-projects-topbar">
            <h2 className="port-projects-heading">Our Projects</h2>

            <div className="port-view-controls">
              <button 
                type="button"
                className={`port-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <ViewGridIcon size={18} color="currentColor" />
              </button>
              <button 
                type="button"
                className={`port-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <ViewListIcon size={18} color="currentColor" />
              </button>
            </div>
          </div>

          {/* Category Filter Buttons Row */}
          <div className="port-filters-bar" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`port-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards (Grid or List View) */}
          <div className={viewMode === 'grid' ? 'port-cards-grid' : 'port-cards-list'}>
            {filteredProjects.map((project) => (
              <article key={project.id} className="port-card">
                <div className="port-card-media">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="port-card-img" 
                  />
                  <span className="port-category-badge">
                    <span className="port-badge-icon">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span>{project.category}</span>
                  </span>
                </div>

                <div className="port-card-body">
                  <h3 className="port-card-title">{project.name}</h3>

                  <div className="port-card-meta">
                    <div className="port-meta-row">
                      <span className="port-meta-icon">
                        <MapPin size={14} color="#1769AA" />
                      </span>
                      <span className="port-meta-label">Location</span>
                      <span className="port-meta-value">{project.location}</span>
                    </div>

                    <div className="port-meta-row">
                      <span className="port-meta-icon">
                        <ScopeIcon size={14} color="#1769AA" />
                      </span>
                      <span className="port-meta-label">RRABS Scope</span>
                      <span className="port-meta-value">{project.scope}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/projects/${project.slug}`} 
                    className="port-card-link"
                    aria-label={`View Project details for ${project.name}`}
                  >
                    <span>View Project</span>
                    <ArrowRight size={13} color="currentColor" />
                  </Link>
                </div>
              </article>
            ))}

            {/* Card 8 - Placeholder */}
            <div className="port-card-placeholder">
              <div className="port-plus-circle" aria-hidden="true">
                <PlusIcon size={24} color="#FFFFFF" />
              </div>

              <h3 className="port-placeholder-title">More Projects Coming Soon</h3>

              <p className="port-placeholder-text">
                New project details will be added once they are confirmed and approved for publication.
              </p>

              {/* Decorative Blueprint Mesh Line-art */}
              <svg className="port-placeholder-blueprint" viewBox="0 0 300 100" fill="none" preserveAspectRatio="none">
                <path d="M0 80 Q75 40 150 70 T300 50" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M0 90 Q75 60 150 85 T300 70" stroke="#1769AA" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="port-cta-banner" aria-label="Call to Action">
        <div className="port-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern corporate building facility architecture" 
            className="port-cta-img" 
          />
          <div className="port-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="port-cta-green-slash" aria-hidden="true"></div>
        <svg className="port-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="port-cta-container">
          <div className="port-cta-content">
            <h2 className="port-cta-text">
              Planning a project in this sector? Share the location, building type and required systems with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="port-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#0B9F45" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
