import { useState } from 'react';
import { MapPin, Mail, Phone, Search } from './Icons.jsx';
import './TopBar.css';

export default function TopBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-contact">
          <div className="topbar-item">
            <MapPin size={14} color="#13B83F" />
            <span>Madurai, Tamil Nadu</span>
          </div>
          <span className="topbar-divider">|</span>
          <a href="mailto:info@rrabs.com" className="topbar-item topbar-link">
            <Mail size={14} color="#13B83F" />
            <span>info@rrabs.com</span>
          </a>
          <span className="topbar-divider">|</span>
          <a href="tel:+917010809807" className="topbar-item topbar-link">
            <Phone size={14} color="#13B83F" />
            <span>+91 70108 09807</span>
          </a>
        </div>

        <div className="topbar-actions">
          {showSearch ? (
            <form onSubmit={handleSearchSubmit} className="topbar-search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="topbar-search-input"
              />
              <button type="submit" className="topbar-search-btn" aria-label="Search">
                <Search size={14} color="#FFFFFF" />
              </button>
              <button 
                type="button" 
                onClick={() => setShowSearch(false)}
                className="topbar-search-close"
                aria-label="Close search"
              >
                ✕
              </button>
            </form>
          ) : (
            <button 
              type="button"
              onClick={() => setShowSearch(true)}
              className="topbar-search-btn"
              aria-label="Open search"
            >
              <Search size={15} color="#FFFFFF" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
