import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout.jsx';

// Sitemap pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import MEPServicesMadurai from '../pages/MEPServicesMadurai.jsx';
import Insights from '../pages/Insights.jsx';
import FAQ from '../pages/FAQ.jsx';
import Contact from '../pages/Contact.jsx';
import RequestAQuote from '../pages/RequestAQuote.jsx';
import NotFound from '../pages/NotFound.jsx';

// Services
import ServicesHub from '../pages/services/ServicesHub.jsx';
import ElectricalServices from '../pages/services/ElectricalServices.jsx';
import HVACServices from '../pages/services/HVACServices.jsx';
import PlumbingServices from '../pages/services/PlumbingServices.jsx';
import FireAlarmFireFighting from '../pages/services/FireAlarmFireFighting.jsx';
import ELVSystems from '../pages/services/ELVSystems.jsx';
import ITNetworking from '../pages/services/ITNetworking.jsx';
import BuildingManagementSystems from '../pages/services/BuildingManagementSystems.jsx';

// Industries
import IndustriesHub from '../pages/industries/IndustriesHub.jsx';
import Residential from '../pages/industries/Residential.jsx';
import Commercial from '../pages/industries/Commercial.jsx';
import Healthcare from '../pages/industries/Healthcare.jsx';
import Hospitality from '../pages/industries/Hospitality.jsx';
import Industrial from '../pages/industries/Industrial.jsx';
import Institutional from '../pages/industries/Institutional.jsx';

// Projects
import ProjectsPortfolio from '../pages/projects/ProjectsPortfolio.jsx';
import ProjectDetails from '../pages/projects/ProjectDetails.jsx';

// Legal
import PrivacyPolicy from '../pages/legal/PrivacyPolicy.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* 1. Home */}
          <Route index element={<Home />} />

          {/* 2. About RRABS */}
          <Route path="about" element={<About />} />

          {/* 3-10. Services */}
          <Route path="services" element={<ServicesHub />} />
          <Route path="electrical-services" element={<ElectricalServices />} />
          <Route path="hvac-services" element={<HVACServices />} />
          <Route path="plumbing-services" element={<PlumbingServices />} />
          <Route path="fire-alarm-fire-fighting" element={<FireAlarmFireFighting />} />
          <Route path="elv-systems" element={<ELVSystems />} />
          <Route path="it-networking" element={<ITNetworking />} />
          <Route path="building-management-systems" element={<BuildingManagementSystems />} />

          {/* 11-17. Industries */}
          <Route path="industries" element={<IndustriesHub />} />
          <Route path="industries/residential" element={<Residential />} />
          <Route path="industries/commercial" element={<Commercial />} />
          <Route path="industries/healthcare" element={<Healthcare />} />
          <Route path="industries/hospitality" element={<Hospitality />} />
          <Route path="industries/industrial" element={<Industrial />} />
          <Route path="industries/institutional" element={<Institutional />} />

          {/* 18. Projects Portfolio & Project Details */}
          <Route path="projects" element={<ProjectsPortfolio />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />

          {/* 19. MEP Services in Madurai */}
          <Route path="mep-services-madurai" element={<MEPServicesMadurai />} />

          {/* 20. Insights */}
          <Route path="insights" element={<Insights />} />

          {/* 21. FAQ */}
          <Route path="faq" element={<FAQ />} />

          {/* 22. Contact */}
          <Route path="contact" element={<Contact />} />

          {/* 23. Request a Quote */}
          <Route path="request-a-quote" element={<RequestAQuote />} />

          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* Wildcard Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
