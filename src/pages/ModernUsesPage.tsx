import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const USES = [
  {
    num: '01',
    title: 'Craft Bartending',
    desc: 'The cocktail revival brought back a lot of things — suspenders, waistcoats, waxed moustaches — and sleeve garters came with them. At the right bar, they are part of a considered aesthetic that says the person making your drink has thought about what they are doing.',
  },
  {
    num: '02',
    title: 'Card Dealing & Casino Work',
    desc: 'Professional card dealers still wear sleeve garters in certain settings, particularly in games with a period or heritage aesthetic. They serve the same function they always did: keeping the sleeve back, giving the hands freedom, projecting control at the table.',
  },
  {
    num: '03',
    title: 'Heritage Menswear',
    desc: 'Among men who pay attention to dress, the sleeve garter occupies an interesting position. It is functional, it has history, and it is almost entirely invisible to anyone who does not already know what they are looking at. That combination has an appeal.',
  },
  {
    num: '04',
    title: 'Stage & Performance',
    desc: 'Musicians — particularly those playing acoustic, folk, jazz, or any genre with a vintage sensibility — wear sleeve garters as part of the visual identity of the performance. Horn players find them practical. String players find them right.',
  },
  {
    num: '05',
    title: 'Period Costume & Theatre',
    desc: 'For costume designers, the banker band is a period-accurate detail that reads instantly. A waistcoated figure with sleeve garters places the audience in the late 19th or early 20th century more efficiently than almost any other single detail.',
  },
  {
    num: '06',
    title: 'The Practical Case',
    desc: 'Separate from aesthetics entirely: for anyone who works at a desk, handles food or drink, or simply has shirts with sleeves that are fractionally too long, a sleeve garter solves a real problem. Function was always the point.',
  },
];

export default function ModernUsesPage() {
  useEffect(() => {
    document.title = 'Modern Uses of Sleeve Garters & Banker Bands | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'Where banker bands and sleeve garters appear today — craft bartending, heritage menswear, card dealing, stage performance, costume, and practical daily wear.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Now</p>
        <h1 className="page-hero__h1">Modern Uses<br />of Banker Bands</h1>
        <p className="page-hero__intro">
          The sleeve garter never entirely left. In certain trades, certain aesthetics,
          and certain corners of menswear, it has persisted — and in some places,
          it is actively coming back.
        </p>
      </div>

      <div className="use-grid">
        {USES.map(u => (
          <div key={u.num} className="use-card">
            <p className="use-card__num">{u.num}</p>
            <h2 className="use-card__title">{u.title}</h2>
            <p className="use-card__desc">{u.desc}</p>
          </div>
        ))}
      </div>

      <hr className="section-divider" />

      <div className="two-col">
        <div>
          <div className="img-placeholder img-placeholder--square">
            Image — craft bartender behind a bar, sleeve garters visible
          </div>
        </div>
        <div className="prose">
          <h2>Why Now</h2>
          <p>
            There is a broader interest in functional heritage objects — things that
            were designed to do a specific job well, that accumulated meaning over
            decades of use, and that have been largely forgotten. The sleeve garter
            fits that description precisely.
          </p>
          <p>
            Unlike a lot of menswear revival, it is not nostalgic in a costumey way.
            It is small enough to be a detail rather than a statement. And it still
            works. That combination is unusual.
          </p>
          <p>
            The men who wear them now — bartenders, musicians, a certain kind of
            deliberate dresser — are not performing a period. They are borrowing a
            solution that happens to look right.
          </p>
        </div>
      </div>

      <div className="pull-quote">
        <p>"Wear it because it solves something. Let the history be a bonus."</p>
      </div>

      <div className="prose">
        <h2>Further Reading</h2>
        <p>
          Understand the object in detail at{' '}
          <Link to="/what-are-banker-bands">What Are Banker Bands</Link>, or read
          the full <Link to="/history">history of the sleeve garter</Link>.
        </p>
      </div>

      <div className="cta-strip">
        <h2>The Full Story</h2>
        <p>From the counting room and the card table to the craft bar and the stage.</p>
        <Link to="/history" className="cta-strip__link">Read the history →</Link>
      </div>
    </div>
  );
}
