import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WhatAreBankerBandsPage() {
  useEffect(() => {
    document.title = 'What Are Banker Bands? | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'Learn what banker bands are — paper currency straps used to bundle banknotes by denomination, used in banks, businesses, and beyond.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">The basics</p>
        <h1 className="page-hero__h1">What Are<br />Banker Bands?</h1>
        <p className="page-hero__intro">
          A banker band is a paper strap used to bundle a fixed number of banknotes
          into a single unit. Simple, durable, and colour-coded — they are the quiet
          infrastructure of the cash economy.
        </p>
      </div>

      <div className="two-col">
        <div className="prose">
          <h2>The Definition</h2>
          <p>
            A banker band — also called a currency strap or bill strap — is a thin strip
            of paper, usually about 1.5 inches wide, wrapped around a stack of banknotes
            and sealed. Each strap holds a fixed count of bills: typically 100 notes of
            the same denomination.
          </p>
          <p>
            They are manufactured to strict specifications and printed with the
            denomination and total value of the bundle. A strap of 100 one-dollar bills
            is labelled $100. A strap of 100 hundred-dollar bills reads $10,000.
          </p>

          <h2>How They Work</h2>
          <p>
            Bank tellers and cash handlers use strapping machines or hand-wrap bills
            after counting. The band is applied, the ends are folded and sealed with
            a tab or adhesive, and the bundle is set aside for storage or transport.
          </p>
          <p>
            In high-volume settings — armoured cars, Federal Reserve branches,
            casino cages — strapped bills are then bundled further into "bricks" of
            ten straps, then into "bundles" of ten bricks. The humble band is the
            first unit in a whole system of cash organisation.
          </p>

          <h2>Materials</h2>
          <p>
            Most banker bands are made from 24 lb. bond paper — stiff enough to hold
            its shape, thin enough to wrap tightly. Some higher-security variants
            include serial numbers or tamper-evident adhesive. Plastic and rubber
            alternatives exist but never replaced paper in professional cash handling.
          </p>
        </div>

        <div>
          <div className="img-placeholder img-placeholder--tall" style={{ marginBottom: '1.5rem' }}>
            Image — close-up of a paper currency strap
          </div>
          <div className="img-placeholder img-placeholder--square">
            Image — denomination colour guide
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="prose">
        <h2>Denomination Colour Coding</h2>
        <p>
          The American Bankers Association (ABA) standardised a colour system for
          currency straps. Each denomination has its own colour, making it possible
          to identify a bundle at a glance without counting.
        </p>
      </div>

      <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #000', textAlign: 'left' }}>
              <th style={{ padding: '0.75rem 1rem 0.75rem 0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Denomination</th>
              <th style={{ padding: '0.75rem 1rem 0.75rem 0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Strap Colour</th>
              <th style={{ padding: '0.75rem 0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Bundle Value (100 bills)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$1',   'Mustard / Yellow', '$100'],
              ['$5',   'Red',              '$500'],
              ['$10',  'Blue',             '$1,000'],
              ['$20',  'Violet',           '$2,000'],
              ['$50',  'Beige / Tan',      '$5,000'],
              ['$100', 'Green',            '$10,000'],
            ].map(([denom, colour, value]) => (
              <tr key={denom} style={{ borderBottom: '1px solid #e0e0dd' }}>
                <td style={{ padding: '0.75rem 1rem 0.75rem 0', color: '#444' }}>{denom}</td>
                <td style={{ padding: '0.75rem 1rem 0.75rem 0', color: '#444' }}>{colour}</td>
                <td style={{ padding: '0.75rem 0', color: '#444' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pull-quote">
        <p>"The band is just paper — but it represents certainty. You trust the count."</p>
      </div>

      <div className="prose">
        <h2>Related Reading</h2>
        <p>
          To understand how banker bands became more than a banking tool, read the{' '}
          <Link to="/history">history of banker bands</Link> or see how they are used
          today in <Link to="/modern-uses">modern contexts</Link>.
        </p>
      </div>
    </div>
  );
}
