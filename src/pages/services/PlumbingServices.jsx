import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Waves, 
  CoordinationIcon, 
  PipeValve, 
  Zap, 
  Fan, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  GridIcon, 
  MessageCircle, 
  Plus, 
  Minus 
} from '../../components/common/Icons.jsx';
import './PlumbingServices.css';

// Local project images
import plumbingHeroImg from '../../assets/images/services/plumbing.jpg';
import plumbingDrainageImg from '../../assets/images/services/plumbing-drainage.jpg';
import centerBuildingImg from '../../assets/images/about/integrated-systems-building.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function PlumbingServices() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Plumbing Services in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'RRABS provides plumbing building-system solutions covering water supply and drainage for facilities in Madurai.');
    }
  }, []);

  // FAQ Accordion State (both open by default matching screenshot)
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(true);

  return (
    <div className="plumbing-services-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="plumb-hero" aria-label="Plumbing Services Hero">
        <div className="plumb-hero-bg">
          <img 
            src={plumbingHeroImg} 
            alt="Commercial water supply piping, valve stations and drainage infrastructure" 
            className="plumb-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="plumb-hero-gradient"></div>
        </div>

        {/* Decorative Constellation Mesh on Left */}
        <svg className="plumb-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="plumb-hero-green-accent" aria-hidden="true"></div>

        <div className="plumb-hero-container">
          <div className="plumb-hero-content">
            {/* Breadcrumb */}
            <nav className="plumb-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="plumb-breadcrumb-sep">&gt;</span>
              <Link to="/services/">Services</Link>
              <span className="plumb-breadcrumb-sep">&gt;</span>
              <span className="plumb-breadcrumb-current">Plumbing Services</span>
            </nav>

            <h1 className="plumb-hero-heading">
              Plumbing Systems<br />
              in Madurai for<br />
              Reliable Water Supply<br />
              &amp; Drainage
            </h1>

            <p className="plumb-hero-paragraph">
              RRABS provides plumbing building-system solutions covering water supply and drainage. The scope is planned around reliable water movement, effective drainage, building layout and coordination with structural, architectural and other MEP services.
            </p>

            <div className="plumb-hero-actions">
              <Link to="/request-a-quote/" className="btn-hero-quote">
                <MessageCircle size={16} color="#FFFFFF" />
                <span>Request a Quote</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link to="/services/" className="btn-hero-explore">
                <GridIcon size={16} color="#FFFFFF" />
                <span>Explore Our Services</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WATER SUPPLY SECTION
          ======================================================== */}
      <section className="plumb-water-section" aria-label="Water Supply">
        {/* Decorative Pipe Vector Graphic on Left Edge */}
        <svg className="plumb-pipes-left-decor" viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 0 L 20 180 L 120 180 L 120 400" stroke="#0878BD" strokeWidth="1.5" />
          <path d="M 40 0 L 40 160 L 140 160 L 140 400" stroke="#079B36" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="180" r="5" fill="#0878BD" />
          <circle cx="140" cy="160" r="4" fill="#079B36" />
        </svg>

        <div className="plumb-two-col-container">
          {/* Left Column: Icon Badge, Heading, Paragraph and Button */}
          <div className="plumb-text-col">
            <div className="plumb-feature-badge">
              <Droplets size={24} color="#0878BD" />
            </div>

            <span className="plumb-eyebrow-line"></span>

            <h2 className="plumb-section-heading">Water Supply</h2>

            <p className="plumb-paragraph">
              A dependable water-supply system must deliver water to the required points in a practical and controlled way. Pipe routing, access, building use and coordination with other services all influence the final solution.
            </p>

            <Link to="/services/" className="plumb-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>

          {/* Right Column: Blue Pipes Photo */}
          <div className="plumb-media-box">
            <img 
              src={plumbingHeroImg} 
              alt="Blue water supply pipes and pressure gauges in mechanical room" 
              className="plumb-photo" 
            />
            <div className="plumb-media-green-corner" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. DRAINAGE SECTION
          ======================================================== */}
      <section className="plumb-drainage-section" aria-label="Drainage">
        {/* Decorative Pipe Vector Graphic on Right Edge */}
        <svg className="plumb-pipes-right-decor" viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 240 0 L 240 220 L 140 220 L 140 400" stroke="#0878BD" strokeWidth="1.5" />
          <path d="M 220 0 L 220 200 L 120 200 L 120 400" stroke="#079B36" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="140" cy="220" r="5" fill="#0878BD" />
          <circle cx="120" cy="200" r="4" fill="#079B36" />
        </svg>

        <div className="plumb-two-col-inverted">
          {/* Left Column: Drainage Pipes Photo */}
          <div className="plumb-media-box">
            <img 
              src={plumbingDrainageImg} 
              alt="Commercial building ceiling drainage pipe routes and fittings" 
              className="plumb-photo" 
            />
            <div className="plumb-media-green-corner-left" aria-hidden="true"></div>
          </div>

          {/* Right Column: Icon Badge, Heading, Paragraph and Button */}
          <div className="plumb-text-col">
            <div className="plumb-feature-badge">
              <Waves size={24} color="#079B36" />
            </div>

            <span className="plumb-eyebrow-line"></span>

            <h2 className="plumb-section-heading">Drainage</h2>

            <p className="plumb-paragraph">
              Drainage planning is essential for the safe and effective removal of wastewater from a building. Routes, gradients, access and interfaces with the building layout should be considered early to reduce problems during installation and operation.
            </p>

            <Link to="/services/" className="plumb-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. COORDINATED PLUMBING SECTION
          ======================================================== */}
      <section className="plumb-coord-section" aria-label="Coordinated Plumbing">
        <div className="plumb-coord-container">
          {/* Left Column: Heading, Paragraph and Button */}
          <div className="plumb-coord-text-col">
            <div className="plumb-feature-badge">
              <CoordinationIcon size={24} color="#0878BD" />
            </div>

            <span className="plumb-eyebrow-line"></span>

            <h2 className="plumb-section-heading">Coordinated Plumbing</h2>

            <p className="plumb-paragraph">
              Plumbing frequently shares service zones with electrical, HVAC and fire systems. Good coordination helps avoid clashes, improves access for maintenance and supports a cleaner installation.
            </p>

            <Link to="/services/" className="plumb-btn-outline">
              <span>Learn More</span>
              <ArrowRight size={14} color="#0878BD" />
            </Link>
          </div>

          {/* Right Column: Connected Building Diagram */}
          <div className="plumb-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="plumb-side-nodes plumb-left-nodes">
              <div className="plumb-node-item plumb-node-left">
                <div className="plumb-node-card">
                  <span className="plumb-node-card-icon"><Zap size={18} color="#079B36" /></span>
                  <span className="plumb-node-card-label">Electrical Systems</span>
                </div>
                <span className="plumb-connector-line"></span>
              </div>
              <div className="plumb-node-item plumb-node-left">
                <div className="plumb-node-card">
                  <span className="plumb-node-card-icon"><Fan size={18} color="#079B36" /></span>
                  <span className="plumb-node-card-label">HVAC Systems</span>
                </div>
                <span className="plumb-connector-line"></span>
              </div>
            </div>

            {/* Central Building Frame with Overlay Badge */}
            <div className="plumb-center-frame">
              <img 
                src={centerBuildingImg} 
                alt="Modern building plumbing systems coordination" 
                className="plumb-building-img" 
              />
              <div className="plumb-center-badge">
                <PipeValve size={22} color="#079B36" />
                <span className="plumb-center-badge-text">Plumbing<br />Systems</span>
              </div>
            </div>

            {/* Right Connected Services */}
            <div className="plumb-side-nodes plumb-right-nodes">
              <div className="plumb-node-item plumb-node-right">
                <span className="plumb-connector-line"></span>
                <div className="plumb-node-card">
                  <span className="plumb-node-card-icon"><ShieldCheck size={18} color="#079B36" /></span>
                  <span className="plumb-node-card-label">Fire Systems</span>
                </div>
              </div>
              <div className="plumb-node-item plumb-node-right">
                <span className="plumb-connector-line"></span>
                <div className="plumb-node-card">
                  <span className="plumb-node-card-icon"><Building2 size={18} color="#079B36" /></span>
                  <span className="plumb-node-card-label">Building Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="plumb-faq-section" aria-label="Frequently Asked Questions">
        <div className="plumb-faq-container">
          <div className="plumb-faq-header">
            <h2 className="plumb-section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="plumb-faq-grid">
            {/* FAQ 1 */}
            <div className="plumb-faq-card">
              <button 
                type="button" 
                className="plumb-faq-top"
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-expanded={openFaq1}
              >
                <span className="plumb-faq-question">Why is plumbing coordination important during construction?</span>
                <span className="plumb-faq-toggle">
                  {openFaq1 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq1 && (
                <div className="plumb-faq-answer">
                  <p>
                    Water-supply and drainage routes often pass through shafts, ceilings, walls and service areas that are also used by other systems. Coordinating these routes before installation can reduce rework and improve accessibility.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="plumb-faq-card">
              <button 
                type="button" 
                className="plumb-faq-top"
                onClick={() => setOpenFaq2(!openFaq2)}
                aria-expanded={openFaq2}
              >
                <span className="plumb-faq-question">Does every building use the same plumbing layout?</span>
                <span className="plumb-faq-toggle">
                  {openFaq2 ? <Minus size={18} color="#079B36" /> : <Plus size={18} color="#079B36" />}
                </span>
              </button>
              {openFaq2 && (
                <div className="plumb-faq-answer">
                  <p>
                    No. Plumbing requirements vary by building type, occupancy, fixture count, layout and operational use. The system should be planned for the actual facility rather than copied from a generic arrangement.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FINAL CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="plumb-cta-section" aria-label="Plumbing Call to Action">
        <div className="plumb-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="plumb-cta-img" 
          />
          <div className="plumb-cta-overlay"></div>
        </div>

        {/* Diagonal Green Accent Graphic */}
        <div className="plumb-cta-green-accent" aria-hidden="true"></div>

        <div className="plumb-cta-container">
          <div className="plumb-cta-content">
            <h2 className="plumb-cta-heading">
              Planning water-supply or drainage works? Discuss your plumbing requirements with RRABS.
            </h2>

            <Link to="/request-a-quote/" className="plumb-cta-btn">
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
