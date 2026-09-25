import type { Metadata } from 'next';
import { ArrowLeft, AlertCircle, Heart } from 'lucide-react';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Terms of Service — EZCAT',
  description: 'EZCAT Terms of Service. Educational non-affiliation disclaimer, open-source MIT license, and usage terms.',
};

export default function TermsPage() {
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
          <p className="eyebrow eyebrow-orange">Terms & Disclaimers</p>
          <h1>Terms of Service</h1>
          <p>Last updated: September 2026</p>
        </div>

        <div className="subpage-content">
          <div className="callout callout-warm">
            <AlertCircle className="callout-icon" aria-hidden="true" />
            <p>
              <strong>Important Notice:</strong> EZCAT is an independent, open-source study companion created for students preparing for the Common Admission Test (CAT). We are NOT affiliated with the Indian Institutes of Management (IIMs) or the official CAT authority.
            </p>
          </div>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing, browsing, installing, or using the EZCAT application or website (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not download, install, or use the Service.
            </p>
          </section>

          <section>
            <h2>2. Open Source License (MIT)</h2>
            <p>
              The source code of EZCAT is licensed under the permissive{' '}
              <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                MIT License
              </a>
              . You are free to inspect, fork, modify, and distribute the software in compliance with the license terms:
            </p>
            <div className="callout callout-blue" style={{ fontSize: '0.9375rem', fontFamily: 'monospace' }}>
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies...
              </p>
            </div>
            <p>
              The full license text is maintained in our GitHub repository at{' '}
              <a href={`${siteLinks.github}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">
                github.com/amateuristrying/EZCAT/blob/main/LICENSE
              </a>
              .
            </p>
          </section>

          <section>
            <h2>3. Educational Non-Affiliation Disclaimer</h2>
            <p>
              EZCAT is an independent educational tool developed by and for CAT aspirants.
            </p>
            <ul>
              <li><strong>No Official Affiliation:</strong> EZCAT is NOT endorsed, sponsored, affiliated with, or recognized by the Indian Institutes of Management (IIMs), the CAT Convening Committee, or any official testing organization.</li>
              <li><strong>Trademarks:</strong> &quot;CAT&quot;, &quot;Common Admission Test&quot;, and &quot;IIM&quot; are registered trademarks of their respective owners. Their mention in this application is strictly for descriptive and nominative educational reference under fair use.</li>
              <li><strong>No Score Guarantee:</strong> Practice on EZCAT does not guarantee admission to any institution or any specific percentile score on the CAT examination.</li>
            </ul>
          </section>

          <section>
            <h2>4. Question Bank &amp; Educational Content</h2>
            <p>
              Previous year questions (PYQs), answers, and explanations included in EZCAT are compiled from past publicly available examination materials and educational community contributions for personal non-commercial study.
            </p>
            <p>
              While we strive for accuracy in solutions and answer keys, errors may occasionally occur. If you discover a typographical error, ambiguous phrasing, or incorrect key in any question, please submit a correction via GitHub Issues.
            </p>
          </section>

          <section>
            <h2>5. AI Coach &amp; Machine Learning Disclaimers</h2>
            <p>
              EZCAT allows users to connect their own API keys to query third-party language models for step-by-step guidance and concept explanations.
            </p>
            <ul>
              <li><strong>AI-Generated Output:</strong> Explanations provided by the AI Coach are generated probabilistically by external models. They should be used as conceptual aids rather than definitive mathematical or linguistic proofs.</li>
              <li><strong>User Responsibility:</strong> You are responsible for any API usage fees incurred with your chosen AI provider (e.g. OpenAI, Google, Anthropic, Groq). EZCAT charges no fees and takes no commission on your API usage.</li>
            </ul>
          </section>

          <section>
            <h2>6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              IN NO EVENT SHALL THE AUTHORS, MAINTAINERS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2>7. Governing Law &amp; Community Contributions</h2>
            <p>
              Any disputes relating to these Terms will be resolved under applicable local laws. By submitting code, questions, or issues to our public GitHub repository, you grant the project maintainers the right to distribute your contributions under the project&apos;s MIT license.
            </p>
          </section>

          <section>
            <h2>8. Contact &amp; Questions</h2>
            <p>
              For questions regarding these Terms or licensing, please contact us by submitting an issue on GitHub:
            </p>
            <p>
              <a href={siteLinks.issues} target="_blank" rel="noopener noreferrer">
                {siteLinks.issues}
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
