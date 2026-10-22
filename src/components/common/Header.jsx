import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rrabsLogo from '../../assets/images/logo/RRABS_Logo.png';
import { ChevronDown, ArrowRight, Menu, X } from './Icons.jsx';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const location = useLocation();
  const normalize = (p) => p.replace(/\/+$/, '') || '/';
  const currentPath = normalize(location.pathname);

  // Close menus when route changes
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHomeActive = currentPath === '/';
  const isAboutActive = currentPath === '/about';
  
  const isServicesActive = 
    currentPath === '/services' ||
    currentPath === '/electrical-services' ||
    currentPath === '/hvac-services' ||
    currentPath === '/plumbing-services' ||
    currentPath === '/fire-alarm-fire-fighting' ||
    currentPath === '/elv-systems' ||
    currentPath === '/it-networking' ||
    currentPath === '/building-management-systems' ||
    currentPath === '/mep-services-madurai';

  const isIndustriesActive = 
    currentPath === '/industries' ||
    currentPath.startsWith('/industries/');

  const isProjectsActive = 
    currentPath === '/projects' ||
    currentPath.startsWith('/projects/');

  const isInsightsActive = 
    currentPath === '/insights' ||
    currentPath.startsWith('/insights/');

  const isContactActive = currentPath === '/contact';
  const isQuoteActive = currentPath === '/request-a-quote';

  const servicesLinks = [
    { name: 'Services Overview', path: '/services/' },
    { name: 'Electrical Services', path: '/electrical-services/' },
    { name: 'HVAC Services', path: '/hvac-services/' },
    { name: 'Plumbing Services', path: '/plumbing-services/' },
    { name: 'Fire Alarm & Fire Fighting', path: '/fire-alarm-fire-fighting/' },
    { name: 'ELV Systems', path: '/elv-systems/' },
    { name: 'IT & Networking', path: '/it-networking/' },
    { name: 'Building Management Systems', path: '/building-management-systems/' },
    { name: 'MEP Services in Madurai', path: '/mep-services-madurai/' },
  ];

  const industriesLinks = [
    { name: 'Industries Overview', path: '/industries/' },
    { name: 'Residential', path: '/industries/residential/' },
    { name: 'Commercial', path: '/industries/commercial/' },
    { name: 'Healthcare', path: '/industries/healthcare/' },
    { name: 'Hospitality', path: '/industries/hospitality/' },
    { name: 'Industrial', path: '/industries/industrial/' },
    { name: 'Institutional', path: '/industries/institutional/' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="header-logo-link" aria-label="RRABS Home">
            <img 
              src={rrabsLogo} 
              alt="RRABS - RR Advanced Building Systems" 
              className="header-logo-img" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isHomeActive ? 'active' : ''}`}
                aria-current={isHomeActive ? 'page' : undefined}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/about/" 
                className={`nav-link ${isAboutActive ? 'active' : ''}`}
                aria-current={isAboutActive ? 'page' : undefined}
              >
                About
              </Link>
            </li>

            {/* Services with Dropdown */}
            <li 
              className="nav-item has-dropdown"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link 
                to="/services/" 
                className={`nav-link dropdown-toggle ${isServicesActive ? 'active' : ''}`}
                aria-current={isServicesActive ? 'page' : undefined}
              >
                <span>Services</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </Link>

              {servicesDropdown && (
                <div className="dropdown-menu">
                  {servicesLinks.map((item) => {
                    const isItemActive = normalize(item.path) === currentPath;
                    return (
                      <Link 
                        key={item.path} 
                        to={item.path} 
                        className={`dropdown-item ${isItemActive ? 'active' : ''}`}
                        aria-current={isItemActive ? 'page' : undefined}
                        onClick={() => setServicesDropdown(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>

            {/* Industries with Dropdown */}
            <li 
              className="nav-item has-dropdown"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <Link 
                to="/industries/" 
                className={`nav-link dropdown-toggle ${isIndustriesActive ? 'active' : ''}`}
                aria-current={isIndustriesActive ? 'page' : undefined}
              >
                <span>Industries</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </Link>

              {industriesDropdown && (
                <div className="dropdown-menu">
                  {industriesLinks.map((item) => {
                    const isItemActive = normalize(item.path) === currentPath;
                    return (
                      <Link 
                        key={item.path} 
                        to={item.path} 
                        className={`dropdown-item ${isItemActive ? 'active' : ''}`}
                        aria-current={isItemActive ? 'page' : undefined}
                        onClick={() => setIndustriesDropdown(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link 
                to="/projects/" 
                className={`nav-link ${isProjectsActive ? 'active' : ''}`}
                aria-current={isProjectsActive ? 'page' : undefined}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/insights/" 
                className={`nav-link ${isInsightsActive ? 'active' : ''}`}
                aria-current={isInsightsActive ? 'page' : undefined}
              >
                Insights
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/contact/" 
                className={`nav-link ${isContactActive ? 'active' : ''}`}
                aria-current={isContactActive ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta-wrapper">
          <Link 
            to="/request-a-quote/" 
            className={`header-quote-btn ${isQuoteActive ? 'active' : ''}`}
            aria-current={isQuoteActive ? 'page' : undefined}
          >
            <span>Get a Quote</span>
            <ArrowRight size={15} color="#FFFFFF" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} color="#07345B" /> : <Menu size={24} color="#07345B" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-backdrop" 
            onClick={closeMobileMenu} 
            aria-hidden="true" 
          />
          <div className="mobile-nav-drawer" id="mobile-nav-menu">
            <ul className="mobile-nav-list">
              <li>
                <Link 
                  to="/" 
                  onClick={closeMobileMenu} 
                  className={`mobile-nav-link ${isHomeActive ? 'active' : ''}`}
                  aria-current={isHomeActive ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link 
                  to="/about/" 
                  onClick={closeMobileMenu} 
                  className={`mobile-nav-link ${isAboutActive ? 'active' : ''}`}
                  aria-current={isAboutActive ? 'page' : undefined}
                >
                  About
                </Link>
              </li>

              {/* Services Submenu */}
              <li className={`mobile-nav-item has-submenu ${mobileServicesOpen ? 'expanded' : ''}`}>
                <div 
                  className={`mobile-nav-header ${isServicesActive ? 'active' : ''}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-list"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }
                  }}
                >
                  <span className="mobile-nav-text">Services</span>
                  <button
                    type="button"
                    className={`mobile-submenu-toggle ${mobileServicesOpen ? 'open' : ''}`}
                    aria-label={mobileServicesOpen ? 'Collapse Services submenu' : 'Expand Services submenu'}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }}
                  >
                    <ChevronDown size={18} className="mobile-chevron" />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <ul className="mobile-submenu-list" id="mobile-services-list">
                    {servicesLinks.map((item) => {
                      const isItemActive = normalize(item.path) === currentPath;
                      return (
                        <li key={item.path} className="mobile-submenu-item">
                          <Link 
                            to={item.path} 
                            onClick={closeMobileMenu} 
                            className={`mobile-submenu-link ${isItemActive ? 'active' : ''}`}
                            aria-current={isItemActive ? 'page' : undefined}
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>

              {/* Industries Submenu */}
              <li className={`mobile-nav-item has-submenu ${mobileIndustriesOpen ? 'expanded' : ''}`}>
                <div 
                  className={`mobile-nav-header ${isIndustriesActive ? 'active' : ''}`}
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={mobileIndustriesOpen}
                  aria-controls="mobile-industries-list"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setMobileIndustriesOpen(!mobileIndustriesOpen);
                    }
                  }}
                >
                  <span className="mobile-nav-text">Industries</span>
                  <button
                    type="button"
                    className={`mobile-submenu-toggle ${mobileIndustriesOpen ? 'open' : ''}`}
                    aria-label={mobileIndustriesOpen ? 'Collapse Industries submenu' : 'Expand Industries submenu'}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileIndustriesOpen(!mobileIndustriesOpen);
                    }}
                  >
                    <ChevronDown size={18} className="mobile-chevron" />
                  </button>
                </div>

                {mobileIndustriesOpen && (
                  <ul className="mobile-submenu-list" id="mobile-industries-list">
                    {industriesLinks.map((item) => {
                      const isItemActive = normalize(item.path) === currentPath;
                      return (
                        <li key={item.path} className="mobile-submenu-item">
                          <Link 
                            to={item.path} 
                            onClick={closeMobileMenu} 
                            className={`mobile-submenu-link ${isItemActive ? 'active' : ''}`}
                            aria-current={isItemActive ? 'page' : undefined}
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>

              <li>
                <Link 
                  to="/projects/" 
                  onClick={closeMobileMenu} 
                  className={`mobile-nav-link ${isProjectsActive ? 'active' : ''}`}
                  aria-current={isProjectsActive ? 'page' : undefined}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link 
                  to="/insights/" 
                  onClick={closeMobileMenu} 
                  className={`mobile-nav-link ${isInsightsActive ? 'active' : ''}`}
                  aria-current={isInsightsActive ? 'page' : undefined}
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link 
                  to="/contact/" 
                  onClick={closeMobileMenu} 
                  className={`mobile-nav-link ${isContactActive ? 'active' : ''}`}
                  aria-current={isContactActive ? 'page' : undefined}
                >
                  Contact
                </Link>
              </li>

              <li className="mobile-nav-cta">
                <Link 
                  to="/request-a-quote/" 
                  onClick={closeMobileMenu} 
                  className={`header-quote-btn mobile-quote-btn ${isQuoteActive ? 'active' : ''}`}
                  aria-current={isQuoteActive ? 'page' : undefined}
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={15} color="#FFFFFF" />
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
