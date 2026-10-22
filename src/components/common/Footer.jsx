import { Link, useLocation } from 'react-router-dom';
import rrabsLogo from '../../assets/images/logo/RRABS_Logo.png';
import Logo from './Logo.jsx';
import { MapPin, Mail, Phone, ArrowRight } from './Icons.jsx';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const normalizePath = (p) => p.replace(/\/+$/, '') || '/';
  const currentPath = normalizePath(location.pathname);

  // Active checks:
  const isServicesActive = 
    currentPath === '/services' ||
    currentPath === '/electrical-services' ||
    currentPath === '/hvac-services' ||
    currentPath === '/plumbing-services' ||
    currentPath === '/fire-alarm-fire-fighting' ||
    currentPath === '/elv-systems' ||
    currentPath === '/it-networking' ||
    currentPath === '/building-management-systems';

  const isMepMaduraiActive = currentPath === '/mep-services-madurai';

  const isIndustriesActive = 
    currentPath === '/industries' ||
    currentPath.startsWith('/industries/');

  const isProjectsActive = 
    currentPath === '/projects' ||
    currentPath.startsWith('/projects/');

  const isInsightsActive = 
    currentPath === '/insights' ||
    currentPath.startsWith('/insights/');

  const isFaqActive = currentPath === '/faq';
  const isContactActive = currentPath === '/contact';
  const isQuoteActive = currentPath === '/request-a-quote';
  const isPrivacyActive = currentPath === '/privacy-policy';

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Col 1: Brand */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-logo-link" aria-label="RRABS Home">
            <img 
              src={rrabsLogo} 
              alt="RRABS - RR Advanced Building Systems" 
              className="footer-logo-img" 
            />
          </Link>
          <p className="footer-tagline">
            Integrated building systems for safer, smarter and better connected buildings.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <Link 
                to="/services/" 
                className={`footer-link ${isServicesActive ? 'active' : ''}`}
                aria-current={isServicesActive ? 'page' : undefined}
              >
                Services
              </Link>
              <Link 
                to="/industries/" 
                className={`footer-link ${isIndustriesActive ? 'active' : ''}`}
                aria-current={isIndustriesActive ? 'page' : undefined}
              >
                Industries
              </Link>
              <Link 
                to="/projects/" 
                className={`footer-link ${isProjectsActive ? 'active' : ''}`}
                aria-current={isProjectsActive ? 'page' : undefined}
              >
                Projects
              </Link>
              <Link 
                to="/insights/" 
                className={`footer-link ${isInsightsActive ? 'active' : ''}`}
                aria-current={isInsightsActive ? 'page' : undefined}
              >
                Insights
              </Link>
              <Link 
                to="/mep-services-madurai/" 
                className={`footer-link ${isMepMaduraiActive ? 'active' : ''}`}
                aria-current={isMepMaduraiActive ? 'page' : undefined}
              >
                MEP Services in Madurai
              </Link>
            </div>
            <div className="footer-links-column">
              <Link 
                to="/faq/" 
                className={`footer-link ${isFaqActive ? 'active' : ''}`}
                aria-current={isFaqActive ? 'page' : undefined}
              >
                FAQ
              </Link>
              <Link 
                to="/contact/" 
                className={`footer-link ${isContactActive ? 'active' : ''}`}
                aria-current={isContactActive ? 'page' : undefined}
              >
                Contact
              </Link>
              <Link 
                to="/request-a-quote/" 
                className={`footer-link ${isQuoteActive ? 'active' : ''}`}
                aria-current={isQuoteActive ? 'page' : undefined}
              >
                Request a Quote
              </Link>
              <Link 
                to="/privacy-policy/" 
                className={`footer-link ${isPrivacyActive ? 'active' : ''}`}
                aria-current={isPrivacyActive ? 'page' : undefined}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Col 3: Get In Touch */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={16} color="#13B83F" className="footer-icon" />
              <span>Madurai, Tamil Nadu</span>
            </div>
            <a href="mailto:info@rrabs.com" className="footer-contact-item footer-link">
              <Mail size={16} color="#13B83F" className="footer-icon" />
              <span>info@rrabs.com</span>
            </a>
            <a href="tel:+917010809807" className="footer-contact-item footer-link">
              <Phone size={16} color="#13B83F" className="footer-icon" />
              <span>+91 70108 09807</span>
            </a>
          </div>
        </div>

        {/* Col 4: Footer CTA */}
        <div className="footer-col footer-cta-col">
          <div className="footer-cta-box">
            <div>
              <span className="footer-cta-sub">Planning a project?</span>
              <h4 className="footer-cta-title">Talk to RRABS.</h4>
            </div>
            <Link to="/contact/" className="footer-cta-circle-btn" aria-label="Talk to RRABS">
              <ArrowRight size={20} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} RR Advanced Building Systems (RRABS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
