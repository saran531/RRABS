import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import rrabsLogo from '../../assets/images/logo/RRABS_Logo.png';
import Logo from './Logo.jsx';
import { ChevronDown, ArrowRight, Menu, X } from './Icons.jsx';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const location = useLocation();
  const normalize = (p) => p.replace(/\/+$/, '') || '/';
  const currentPath = normalize(location.pathname);

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
    { name: 'Commercial Buildings', path: '/industries/commercial/' },
    { name: 'Healthcare', path: '/industries/healthcare/' },
    { name: 'Hospitality', path: '/industries/hospitality/' },
    { name: 'Industrial', path: '/industries/industrial/' },
    { name: 'Institutional', path: '/industries/institutional/' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
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
            <li>
              <Link 
                to="/services/" 
                onClick={closeMobileMenu} 
                className={`mobile-nav-link ${isServicesActive ? 'active' : ''}`}
                aria-current={isServicesActive ? 'page' : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/industries/" 
                onClick={closeMobileMenu} 
                className={`mobile-nav-link ${isIndustriesActive ? 'active' : ''}`}
                aria-current={isIndustriesActive ? 'page' : undefined}
              >
                Industries
              </Link>
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
      )}
    </header>
  );
}
