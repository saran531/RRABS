import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  Zap,
  Snowflake,
  Droplets,
  ShieldFlameIcon,
  CctvCamera,
  NetworkNodesIcon,
  SettingsIcon,
  ViewGridIcon,
  UserIcon,
  Building2,
  FileTextIcon,
  ViewListIcon,
  MessageIcon,
  MessageCircle,
  Paperclip,
  Lock,
  Users,
  Check
} from '../components/common/Icons.jsx';
import './RequestAQuote.css';

// Project image assets
import heroBuildingImg from '../assets/images/about/hero-building.jpg';
import ctaBuildingImg from '../assets/images/about/cta-building.jpg';
import approachPlansImg from '../assets/images/about/approach-plans-helmet.jpg';

export default function RequestAQuote() {
  // SEO title & meta description
  useEffect(() => {
    document.title = 'Request a Quote | RR Advanced Building Systems (RRABS)';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Request a quote for integrated Electrical, HVAC, Plumbing, Fire Fighting, ELV, IT & Networking and BMS solutions for modern buildings from RRABS Madurai.'
      );
    }
  }, []);

  // Service Selector State (multiple selection)
  const [selectedServices, setSelectedServices] = useState([]);

  const servicesList = [
    { id: 'electrical', name: 'Electrical', icon: Zap, iconColor: '#00A85A' },
    { id: 'hvac', name: 'HVAC', icon: Snowflake, iconColor: '#0066E8' },
    { id: 'plumbing', name: 'Plumbing', icon: Droplets, iconColor: '#0066E8' },
    { id: 'fire-fighting', name: 'Fire Alarm & Fire Fighting', icon: ShieldFlameIcon, iconColor: '#0066E8' },
    { id: 'elv', name: 'ELV', icon: CctvCamera, iconColor: '#0066E8' },
    { id: 'it-networking', name: 'IT & Networking', icon: NetworkNodesIcon, iconColor: '#0066E8' },
    { id: 'bms', name: 'BMS', icon: SettingsIcon, iconColor: '#0066E8' },
    { id: 'multiple', name: 'Multiple Services / Not Sure', icon: ViewGridIcon, iconColor: '#0066E8' }
  ];

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectLocation: '',
    buildingType: '',
    projectStage: '',
    requiredServices: '',
    shortRequirement: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // File Upload State
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.projectLocation.trim()) errors.projectLocation = 'Project location is required';
    if (!formData.buildingType) errors.buildingType = 'Please select a building type';
    if (!formData.projectStage) errors.projectStage = 'Please select a project stage';
    if (!formData.requiredServices) errors.requiredServices = 'Please select required services';
    if (!formData.shortRequirement.trim()) errors.shortRequirement = 'Requirement details are required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to the first error
      const firstErrorField = document.querySelector('.has-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="quote-page">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="quote-hero" aria-label="Request a Quote Hero Banner">
        <div className="quote-hero-bg">
          <img
            src={approachPlansImg}
            alt="Engineering drawings, architectural blueprints and project specifications"
            className="quote-hero-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="quote-hero-gradient"></div>
        </div>

        {/* Diagonal green accent stripe */}
        <div className="quote-hero-accent-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg
          className="quote-hero-mesh"
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

        <div className="quote-hero-container">
          <div className="quote-hero-content">
            {/* Breadcrumb */}
            <nav className="quote-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="quote-breadcrumb-sep">&gt;</span>
              <span className="quote-breadcrumb-current">Request a Quote</span>
            </nav>

            <h1 className="quote-hero-heading">
              Tell Us About<br />
              Your Project
            </h1>

            <p className="quote-hero-paragraph">
              The more clearly we understand your building and required systems, the better we can prepare for the discussion. Share the basic project information below and select the services you need.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. MAIN CONTENT (TWO-COLUMN LAYOUT)
          ======================================================== */}
      <section className="quote-main-section" aria-label="Quote Request Form and Sidebar">
        <div className="quote-main-container">
          <div className="quote-grid-layout">
            
            {/* ---------------- LEFT COLUMN ---------------- */}
            <div className="quote-main-form-column">
              
              {/* Card 1: Service Selector */}
              <div className="quote-card quote-service-selector-card">
                <div className="quote-card-header">
                  <span className="quote-accent-bar" aria-hidden="true"></span>
                  <h2 className="quote-card-title">Service Selector</h2>
                  <p className="quote-card-description">
                    Select the building-system services you need (you can choose multiple).
                  </p>
                </div>

                <div className="quote-services-grid" role="group" aria-label="Selectable building services">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className={`quote-service-option ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleService(service.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();
                            toggleService(service.id);
                          }
                        }}
                      >
                        <div className="quote-service-top">
                          <div className="quote-service-icon-wrap">
                            <ServiceIcon size={24} color={service.iconColor} />
                          </div>
                          <div className="quote-service-checkbox">
                            {isSelected && <Check size={12} color="#FFFFFF" />}
                          </div>
                        </div>
                        <span className="quote-service-name">{service.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card 2: Project Information Form */}
              <div className="quote-card quote-project-info-card">
                <div className="quote-card-header">
                  <span className="quote-accent-bar" aria-hidden="true"></span>
                  <h2 className="quote-card-title">Project Information</h2>
                  <p className="quote-card-description">
                    Share your project details so we can prepare for the discussion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="quote-form-grid">
                    {/* Row 1: Name & Company */}
                    <div className="quote-field-group">
                      <label htmlFor="name" className="quote-label">
                        Name <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <UserIcon size={18} className="quote-field-icon" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`quote-input ${formErrors.name ? 'has-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.name && <span className="quote-error-text">{formErrors.name}</span>}
                    </div>

                    <div className="quote-field-group">
                      <label htmlFor="company" className="quote-label">
                        Company <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <Building2 size={18} className="quote-field-icon" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`quote-input ${formErrors.company ? 'has-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.company && <span className="quote-error-text">{formErrors.company}</span>}
                    </div>

                    {/* Row 2: Phone & Email */}
                    <div className="quote-field-group">
                      <label htmlFor="phone" className="quote-label">
                        Phone <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <Phone size={18} className="quote-field-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`quote-input ${formErrors.phone ? 'has-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.phone && <span className="quote-error-text">{formErrors.phone}</span>}
                    </div>

                    <div className="quote-field-group">
                      <label htmlFor="email" className="quote-label">
                        Email <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <Mail size={18} className="quote-field-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`quote-input ${formErrors.email ? 'has-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.email && <span className="quote-error-text">{formErrors.email}</span>}
                    </div>

                    {/* Row 3: Project Location & Building Type */}
                    <div className="quote-field-group">
                      <label htmlFor="projectLocation" className="quote-label">
                        Project Location <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <MapPin size={18} className="quote-field-icon" />
                        <input
                          type="text"
                          id="projectLocation"
                          name="projectLocation"
                          placeholder="Enter project location"
                          value={formData.projectLocation}
                          onChange={handleInputChange}
                          className={`quote-input ${formErrors.projectLocation ? 'has-error' : ''}`}
                          required
                        />
                      </div>
                      {formErrors.projectLocation && (
                        <span className="quote-error-text">{formErrors.projectLocation}</span>
                      )}
                    </div>

                    <div className="quote-field-group">
                      <label htmlFor="buildingType" className="quote-label">
                        Building Type <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <Building2 size={18} className="quote-field-icon" />
                        <select
                          id="buildingType"
                          name="buildingType"
                          value={formData.buildingType}
                          onChange={handleInputChange}
                          className={`quote-select ${formErrors.buildingType ? 'has-error' : ''}`}
                          required
                        >
                          <option value="" disabled>
                            Select building type
                          </option>
                          <option value="Commercial Buildings">Commercial Buildings</option>
                          <option value="Residential">Residential</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Institutional">Institutional</option>
                          <option value="Mixed-Use / Other">Mixed-Use / Other</option>
                        </select>
                        <ChevronDown size={16} className="quote-select-chevron" />
                      </div>
                      {formErrors.buildingType && (
                        <span className="quote-error-text">{formErrors.buildingType}</span>
                      )}
                    </div>

                    {/* Row 4: Approximate Project Stage & Required Services */}
                    <div className="quote-field-group">
                      <label htmlFor="projectStage" className="quote-label">
                        Approximate Project Stage <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <FileTextIcon size={18} className="quote-field-icon" />
                        <select
                          id="projectStage"
                          name="projectStage"
                          value={formData.projectStage}
                          onChange={handleInputChange}
                          className={`quote-select ${formErrors.projectStage ? 'has-error' : ''}`}
                          required
                        >
                          <option value="" disabled>
                            Select project stage
                          </option>
                          <option value="Planning / Concept">Planning / Concept</option>
                          <option value="Design / Drawing Stage">Design / Drawing Stage</option>
                          <option value="BOQ / Tendering Stage">BOQ / Tendering Stage</option>
                          <option value="Construction in Progress">Construction in Progress</option>
                          <option value="Renovation / Upgrade">Renovation / Upgrade</option>
                        </select>
                        <ChevronDown size={16} className="quote-select-chevron" />
                      </div>
                      {formErrors.projectStage && (
                        <span className="quote-error-text">{formErrors.projectStage}</span>
                      )}
                    </div>

                    <div className="quote-field-group">
                      <label htmlFor="requiredServices" className="quote-label">
                        Required Services <span className="quote-required">*</span>
                      </label>
                      <div className="quote-input-wrapper">
                        <ViewListIcon size={18} className="quote-field-icon" />
                        <select
                          id="requiredServices"
                          name="requiredServices"
                          value={formData.requiredServices}
                          onChange={handleInputChange}
                          className={`quote-select ${formErrors.requiredServices ? 'has-error' : ''}`}
                          required
                        >
                          <option value="" disabled>
                            Select required services
                          </option>
                          <option value="Multiple Services / Integrated Package">
                            Multiple Services / Integrated Package
                          </option>
                          <option value="Electrical">Electrical</option>
                          <option value="HVAC">HVAC</option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Fire Alarm & Fire Fighting">Fire Alarm & Fire Fighting</option>
                          <option value="ELV">ELV</option>
                          <option value="IT & Networking">IT & Networking</option>
                          <option value="BMS">BMS</option>
                        </select>
                        <ChevronDown size={16} className="quote-select-chevron" />
                      </div>
                      {formErrors.requiredServices && (
                        <span className="quote-error-text">{formErrors.requiredServices}</span>
                      )}
                    </div>
                  </div>

                  {/* Full Width Field: Short Requirement */}
                  <div className="quote-field-full">
                    <label htmlFor="shortRequirement" className="quote-label">
                      Short Requirement <span className="quote-required">*</span>
                    </label>
                    <div className="quote-input-wrapper">
                      <MessageIcon size={18} className="quote-field-icon-textarea" />
                      <textarea
                        id="shortRequirement"
                        name="shortRequirement"
                        rows="4"
                        placeholder="Tell us about your project requirement..."
                        value={formData.shortRequirement}
                        onChange={handleInputChange}
                        className={`quote-textarea ${formErrors.shortRequirement ? 'has-error' : ''}`}
                        required
                      ></textarea>
                    </div>
                    {formErrors.shortRequirement && (
                      <span className="quote-error-text">{formErrors.shortRequirement}</span>
                    )}
                  </div>

                  {/* Optional Drawing / Document Upload Card */}
                  <div
                    className={`quote-upload-card ${isDragging ? 'dragging' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <div className="quote-upload-left">
                      <span className="quote-upload-icon-circle">
                        <Paperclip size={24} color="#00A85A" />
                      </span>
                      <div className="quote-upload-info">
                        <span className="quote-upload-title">Optional Drawing/Document Upload</span>
                        <span className="quote-upload-desc">Choose files or drag and drop</span>
                        <span className="quote-upload-subtext">
                          Upload drawings, BOQ, or any relevant documents (Optional)
                        </span>
                      </div>
                    </div>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      style={{ display: 'none' }}
                      accept=".pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                    />

                    <button
                      type="button"
                      className="quote-upload-btn"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      Choose Files
                    </button>
                  </div>

                  {/* Display list of selected files */}
                  {uploadedFiles.length > 0 && (
                    <div className="quote-file-list">
                      {uploadedFiles.map((file, idx) => (
                        <span key={idx} className="quote-file-chip">
                          <Paperclip size={12} color="#0066E8" />
                          <span>{file.name}</span>
                          <button
                            type="button"
                            className="quote-file-remove"
                            onClick={() => removeFile(idx)}
                            aria-label={`Remove ${file.name}`}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Privacy Notice Banner */}
                  <div className="quote-privacy-banner">
                    <span className="quote-privacy-icon">
                      <Lock size={18} color="#00A85A" />
                    </span>
                    <p className="quote-privacy-text">
                      Your project information should be used only for responding to the enquiry and related business communication. Link this statement to the site&apos;s{' '}
                      <Link to="/privacy-policy/">Privacy Policy</Link>.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="quote-submit-btn">
                    <span>Send Project Enquiry</span>
                    <ArrowRight size={18} color="#FFFFFF" />
                  </button>

                  {/* Submission State Feedback */}
                  {isSubmitted && (
                    <div className="quote-submit-success" role="alert">
                      <Check size={18} color="#047857" />
                      <div>
                        <strong>Enquiry details prepared!</strong> Thank you for sharing your project specifications. Our engineering team will review your requirements.
                      </div>
                    </div>
                  )}
                </form>
              </div>

            </div>

            {/* ---------------- RIGHT SIDEBAR ---------------- */}
            <aside className="quote-sidebar" aria-label="Sidebar details and help">
              
              {/* Card 1: Why Request a Quote? */}
              <div className="quote-card quote-why-card">
                <span className="quote-accent-bar" aria-hidden="true"></span>
                <h3 className="quote-why-title">Why Request a Quote?</h3>
                <div className="quote-why-list">
                  <div className="quote-why-item">
                    <span className="quote-why-icon-wrap">
                      <FileTextIcon size={18} color="#00A85A" />
                    </span>
                    <span className="quote-why-text">
                      Get a tailored discussion based on your building
                    </span>
                  </div>

                  <div className="quote-why-item">
                    <span className="quote-why-icon-wrap">
                      <MessageIcon size={18} color="#00A85A" />
                    </span>
                    <span className="quote-why-text">
                      Share your project requirements easily
                    </span>
                  </div>

                  <div className="quote-why-item">
                    <span className="quote-why-icon-wrap">
                      <Users size={18} color="#00A85A" />
                    </span>
                    <span className="quote-why-text">
                      Our team will review and get back to you
                    </span>
                  </div>

                  <div className="quote-why-item">
                    <span className="quote-why-icon-wrap">
                      <SettingsIcon size={18} color="#00A85A" />
                    </span>
                    <span className="quote-why-text">
                      Ideal for new projects, upgrades or system packages
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Our Contact Details */}
              <div className="quote-contact-card">
                {/* Architectural Blueprint Wireframe SVG */}
                <svg
                  className="quote-contact-wireframe"
                  viewBox="0 0 200 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="20" y="30" width="160" height="230" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="80" x2="180" y2="80" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="20" y1="130" x2="180" y2="130" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="20" y1="180" x2="180" y2="180" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="20" y1="230" x2="180" y2="230" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  
                  <line x1="60" y1="30" x2="60" y2="260" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="100" y1="30" x2="100" y2="260" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="140" y1="30" x2="140" y2="260" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Window modules */}
                  <rect x="30" y="45" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="70" y="45" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="110" y="45" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="150" y="45" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />

                  <rect x="30" y="95" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="70" y="95" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="110" y="95" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="150" y="95" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />

                  <rect x="30" y="145" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="70" y="145" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="110" y="145" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                  <rect x="150" y="145" width="20" height="24" stroke="#38BDF8" strokeWidth="0.8" />
                </svg>

                <div className="quote-contact-header">
                  <MapPin size={20} color="#00A85A" />
                  <h3 className="quote-contact-title">Our Contact Details</h3>
                </div>

                <div className="quote-contact-rows">
                  <div className="quote-contact-row">
                    <MapPin size={18} color="#FFFFFF" className="quote-contact-icon" />
                    <div className="quote-contact-content">
                      <Link to="/mep-services-madurai/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        Mahaboopalayam,<br />
                        Madurai, Tamil Nadu – 625016
                      </Link>
                    </div>
                  </div>

                  <div className="quote-contact-row">
                    <Phone size={18} color="#FFFFFF" className="quote-contact-icon" />
                    <div className="quote-contact-content">
                      <a href="tel:+917010809807">+91 70108 09807</a>
                    </div>
                  </div>

                  <div className="quote-contact-row">
                    <Mail size={18} color="#FFFFFF" className="quote-contact-icon" />
                    <div className="quote-contact-content">
                      <a href="mailto:info@rrabs.com">info@rrabs.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Need Help? */}
              <div className="quote-card quote-help-card">
                <div className="quote-help-image-wrap">
                  <img
                    src={approachPlansImg}
                    alt="RRABS branded safety helmet placed on architectural drawings"
                    className="quote-help-img"
                  />
                </div>
                <div className="quote-help-body">
                  <div className="quote-help-icon-wrap">
                    <MessageCircle size={22} color="#00A85A" />
                  </div>
                  <h3 className="quote-help-title">Need Help?</h3>
                  <p className="quote-help-text">
                    If you have any questions before submitting your request, please contact us.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
                    <Link to="/contact/" className="quote-help-btn">
                      <span>Contact RRABS</span>
                      <ArrowRight size={16} color="#00A85A" />
                    </Link>
                    <Link to="/mep-services-madurai/" className="quote-help-btn" style={{ borderColor: '#0066E8', color: '#0066E8' }}>
                      <span>MEP Services in Madurai</span>
                      <ArrowRight size={16} color="#0066E8" />
                    </Link>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. BOTTOM CTA BANNER
          ======================================================== */}
      <section className="quote-cta-banner" aria-label="Planning a project banner">
        <div className="quote-cta-bg">
          <img
            src={ctaBuildingImg}
            alt="Modern illuminated commercial corporate building at twilight"
            className="quote-cta-img"
          />
          <div className="quote-cta-gradient"></div>
        </div>

        {/* Diagonal green slash */}
        <div className="quote-cta-green-slash" aria-hidden="true"></div>

        {/* Blueprint line-art mesh */}
        <svg
          className="quote-cta-mesh"
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

        <div className="quote-cta-container">
          <div className="quote-cta-content">
            <h2 className="quote-cta-title">
              Planning a project?<br />
              Talk to RRABS.
            </h2>

            <Link to="/contact/" className="quote-cta-btn">
              <span>Contact RRABS</span>
              <ArrowRight size={16} color="#00A85A" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
