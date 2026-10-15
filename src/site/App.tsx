import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { analyticsProjects, contentProjects, ecosystems, profile, skillGroups, writingCategories } from './content';

const pages = [
  { label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Analytics', path: '/analytics' },
  { label: 'Writing', path: '/writing' }, { label: 'Experience', path: '/experience' }, { label: 'Contact', path: '/contact' },
];
const currentPage = () => window.location.pathname.replace(/\/$/, '') || '/';

function Header({ page }: { page: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [page]);
  return <header className="site-header"><a className="brand" href="/" aria-label="Kehlany home">K<span>.</span></a><a className="header-role" href="/about">CONTENT WRITER <i>×</i> DATA ANALYST</a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{pages.map(p => <a key={p.path} href={p.path} aria-current={page === p.path ? 'page' : undefined} onClick={() => setOpen(false)}>{p.label}</a>)}</nav></header>;
}

function Footer() {
  return <footer className="site-footer"><a className="brand footer-brand" href="/">K<span>.</span></a><p>Thoughtful words. Useful insight.</p><div className="footer-links"><a href={profile.x} target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={13}/></a></div><span className="copyright">© {new Date().getFullYear()} KEHLANY</span></footer>;
}

function PageIntro({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return <div className="page-intro"><h1>{title}</h1>{children && <div className="intro-copy">{children}</div>}</div>;
}

function Home() {
  return <><section className="home-hero"><div className="hero-copy"><p className="hero-name">KEHLANY</p><h1>Words with wit.<br/><em>Data with depth.</em></h1><p className="hero-tagline">{profile.tagline}</p><p className="hero-role">CONTENT WRITER <span>×</span> ASPIRING DATA ANALYST</p><div className="hero-actions"><a className="button button-dark" href="/analytics">Explore my work <ArrowRight size={15}/></a><a className="quiet-link" href="/about">A little about me <ArrowDownRight size={15}/></a></div><a className="hero-scroll" href="#selected"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a></div><div className="hero-portrait"><img src="/hero_profile.jpeg" alt="Kehlany in a white blouse"/><span className="portrait-note">WORDS · DATA · CURIOSITY</span><span className="portrait-star" aria-hidden="true">✳</span><span className="portrait-scribble" aria-hidden="true">tell it<br/>with feeling</span></div><span className="hero-edge-note">MAKE MEANING MOVE</span><span className="hero-orbit-word" aria-hidden="true">signal / story / sense</span></section><section className="home-intro" id="selected"><p className="home-intro-text">I make complex things <em>feel clear.</em><br/>Then I look for what the details <em>can tell us.</em></p><a className="round-link" href="/about" aria-label="More about Kehlany"><ArrowDownRight size={20}/></a></section><section className="home-work"><div className="work-heading"><h2>A few good questions,<br/><em>followed through.</em></h2><a href="/analytics">All projects <ArrowRight size={13}/></a></div><div className="home-projects">{analyticsProjects.map(p=><a className="home-project" href="/analytics" key={p.number}><span className="project-number">{p.number}</span><span><small>{p.category}</small><b>{p.title}</b></span><ArrowUpRight size={16}/></a>)}</div><div className="home-note"><span>Words have work to do.</span><p>From Web3 communities to construction consultancy, I help ideas find their people.</p><a className="quiet-link" href="/writing">See what I write <ArrowRight size={14}/></a></div></section><section className="home-cta"><h2>Got a knotty question?<br/><em>Let’s make it make sense.</em></h2><a className="button button-cream" href="/contact">Start a conversation <ArrowUpRight size={15}/></a></section></>;
}

function About() {
  return <><section className="page-shell"><PageIntro title={<>Curious by nature.<br/><em>Clear by intention.</em></>}><p>{profile.bio}</p></PageIntro><div className="about-profile"><div className="about-image"><img src="/hero_profile.jpeg" alt="Portrait of Kehlany"/><span>The person behind the words</span></div><div className="about-details"><p className="large-quote">“The best work makes the complicated feel <em>human.</em>”</p><p className="body-copy">Quantity Surveying taught me to look closely. Web3 taught me to stay curious. Writing taught me that clarity is a kindness. Now I bring those instincts together, giving ideas a voice and data a point of view.</p><div className="metric-row"><div><b>2+</b><span>YEARS IN WEB3</span></div><div><b>02</b><span>CONNECTED PRACTICES</span></div><div><b>∞</b><span>QUESTIONS TO FOLLOW</span></div></div><a className="quiet-link" href="/experience">Meet the communities <ArrowRight size={14}/></a></div></div></section><section className="skill-section"><div className="skill-heading"><h2>Words, tools, and <em>good instincts.</em></h2><p>A growing toolkit for turning what I notice into something useful.</p></div><div className="skill-grid">{skillGroups.map((group,i)=><article className="skill-card" key={group.name}><span className="skill-index">0{i+1}</span><h3>{group.name}</h3><div className="skill-chips">{group.items.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></section><div className="page-next"><a href="/analytics">Next: Analytics <ArrowRight size={15}/></a></div></>;
}

function ProjectGraphic({ type }: { type: string }) {
  return <div className={`project-graphic ${type}`} aria-hidden="true"><div className="graphic-orbit"><i/><i/><i/><i/><b/></div><span className="graphic-label">FOLLOW THE SIGNAL</span><span className="graphic-cross">✳</span></div>;
}

function Analytics() {
  return <><section className="page-shell"><PageIntro title={<>Finding patterns.<br/><em>Asking better questions.</em></>}><p>SQL sorts the signal. Excel gives it shape. Power BI lets the story breathe. I use each tool to follow the question, not just the numbers.</p></PageIntro><div className="analytics-grid">{analyticsProjects.map(p=><article className="analytics-card" key={p.number}><ProjectGraphic type={p.visual}/><div className="analytics-card-body"><div className="project-meta"><span>{p.number} / {p.category}</span><span>DATA ANALYSIS</span></div><h2>{p.title}</h2><p>{p.description}</p><div className="tech-tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions">{p.link ? <a href={p.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14}/></a> : <span className="link-pending">Project link coming soon</span>}</div></div></article>)}</div><p className="honesty-note"><i/> Project summaries describe the work provided. Dashboard and GitHub links can join the story when ready.</p></section><div className="page-next"><a href="/writing">Next: Writing <ArrowRight size={15}/></a></div></>;
}

function Writing() {
  return <><section className="page-shell"><PageIntro title={<>Words with wit.<br/><em>Ideas that stick.</em></>}><p>Good writing does more than explain. It gives an idea somewhere to land. From Web3 to construction, I turn specialist subjects into clear, human stories people want to spend time with.</p></PageIntro><div className="writing-feature"><div className="writing-feature-copy"><h2>Big ideas, without the big words.</h2><p>Blockchain, crypto, AI agents, gaming, and new technologies move quickly. My work makes room to pause, ask better questions, and make the unfamiliar feel within reach. In social content, a little rhythm can make a useful idea hard to scroll past.</p><a href={profile.x} target="_blank" rel="noreferrer" className="text-arrow">Find me on X <ArrowUpRight size={15}/></a></div><div className="writing-aside"><span className="writing-aside-star">✳</span><p>Research<br/>first.<br/><em>Human always.</em></p></div></div><div className="writing-types"><h2 className="section-title">Stories shaped for their <em>audience.</em></h2><div className="content-work-grid">{contentProjects.map(p=><article className="content-work-card" key={p.number}><h3>{p.title}</h3><p>{p.description}</p><div className="tech-tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div><div className="writing-types"><h2 className="section-title">Ways I work with words.</h2><div className="writing-list">{writingCategories.map((c,i)=><div key={c}><span>0{i+1}</span><b>{c}</b><ArrowUpRight size={15}/></div>)}</div></div><p className="honesty-note"><i/> Published writing links can be added here when ready.</p></section><div className="page-next"><a href="/experience">Next: Experience <ArrowRight size={15}/></a></div></>;
}

function Experience() {
  return <><section className="page-shell"><PageIntro title={<>Many worlds.<br/><em>One curious mind.</em></>}><p>One thread runs through the work: listen closely, notice what matters, and make it easier for someone else to see it too.</p></PageIntro><div className="experience-list"><article className="experience-item"><div><h2>Social media, with substance.</h2><p className="experience-context">Vicanto · Quantity Surveying & construction consultancy</p><p>I developed educational, professional, and engaging Instagram and LinkedIn content, helping specialist services sound clear, useful, and human.</p><div className="tech-tags"><span>Instagram</span><span>LinkedIn</span><span>Canva</span><span>CapCut</span></div></div><span className="experience-mark">↗</span></article><article className="experience-item"><div><h2>Web3, where the conversation moves.</h2><p className="experience-context">2+ years · Web3, blockchain & emerging technology</p><p>From blockchain to creator communities, I have made and shared content across fast-moving spaces, learning how to explain what is next while it is still becoming.</p><div className="tech-tags"><span>Research</span><span>X / Twitter</span><span>Canva</span><span>Community</span></div></div><span className="experience-mark">↗</span></article><article className="experience-item"><div><h2>Socials Rising, Cohort 2.</h2><p className="experience-context">Creator incubator programme · Completed</p><p>A completed creator incubator, with new tools for turning good ideas into stronger work.</p></div><span className="experience-mark">✳</span></article></div><div className="ecosystem-block"><h2 className="section-title">Communities that made the map <em>wider.</em></h2><div className="ecosystem-tags">{ecosystems.map((name,i)=><span key={name}><i>0{i+1}</i>{name}</span>)}</div></div></section><div className="page-next"><a href="/contact">Next: Contact <ArrowRight size={15}/></a></div></>;
}

function Contact() {
  return <><section className="contact-page"><PageIntro title={<>A good idea starts<br/><em>with a hello.</em></>}><p>Have a knotty question, a story to shape, or a project that needs a clearer view? Send a note. Let’s find the thread and follow it somewhere useful.</p></PageIntro><div className="contact-panel"><div><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18}/></a><p>For writing, content strategy, social media, data analysis, and interesting collaborations.</p></div><div className="contact-socials"><a href={profile.x} target="_blank" rel="noreferrer"><span>X / TWITTER</span><ArrowUpRight size={15}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><ArrowUpRight size={15}/></a><div><span>DISCORD</span><b>{profile.discord}</b></div></div></div></section><div className="page-next"><a href="/">Back to home <ArrowLeft size={15}/></a></div></>;
}

function NotFound() { return <section className="page-shell not-found"><h1>That page took<br/><em>a different path.</em></h1><a className="button button-dark" href="/">Back home <ArrowLeft size={15}/></a></section>; }

export default function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => { const update = () => setPage(currentPage()); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update); }, []);
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('.home-hero .hero-copy > *, .hero-portrait, .home-intro, .home-work > *, .home-cta, .page-intro > *, .about-profile > *, .skill-card, .analytics-card, .writing-feature > *, .content-work-card, .writing-list > div, .experience-item, .ecosystem-tags > span, .contact-panel > *');
    targets.forEach((item, index) => {
      item.classList.add('scroll-reveal');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 75}ms`);
    });
    let observer: IntersectionObserver | undefined;
    if (!reduceMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      targets.forEach(item => observer?.observe(item));
    } else targets.forEach(item => item.classList.add('is-visible'));

    let frame = 0;
    const reactToScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>('.project-graphic').forEach(graphic => {
          const rect = graphic.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          graphic.style.setProperty('--scroll-angle', `${Math.round(progress * 160)}deg`);
        });
        const portrait = document.querySelector<HTMLElement>('.hero-portrait');
        if (portrait && !reduceMotion) portrait.style.setProperty('--parallax-y', `${Math.min(window.scrollY * 0.11, 52)}px`);
      });
    };
    reactToScroll();
    window.addEventListener('scroll', reactToScroll, { passive: true });
    return () => { observer?.disconnect(); window.removeEventListener('scroll', reactToScroll); cancelAnimationFrame(frame); };
  }, [page]);
  const content: Record<string, React.ReactNode> = { '/': <Home/>, '/about': <About/>, '/analytics': <Analytics/>, '/writing': <Writing/>, '/experience': <Experience/>, '/contact': <Contact/> };
  return <><Header page={page}/><main key={page}>{content[page] ?? <NotFound/>}</main><Footer/></>;
}
