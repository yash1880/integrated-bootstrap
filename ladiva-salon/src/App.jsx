import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Header Component Import
import Header from './components/Header';

// Saare Pages ke Imports
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import Product from './pages/Product'; 

export default function App() {
  return (
    <Router>
      {/* GLOBAL HEADER: Yeh ab har ek page ke top par automatic dikhega */}
      <Header />

      <Routes>
        {/* 1. Main Home Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* 2. Core Service Blocks Layout */}
        <Route path="/services" element={<Services />} />

        {/* 3. About Studio Content Page */}
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />

        {/* 4. Pricing Plans Overview */}
        <Route path="/pricing" element={<Pricing />} />

        {/* 5. Frequently Asked Questions Accordion */}
        <Route path="/faq" element={<Faq />} />

        {/* 6. Blog Cards Feed Section */}
        <Route path="/blog" element={<Blog />} />

        {/* 7. Contact Info & Location Coordinates */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contacts" element={<Contact />} />

        {/* 8. Online Shop Product Listing Grid */}
        <Route path="/products" element={<Product />} />

       

        {/* Safe Catch-all Fallback Navigation */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}