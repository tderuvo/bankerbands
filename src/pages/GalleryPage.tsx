import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITEMS = [
  { caption: 'Standard ABA currency straps — full denomination set',            aspect: 'card' },
  { caption: 'A strap of $100 bills — 100 notes, $10,000 total',               aspect: 'square' },
  { caption: 'Strapping machine in a bank counting room',                        aspect: 'card' },
  { caption: 'Banded bills stacked into a brick — 10 straps, $100,000',        aspect: 'square' },
  { caption: 'Colour reference — mustard ($1) through green ($100)',            aspect: 'card' },
  { caption: 'Prop bills from a film production — strapped and stacked',        aspect: 'square' },
  { caption: 'Close-up — ABA denomination label detail',                        aspect: 'card' },
  { caption: 'Retail cash drawer organised with currency straps',               aspect: 'square' },
  { caption: 'Banker bands used for document organisation',                      aspect: 'card' },
  { caption: 'Armoured transport pouches prepared with banded currency',        aspect: 'square' },
  { caption: 'Hand-strapping technique — the teller fold',                      aspect: 'card' },
  { caption: 'The $100 strap up close — green band, printed denomination',     aspect: 'square' },
];

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Banker Bands Gallery | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'A visual reference for banker bands — denomination colours, counting rooms, bricks, props, and modern uses.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Visual Reference</p>
        <h1 className="page-hero__h1">Gallery</h1>
        <p className="page-hero__intro">
          Denomination colours, counting rooms, prop stacks, and everyday contexts.
          A visual companion to the full story of the banker band.
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
          Images will be updated as the archive grows. In the meantime, explore{' '}
          <Link to="/what-are-banker-bands">what banker bands are</Link>, their{' '}
          <Link to="/history">history</Link>, and their{' '}
          <Link to="/modern-uses">modern uses</Link>.
        </p>
      </div>
    </div>
  );
}
