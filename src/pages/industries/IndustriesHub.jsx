import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HomeIcon, 
  Building2, 
  MedicalCross, 
  Bed, 
  Factory, 
  Landmark 
} from '../../components/common/Icons.jsx';
import './IndustriesHub.css';

// Project image assets
import heroMainImg from '../../assets/images/about/hero-building.jpg';
import residentialImg from '../../assets/images/industries/residential.jpg';
import commercialImg from '../../assets/images/industries/commercial.jpg';
import healthcareImg from '../../assets/images/industries/healthcare.jpg';
import hospitalityImg from '../../assets/images/industries/hospitality.jpg';
import industrialImg from '../../assets/images/industries/industrial.jpg';
import institutionalImg from '../../assets/images/industries/institutional.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function IndustriesHub() {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Industries | RR Advanced Building Systems (RRABS)';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RRABS provides building systems planned around the facility across residential, commercial, healthcare, hospitality, industrial, and institutional sectors in Madurai.'
      );
    }
  }, []);

  const industries = [
    {
      id: 'residential',
      title: 'Residential',
      description: 'Reliable electrical, plumbing, cooling, safety, security and connected-home infrastructure planned around everyday use.',
      route: '/industries/residential/',
      image: residentialImg,
      icon: HomeIcon,
      alt: 'Modern two-story luxury residential villa house with warm interior lighting'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Coordinated systems for offices, retail, halls and other commercial spaces where comfort, uptime, safety and connectivity matter.',
      route: '/industries/commercial/',
      image: commercialImg,
      icon: Building2,
      alt: 'Modern glass-fronted commercial office building with illuminated interiors'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Building systems that support the demanding operational environment of hospitals and healthcare facilities. Publish detailed claims only against confirmed project experience.',
      route: '/industries/healthcare/',
      image: healthcareImg,
      icon: MedicalCross,
      alt: 'Modern hospital medical healthcare center building with red cross sign'
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      description: 'Comfort, guest experience, safety, connectivity and efficient facility operation for hotels, resorts and hospitality properties.',
      route: '/industries/hospitality/',
      image: hospitalityImg,
      icon: Bed,
      alt: 'Premium luxury hotel resort building with welcoming illuminated entrance'
    },
    {
      id: 'industrial',
      title: 'Industrial',
      description: 'Robust building-system infrastructure planned around operational requirements, safety and facility use.',
      route: '/industries/industrial/',
      image: industrialImg,
      icon: Factory,
      alt: 'Modern industrial warehouse facility with roll up loading dock bays'
    },
    {
      id: 'institutional',
      title: 'Institutional',
      description: 'Integrated services for schools, colleges, halls and other institutional facilities where dependable operation and safe occupancy are priorities.',
      route: '/industries/institutional/',
      image: institutionalImg,
      icon: Landmark,
      alt: 'Modern university educational campus college building with green lawn'
    }
  ];

  return (
    <div className="industries-hub-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="ind-hero" aria-label="Industries Overview Hero">
        <div className="ind-hero-bg">
          <img 
            src={heroMainImg} 
            alt="Modern mixed-use and commercial building architecture" 
            className="ind-hero-main-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="ind-hero-gradient"></div>
        </div>

        {/* Diagonal Green Accent */}
        <div className="ind-hero-green-slash" aria-hidden="true"></div>

        {/* Right collage tiles matching screenshot */}
        <div className="ind-hero-collage" aria-hidden="true">
          <img src={residentialImg} alt="" className="ind-collage-tile" />
          <img src={healthcareImg} alt="" className="ind-collage-tile" />
          <img src={industrialImg} alt="" className="ind-collage-tile" />
          <img src={hospitalityImg} alt="" className="ind-collage-tile" />
        </div>

        {/* Blueprint constellation mesh */}
        <svg className="ind-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="ind-hero-container">
          <div className="ind-hero-content">
            {/* Breadcrumb */}
            <nav className="ind-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="ind-breadcrumb-sep">›</span>
              <span className="ind-breadcrumb-current">Industries</span>
            </nav>

            <h1 className="ind-hero-heading">
              Building Systems<br />
              Planned Around<br />
              the Facility
            </h1>

            <p className="ind-hero-paragraph">
              The right building-system solution depends on how the property will be used. Occupancy, operating hours, safety requirements, connected equipment, environmental conditions and maintenance needs can all change from one sector to another.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INDUSTRIES CARDS GRID SECTION
          ======================================================== */}
      <section className="ind-grid-section" aria-label="Industries Grid">
        <div className="ind-grid-container">
          <div className="ind-cards-grid">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="ind-card" id={`industry-${item.id}`}>
                  <div className="ind-card-img-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="ind-card-img" 
                    />
                  </div>

                  <div className="ind-card-badge">
                    <IconComponent size={24} color="#0879D1" />
                  </div>

                  <div className="ind-card-body">
                    <h2 className="ind-card-title">{item.title}</h2>
                    <p className="ind-card-description">{item.description}</p>

                    <div className="ind-card-actions">
                      <Link to={item.route} className="ind-card-link">
                        <span>Learn More</span>
                        <ArrowRight size={14} color="#0879D1" />
                      </Link>

                      <Link 
                        to={item.route} 
                        className="ind-card-arrow-btn"
                        aria-label={`Learn more about ${item.title}`}
                      >
                        <ArrowRight size={16} color="#FFFFFF" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="ind-cta-banner" aria-label="Call to Action">
        <div className="ind-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building at twilight" 
            className="ind-cta-img" 
          />
          <div className="ind-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="ind-cta-green-slash" aria-hidden="true"></div>
        <svg className="ind-cta-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="ind-cta-container">
          <div className="ind-cta-content">
            <h2 className="ind-cta-text">
              Tell us your sector and project requirements. RRABS can help define the relevant building-system scope.
            </h2>

            <Link to="/request-a-quote/" className="ind-btn-cta-quote">
              <span>Request a Quote</span>
              <ArrowRight size={15} color="#08A63F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
