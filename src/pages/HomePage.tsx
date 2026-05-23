import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_CARDS = [
  {
    label: '01',
    title: 'What Are Banker Bands?',
    desc: 'An elastic band, a shirt sleeve, and a simple problem solved with elegance.',
    href: '/what-are-banker-bands',
    cta: 'Read more',
  },
  {
    label: '02',
    title: 'History',
    desc: 'From the counting room to the card table — a working accessory with a long story.',
    href: '/history',
    cta: 'Explore the history',
  },
  {
    label: '03',
    title: 'Modern Uses',
    desc: 'Craft bartenders, musicians, heritage menswear. The band is back.',
    href: '/modern-uses',
    cta: 'See modern uses',
  },
  {
    label: '04',
    title: 'Gallery',
    desc: 'Archival references, editorial photography, and the object up close.',
    href: '/gallery',
    cta: 'View gallery',
  },
];

export default function HomePage() {
  useEffect(() => {
    document.title = 'Banker Bands — The Forgotten Accessory of Order, Style, and Work';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'Banker Bands — sleeve garters worn by bankers, clerks, bartenders, and card dealers. A forgotten accessory with real heritage, ready for a modern return.';
  }, []);

  return (
    <>
      {/* ── Split hero ── */}
      <section className="hero-split">
        <div className="hero-split__inner">

          {/* Left: text */}
          <div className="hero-split__text">
            <p className="hero__eyebrow">BankerBands.com</p>
            <h1 className="hero__h1">Banker<br />Bands</h1>
            <p className="hero__sub">The Forgotten Accessory of Order, Style, and Work</p>
            <p className="hero__body">
              Before cuffs were tailored and sleeves were exact, men used a simple band
              to bring order to the shirt. Banker bands — also known as sleeve garters or
              arm garters — kept sleeves clean, controlled, and out of the way. Once
              practical, then iconic, now ready for a modern return.
            </p>
            <div className="hero__links">
              <Link to="/what-are-banker-bands" className="hero__link">What are they</Link>
              <Link to="/history"               className="hero__link">History</Link>
              <Link to="/modern-uses"           className="hero__link">Modern uses</Link>
              <Link to="/gallery"               className="hero__link">Gallery</Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="hero-split__image">
            <img
              src="/images/hero.png"
              alt="Elegant gentleman wearing banker bands at a cosmopolitan restaurant"
              width={1402}
              height={1122}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

        </div>
      </section>

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
