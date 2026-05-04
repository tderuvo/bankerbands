import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TIMELINE = [
  {
    year: '1840s',
    title: 'The Shirt Problem',
    body: 'Mass-produced shirts in the mid-19th century were cut generously to fit a range of bodies. Sleeves were long by design — fabric was valuable and alterations were common. For working men, that extra length was a constant problem.',
  },
  {
    year: '1860s',
    title: 'The Working Solution',
    body: 'Elastic had become commercially viable after Charles Goodyear vulcanised rubber in 1844. By the 1860s, braided elastic was being used in garments and accessories throughout the US and Britain. The sleeve garter was a natural application.',
  },
  {
    year: '1880s',
    title: 'Office Culture & the Counting Room',
    body: 'As banking, insurance, and commerce expanded, the white-collar clerk became a fixture of city life. The sleeve garter was part of his uniform — practical, expected, and quietly signalling that he took his work seriously. The nickname "banker band" followed.',
  },
  {
    year: '1890s',
    title: 'The Card Table & the Bar',
    body: 'Saloons, gambling halls, and riverboat casinos had their own version of the working professional. Bartenders and card dealers adopted the sleeve garter for identical reasons — control, cleanliness, and a certain visual authority at the table.',
  },
  {
    year: '1910s',
    title: 'The Musician\'s Accessory',
    body: 'Jazz and ragtime musicians, particularly those playing wind instruments, found sleeve garters useful for managing shirtsleeves during performance. The image of the musician in braces and sleeve garters became part of the visual identity of early American popular music.',
  },
  {
    year: '1940s',
    title: 'The Decline',
    body: 'Improved manufacturing meant shirts could be cut to more precise standard sizes. Ready-to-wear clothing became affordable and better fitted. The practical need for sleeve garters diminished. They persisted in a few trades — bartending, card dealing — but gradually receded from everyday dress.',
  },
  {
    year: 'Today',
    title: 'Heritage & Revival',
    body: 'The sleeve garter never disappeared entirely. In craft bartending, period costume, heritage menswear, and certain corners of music, it has remained a considered choice. A new generation is finding it again — not out of necessity, but because of what it represents.',
  },
];

export default function HistoryPage() {
  useEffect(() => {
    document.title = 'History of Sleeve Garters & Banker Bands | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'The history of banker bands and sleeve garters — from 19th century counting rooms and card tables to craft bartending and heritage menswear today.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Origins & Evolution</p>
        <h1 className="page-hero__h1">History of<br />the Banker Band</h1>
        <p className="page-hero__intro">
          The sleeve garter is older than the suit as we know it. It belonged to the
          clerk, the dealer, the bartender, and the musician long before it became
          a style reference. This is how it got there.
        </p>
      </div>

      <div className="img-placeholder img-placeholder--wide" style={{ marginBottom: '4rem' }}>
        Image — archival photograph, bank clerk at a desk, late 19th century
      </div>

      <div className="prose" style={{ maxWidth: '680px' }}>
        <p>
          The story of the sleeve garter is really the story of a mismatch — between
          the shirt as it was made and the work as it had to be done. For most of the
          19th century, that gap was bridged by a small elastic loop worn on the arm.
        </p>
        <p>
          It was never glamorous. It was never meant to be. But it accumulated meaning
          over the decades it was in use, and that meaning outlasted the practical need
          that created it.
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
        <p>"Every trade that required a clean forearm eventually found its way to the same solution."</p>
      </div>

      <div className="two-col" style={{ marginTop: '4rem' }}>
        <div>
          <div className="img-placeholder img-placeholder--square">
            Image — jazz musician in sleeve garters, 1920s
          </div>
        </div>
        <div className="prose">
          <h2>What the Image Carries</h2>
          <p>
            By the early 20th century, the sleeve garter had accumulated a clear
            visual language: precision, professionalism, and a kind of focused
            competence. The man wearing them was someone who worked with his hands
            and his mind simultaneously — and who cared about both.
          </p>
          <p>
            That association is why the image endures. It pulls together bartender,
            banker, musician, and dealer into a single archetype — the skilled
            professional at work, sleeves under control, entirely present to the task.
          </p>
        </div>
      </div>

      <div className="prose" style={{ marginTop: '3rem' }}>
        <h2>Continue Reading</h2>
        <p>
          See where the banker band appears in{' '}
          <Link to="/modern-uses">modern contexts</Link>, or go back to basics with{' '}
          <Link to="/what-are-banker-bands">what they actually are</Link>.
        </p>
      </div>
    </div>
  );
}
