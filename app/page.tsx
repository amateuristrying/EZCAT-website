'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowUpRight, BookOpen, Download, Clock, Star, Target, TrendingUp, Zap, Heart, Menu, Monitor, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { siteLinks } from '@/lib/site-links';

type Panel = 'app' | 'docs' | 'github' | null;
type ArtName = 'hero' | 'reality' | 'commute' | 'focus' | 'papers' | 'mocks' | 'analysis' | 'target' | 'calendar' | 'brain' | 'relax';
type ArtSpec = { source: string; originalWidth: number; originalHeight: number; x: number; y: number; width: number; height: number; alt: string };

const illustrations: Record<ArtName, ArtSpec> = {
  hero: { source: 'hero-clean-background.png', originalWidth: 1536, originalHeight: 1024, x: 790, y: 120, width: 635, height: 790, alt: 'A hand lifts a question paper out of a pile of scattered papers.' },
  reality: { source: '02-the-reality.png', originalWidth: 1536, originalHeight: 1024, x: 40, y: 290, width: 780, height: 505, alt: 'An overwhelmed student rests their head on a laptop, surrounded by papers and a cup of coffee.' },
  commute: { source: '03-real-life-real-goals.png', originalWidth: 1536, originalHeight: 1024, x: 610, y: 135, width: 335, height: 756, alt: 'Busy commuters share a crowded train, making room for everyday life and their goals.' },
  focus: { source: '04-focus-on-what-matters.png', originalWidth: 1536, originalHeight: 1024, x: 150, y: 602, width: 1245, height: 379, alt: 'A playful illustration of a student balancing study, time, a trophy, and everyday life.' },
  papers: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 137, y: 417, width: 160, height: 120, alt: '' },
  mocks: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 440, y: 417, width: 150, height: 120, alt: '' },
  analysis: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 735, y: 417, width: 155, height: 120, alt: '' },
  target: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 139, y: 704, width: 160, height: 117, alt: '' },
  calendar: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 440, y: 704, width: 150, height: 117, alt: '' },
  brain: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 732, y: 704, width: 155, height: 117, alt: '' },
  relax: { source: '05-features-and-closing-cta.png', originalWidth: 1024, originalHeight: 1536, x: 128, y: 1062, width: 827, height: 335, alt: 'A relaxed student uses EZCAT on their phone, resting their head on a stack of books.' },
};

function Illustration({ name, className = '', eager = false }: { name: ArtName; className?: string; eager?: boolean }) {
  const art = illustrations[name];
  return <div className={'art art-' + name + ' ' + className} style={{ aspectRatio: art.width + ' / ' + art.height }} role={art.alt ? 'img' : undefined} aria-label={art.alt || undefined} aria-hidden={!art.alt || undefined}>
    <img src={'/design/' + art.source} alt="" width={art.originalWidth} height={art.originalHeight} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" draggable={false}
      style={{ width: (art.originalWidth / art.width) * 100 + '%', left: (-art.x / art.width) * 100 + '%', top: (-art.y / art.height) * 100 + '%' } as CSSProperties} />
  </div>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.768-.244.768-.543 0-.268-.01-.977-.015-1.916-3.129.68-3.79-1.507-3.79-1.507-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.078-.686.078-.686 1.13.08 1.724 1.16 1.724 1.16 1.006 1.724 2.64 1.226 3.283.938.102-.73.394-1.227.716-1.509-2.498-.284-5.124-1.249-5.124-5.56 0-1.229.439-2.234 1.16-3.022-.116-.284-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.155a10.787 10.787 0 0 1 5.632 0c2.148-1.458 3.091-1.155 3.091-1.155.615 1.55.229 2.694.113 2.978.722.788 1.158 1.793 1.158 3.022 0 4.323-2.63 5.272-5.136 5.551.404.349.766 1.035.766 2.087 0 1.507-.014 2.723-.014 3.093 0 .302.203.652.774.542A11.251 11.251 0 0 0 12 .75Z" /></svg>;
}

