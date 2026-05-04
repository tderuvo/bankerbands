import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_CARDS = [
  {
    label: '01',
    title: 'What Are Banker Bands?',
    desc: 'The basics — what they are, how they work, and why they matter.',
    href: '/what-are-banker-bands',
    cta: 'Read more',
  },
  {
    label: '02',
    title: 'History',
    desc: 'From the Federal Reserve to pop culture — a surprisingly rich story.',
    href: '/history',
    cta: 'Explore the history',
  },
  {
    label: '03',
    title: 'Modern Uses',
    desc: 'Offices, studios, street style. Banker bands have travelled far.',
    href: '/modern-uses',
    cta: 'See modern uses',
  },
  {
    label: '04',
    title: 'Gallery',
    desc: 'A visual reference — colours, denominations, and real-world context.',
    href: '/gallery',
    cta: 'View gallery',
  },
];

export default function HomePage() {
  useEffect(() => {
    document.title = 'Banker Bands — From Currency Straps to Cultural Icon';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'Banker Bands — the humble currency strap that crossed over from bank vaults into everyday life, fashion, and culture.';
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <p className="hero__eyebrow">BankerBands.com</p>
        <h1 className="hero__h1">Banker<br />Bands</h1>
        <p className="hero__sub">From Currency Straps to Cultural Icon</p>
        <p className="hero__body">
          A banker band is a simple paper strap used to bundle currency.
          It started in bank vaults and counting rooms, but somewhere along
          the way it became something else — a shorthand for wealth, a prop in
          music videos, a practical tool in everyday life. This site tells that story.
        </p>
        <div className="hero__links">
          <Link to="/what-are-banker-bands" className="hero__link">What are they</Link>
          <Link to="/history"               className="hero__link">History</Link>
          <Link to="/modern-uses"           className="hero__link">Modern uses</Link>
          <Link to="/gallery"               className="hero__link">Gallery</Link>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '3rem 2rem 0' }}>
        <div className="img-placeholder img-placeholder--wide">Image — stacked bills with banker bands</div>
      </div>

      {/* ── Nav cards ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 2rem' }}>
        <div className="nav-cards">
          {NAV_CARDS.map(card => (
            <Link key={card.href} to={card.href} className="nav-card">
              <p className="nav-card__label">{card.label}</p>
              <h2 className="nav-card__title">{card.title}</h2>
              <p className="nav-card__desc">{card.desc}</p>
              <span className="nav-card__arrow">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
