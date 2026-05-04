import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const USES = [
  {
    num: '01',
    title: 'Banks & Credit Unions',
    desc: 'The original context. Tellers strap notes at the end of every counting cycle. Banded bills are stored in drawers, transported in pouches, and passed to armoured carriers. Nothing has replaced the paper band in this setting.',
  },
  {
    num: '02',
    title: 'Retail & Hospitality Cash Handling',
    desc: 'Restaurants, hotels, and retailers that handle significant cash volumes use banker bands to organise end-of-day deposits. A strapped till is faster to count, easier to audit, and harder to misplace.',
  },
  {
    num: '03',
    title: 'Casinos & Gaming',
    desc: 'Casino cages process some of the highest cash volumes of any non-bank environment. Banded currency moves between the cage, the count room, and armoured transport multiple times a day. Colour-coded straps are essential.',
  },
  {
    num: '04',
    title: 'Film & TV Production',
    desc: 'The prop department on any production involving cash needs banded bills — both real and replica. A convincing stack of money requires the strap. Production companies order currency strap paper by the box.',
  },
  {
    num: '05',
    title: 'Street Style & Fashion',
    desc: 'Banded bills appear on clothing graphics, in editorial shoots, and as a literal accessory among sneaker collectors and streetwear enthusiasts. The band itself is sometimes worn on the wrist or used as packaging for small items.',
  },
  {
    num: '06',
    title: 'Home Organisation',
    desc: 'Beyond money, the humble currency strap has found a second life as a general organisational tool. Elastic and paper straps are used to bundle documents, cables, tools, and anything else that benefits from a tight, labelled wrap.',
  },
];

export default function ModernUsesPage() {
  useEffect(() => {
    document.title = 'Modern Uses of Banker Bands | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'How banker bands are used today — from bank tellers and casino cages to film props, streetwear, and everyday organisation.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">Today</p>
        <h1 className="page-hero__h1">Modern Uses<br />of Banker Bands</h1>
        <p className="page-hero__intro">
          Banker bands never left the bank — but they also went everywhere else.
          Here is where you will find them in use today.
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
            Image — casino counting room
          </div>
        </div>
        <div className="prose">
          <h2>Cash in a Cashless Era</h2>
          <p>
            Digital payments have reduced cash volumes in many markets — but they
            have not eliminated them. Globally, cash remains the dominant payment
            method by transaction count. And wherever cash flows, banker bands follow.
          </p>
          <p>
            If anything, the declining role of cash in everyday consumer transactions
            has concentrated it in specialised settings — high-value retail, gaming,
            wholesale markets, informal economies — where banded currency is even more
            important for accuracy and accountability.
          </p>
          <p>
            At the same time, the cultural life of the banker band has expanded as its
            transactional presence has narrowed. The image outlasts the transaction.
          </p>
        </div>
      </div>

      <div className="pull-quote">
        <p>"The band signals that someone has already done the work of counting. That trust travels."</p>
      </div>

      <div className="prose">
        <h2>Further Reading</h2>
        <p>
          Curious where it all started? Read the <Link to="/history">history of banker bands</Link>.
          Or see the <Link to="/gallery">gallery</Link> for a visual overview.
        </p>
      </div>

      <div className="cta-strip">
        <h2>Explore the Full Story</h2>
        <p>From the vault to the street — banker bands have more history than you might expect.</p>
        <Link to="/history" className="cta-strip__link">Read the history →</Link>
      </div>
    </div>
  );
}
