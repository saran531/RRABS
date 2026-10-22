import { Outlet } from 'react-router-dom';
import TopBar from '../common/TopBar.jsx';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import ScrollToTop from '../common/ScrollToTop.jsx';
import BackToTop from '../common/BackToTop.jsx';
import SiteAnimation from '../common/SiteAnimation.jsx';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <ScrollToTop />
      <TopBar />
      <Header />
      <main className="main-content">
        <SiteAnimation>
          <Outlet />
        </SiteAnimation>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
