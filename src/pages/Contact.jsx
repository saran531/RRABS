import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  ChevronDown, 
  UserIcon, 
  FileTextIcon, 
  MessageIcon, 
  SettingsIcon, 
  Zap, 
  Snowflake, 
  Droplets, 
  ShieldFlameIcon, 
  CctvCamera, 
  NetworkNodesIcon 
} from '../components/common/Icons.jsx';
import './Contact.css';

// Project image assets
import scopeBuildingImg from '../assets/images/services/scope-building.jpg';
import ctaBuildingImg from '../assets/images/services/services-cta.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    buildingType: '',
    serviceRequired: '',
    projectStage: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set SEO metadata
  useEffect(() => {
    document.title = 'Contact RRABS | Building Systems Engineering & MEP Services Madurai';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact RR Advanced Building Systems (RRABS) in Madurai for coordinated MEP, electrical, HVAC, plumbing, fire safety, ELV, networking and BMS requirements.'
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const services = [
    { id: 1, name: 'Electrical Services', icon: Zap, route: '/electrical-services/' },
    { id: 2, name: 'HVAC Services', icon: Snowflake, route: '/hvac-services/' },
    { id: 3, name: 'Plumbing Services', icon: Droplets, route: '/plumbing-services/' },
    { id: 4, name: 'Fire Alarm & Fire Fighting', icon: ShieldFlameIcon, route: '/fire-alarm-fire-fighting/' },
    { id: 5, name: 'ELV Systems', icon: CctvCamera, route: '/elv-systems/' },
    { id: 6, name: 'IT & Networking', icon: NetworkNodesIcon, route: '/it-networking/' },
    { id: 7, name: 'Building Management Systems', icon: SettingsIcon, route: '/building-management-systems/' },
    { id: 8, name: 'MEP Services in Madurai', icon: Building2, route: '/mep-services-madurai/' }
  ];

  return (
    <div className="contact-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="contact-hero" aria-label="Contact RRABS Hero">
        <div className="contact-hero-bg">
          <img 
            src={scopeBuildingImg} 
            alt="Modern commercial building facility architecture" 
            className="contact-hero-img" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="contact-hero-gradient"></div>
        </div>

        {/* Diagonal green accent stripe */}
        <div className="contact-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg className="contact-hero-mesh" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="120" r="3" fill="#24B9D6" />
          <circle cx="180" cy="80" r="3" fill="#24B9D6" />
          <circle cx="280" cy="160" r="3" fill="#24B9D6" />
          <circle cx="140" cy="240" r="3" fill="#24B9D6" />
          <circle cx="260" cy="320" r="3" fill="#24B9D6" />
          <circle cx="80" cy="380" r="3" fill="#24B9D6" />
          <path d="M60 120 L180 80 L280 160 L140 240 L60 120 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M140 240 L260 320 L80 380 L140 240 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            {/* Breadcrumb */}
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="contact-breadcrumb-sep">&gt;</span>
              <span className="contact-breadcrumb-current">Contact</span>
            </nav>

            <h1 className="contact-hero-heading">
              Let’s Discuss Your<br />
              Building Systems<br />
              Requirement
            </h1>

            <p className="contact-hero-paragraph">
              Planning a new project, upgrade or system package? Tell RRABS what you are building, where the project is located and which services you need. Our team can review the requirement and guide the next conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CONTACT INFORMATION CARDS
          ======================================================== */}
      <section className="contact-cards-section" aria-label="Contact Information">
        <div className="contact-cards-container">
          <div className="contact-info-grid">
            {/* Card 1: Company Title */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Building2 size={24} color="#0866D8" />
              </div>
              <div className="contact-card-content">
                <h2 className="contact-card-title">RR Advanced Building Systems</h2>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <MapPin size={24} color="#00A94F" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Location</h3>
                <p className="contact-card-text">
                  Mahaboopalayam,<br />
                  Madurai, Tamil Nadu – 625016
                </p>
              </div>
            </div>

            {/* Card 3: Call Us */}
            <a href="tel:+917010809807" className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Phone size={24} color="#0866D8" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Call Us</h3>
                <p className="contact-card-text">+91 70108 09807</p>
              </div>
            </a>

            {/* Card 4: Email Us */}
            <a href="mailto:info@rrabs.com" className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Mail size={24} color="#00A94F" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Email Us</h3>
                <p className="contact-card-text">info@rrabs.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN CONTACT SECTION (FORM + OFFICE LOCATION CARD)
          ======================================================== */}
      <section className="contact-main-section" aria-label="Contact Form and Location">
        <div className="contact-main-container">
          {/* Left Column: Contact Form */}
          <div className="contact-form-card">
            <span className="contact-eyebrow-line"></span>

            <h2 className="contact-form-heading">Send Us a Message</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-form-grid">
                {/* Row 1: Full Name */}
                <div className="contact-field-group">
                  <label htmlFor="fullName" className="contact-label">Full Name *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <UserIcon size={16} />
                    </span>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      placeholder="Enter your name" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>

                {/* Row 1: Company / Organisation */}
                <div className="contact-field-group">
                  <label htmlFor="company" className="contact-label">Company / Organisation *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <Building2 size={16} />
                    </span>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="Enter your company name" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className="contact-field-group">
                  <label htmlFor="phone" className="contact-label">Phone *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <Phone size={16} />
                    </span>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Enter your phone number" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="contact-field-group">
                  <label htmlFor="email" className="contact-label">Email *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <Mail size={16} />
                    </span>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Enter your email" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>

                {/* Row 3: Project Location */}
                <div className="contact-field-group">
                  <label htmlFor="location" className="contact-label">Project Location *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <MapPin size={16} />
                    </span>
                    <input 
                      type="text" 
                      id="location" 
                      name="location" 
                      value={formData.location} 
                      onChange={handleChange} 
                      placeholder="Enter project location" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>

                {/* Row 3: Building Type */}
                <div className="contact-field-group">
                  <label htmlFor="buildingType" className="contact-label">Building Type</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <Building2 size={16} />
                    </span>
                    <select 
                      id="buildingType" 
                      name="buildingType" 
                      value={formData.buildingType} 
                      onChange={handleChange} 
                      className="contact-select"
                    >
                      <option value="">Select building type</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Residential">Residential</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Institutional">Institutional</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="contact-select-chevron">
                      <ChevronDown size={14} />
                    </span>
                  </div>
                </div>

                {/* Row 4: Service Required */}
                <div className="contact-field-group">
                  <label htmlFor="serviceRequired" className="contact-label">Service Required</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <SettingsIcon size={16} />
                    </span>
                    <select 
                      id="serviceRequired" 
                      name="serviceRequired" 
                      value={formData.serviceRequired} 
                      onChange={handleChange} 
                      className="contact-select"
                    >
                      <option value="">Select service required</option>
                      <option value="Electrical Services">Electrical Services</option>
                      <option value="HVAC Services">HVAC Services</option>
                      <option value="Plumbing Services">Plumbing Services</option>
                      <option value="Fire Alarm & Fire Fighting">Fire Alarm &amp; Fire Fighting</option>
                      <option value="ELV Systems">ELV Systems</option>
                      <option value="IT & Networking">IT &amp; Networking</option>
                      <option value="Building Management Systems">Building Management Systems</option>
                      <option value="Integrated MEP Package">Integrated MEP Package</option>
                    </select>
                    <span className="contact-select-chevron">
                      <ChevronDown size={14} />
                    </span>
                  </div>
                </div>

                {/* Row 4: Project Stage */}
                <div className="contact-field-group">
                  <label htmlFor="projectStage" className="contact-label">Project Stage</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon">
                      <FileTextIcon size={16} />
                    </span>
                    <select 
                      id="projectStage" 
                      name="projectStage" 
                      value={formData.projectStage} 
                      onChange={handleChange} 
                      className="contact-select"
                    >
                      <option value="">Select project stage</option>
                      <option value="Planning & Design">Planning &amp; Design</option>
                      <option value="Tender / Budgeting">Tender / Budgeting</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Renovation / Retrofit">Renovation / Retrofit</option>
                      <option value="Operations & Maintenance">Operations &amp; Maintenance</option>
                    </select>
                    <span className="contact-select-chevron">
                      <ChevronDown size={14} />
                    </span>
                  </div>
                </div>

                {/* Full-width Message */}
                <div className="contact-field-group contact-field-full">
                  <label htmlFor="message" className="contact-label">Message *</label>
                  <div className="contact-input-wrapper">
                    <span className="contact-input-icon" style={{ top: '14px', alignItems: 'flex-start' }}>
                      <MessageIcon size={16} />
                    </span>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your project requirements..." 
                      className="contact-textarea" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="contact-btn-submit">
                <span>Send Project Enquiry</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </button>

              {formSubmitted && (
                <p style={{ marginTop: '12px', fontSize: '13.5px', color: '#00A94F', fontWeight: '600', textAlign: 'center' }}>
                  Thank you. Your message details have been noted.
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Office Location Card */}
          <div className="contact-office-card">
            <div className="contact-office-top">
              <MapPin size={22} color="#00A94F" />
              <h2 className="contact-office-heading">Our Office Location</h2>
            </div>

            {/* Stylized Visual Map Representation of Mahaboopalayam, Madurai */}
            <div className="contact-map-box" aria-label="Map of RRABS office in Mahaboopalayam, Madurai">
              <svg className="contact-map-svg" viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Map Base & Land Cover */}
                <rect width="380" height="200" fill="#F4F3F0" />
                <path d="M0 0 H380 V200 H0 Z" fill="#F8F7F5" />
                
                {/* Secondary & Primary Roads */}
                <path d="M0 45 L380 75" stroke="#FFFFFF" strokeWidth="12" />
                <path d="M0 45 L380 75" stroke="#E6E3DE" strokeWidth="8" />

                <path d="M0 120 L380 145" stroke="#FFFFFF" strokeWidth="14" />
                <path d="M0 120 L380 145" stroke="#E6E3DE" strokeWidth="10" />

                <path d="M90 0 L150 200" stroke="#FFFFFF" strokeWidth="16" />
                <path d="M90 0 L150 200" stroke="#71C5E8" strokeWidth="10" />

                <path d="M220 0 L320 200" stroke="#FFFFFF" strokeWidth="10" />
                <path d="M220 0 L320 200" stroke="#E6E3DE" strokeWidth="6" />

                <path d="M120 100 L380 120" stroke="#FFFFFF" strokeWidth="8" />
                <path d="M120 100 L380 120" stroke="#E6E3DE" strokeWidth="5" />

                {/* Building blocks */}
                <rect x="170" y="30" width="30" height="20" fill="#EAE7E1" rx="2" />
                <rect x="230" y="20" width="40" height="25" fill="#EAE7E1" rx="2" />
                <rect x="290" y="30" width="35" height="20" fill="#EAE7E1" rx="2" />

                {/* Road and locality labels */}
                <text x="35" y="105" fill="#6B7280" fontSize="9" fontWeight="600" fontFamily="sans-serif">Mahaboopalayam</text>
                <text x="35" y="115" fill="#9CA3AF" fontSize="7" fontFamily="sans-serif">மஹபூபாளையம</text>

                <text x="180" y="70" fill="#4B5563" fontSize="9" fontWeight="700" fontFamily="sans-serif">Mahaboopalayam</text>
                
                <text x="210" y="145" fill="#4B5563" fontSize="8" fontWeight="600" fontFamily="sans-serif" transform="rotate(4, 210, 145)">Bharathidasan Salai</text>

                <text x="260" y="180" fill="#6B7280" fontSize="9" fontWeight="700" fontFamily="sans-serif">Madurai</text>

                {/* Nearby landmark */}
                <circle cx="135" cy="140" r="4" fill="#EC4899" />
                <text x="110" y="152" fill="#EC4899" fontSize="8" fontWeight="700" fontFamily="sans-serif">Nook Hotel</text>
                <text x="110" y="160" fill="#9CA3AF" fontSize="7" fontFamily="sans-serif">இட்லிக் கடை</text>

                {/* RRABS Location Pin */}
                <g transform="translate(195, 80)">
                  <ellipse cx="6" cy="19" rx="4" ry="2" fill="rgba(0,0,0,0.25)" />
                  <path d="M6 0 C2.68 0 0 2.68 0 6 C0 10.5 6 18 6 18 C6 18 12 10.5 12 6 C12 2.68 9.32 0 6 0 Z" fill="#EF4444" />
                  <circle cx="6" cy="6" r="2.5" fill="#FFFFFF" />
                  <text x="16" y="8" fill="#1F2937" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">RR Advanced</text>
                  <text x="16" y="17" fill="#1F2937" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">Building Systems</text>
                </g>

                {/* Map Zoom Controls */}
                <g transform="translate(350, 150)">
                  <rect width="18" height="34" rx="3" fill="#FFFFFF" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))" />
                  <text x="5" y="13" fill="#374151" fontSize="12" fontWeight="700" fontFamily="sans-serif">+</text>
                  <line x1="2" y1="17" x2="16" y2="17" stroke="#E5E7EB" strokeWidth="1" />
                  <text x="6" y="29" fill="#374151" fontSize="14" fontWeight="700" fontFamily="sans-serif">−</text>
                </g>
              </svg>
            </div>

            {/* Office Contact Info Blocks */}
            <div className="contact-office-details">
              {/* Address Block */}
              <div className="contact-office-block">
                <span className="contact-office-icon-wrap">
                  <MapPin size={18} color="#00A94F" />
                </span>
                <div className="contact-office-block-content">
                  <span className="contact-office-block-title">Address</span>
                  <p className="contact-office-block-text">
                    Mahaboopalayam,<br />
                    Madurai, Tamil Nadu – 625016
                  </p>
                </div>
              </div>

              <div className="contact-office-divider"></div>

              {/* Phone Block */}
              <div className="contact-office-block">
                <span className="contact-office-icon-wrap">
                  <Phone size={18} color="#00A94F" />
                </span>
                <div className="contact-office-block-content">
                  <span className="contact-office-block-title">Phone</span>
                  <a href="tel:+917010809807" className="contact-office-block-text" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    +91 70108 09807
                  </a>
                </div>
              </div>

              {/* Email Block */}
              <div className="contact-office-block">
                <span className="contact-office-icon-wrap">
                  <Mail size={18} color="#00A94F" />
                </span>
                <div className="contact-office-block-content">
                  <span className="contact-office-block-title">Email</span>
                  <a href="mailto:info@rrabs.com" className="contact-office-block-text" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    info@rrabs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Architectural wireframe artwork in corner */}
            <svg className="contact-office-mesh" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="20" y="20" width="160" height="120" stroke="#0866D8" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="20" y1="60" x2="180" y2="60" stroke="#0866D8" strokeWidth="1" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#0866D8" strokeWidth="1" />
              <line x1="60" y1="20" x2="60" y2="140" stroke="#0866D8" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="140" stroke="#0866D8" strokeWidth="1" />
              <line x1="140" y1="20" x2="140" y2="140" stroke="#0866D8" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR SERVICES SECTION (8 CARDS IN 4 COLUMNS)
          ======================================================== */}
      <section className="contact-services-section" aria-label="Our Services">
        <div className="contact-services-container">
          <span className="contact-eyebrow-line"></span>

          <h2 className="contact-services-heading">Our Services</h2>
          <p className="contact-services-subtext">Explore our building-system services</p>

          <div className="contact-services-grid">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <Link key={service.id} to={service.route} className="contact-service-card">
                  <div className="contact-service-card-left">
                    <span className="contact-service-icon">
                      <IconComp size={18} color="#0866D8" />
                    </span>
                    <h3 className="contact-service-title">{service.name}</h3>
                  </div>
                  <span className="contact-service-arrow" aria-hidden="true">
                    <ArrowRight size={13} color="currentColor" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="contact-cta-banner" aria-label="Call to Action">
        <div className="contact-cta-bg">
          <img 
            src={ctaBuildingImg} 
            alt="Modern commercial corporate facility building at twilight" 
            className="contact-cta-img" 
          />
          <div className="contact-cta-gradient"></div>
        </div>

        {/* Diagonal green slash and technical mesh */}
        <div className="contact-hero-accent-slash" style={{ left: '54%' }} aria-hidden="true"></div>
        <svg className="contact-hero-mesh" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="40" cy="80" r="2.5" fill="#24B9D6" />
          <circle cx="120" cy="50" r="2.5" fill="#24B9D6" />
          <circle cx="200" cy="110" r="2.5" fill="#24B9D6" />
          <circle cx="90" cy="180" r="2.5" fill="#24B9D6" />
          <circle cx="180" cy="240" r="2.5" fill="#24B9D6" />
          <path d="M40 80 L120 50 L200 110 L90 180 L40 80 Z" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M90 180 L180 240" stroke="#24B9D6" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="contact-cta-container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-heading">
              Planning a project?<br />
              Talk to RRABS.
            </h2>

            <Link to="/request-a-quote/" className="contact-btn-cta-quote">
              <span>Get a Quote</span>
              <ArrowRight size={15} color="#00A94F" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
