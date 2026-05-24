import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Gallery items — add captions / aspect here.
   To add a new slot, append a new entry.
   Images are loaded from /images/01.png, 02.png …
   Filenames are derived automatically from the array index.
───────────────────────────────────────────── */
const ITEMS: Array<{ caption: string; aspect: 'square' | 'card' }> = [
  { caption: 'Classic black elastic sleeve garter with metal clasp — product detail',  aspect: 'square' },
  { caption: 'White dress shirt, forearm close-up — banker band in situ',              aspect: 'card'   },
  { caption: 'Archival photograph — bank clerk at a roll-top desk, c. 1895',           aspect: 'square' },
  { caption: 'Card dealer at a felt table — sleeve garters, braces, white shirt',      aspect: 'card'   },
  { caption: 'Craft bartender — mid-pour, sleeve garters at the forearm',              aspect: 'square' },
  { caption: 'Jazz musician with trumpet, 1920s — braided elastic sleeve garters',     aspect: 'card'   },
  { caption: 'Pair of striped elastic garters — flat lay on white linen',              aspect: 'square' },
  { caption: 'Bookkeeper at ledger — counting room interior, late 19th century',       aspect: 'card'   },
  { caption: 'Modern product shot — matte black elastic, adjustable clasp',            aspect: 'square' },
  { caption: 'Stage performance — folk musician, detail of shirt sleeve and garter',   aspect: 'card'   },
  { caption: 'Heritage menswear — full look with braces and sleeve garters',           aspect: 'square' },
  { caption: 'The object alone — single sleeve garter on a white surface',             aspect: 'card'   },
];

/* ─────────────────────────────────────────────
   GallerySlot
   Attempts to load /images/{pad}.png.
   - Pending  → numbered placeholder visible, image invisible
   - Loaded   → image fades in over the placeholder number
   - Missing  → image element removed, numbered placeholder remains
   No JS console errors; one 404 per missing slot (network only, not caught).
───────────────────────────────────────────── */
type SlotStatus = 'pending' | 'ok' | 'missing';

function GallerySlot({
  pad,
  aspect,
  caption,
}: {
  pad: string;
  aspect: 'square' | 'card';
  caption: string;
}) {
  const [status, setStatus] = useState<SlotStatus>('pending');

  return (
    <div className={`gallery-img-slot gallery-img-slot--${aspect}`}>
      {/* Placeholder number — sits at z-index 0, behind the real image */}
      <span className="gallery-slot__num" aria-hidden="true">
        {pad}
      </span>

      {/* Real image — only rendered while pending or loaded.
          Removed from DOM entirely once it 404s (status → 'missing'). */}
      {status !== 'missing' && (
        <img
          src={`/images/${pad}.png`}
          alt={caption}
          className={`gallery-img-real${status === 'ok' ? ' gallery-img-real--visible' : ''}`}
          onLoad={() => setStatus('ok')}
          onError={() => setStatus('missing')}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   GalleryPage
───────────────────────────────────────────── */
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
        {ITEMS.map((item, i) => {
          const pad = String(i + 1).padStart(2, '0');
          return (
            <div key={pad} className="gallery-item">
              <GallerySlot pad={pad} aspect={item.aspect} caption={item.caption} />
              <p className="gallery-item__caption">{item.caption}</p>
            </div>
          );
        })}
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