function Ink({ children, circle = false, className = '' }: { children: ReactNode; circle?: boolean; className?: string }) {
  return <span className={'ink ' + (circle ? 'ink-circle ' : '') + className}>
    {children}
    <svg viewBox={circle ? '0 0 240 80' : '0 0 300 18'} preserveAspectRatio="none" aria-hidden="true">
      <path className="ink-stroke" pathLength="1" d={circle ? 'M203 9 C157 -1 42 1 15 23 C-30 65 123 83 205 64 C250 54 239 27 215 17' : 'M4 12 C81 3 191 4 295 8'} />
    </svg>
  </span>;
}

const benefits = [
  { Icon: Clock, title: 'Saves You Time', body: 'No more searching for what to study next.' },
  { Icon: Target, title: 'Targets Your Weakness', body: "Practice what you’re weak at, not what's easy." },
  { Icon: TrendingUp, title: 'Tracks & Improves', body: 'See real progress with every question you solve.' },
  { Icon: Zap, title: 'Built for Real Life', body: 'Short on time? We’ve got you.' },
];

const features: { art: ArtName; title: string; body: string }[] = [
  { art: 'papers', title: 'Real PYQs. Curated Daily.', body: 'Practice real CAT previous year questions handpicked for you every single day.' },
  { art: 'mocks', title: 'Mocks That Feel Real', body: 'Mini, Sectional, and Full CAT mocks that simulate the actual exam experience.' },
  { art: 'analysis', title: 'AI-Powered Analysis', body: 'Smart insights, weakness detection, and personalized recommendations.' },
  { art: 'target', title: 'Focus on Weakness', body: 'We track what you struggle with and help you improve it step by step.' },
  { art: 'calendar', title: 'Build a Daily Habit', body: 'Stay consistent with streaks, daily goals, and progress that keeps you motivated.' },
  { art: 'brain', title: 'AI Coach by Your Side', body: 'Get topic-wise guidance, smart advice, and the right next step every day.' },
];

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [panel, setPanel] = useState<Panel>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        // Preserve layout styles such as the illustration's inline aspect ratio.
        const entranceCleanup = 'transform,opacity';
        gsap.timeline({ defaults: { ease: 'power2.out' } })
          .from('.hero-copy > *', { y: 22, opacity: 0, duration: 0.8, stagger: 0.13, clearProps: entranceCleanup })
          .from('.hero-art', { y: 28, rotation: -1.5, opacity: 0, duration: 1.2, clearProps: entranceCleanup }, 0.18);

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 28, opacity: 0, duration: 0.85, ease: 'power2.out', clearProps: entranceCleanup,
            scrollTrigger: { trigger: element, start: 'top 92%', once: true },
          });
        });

        gsap.utils.toArray<SVGPathElement>('.ink-stroke').forEach((path) => {
          gsap.fromTo(path, { strokeDasharray: 1, strokeDashoffset: 1 }, {
            strokeDashoffset: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: path.closest('.ink'), start: 'top 88%', once: true },
          });
        });

        gsap.from('.feature-card', {
          y: 24, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power2.out', clearProps: entranceCleanup,
          scrollTrigger: { trigger: '.feature-grid', start: 'top 86%', once: true },
        });
      }, root);
      const refresh = () => ScrollTrigger.refresh();
      if (document.readyState !== 'complete') window.addEventListener('load', refresh, { once: true });
      document.fonts.ready.then(refresh);
      return () => { window.removeEventListener('load', refresh); context.revert(); };
    });
    return () => media.revert();
  }, []);

  const openPanel = (name: Exclude<Panel, null>) => {
    setMenuOpen(false);
    setPanel(name);
  };

  const linkOrButton = (name: 'docs' | 'github', children: ReactNode) => siteLinks[name]
    ? <a href={siteLinks[name]!} target="_blank" rel="noopener noreferrer">{children}</a>
    : <button type="button" onClick={() => openPanel(name)}>{children}</button>;

  const appButton = (className: string, label = 'Get the App') => siteLinks.webApp
    ? <a className={'button ' + className} href={siteLinks.webApp} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a>
    : <button type="button" className={'button ' + className} onClick={() => openPanel('app')}>{label}<ArrowUpRight aria-hidden="true" /></button>;

  return <div ref={root} className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark nav-wordmark" href="#home" aria-label="EZCAT home"><span>ez</span>cat</a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {linkOrButton('docs', <><BookOpen aria-hidden="true" />Docs</>)}
        <button type="button" onClick={() => openPanel('app')}><Download aria-hidden="true" />Downloads</button>
        {linkOrButton('github', <><GithubIcon />GitHub</>)}
      </nav>
      <div className="header-actions">
        {appButton('button-outline')}
        <button type="button" className="menu-button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu /></button>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-grid section-inner">
          <div className="hero-copy">
            <h1 className="wordmark hero-wordmark" id="hero-heading" aria-label="EZCAT"><span>ez</span>cat</h1>
            <h2>CAT preparation,<br />without the extra work.</h2>
            <p>Daily, AI-curated practice from real CAT papers.<br className="desktop-break" /> Open the app, solve, improve, repeat.</p>
            <div className="hero-actions">
              {appButton('button-solid', 'Get Started')}
              <a className="text-link" href="#the-reality">Learn More</a>
            </div>
          </div>
          <Illustration name="hero" className="hero-art" eager />
        </div>
      </section>

      <section className="reality story-section" id="the-reality" aria-labelledby="reality-heading">
        <div className="reality-grid">
          <div data-reveal><Illustration name="reality" /></div>
          <div className="reality-copy" data-reveal>
            <p className="eyebrow eyebrow-orange">The Reality</p>
            <h2 id="reality-heading">CAT prep is already<br className="wide-break" /> overwhelming.</h2>
            <p className="body-large">Endless resources, long lectures, scattered PDFs, confusing plans, and zero clarity on what to practice today.</p>
            <span className="small-rule" aria-hidden="true" />
            <div className="callout callout-warm">
              <span className="warning-doodle" aria-hidden="true">!</span>
              <p>Don’t let your prep app become another reason to feel stuck.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="life story-section" aria-labelledby="life-heading">
        <div className="life-grid section-inner">
          <div className="life-copy" data-reveal>
            <p className="eyebrow">Real life, real goals</p>
            <h2 id="life-heading">You’re managing<br /> <Ink>more</Ink> than just<br /> CAT prep.</h2>
            <p className="body-copy">College, work, projects, responsibilities, commutes, relationships—life doesn’t pause for your preparation.</p>
            <div className="callout callout-blue">
              <Clock className="callout-icon" aria-hidden="true" />
              <p>Your prep app should fit into your life, not take it <Ink>over.</Ink></p>
            </div>
          </div>
          <div className="commute-wrap" data-reveal><Illustration name="commute" /></div>
          <div className="life-copy life-right" data-reveal>
            <p className="eyebrow">Studying is hard enough</p>
            <h2>Your prep app<br /> shouldn’t make it<br /> <Ink circle>harder.</Ink></h2>
            <p className="body-copy">Too many tools. Too many tabs.<br />Too many things to keep track of.<br />Too little time to actually practice.</p>
            <div className="callout callout-blue">
              <span className="star-ring"><Star className="callout-icon" aria-hidden="true" /></span>
              <p>Keep it simple.<br />Focus on <Ink>what matters.</Ink></p>
            </div>
          </div>
        </div>
        <blockquote className="life-quote" data-reveal>
          <span className="quote-open" aria-hidden="true">“</span>
          <p>When life is busy, a clear path<br className="desktop-break" /> makes all <Ink>the difference.</Ink></p>
          <span className="quote-close" aria-hidden="true">”</span>
        </blockquote>
      </section>

      <section className="focus story-section" aria-labelledby="focus-heading">
        <div className="section-inner">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">We strip away the noise</p>
            <h2 id="focus-heading">So you can focus on<br /> what <Ink>actually</Ink> matters.</h2>
            <p>No clutter. No distractions. Just a smart system that<br className="desktop-break" /> plans your practice, tracks your progress, and helps you improve.</p>
          </div>
          <div className="benefits">
            {benefits.map(({ Icon, title, body }) => <div className="benefit" key={title} data-reveal>
              <Icon aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div>
            </div>)}
          </div>
          <div className="focus-art-wrap" data-reveal><Illustration name="focus" /></div>
        </div>
      </section>

      <section className="features story-section" id="features" aria-labelledby="features-heading">
        <div className="features-inner">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Everything you need. Nothing you don’t.</p>
            <h2 id="features-heading">Practice. Analyze. Improve.<br /> All in <Ink>one place.</Ink></h2>
            <p>ezcat makes CAT preparation simple, focused, and effective<br className="desktop-break" /> so you can make every minute count.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ art, title, body }) => <article className="feature-card" key={title}>
              <Illustration name={art} className="feature-illustration" />
              <h3>{title}</h3><p>{body}</p>
            </article>)}
          </div>

          <div className="closing" id="downloads">
            <div className="closing-copy" data-reveal>
              <p className="eyebrow">No clutter. No distractions.</p>
              <h2>Just you, your goals,<br />and <Ink>meaningful practice.</Ink></h2>
              <p>Open ezcat. Solve. Improve. Repeat.</p>
              {appButton('button-navy')}
            </div>
            <div className="relax-wrap" data-reveal><Illustration name="relax" /></div>
          </div>
          <footer className="site-footer" data-reveal>
            <h2>Your <Ink>last</Ink> CAT prep application.</h2>
            <p><Heart aria-hidden="true" />Built with love for CAT aspirants</p>
          </footer>
        </div>
      </section>
    </main>

    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetContent className="mobile-sheet">
        <SheetTitle><span className="wordmark"><span>ez</span>cat</span></SheetTitle>
        <SheetDescription className="sr-only">EZCAT navigation</SheetDescription>
        <nav aria-label="Mobile navigation">
          {linkOrButton('docs', <><BookOpen />Docs<ArrowUpRight /></>)}
          <button type="button" onClick={() => openPanel('app')}><Download />Downloads<ArrowUpRight /></button>
          {linkOrButton('github', <><GithubIcon />GitHub<ArrowUpRight /></>)}
          <a href="#features" onClick={() => setMenuOpen(false)}>Learn More<ArrowUpRight /></a>
        </nav>
      </SheetContent>
    </Sheet>

    <Dialog open={panel !== null} onOpenChange={(open) => { if (!open) setPanel(null); }}>
      <DialogContent className="ezcat-dialog">
        {panel === 'app' && <>
          <span className="dialog-mark wordmark" aria-hidden="true"><span>ez</span>cat</span>
          <DialogTitle>Get EZCAT</DialogTitle>
          <DialogDescription>App links are not available here yet. Explore what EZCAT can do while they’re being prepared.</DialogDescription>
          <div className="platform-list">
            {([{ label: 'Web app', Icon: Monitor, href: siteLinks.webApp }, { label: 'Android', Icon: Smartphone, href: siteLinks.android }, { label: 'iOS', Icon: Smartphone, href: siteLinks.ios }]).map(({ label, Icon, href }) =>
              href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer"><Icon /><strong>{label}</strong><ArrowUpRight /></a> :
                <div key={label}><Icon /><strong>{label}</strong><span>Not available yet</span></div>
            )}
          </div>
          <a className="button button-solid dialog-action" href="#features" onClick={() => setPanel(null)}>Explore the features <ArrowUpRight /></a>
        </>}
        {panel === 'docs' && <>
          <BookOpen className="dialog-icon" />
          <DialogTitle>Getting to know EZCAT</DialogTitle>
          <DialogDescription>Your CAT preparation, in one place.</DialogDescription>
          <div className="docs-content">
            <div><h3>Practice a little, every day.</h3><p>Work through curated previous-year questions across VARC, DILR, and Quantitative Aptitude.</p></div>
            <div><h3>Step into exam mode.</h3><p>Choose a 15-minute mini mock, a 40-minute sectional, or a full 120-minute CAT mock.</p></div>
            <div><h3>Learn from every attempt.</h3><p>Track your accuracy, timing, and weak topics. Bring your own API key for personalized AI coaching.</p></div>
          </div>
          <a className="button button-solid dialog-action" href="#features" onClick={() => setPanel(null)}>Explore EZCAT <ArrowUpRight /></a>
        </>}
        {panel === 'github' && <>
          <span className="dialog-icon"><GithubIcon /></span>
          <DialogTitle>Open source. Built for you.</DialogTitle>
          <DialogDescription>EZCAT is an open-source CAT preparation companion. The repository link is not available here yet.</DialogDescription>
          <a className="button button-solid dialog-action" href="#features" onClick={() => setPanel(null)}>Explore EZCAT <ArrowUpRight /></a>
        </>}
      </DialogContent>
    </Dialog>
  </div>;
}
