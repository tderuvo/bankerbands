import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WhatAreBankerBandsPage() {
  useEffect(() => {
    document.title = 'What Are Banker Bands? Sleeve Garters Explained | BankerBands.com';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = 'Banker bands are sleeve garters — elastic bands worn around the upper forearm to hold shirt sleeves at the right length. Learn what they are and how they work.';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <p className="page-hero__label">The Object</p>
        <h1 className="page-hero__h1">What Are<br />Banker Bands?</h1>
        <p className="page-hero__intro">
          A banker band is a sleeve garter — an elastic band worn around the upper
          forearm to hold a shirt sleeve at the correct working length. Simple in
          construction, precise in purpose, and quietly elegant in appearance.
        </p>
      </div>

      <div className="two-col">
        <div className="prose">
          <h2>The Object</h2>
          <p>
            Also called arm garters or sleeve garters, banker bands are small elastic
            loops — typically an inch or two wide — worn on the forearm between the
            elbow and the wrist. They grip the fabric of the shirt sleeve and hold it
            in place at whatever height the wearer sets.
          </p>
          <p>
            The result is a controlled sleeve that stays put regardless of movement.
            No rolling, no slipping, no adjusting. For anyone working with ink, dough,
            drink, cards, or a keyboard, that matters.
          </p>

          <h2>How They Work</h2>
          <p>
            The band slides over the hand and up the arm. Once positioned, the elastic
            grips the fabric and holds the sleeve at that point. The excess fabric
            blouses slightly above the band, giving the shirt a slightly fuller look at
            the upper arm — a silhouette that became associated with a certain kind of
            careful, professional dress.
          </p>
          <p>
            Most banker bands fasten with a simple metal clip or buckle. Better
            versions use a wider elastic with an adjustable clasp that allows for a
            precise fit on any arm size.
          </p>

          <h2>Materials</h2>
          <p>
            Historically, sleeve garters were made from braided elastic with a simple
            metal closure — brass or nickel-plated steel. The elastic was often striped
            or patterned, providing a subtle visual detail against the white shirt.
          </p>
          <p>
            Modern versions range from plain black elastic with a matte clip to
            hand-sewn versions in ribbon, grosgrain, or woven fabric. A well-made pair
            is a small, considered object — the kind of thing that rewards attention.
          </p>
        </div>

        <div>
          <div className="editorial-image">
            <img
              src="/images/the_object.png"
              alt="A black elastic sleeve garter — the banker band object"
              width={1536}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="editorial-image">
            <img
              src="/images/how_it_works.png"
              alt="Diagram showing how a banker band sleeve garter positions on the forearm"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="pull-quote">
        <p>"Not an ornament. A solution. The fact that it looks good is a byproduct of doing its job well."</p>
      </div>

      <div className="prose">
        <h2>Who Wore Them</h2>
        <p>
          Before off-the-rack clothing was precise and affordable, a shirt was rarely
          cut to fit the wearer exactly. Sleeves ran long. The sleeve garter was the
          practical fix — a way to take a standard garment and make it work for the
          task at hand.
        </p>
        <p>
          Bankers and bookkeepers wore them to keep cuffs out of inkwells. Bartenders
          wore them to keep sleeves dry and out of glasses. Card dealers wore them for
          grip and control at the table. Telegraph operators, typographers, and
          shopkeepers all had their reasons. The band was not an affectation — it was
          equipment.
        </p>
      </div>

      <hr className="section-divider" />

      <div className="prose">
        <h2>Continue Reading</h2>
        <p>
          Read about the <Link to="/history">history of the sleeve garter</Link> —
          how it rose, fell, and persists — or see where it shows up in{' '}
          <Link to="/modern-uses">modern contexts</Link> today.
        </p>
      </div>
    </div>
  );
}
