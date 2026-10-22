import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SiteAnimation
 * Provides a coordinated, reusable animation system across all pages of the website:
 * - 2.2s deliberate starting delay for initial above-the-fold content
 * - Horizontal entrance from Left (headings, text, odd cards) & Right (images, visual panels, even cards)
 * - Scroll-triggered IntersectionObserver for subsequent sections
 * - Replays animations on route changes or when navigation links are clicked again
 * - Accessible with prefers-reduced-motion & safety fallbacks
 */
export default function SiteAnimation({ children }) {
  const location = useLocation();
  const [replayKey, setReplayKey] = useState(0);
  const containerRef = useRef(null);

  // Replay animation and scroll to top when any internal navigation link is clicked
  useEffect(() => {
    const handleNavClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && (href.startsWith('/') || href.startsWith('#'))) {
          // If clicking link to current route, replay animations smoothly
          const cleanHref = href.split('#')[0].replace(/\/$/, '') || '/';
          const cleanPath = location.pathname.replace(/\/$/, '') || '/';
          if (cleanHref === cleanPath) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setReplayKey((prev) => prev + 1);
          }
        }
      }
    };

    window.addEventListener('click', handleNavClick);
    return () => window.removeEventListener('click', handleNavClick);
  }, [location.pathname]);

  // Orchestrate entrance and scroll-reveal animations across all sections & cards
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.querySelectorAll('.anim-left, .anim-right, .anim-stationary, [data-reveal]').forEach((el) => {
        el.classList.add('is-visible', 'is-revealed');
      });
      return;
    }

    const sections = Array.from(container.querySelectorAll('section, [data-section]'));
    const observers = [];

    // 1. Initial Page Entry: The first section (Hero / Page Banner)
    if (sections.length > 0) {
      const heroSection = sections[0];

      // Auto-classify hero elements if not already tagged
      const heroTextCol = heroSection.querySelector(
        '.hero-content, [class*="-hero-content"], [class*="hero-text"], [class*="-text-col"], [class*="intro-content"]'
      );
      const heroVisualCol = heroSection.querySelector(
        '.hero-bg-media, [class*="-hero-bg"], [class*="hero-diagram"], [class*="hero-img"], [class*="-media"], [class*="-visual"]'
      );

      if (heroTextCol && !heroTextCol.classList.contains('anim-left') && !heroTextCol.classList.contains('anim-right')) {
        heroTextCol.classList.add('anim-left');
      }
      if (heroVisualCol && !heroVisualCol.classList.contains('anim-left') && !heroVisualCol.classList.contains('anim-right')) {
        heroVisualCol.classList.add('anim-right');
      }

      // Hero renders immediately without delay
      heroSection.classList.add('is-visible', 'is-revealed');
      heroSection.querySelectorAll('.anim-left, .anim-right, .anim-stationary, [data-reveal]').forEach((el) => {
        el.classList.add('is-visible', 'is-revealed');
      });

      // 2. Subsequent Sections: Scroll-triggered reveals
      const scrollSections = sections.slice(1);
      scrollSections.forEach((section) => {
        // Auto-tag 2-column sections if untagged
        const children = Array.from(section.children);
        const mainContainer = children.find((c) => c.matches && c.matches('.container, [class*="container"]')) || section;
        const subCols = Array.from(mainContainer.children).filter(
          (c) => c.tagName === 'DIV' && !c.classList?.contains('hero-mesh') && !c.classList?.contains('services-header')
        );

        if (subCols.length === 2) {
          const [col1, col2] = subCols;
          if (!col1.classList.contains('anim-left') && !col1.classList.contains('anim-right') && !col1.classList.contains('grid-alternating')) {
            col1.classList.add('anim-left');
          }
          if (!col2.classList.contains('anim-left') && !col2.classList.contains('anim-right') && !col2.classList.contains('grid-alternating')) {
            col2.classList.add('anim-right');
          }
        }

        // Auto-tag card grids for alternating or staggered reveals
        const grids = section.querySelectorAll('[class*="grid"], [class*="cards"], [class*="timeline"]');
        grids.forEach((grid) => {
          if (
            !grid.classList.contains('grid-alternating') &&
            !grid.classList.contains('grid-services-7') &&
            !grid.classList.contains('services-grid')
          ) {
            grid.classList.add('grid-alternating');
          }
        });

        // IntersectionObserver for scroll entrance
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible', 'is-revealed');
                entry.target.querySelectorAll('.anim-left, .anim-right, .anim-stationary, [data-reveal], .grid-alternating, .grid-services-7, .services-grid, .sectors-grid').forEach((el) => {
                  el.classList.add('is-visible', 'is-revealed');
                });
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        obs.observe(section);
        observers.push(obs);
      });

      // Safety fallback to ensure all elements are visible if anything was missed
      const fallbackTimer = setTimeout(() => {
        container.querySelectorAll('.anim-left, .anim-right, .anim-stationary, [data-reveal], .grid-alternating, .grid-services-7, .services-grid, .sectors-grid').forEach((el) => {
          el.classList.add('is-visible', 'is-revealed');
        });
      }, 3500);

      return () => {
        clearTimeout(fallbackTimer);
        observers.forEach((obs) => obs.disconnect());
      };
    }
  }, [location.key, replayKey]);

  return (
    <div ref={containerRef} className="site-page-wrapper" key={`${location.key}-${replayKey}`}>
      {children}
    </div>
  );
}
