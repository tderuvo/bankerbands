import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TIMELINE = [
  {
    year: '1860s',
    title: 'The Cash-Counting Problem',
    body: 'As US banks grew after the Civil War, managing large volumes of paper currency became a serious operational challenge. Tellers counted notes by hand and used whatever wrapping was available — string, folded paper, rubber bands. There was no standard.',
  },
  {
    year: '1910s',
    title: 'ABA Standardisation',
    body: 'The American Bankers Association began formalising cash-handling procedures. Currency straps were introduced as a standard tool, with consistent dimensions and denomination labelling. Colour coding came later but the format was set.',
  },
  {
    year: '1950s',
    title: 'Mass Production',
    body: 'Post-war economic expansion meant more banks, more branches, and more cash in circulation. Paper strapping was produced at scale, and the familiar ABA colour system became widely adopted across American financial institutions.',
  },
  {
    year: '1970s',
    title: 'Armoured Transport & The Brick',
    body: 'As armoured cash transport grew, banded bills were bundled into standardised "bricks" of ten straps and "bundles" of ten bricks. The banker band became the foundational unit of an entire logistics system.',
  },
  {
    year: '1990s',
    title: 'Into Pop Culture',
    body: 'Hip-hop\'s obsession with cash — and the visual grammar that came with it — put banker bands on screen. Stacks of banded bills appeared in music videos, films, and album artwork. The band crossed from function to symbol.',
  },
  {
    year: '2000s',
    title: 'The Fashion Crossover',
    body: 'Streetwear and luxury fashion picked up the imagery. Designers referenced the stacked, banded bill as a motif. The banker band appeared on graphics, in shoots, and eventually as a literal accessory worn by collectors and enthusiasts.',
  },
  {
    year: 'Today',
    title: 'Functional & Cultural Object',
    body: 'Banker bands remain in daily use in every cash-handling environment on earth. At the same time, they carry a second life as cultural shorthand — instantly legible, loaded with meaning, recognisable far outside the context of banking.',
  },
];

export default function HistoryPage() {
  useEffect(() => {
    document.title = 'History of Banker Bands | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'The history of banker bands — from post-Civil War cash handling to ABA standardisation, armoured transport, and pop culture crossover.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Origins & Evolution</p>
        <h1 className="page-hero__h1">History of<br />Banker Bands</h1>
        <p className="page-hero__intro">
          A short strip of paper with a surprisingly long story. The banker band
          evolved from an improvised solution into a global standard — and then
          into something no one in banking anticipated.
        </p>
      </div>

      <div className="img-placeholder img-placeholder--wide" style={{ marginBottom: '4rem' }}>
        Image — archival bank interior, early 20th century
      </div>

      <div className="prose" style={{ maxWidth: '680px' }}>
        <p>
          Currency straps were not invented so much as they emerged — a practical
          answer to a practical problem. As the volume of paper money in circulation
          grew through the late 19th and early 20th centuries, the need for a reliable,
          standardised way to count and bundle notes became pressing.
        </p>
        <p>
          What started as an internal banking tool eventually left the vault entirely.
          The journey took about a century.
        </p>
      </div>

      <hr className="section-divider" />

      <div className="timeline">
        {TIMELINE.map(item => (
          <div key={item.year} className="timeline__item">
            <div className="timeline__year">{item.year}</div>
            <div className="timeline__body">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pull-quote" style={{ marginTop: '4rem' }}>
        <p>"It started as infrastructure. It became iconography."</p>
      </div>

      <div className="two-col" style={{ marginTop: '4rem' }}>
        <div className="prose">
          <h2>A Symbol of Certainty</h2>
          <p>
            The power of the banker band as a cultural object comes partly from what
            it represents: verified count, real value, no ambiguity. In a world of
            abstractions — digital transfers, credit lines, derivatives — a stack of
            banded bills is disarmingly concrete.
          </p>
          <p>
            That concreteness is why the image travels so well. It needs no explanation.
            Everyone understands a banded stack of hundreds.
          </p>
        </div>
        <div>
          <div className="img-placeholder img-placeholder--square">
            Image — banded bills in a film still
          </div>
        </div>
      </div>

      <div className="prose" style={{ marginTop: '3rem' }}>
        <h2>Continue Reading</h2>
        <p>
          See how banker bands are used today in <Link to="/modern-uses">modern contexts</Link>,
          or explore what they actually are in <Link to="/what-are-banker-bands">What Are Banker Bands</Link>.
        </p>
      </div>
    </div>
  );
}
