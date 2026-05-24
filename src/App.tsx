import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WhatAreBankerBandsPage from './pages/WhatAreBankerBandsPage';
import HistoryPage from './pages/HistoryPage';
import ModernUsesPage from './pages/ModernUsesPage';
import GalleryPage from './pages/GalleryPage';
import PlanPage from './pages/PlanPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Hidden internal page — own isolated layout, no site nav/footer ── */}
        <Route path="/plan" element={<PlanPage />} />

        {/* ── Public site — all routes share the site Layout ── */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/"                      element={<HomePage />} />
              <Route path="/what-are-banker-bands"  element={<WhatAreBankerBandsPage />} />
              <Route path="/history"                element={<HistoryPage />} />
              <Route path="/modern-uses"            element={<ModernUsesPage />} />
              <Route path="/gallery"                element={<GalleryPage />} />
              <Route path="*"                       element={<NotFound />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#888' }}>Page not found.</p>
      <p style={{ marginTop: '1rem' }}><a href="/" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2px' }}>Back to home</a></p>
    </div>
  );
}
