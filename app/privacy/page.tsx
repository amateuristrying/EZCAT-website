import type { Metadata } from 'next';
import { ArrowLeft, Shield, Heart } from 'lucide-react';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Privacy Policy — EZCAT',
  description: 'EZCAT Privacy Policy. Learn how EZCAT protects your privacy with 100% offline practice, local SQLite storage, and zero tracking.',
};

export default function PrivacyPage() {
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
          <p className="eyebrow eyebrow-orange">Transparency & Trust</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: September 2026</p>
        </div>

        <div className="subpage-content">
          <div className="callout callout-blue">
            <Shield className="callout-icon" aria-hidden="true" />
            <p>
              <strong>The Short Version:</strong> EZCAT is built to be a calm, private study companion. We do not track you, we do not show ads, we do not sell data, and your question practice is 100% offline.
            </p>
          </div>

          <section>
            <h2>1. Overview & Core Philosophy</h2>
            <p>
              EZCAT (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is an open-source, offline-first CAT exam preparation application. We believe exam preparation should be private, focused, and free from surveillance.
            </p>
            <p>
              Unlike traditional test-prep platforms, EZCAT does not require an account, email address, or phone number to practice. You download the app, open it, and immediately start solving.
            </p>
          </section>

          <section>
            <h2>2. 100% Offline-First Practice & Local Storage</h2>
            <p>
              All previous year questions (PYQs), mock exams, solutions, and category metadata are bundled directly inside the application via a local SQLite database (<code>cat_questions.db</code>).
            </p>
            <ul>
              <li><strong>Practice History &amp; Progress:</strong> Your question attempts, scores, mock test timing, bookmarking, and category notes are stored locally on your device storage.</li>
              <li><strong>No Cloud Sync:</strong> We do not operate remote user databases or collect telemetry on what questions you solve. If you delete the app or clear its data, your local history is removed from your device.</li>
            </ul>
          </section>

          <section>
            <h2>3. Bring-Your-Own-API-Key (BYOK) for AI Coaching</h2>
            <p>
              EZCAT features an optional AI Coach designed to explain difficult CAT concepts, break down complex Quantitative Aptitude solutions, and provide Reading Comprehension insights.
            </p>
            <ul>
              <li><strong>Direct Device-to-Provider Communication:</strong> When you provide your own API key (e.g. OpenAI, Google Gemini, Anthropic Claude, Groq, or OpenRouter), requests are sent directly from your device to that provider&apos;s official API endpoint.</li>
              <li><strong>No Intermediary Servers:</strong> EZCAT runs no proxy servers. Your prompt and question content never pass through any EZCAT-owned server.</li>
              <li><strong>Secure Local Storage:</strong> Your API keys are saved exclusively in encrypted on-device storage using hardware-backed security (such as Expo SecureStore / iOS Keychain / Android KeyStore).</li>
              <li><strong>Third-Party Provider Terms:</strong> When you use AI features with your API key, your usage is governed directly by the privacy policy of the respective model provider.</li>
            </ul>
          </section>

          <section>
            <h2>4. Analytics, Cookies &amp; Telemetry</h2>
            <p>
              EZCAT uses <strong>zero analytics SDKs, zero advertising trackers, and zero third-party telemetry tools</strong> in both our mobile application and this informational website.
            </p>
            <ul>
              <li>No tracking cookies are placed in your browser.</li>
              <li>No device identifiers, advertising IDs, or location data are harvested.</li>
              <li>No crash reports are sent to third parties without your explicit operating system consent.</li>
            </ul>
          </section>

          <section>
            <h2>5. App Permissions</h2>
            <p>
              The EZCAT Android and iOS apps require minimal permissions to function:
            </p>
            <ul>
              <li><strong>Network Access:</strong> Only required if you choose to invoke the optional AI Coach using your own API key, or to download updates from GitHub Releases. Practice itself runs fully without an internet connection.</li>
              <li><strong>Local Storage:</strong> Required solely to persist your study bookmarks, notes, and mock attempts in the local SQLite database.</li>
            </ul>
          </section>

          <section>
            <h2>6. Children&apos;s Privacy</h2>
            <p>
              EZCAT does not knowingly collect or solicit personal information from children under the age of 13. Because our software does not collect personal data from any user, no such data is stored or shared.
            </p>
          </section>

          <section>
            <h2>7. Open Source &amp; Code Verifiability</h2>
            <p>
              Our complete codebase is open source and available for public review on GitHub at{' '}
              <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">
                github.com/amateuristrying/EZCAT
              </a>
              . Anyone can audit the network calls, database schema, and security practices directly from the source code.
            </p>
          </section>

          <section>
            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              Any future updates to this policy will be posted on this page and reflected in the repository changelog. Given our commitment to local-only data storage, our fundamental principles of zero tracking will remain invariant.
            </p>
          </section>

          <section>
            <h2>9. Contact &amp; Questions</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or our security practices, please open an issue on our GitHub repository:
            </p>
            <p>
              <a href={siteLinks.issues} target="_blank" rel="noopener noreferrer">
                Report an Issue or Question on GitHub ({siteLinks.issues})
              </a>
            </p>
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
