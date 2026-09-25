import { ArrowLeft, Home, BookOpen, Heart } from 'lucide-react';
import { siteLinks } from '@/lib/site-links';

export default function NotFound() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="/" className="wordmark nav-wordmark" aria-label="EZCAT home">
          <span>ez</span>cat
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/docs">Docs</a>
          <a href="/#downloads">Downloads</a>
          <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <div className="header-actions">
          <a href="/" className="button button-outline">
            <Home aria-hidden="true" />Home
          </a>
        </div>
      </header>

      <main id="main" className="not-found-page">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-desc">
          Looks like you ventured off the preparation path. The page you are looking for doesn’t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/" className="button button-solid">
            <ArrowLeft aria-hidden="true" /> Return to Homepage
          </a>
          <a href="/docs" className="button button-outline">
            <BookOpen aria-hidden="true" /> View Documentation
          </a>
        </div>

        <footer className="site-footer" style={{ marginTop: '5rem', width: '100%' }}>
          <h2>Your <span className="ink">last</span> CAT prep application.</h2>
          <p><Heart aria-hidden="true" />Built with love for CAT aspirants</p>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/docs">Docs</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={siteLinks.issues} target="_blank" rel="noopener noreferrer">Issues</a></li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
