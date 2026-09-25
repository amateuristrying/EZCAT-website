import type { Metadata } from 'next';
import { ArrowLeft, BookOpen, Smartphone, Monitor, Heart } from 'lucide-react';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Documentation — EZCAT',
  description: 'Learn how to use EZCAT: practice curated previous year questions, take realistic CAT mocks, configure your AI Coach, and study offline.',
};

export default function DocsPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark nav-wordmark" href="/" aria-label="EZCAT home">
          <span>ez</span>cat
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/docs">Docs</a>
          <a href="/#downloads">Downloads</a>
          <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <div className="header-actions">
          <a href="/" className="button button-outline">
            <ArrowLeft aria-hidden="true" />Back to Home
          </a>
        </div>
      </header>

      <main id="main" className="subpage-container">
        <a href="/" className="subpage-back">
          <ArrowLeft aria-hidden="true" size={18} /> Back to Home
        </a>

        <div className="subpage-header">
          <p className="eyebrow eyebrow-orange">Guide & Reference</p>
          <h1>Documentation</h1>
          <p>Everything you need to know about preparing for CAT with EZCAT.</p>
        </div>

        <div className="subpage-content">
          <div className="callout callout-blue">
            <BookOpen className="callout-icon" aria-hidden="true" />
            <p>
              <strong>Welcome to EZCAT:</strong> A distraction-free, 100% offline-first CAT exam preparation companion with authentic previous year papers, realistic mock engines, and an intelligent AI coach.
            </p>
          </div>

          <section>
            <h2>1. Quick Start</h2>
            <p>
              EZCAT is designed to get out of your way. There are no sign-up forms, mandatory logins, or cluttered dashboards.
            </p>
            <ul>
              <li><strong>Step 1:</strong> Download the latest Android APK from <a href={siteLinks.android} target="_blank" rel="noopener noreferrer">GitHub Releases</a> or access the web build.</li>
              <li><strong>Step 2:</strong> Open the app. The question bank is already stored locally on your device.</li>
              <li><strong>Step 3:</strong> Choose either <em>Daily Practice</em> or jump into a <em>Timed Mock Exam</em>.</li>
            </ul>
          </section>

          <section>
            <h2>2. Curated Question Bank &amp; PYQs</h2>
            <p>
              EZCAT bundles thousands of authentic CAT questions spanning from 2017 to 2024 across all three official sections:
            </p>
            <ul>
              <li><strong>VARC (Verbal Ability &amp; Reading Comprehension):</strong> RC passages, Para Jumbles, Para Summary, and Odd Sentence Out.</li>
              <li><strong>DILR (Data Interpretation &amp; Logical Reasoning):</strong> Full sets, arrangement puzzles, matrix charts, games &amp; tournaments, and network diagrams.</li>
              <li><strong>QA (Quantitative Aptitude):</strong> Arithmetic, Algebra, Geometry, Numbers, and Modern Math.</li>
            </ul>
            <p>
              Questions are curated and cross-checked against standard answer keys from reputable preparation sources (including BodheePrep, Cracku, and 2IIM) to ensure pristine question fidelity.
            </p>
          </section>

          <section>
            <h2>3. Realistic Mock Test Engine</h2>
            <p>
              Simulate actual examination pressure with our specialized mock test modes:
            </p>
            <ul>
              <li><strong>Mini Mocks (15 Minutes):</strong> Quick 5-question bursts designed for busy commutes and quick study sessions between classes or work.</li>
              <li><strong>Sectional Mocks (40 Minutes):</strong> Standard 40-minute timed single-section drills to build endurance and test sectional strategy.</li>
              <li><strong>Full CAT Mocks (120 Minutes):</strong> Complete 3-section simulation matching the actual test interface and timing rules.</li>
            </ul>
          </section>

          <section>
            <h2>4. AI Coach &amp; Bring-Your-Own-Key (BYOK)</h2>
            <p>
              Rather than charging expensive monthly subscriptions for AI access, EZCAT implements a <strong>Bring-Your-Own-API-Key (BYOK)</strong> architecture.
            </p>
            <h3>Supported Providers:</h3>
            <ul>
              <li><strong>Google Gemini:</strong> Gemini 2.5 Flash / Pro (generous free tier available via Google AI Studio).</li>
              <li><strong>OpenAI:</strong> GPT-4o, GPT-4o-mini.</li>
              <li><strong>Anthropic:</strong> Claude 3.5 Sonnet / Haiku.</li>
              <li><strong>Groq:</strong> Ultra-fast Llama 3 models.</li>
              <li><strong>OpenRouter:</strong> Universal gateway to hundreds of open and proprietary models.</li>
            </ul>
            <h3>How to set up:</h3>
            <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Open <strong>Settings</strong> in the EZCAT application.</li>
              <li>Select your preferred AI provider.</li>
              <li>Paste your API key and tap <strong>Save</strong>.</li>
            </ol>
            <p>
              Your key is encrypted locally using hardware storage. The app communicates directly with your provider API endpoint—no data is routed through EZCAT servers.
            </p>
          </section>

          <section>
            <h2>5. Offline-First Architecture</h2>
            <p>
              We believe studying should never be interrupted by unstable network connectivity:
            </p>
            <ul>
              <li><strong>Local SQLite Database:</strong> The entire question bank, categories, explanations, and diagram assets live in a local SQLite file (<code>cat_questions.db</code>).</li>
              <li><strong>Zero Cloud Latency:</strong> Instant question loading, instant solution rendering, and 100% offline practice.</li>
            </ul>
          </section>

          <section>
            <h2>6. Platform Downloads &amp; Installation</h2>
            <div className="platform-list" style={{ marginTop: '0.75rem' }}>
              <a href={siteLinks.android} target="_blank" rel="noopener noreferrer">
                <Smartphone />
                <strong>Android (Standalone APK)</strong>
                <ArrowLeft style={{ transform: 'rotate(180deg)' }} />
              </a>
              <a href={siteLinks.releases} target="_blank" rel="noopener noreferrer">
                <Monitor />
                <strong>Web Package (GitHub Releases)</strong>
                <ArrowLeft style={{ transform: 'rotate(180deg)' }} />
              </a>
            </div>
            <p style={{ marginTop: '1rem' }}>
              <em>Note for iOS users:</em> The iOS version is actively in development. You can compile and test the app on iOS simulators using Expo EAS as detailed in the <a href={`${siteLinks.github}/blob/main/RELEASING.md`} target="_blank" rel="noopener noreferrer">Releasing Guide</a>.
            </p>
          </section>

          <section>
            <h2>7. Contributing &amp; Open Source</h2>
            <p>
              EZCAT is completely open source under the MIT License. Contributions are welcome!
            </p>
            <ul>
              <li><strong>Report a Bug:</strong> Open an issue at <a href={siteLinks.issues} target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</li>
              <li><strong>Submit Question Fixes:</strong> If you find a typo or discrepancy in any PYQ, submit a pull request with corrections.</li>
              <li><strong>Source Code:</strong> Explore the codebase at <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">github.com/amateuristrying/EZCAT</a>.</li>
            </ul>
          </section>
        </div>

        <footer className="site-footer" style={{ marginTop: '4rem' }}>
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
