import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import Home from './pages/Home.jsx';
import Agents from './pages/Agents.jsx';
import PerformancePage from './pages/PerformancePage.jsx';
import TimeOff from './pages/TimeOff.jsx';
import PeopleDirectory from './pages/PeopleDirectory.jsx';
import Documents from './pages/Documents.jsx';
import Pricing from './pages/Pricing.jsx';
import SecurityPage from './pages/SecurityPage.jsx';
import Waitlist from './pages/Waitlist.jsx';
import Persona from './pages/Persona.jsx';
import Company from './pages/Company.jsx';
import Customers from './pages/Customers.jsx';
import McpIndex from './pages/McpIndex.jsx';
import McpUseCase from './pages/McpUseCase.jsx';
import ToolsIndex from './pages/ToolsIndex.jsx';
import ToolCalculator from './pages/ToolCalculator.jsx';
import ComplianceIndex from './pages/ComplianceIndex.jsx';
import ComplianceCountry from './pages/ComplianceCountry.jsx';
import ComplianceCalendar from './pages/ComplianceCalendar.jsx';
import Legal from './pages/Legal.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import BlogCategory from './pages/BlogCategory.jsx';
import BlogPost from './pages/BlogPost.jsx';
import NotFound from './pages/NotFound.jsx';

const BLOG_CATEGORIES = ['case-studies', 'guides', 'news', 'product'];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function BlogSlug() {
  const slug = useLocation().pathname.split('/').pop();
  return BLOG_CATEGORIES.includes(slug) ? <BlogCategory category={slug} /> : <BlogPost />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/time-off-attendance" element={<TimeOff />} />
          <Route path="/people-directory" element={<PeopleDirectory />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/founders" element={<Persona persona="founders" />} />
          <Route path="/operators" element={<Persona persona="operators" />} />
          <Route path="/people-leaders" element={<Persona persona="people-leaders" />} />
          <Route path="/company" element={<Company />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mcp-use-cases" element={<McpIndex />} />
          <Route path="/mcp-use-cases/:slug" element={<McpUseCase />} />
          <Route path="/tools" element={<ToolsIndex />} />
          <Route path="/tools/:slug" element={<ToolCalculator />} />
          <Route path="/compliance" element={<ComplianceIndex />} />
          <Route path="/compliance/:country" element={<ComplianceCountry />} />
          <Route path="/compliance/:country/calendar" element={<ComplianceCalendar />} />
          <Route path="/:lang/compliance/:country" element={<ComplianceCountry />} />
          <Route path="/privacy" element={<Legal doc="privacy" />} />
          <Route path="/terms" element={<Legal doc="terms" />} />
          <Route path="/dpa" element={<Legal doc="dpa" />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogSlug />} />
          <Route path="/:lang/blog" element={<BlogIndex />} />
          <Route path="/:lang/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
