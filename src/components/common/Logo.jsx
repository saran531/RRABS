import { Link } from 'react-router-dom';
import rrabsLogo from '../../assets/images/logo/RRABS_Logo.png';
import './Logo.css';

export default function Logo({ theme = 'light', className = '' }) {
  const isDark = theme === 'dark';

  return (
    <Link 
      to="/" 
      className={`rrabs-logo-link ${isDark ? 'rrabs-logo-dark' : 'rrabs-logo-light'} ${className}`}
      aria-label="RRABS Home"
    >
      <img 
        src={rrabsLogo} 
        alt="RRABS - RR Advanced Building Systems" 
        className="rrabs-logo-img" 
      />
    </Link>
  );
}

