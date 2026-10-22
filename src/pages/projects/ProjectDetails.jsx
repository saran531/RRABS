import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  MapPin, 
  ScopeIcon, 
  Check, 
  HouseIcon, 
  HospitalIcon, 
  Building2, 
  InstitutionalIcon,
  MessageCircle,
  LayersIcon
} from '../../components/common/Icons.jsx';
import { projectsData, getProjectBySlug } from './projectsData.js';
import './ProjectDetails.css';

// Local asset for CTA
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Set SEO metadata and scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.name} | Building Systems Project | RRABS`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `${project.name} (${project.category}) - ${project.heroSubtitle} RRABS building systems and MEP engineering.`
        );
      }
    } else {
      document.title = 'Project Not Found | RRABS';
    }
  }, [slug, project]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Residential':
        return <HouseIcon size={14} color="#0B9F45" />;
      case 'Healthcare':
        return <HospitalIcon size={14} color="#0B9F45" />;
      case 'Commercial':
        return <Building2 size={14} color="#0B9F45" />;
      case 'Hospitality':
        return <Building2 size={14} color="#0B9F45" />;
      case 'Institutional':
        return <InstitutionalIcon size={14} color="#0B9F45" />;
      default:
        return <Building2 size={14} color="#0B9F45" />;
    }
  };

  // If project not found, render fallback state
  if (!project) {
    return (
      <div className="project-not-found-page">
        <div className="pnf-container">
          <div className="pnf-icon-box" aria-hidden="true">
            <ScopeIcon size={40} color="#0878BD" />
          </div>
          <h1 className="pnf-heading">Project Not Found</h1>
          <p className="pnf-text">
            The project you are looking for does not exist or may have been updated.
            Please return to our projects portfolio to view all approved building systems projects.
          </p>
          <div className="pnf-actions">
            <Link to="/projects/" className="pnf-btn-back">
              <ArrowLeft size={16} color="#FFFFFF" />
              <span>Back to Projects Portfolio</span>
            </Link>
            <Link to="/contact/" className="pnf-btn-contact">
              <span>Contact RRABS</span>
              <ArrowRight size={15} color="#0878BD" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Find previous and next projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="project-details-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="pdt-hero" aria-label="Project Details Hero">
        <div className="pdt-hero-bg">
          <img 
            src={project.image} 
            alt={project.name} 
            className="pdt-hero-img" 
            loading="eager"
            fetchPriority="high"
          />
          <div className="pdt-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent Line */}
        <div className="pdt-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art overlay */}
        <svg className="pdt-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="pdt-hero-container">
          <div className="pdt-hero-content">
            {/* Breadcrumb */}
            <nav className="pdt-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="pdt-breadcrumb-sep">&gt;</span>
              <Link to="/projects/">Projects</Link>
              <span className="pdt-breadcrumb-sep">&gt;</span>
              <span className="pdt-breadcrumb-current">{project.name}</span>
            </nav>

            {/* Category Badge */}
            <div className="pdt-category-badge">
              <span className="pdt-badge-icon">
                {getCategoryIcon(project.category)}
              </span>
              <span>{project.category} Sector</span>
            </div>

            <h1 className="pdt-hero-title">{project.name}</h1>

            <p className="pdt-hero-subtitle">{project.heroSubtitle}</p>

            {/* Key Meta Badges */}
            <div className="pdt-meta-bar">
              <div className="pdt-meta-item">
                <span className="pdt-meta-icon"><MapPin size={16} color="#24B9D6" /></span>
                <div className="pdt-meta-col">
                  <span className="pdt-meta-sub">Location</span>
                  <span className="pdt-meta-val">{project.location}</span>
                </div>
              </div>

              <div className="pdt-meta-item">
                <span className="pdt-meta-icon"><ScopeIcon size={16} color="#24B9D6" /></span>
                <div className="pdt-meta-col">
                  <span className="pdt-meta-sub">RRABS Scope</span>
                  <span className="pdt-meta-val">{project.scope}</span>
                </div>
              </div>

              <div className="pdt-meta-item">
                <span className="pdt-meta-icon"><Check size={16} color="#0B9F45" /></span>
                <div className="pdt-meta-col">
                  <span className="pdt-meta-sub">Engineering Status</span>
                  <span className="pdt-meta-val">Verified Scope</span>
                </div>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="pdt-hero-actions">
              <Link to="/request-a-quote/" className="pdt-btn-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote for this Sector</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/projects/" className="pdt-btn-portfolio">
                <ArrowLeft size={16} color="#FFFFFF" />
                <span>Back to All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PROJECT OVERVIEW & OBJECTIVES SECTION
          ======================================================== */}
      <section className="pdt-overview-section" aria-label="Project Overview & Engineering Objectives">
        <div className="pdt-container">
          <div className="pdt-overview-grid">
            {/* Left: Overview & Background */}
            <div className="pdt-overview-left">
              <div className="pdt-section-eyebrow">
                <span className="pdt-eyebrow-line"></span>
                <span>Project Scope &amp; Facility Overview</span>
              </div>

              <h2 className="pdt-section-heading">Facility Overview</h2>
              <p className="pdt-body-text">{project.overview}</p>

              <h3 className="pdt-sub-heading">Engineering Background</h3>
              <p className="pdt-body-text">{project.background}</p>
            </div>

            {/* Right: Key Engineering Objectives Box */}
            <div className="pdt-objectives-box">
              <div className="pdt-objectives-header">
                <span className="pdt-obj-header-icon">
                  <LayersIcon size={22} color="#0878BD" />
                </span>
                <h3 className="pdt-objectives-title">Key Engineering Objectives</h3>
              </div>

              <ul className="pdt-objectives-list">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="pdt-objective-item">
                    <span className="pdt-obj-check" aria-hidden="true">
                      <Check size={14} color="#0B9F45" />
                    </span>
                    <span className="pdt-obj-text">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. RELEVANT BUILDING SYSTEMS INVOLVED
          ======================================================== */}
      <section className="pdt-systems-section" aria-label="Building Systems Involved">
        <div className="pdt-container">
          <div className="pdt-section-header-center">
            <span className="pdt-eyebrow-centered">Engineered Infrastructure</span>
            <h2 className="pdt-section-heading centered">Building Systems &amp; Services Involved</h2>
            <p className="pdt-section-desc">
              Coordinated MEP packages integrated within this facility to meet operational demands and life safety standards.
            </p>
          </div>

          <div className="pdt-systems-grid">
            {project.systems.map((sys) => (
              <div key={sys.id} className="pdt-system-card">
                <div className="pdt-system-media">
                  <img src={sys.image} alt={sys.name} className="pdt-system-img" />
                </div>
                <div className="pdt-system-body">
                  <h3 className="pdt-system-name">{sys.name}</h3>
                  <p className="pdt-system-summary">{sys.summary}</p>
                  <Link to={sys.route} className="pdt-system-link">
                    <span>Explore Service Details</span>
                    <ArrowRight size={13} color="currentColor" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SCOPE OF WORK & TECHNICAL FEATURES
          ======================================================== */}
      <section className="pdt-scope-section" aria-label="Scope of Work & Technical Features">
        <div className="pdt-container">
          <div className="pdt-scope-card">
            <div className="pdt-scope-header">
              <span className="pdt-scope-badge">
                <ScopeIcon size={18} color="#0878BD" />
              </span>
              <div>
                <h2 className="pdt-scope-title">Project-Specific Scope &amp; Deliverables</h2>
                <p className="pdt-scope-subtitle">
                  Technical execution scopes managed under RRABS building engineering standards.
                </p>
              </div>
            </div>

            <div className="pdt-scope-grid">
              {project.scopeDetails.map((item, idx) => (
                <div key={idx} className="pdt-scope-item">
                  <div className="pdt-scope-num">0{idx + 1}</div>
                  <p className="pdt-scope-desc">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PROJECT VISUAL GALLERY
          ======================================================== */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pdt-gallery-section" aria-label="Project Visual Gallery">
          <div className="pdt-container">
            <div className="pdt-section-header-center">
              <span className="pdt-eyebrow-centered">Visual Documentation</span>
              <h2 className="pdt-section-heading centered">Project Facility &amp; Systems Imagery</h2>
              <p className="pdt-section-desc">
                Documented facility views and coordinated systems installations related to this project.
              </p>
            </div>

            <div className="pdt-gallery-grid">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="pdt-gallery-card">
                  <div className="pdt-gallery-media">
                    <img src={item.image} alt={item.caption} className="pdt-gallery-img" />
                  </div>
                  <p className="pdt-gallery-caption">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          6. RELATED SERVICES & INDUSTRIES
          ======================================================== */}
      <section className="pdt-related-section" aria-label="Related Services and Industries">
        <div className="pdt-container">
          <div className="pdt-related-row">
            {/* Related Industries */}
            <div className="pdt-related-block">
              <h3 className="pdt-related-title">Related Industry Sectors</h3>
              <div className="pdt-tags-list">
                {project.relatedIndustries.map((ind, idx) => (
                  <Link key={idx} to={ind.route} className="pdt-tag-pill">
                    <span>{ind.name}</span>
                    <ArrowRight size={12} color="currentColor" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="pdt-related-block">
              <h3 className="pdt-related-title">Related Building Services</h3>
              <div className="pdt-tags-list">
                {project.relatedServices.map((srv, idx) => (
                  <Link key={idx} to={srv.route} className="pdt-tag-pill pdt-tag-service">
                    <span>{srv.name}</span>
                    <ArrowRight size={12} color="currentColor" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PREVIOUS / NEXT PROJECT NAVIGATION
          ======================================================== */}
      <nav className="pdt-nav-bar" aria-label="Other Projects Navigation">
        <div className="pdt-container pdt-nav-container">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="pdt-nav-card prev">
              <ArrowLeft size={16} color="#0878BD" />
              <div className="pdt-nav-text">
                <span className="pdt-nav-label">Previous Project</span>
                <span className="pdt-nav-title">{prevProject.name}</span>
              </div>
            </Link>
          ) : (
            <div className="pdt-nav-placeholder"></div>
          )}

          <Link to="/projects/" className="pdt-nav-portfolio-center">
            <span>View All Projects</span>
          </Link>

          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className="pdt-nav-card next">
              <div className="pdt-nav-text text-right">
                <span className="pdt-nav-label">Next Project</span>
                <span className="pdt-nav-title">{nextProject.name}</span>
              </div>
              <ArrowRight size={16} color="#0878BD" />
            </Link>
          ) : (
            <div className="pdt-nav-placeholder"></div>
          )}
        </div>
      </nav>

      {/* ========================================================
          8. CALL TO ACTION BANNER
          ======================================================== */}
      <section className="pdt-cta-banner" aria-label="Call to Action">
        <div className="pdt-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern engineered facility architecture" 
            className="pdt-cta-img" 
          />
          <div className="pdt-cta-gradient"></div>
        </div>

        <div className="pdt-cta-green-slash" aria-hidden="true"></div>

        <div className="pdt-cta-container">
          <div className="pdt-cta-content">
            <h2 className="pdt-cta-text">
              Planning a building project in the {project.category.toLowerCase()} sector?
              Share your location, building type and required systems with RRABS.
            </h2>

            <div className="pdt-cta-buttons">
              <Link to="/request-a-quote/" className="pdt-btn-cta-quote">
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#0B9F45" />
              </Link>
              <Link to="/contact/" className="pdt-btn-cta-contact">
                <span>Contact Engineering Team</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
