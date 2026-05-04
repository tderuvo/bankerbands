import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITEMS = [
  { caption: 'Classic black elastic sleeve garter with metal clasp — product detail',  aspect: 'square' },
  { caption: 'White dress shirt, forearm close-up — banker band in situ',              aspect: 'card' },
  { caption: 'Archival photograph — bank clerk at a roll-top desk, c. 1895',           aspect: 'square' },
  { caption: 'Card dealer at a felt table — sleeve garters, braces, white shirt',      aspect: 'card' },
  { caption: 'Craft bartender — mid-pour, sleeve garters at the forearm',              aspect: 'square' },
  { caption: 'Jazz musician with trumpet, 1920s — braided elastic sleeve garters',     aspect: 'card' },
  { caption: 'Pair of striped elastic garters — flat lay on white linen',              aspect: 'square' },
  { caption: 'Bookkeeper at ledger — counting room interior, late 19th century',       aspect: 'card' },
  { caption: 'Modern product shot — matte black elastic, adjustable clasp',            aspect: 'square' },
  { caption: 'Stage performance — folk musician, detail of shirt sleeve and garter',   aspect: 'card' },
  { caption: 'Heritage menswear — full look with braces and sleeve garters',           aspect: 'square' },
  { caption: 'The object alone — single sleeve garter on a white surface',             aspect: 'card' },
];

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Banker Bands Gallery — Sleeve Garters in Context | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'A visual reference for banker bands and sleeve garters — archival photographs, product detail, bartenders, card dealers, musicians, and heritage menswear.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Visual Reference</p>
        <h1 className="page-hero__h1">Gallery</h1>
        <p className="page-hero__intro">
          Archival references, product detail, and the banker band in its natural
          contexts — the bar, the table, the counting room, the stage.
        </p>
      </div>

      <div className="gallery-grid">
        {ITEMS.map((item, i) => (
          <div key={i} className="gallery-item">
            <div className={`img-placeholder img-placeholder--${item.aspect}`}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <p className="gallery-item__caption">{item.caption}</p>
          </div>
        ))}
      </div>

      <hr className="section-divider" />

      <div className="prose" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
        <h2>Learn More</h2>
        <p>
          Explore <Link to="/what-are-banker-bands">what banker bands are</Link>,
          their <Link to="/history">history</Link>, and their{' '}
          <Link to="/modern-uses">modern uses</Link>.
        </p>
      </div>
    </div>
  );
}
