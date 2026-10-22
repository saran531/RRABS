import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Fan, 
  Droplets, 
  ShieldCheck, 
  Video, 
  Network, 
  Building2, 
  ArrowRight 
} from '../../components/common/Icons.jsx';
import './ServicesHub.css';

// Local images matching each service area and section
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/services/hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireFightingImg from '../../assets/images/services/fire-fighting.jpg';
import elvImg from '../../assets/images/services/elv.jpg';
import itNetImg from '../../assets/images/services/it-networking.jpg';
import bmsImg from '../../assets/images/services/bms.jpg';
import scopeBuildingImg from '../../assets/images/services/scope-building.jpg';
import heroBuildingImg from '../../assets/images/services/services-hero.jpg';
import ctaBuildingImg from '../../assets/images/services/services-cta.jpg';

export default function ServicesHub() {
  // Set SEO title and meta description
  useEffect(() => {
    document.title = 'MEP, ELV, IT & BMS Services in Madurai | RRABS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore RRABS services in Madurai: Electrical, HVAC, Plumbing, Fire Alarm & Fire Fighting, ELV, IT & Networking and Building Management Systems.');
    }
  }, []);

  // Seven Core Service Areas in exact order
  const topServices = [
    {
      id: 'electrical',
      title: 'Electrical',
      description: 'Lighting and power distribution solutions for dependable day-to-day building operation.',
      cta: 'Explore Electrical',
      route: '/electrical-services/',
      icon: <Zap size={22} color="#079B36" />,
      image: electricalImg,
    },
    {
      id: 'hvac',
      title: 'HVAC',
      description: 'Comfort cooling and ventilation solutions designed around indoor comfort, airflow and operational requirements.',
      cta: 'Explore HVAC',
      route: '/hvac-services/',
      icon: <Fan size={22} color="#079B36" />,
      image: hvacImg,
    },
    {
      id: 'plumbing',
      title: 'Plumbing',
      description: 'Water supply and drainage systems planned for reliable flow and effective building operation.',
      cta: 'Explore Plumbing',
      route: '/plumbing-services/',
      icon: <Droplets size={22} color="#079B36" />,
      image: plumbingImg,
    },
    {
      id: 'fire-fighting',
      title: 'Fire Alarm & Fire Fighting',
      description: 'Detection and fire-protection systems focused on life safety and protection of property.',
      cta: 'Explore Fire Alarm & Fire Fighting',
      route: '/fire-alarm-fire-fighting/',
      icon: <ShieldCheck size={22} color="#079B36" />,
      image: fireFightingImg,
    },
  ];

  const bottomServices = [
    {
      id: 'elv',
      title: 'ELV Systems',
      description: 'CCTV, access control and supporting low-voltage infrastructure for safer, more controlled facilities.',
      cta: 'Explore ELV Systems',
      route: '/elv-systems/',
      icon: <Video size={22} color="#079B36" />,
      image: elvImg,
    },
    {
      id: 'it-networking',
      title: 'IT & Networking',
      description: 'IT infrastructure and network solutions that support reliable communication and connected spaces.',
      cta: 'Explore IT & Networking',
      route: '/it-networking/',
      icon: <Network size={22} color="#079B36" />,
      image: itNetImg,
    },
    {
      id: 'bms',
      title: 'Building Management Systems',
      description: 'Building automation, monitoring and control solutions that improve visibility across connected building services.',
      cta: 'Explore Building Management Systems',
      route: '/building-management-systems/',
      icon: <Building2 size={22} color="#079B36" />,
      image: bmsImg,
    },
  ];

  return (
    <div className="services-hub-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="services-hero" aria-label="Services Hero Banner">
        <div className="services-hero-bg">
          <img 
            src={heroBuildingImg} 
            alt="Modern commercial building with integrated MEP engineering systems" 
            className="services-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="services-hero-gradient"></div>
        </div>

        <div className="services-hero-container">
          {/* Left Column: Heading and Paragraph */}
          <div className="services-hero-content">
            <span className="services-hero-eyebrow">
              <span className="services-hero-eyebrow-line"></span>
              OUR SERVICES
            </span>

            <h1 className="services-hero-heading">
              Integrated<br />
              Building Systems<br />
              Services
            </h1>

            <p className="services-hero-paragraph">
              Buildings perform well when their systems are planned to work together. RRABS provides seven core service areas covering essential MEP infrastructure, safety, security, connectivity and automation.
            </p>
          </div>

          {/* Right Column: Overlay Connected Service Badges */}
          <div className="services-hero-diagram" aria-hidden="true">
            <div className="hero-nodes-column">
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Zap size={18} color="#079B36" /></span>
                <span>Electrical</span>
              </div>
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Fan size={18} color="#079B36" /></span>
                <span>HVAC</span>
              </div>
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Droplets size={18} color="#079B36" /></span>
                <span>Plumbing</span>
              </div>
            </div>

            <div className="hero-nodes-column">
              <div className="hero-node-badge">
                <span className="hero-node-icon"><ShieldCheck size={18} color="#079B36" /></span>
                <span>Fire Safety</span>
              </div>
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Video size={18} color="#079B36" /></span>
                <span>ELV Systems</span>
              </div>
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Network size={18} color="#079B36" /></span>
                <span>IT &amp; Networking</span>
              </div>
              <div className="hero-node-badge">
                <span className="hero-node-icon"><Building2 size={18} color="#079B36" /></span>
                <span>BMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SEVEN CORE SERVICE AREAS
          ======================================================== */}
      <section className="core-services-section" aria-label="Seven Core Service Areas">
        <div className="core-services-container">
          {/* Header Row: Title on Left, Subtext on Right */}
          <div className="core-services-header">
            <div className="core-services-header-left">
              <span className="services-eyebrow">
                <span className="services-eyebrow-line"></span>
                OUR SERVICES
              </span>
              <h2 className="services-section-heading">Our Seven Core Service Areas</h2>
            </div>
            <div className="core-services-header-right">
              <p className="core-services-header-desc">
                Each service area plays an important role in a well-functioning building. Explore the services below to learn more about what we offer.
              </p>
            </div>
          </div>

          {/* Cards Grid: Row 1 (4 items), Row 2 (3 items) */}
          <div className="core-services-grid">
            {/* Top Row: 4 Cards */}
            <div className="services-row-top">
              {topServices.map((service) => (
                <div key={service.id} className="service-card-item">
                  <div className="service-card-media">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-card-photo" 
                    />
                  </div>
                  <div className="service-floating-icon" aria-hidden="true">
                    {service.icon}
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                    <Link to={service.route} className="service-card-cta">
                      <span>{service.cta}</span>
                      <ArrowRight size={14} color="#079B36" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 3 Cards */}
            <div className="services-row-bottom">
              {bottomServices.map((service) => (
                <div key={service.id} className="service-card-item">
                  <div className="service-card-media">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-card-photo" 
                    />
                  </div>
                  <div className="service-floating-icon" aria-hidden="true">
                    {service.icon}
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                    <Link to={service.route} className="service-card-cta">
                      <span>{service.cta}</span>
                      <ArrowRight size={14} color="#079B36" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CHOOSING THE RIGHT SCOPE SECTION
          ======================================================== */}
      <section className="scope-section" aria-label="Choosing the Right Scope Section">
        <div className="scope-container">
          {/* Left Column: Heading and Paragraph */}
          <div className="scope-text-col">
            <span className="services-eyebrow">
              <span className="services-eyebrow-line"></span>
              PLANNING YOUR PROJECT
            </span>

            <h2 className="services-section-heading">Choosing the Right Scope</h2>

            <p className="services-paragraph">
              Some projects need a single system. Others require several disciplines to be coordinated from the beginning. RRABS can assess the requested scope and help project stakeholders understand where Electrical, HVAC, Plumbing, Fire Safety, ELV, Networking and BMS interact.
            </p>

            <div style={{ marginTop: '20px' }}>
              <Link to="/mep-services-madurai/" className="service-card-cta">
                <span>MEP Services in Madurai</span>
                <ArrowRight size={14} color="#079B36" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Building Cutaway Diagram with Connected Service Nodes */}
          <div className="scope-diagram-wrapper">
            {/* Left Connected Services */}
            <div className="scope-side-nodes scope-left-nodes">
              <div className="scope-node-item scope-node-left">
                <div className="scope-node-pill">
                  <span className="scope-node-label">Electrical</span>
                  <span className="scope-node-badge"><Zap size={16} color="#079B36" /></span>
                </div>
                <span className="scope-connector-line"></span>
              </div>
              <div className="scope-node-item scope-node-left">
                <div className="scope-node-pill">
                  <span className="scope-node-label">HVAC</span>
                  <span className="scope-node-badge"><Fan size={16} color="#079B36" /></span>
                </div>
                <span className="scope-connector-line"></span>
              </div>
              <div className="scope-node-item scope-node-left">
                <div className="scope-node-pill">
                  <span className="scope-node-label">Plumbing</span>
                  <span className="scope-node-badge"><Droplets size={16} color="#079B36" /></span>
                </div>
                <span className="scope-connector-line"></span>
              </div>
            </div>

            {/* Central Building Cutaway Visual */}
            <div className="scope-center-frame">
              <img 
                src={scopeBuildingImg} 
                alt="3D architectural cutaway rendering of building MEP coordination" 
                className="scope-building-img" 
              />
            </div>

            {/* Right Connected Services */}
            <div className="scope-side-nodes scope-right-nodes">
              <div className="scope-node-item scope-node-right">
                <span className="scope-connector-line"></span>
                <div className="scope-node-pill">
                  <span className="scope-node-badge"><ShieldCheck size={16} color="#079B36" /></span>
                  <span className="scope-node-label">Fire Alarm &amp; Fire Fighting</span>
                </div>
              </div>
              <div className="scope-node-item scope-node-right">
                <span className="scope-connector-line"></span>
                <div className="scope-node-pill">
                  <span className="scope-node-badge"><Video size={16} color="#079B36" /></span>
                  <span className="scope-node-label">ELV Systems</span>
                </div>
              </div>
              <div className="scope-node-item scope-node-right">
                <span className="scope-connector-line"></span>
                <div className="scope-node-pill">
                  <span className="scope-node-badge"><Network size={16} color="#079B36" /></span>
                  <span className="scope-node-label">IT &amp; Networking</span>
                </div>
              </div>
              <div className="scope-node-item scope-node-right">
                <span className="scope-connector-line"></span>
                <div className="scope-node-pill">
                  <span className="scope-node-badge"><Building2 size={16} color="#079B36" /></span>
                  <span className="scope-node-label">Building Management Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FINAL CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="services-final-cta-section" aria-label="Services Final Call to Action">
        <div className="services-final-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern illuminated commercial building" 
            className="services-final-cta-img" 
          />
          <div className="services-final-cta-overlay"></div>
        </div>

        {/* Diagonal Green Accent Graphic */}
        <div className="services-cta-green-accent" aria-hidden="true"></div>

        <div className="services-final-cta-container">
          <div className="services-final-cta-content">
            <h2 className="services-final-cta-heading">
              Tell us your project type, location and required systems.
            </h2>

            <Link to="/request-a-quote/" className="services-final-cta-btn">
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
