/**
 * /plan — Maison BankerBands internal concept document
 *
 * NOT public. Not in navbar, footer, or sitemap.
 * Rendered outside the site Layout — has its own isolated shell.
 * noindex / nofollow set dynamically via useEffect.
 */

import { useEffect, useState } from 'react';
import '../plan.css';

const SECTIONS = [
  { id: 'premise',     num: '01', label: 'The Premise'    },
  { id: 'psychology',  num: '02', label: 'The Psychology' },
  { id: 'collections', num: '03', label: 'The Collections'},
  { id: 'symbol',      num: '04', label: 'The Symbol'     },
  { id: 'strategy',    num: '05', label: 'The Strategy'   },
  { id: 'longgame',    num: '06', label: 'The Long Game'  },
];

export default function PlanPage() {
  const [activeId, setActiveId] = useState('premise');

  /* ── Meta: noindex + title ── */
  useEffect(() => {
    document.title = 'Maison BankerBands — Internal';

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.querySelector('meta[name="robots"]')?.remove();
    };
  }, []);

  /* ── TOC active section: IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -85%' }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="plan-root">
      <div className="plan-layout">

        {/* ───────────────── LEFT: sticky table of contents ───────────────── */}
        <nav className="plan-nav" aria-label="Document sections">
          <div>
            <p className="plan-nav__eyebrow">Internal Document</p>
            <p className="plan-nav__title">Maison<br />BankerBands</p>

            <ul className="plan-nav__toc">
              {SECTIONS.map(({ id, num, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`plan-nav__link${activeId === id ? ' plan-nav__link--active' : ''}`}
                  >
                    <span className="plan-nav__num">{num}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="plan-nav__foot">
            <p>Confidential</p>
            <p>2026</p>
          </div>
        </nav>

        {/* ───────────────── RIGHT: editorial content ─────────────────────── */}
        <main className="plan-content">

          {/* ── Hero image ── */}
          <div className="plan-hero">
            <img
              src="/images/plan-hero.png"
              alt="Maison BankerBands — editorial vision"
              className="plan-hero__img"
              width={1402}
              height={1122}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* ── Introduction ── */}
          <div className="plan-intro">
            <p className="plan-intro__eyebrow">Maison BankerBands</p>
            <h1 className="plan-intro__headline">
              The Room<br />Adjusts.
            </h1>
            <div className="plan-intro__body">
              <p>There is a kind of woman who does not announce herself.</p>
              <p>She does not need to. The room adjusts.</p>
              <p>
                She enters — the card room at midnight, the atelier at nine, the
                boardroom on a Tuesday — and the people around her feel, without quite
                knowing why, that they are in the presence of someone who has always
                been here. Who belongs here. Who could not be more at home.
              </p>
              <p>
                This is not power as performance. It is power as posture. As instinct.
                As the particular composure of someone who knows a room before she enters it.
              </p>
              <p>Maison BankerBands was built for her.</p>
            </div>
          </div>

          {/* ── 01: The Premise ── */}
          <section id="premise" className="plan-section" aria-labelledby="premise-title">
            <p className="plan-section__label">01 — The Premise</p>
            <h2 id="premise-title" className="plan-section__title">
              A Working Object.
            </h2>
            <div className="plan-section__body">
              <p>The banker band is, at its origin, a working object.</p>
              <p>
                It belonged to the people who took their work seriously enough to dress
                for it — clerks managing the accounts, dealers controlling the cards,
                bartenders moving through the crowd with mechanical precision. The sleeve
                garter kept everything in place. Not metaphorically. Literally.
              </p>
              <p>
                This is the object Maison BankerBands returns to circulation. Not as
                nostalgia. Not as costume. As proposition.
              </p>
              <blockquote className="plan-pull">
                What does composure feel like at the forearm? What does it look like
                to arrive somewhere already settled in yourself?
              </blockquote>
              <p>
                The banker band is a narrow piece of braided elastic and a metal clasp.
                It is also, depending on who wears it, an entire argument about elegance.
              </p>
            </div>
          </section>

          {/* ── 02: The Psychology ── */}
          <section id="psychology" className="plan-section" aria-labelledby="psychology-title">
            <p className="plan-section__label">02 — The Psychology</p>
            <h2 id="psychology-title" className="plan-section__title">
              Objects Carry History.
            </h2>
            <div className="plan-section__body">
              <p>This is not mysticism. It is how cognition works.</p>
              <p>
                When she wears something with a lineage of competence, that lineage
                becomes part of her presence. Not through explanation. Not through
                context. The object does not explain itself. That is precisely its
                authority.
              </p>
              <p>
                The banker band entered rooms that had rules. The counting room. The
                casino. The bar. Environments of precision, of controlled pressure, of
                knowing exactly what you were doing and wearing it on your body.
              </p>
              <blockquote className="plan-pull">
                She wears it because she understands this.
                And understanding it is the point.
              </blockquote>
              <p>The room senses this. They always do.</p>
            </div>
          </section>

          {/* ── 03: The Collections ── */}
          <section id="collections" className="plan-section" aria-labelledby="collections-title">
            <p className="plan-section__label">03 — The Collections</p>
            <h2 id="collections-title" className="plan-section__title">
              Three Arguments.
            </h2>
            <div className="plan-section__body">
              <p>The inaugural collection is singular in purpose.</p>
              <p>
                One object. A narrow grosgrain sleeve garter, finished with a matte
                gold clasp, worn at the forearm between the elbow and the wrist. Three
                colorways. Each a different argument.
              </p>
              <p>
                The ivory says: I have always been in rooms like this.<br />
                The noir says: I know exactly how this ends.<br />
                The burgundy says nothing. It simply arrives.
              </p>
              <p>
                A second collection follows. Wider elastic, structural boning, worn at
                the upper arm. For evenings that require a different kind of readiness.
                For women who are never not dressed for the occasion.
              </p>
            </div>
          </section>

          {/* ── 04: The Symbol ── */}
          <section id="symbol" className="plan-section" aria-labelledby="symbol-title">
            <p className="plan-section__label">04 — The Symbol</p>
            <h2 id="symbol-title" className="plan-section__title">
              The Seal.
            </h2>
            <div className="plan-section__body">
              <p>The circular badge mark.</p>
              <p>It does not explain itself.</p>
              <p>
                This is the standard against which we hold everything. If it needs
                explanation, it is not finished. If it requires context, it is not yet
                confident enough. The mark, like the wearer, simply is.
              </p>
              <blockquote className="plan-pull">
                Quiet authority. Not silence — presence.
              </blockquote>
              <p>
                The badge appears on the object. On the tissue. On the inside of the
                clasp where only she will see it.
              </p>
            </div>
          </section>

          {/* ── 05: The Strategy ── */}
          <section id="strategy" className="plan-section" aria-labelledby="strategy-title">
            <p className="plan-section__label">05 — The Strategy</p>
            <h2 id="strategy-title" className="plan-section__title">
              A Disposition,<br />Not a Demographic.
            </h2>
            <div className="plan-section__body">
              <p>Maison BankerBands is not a mass-market accessories brand.</p>
              <p>
                It is not heritage menswear repositioned for women. It is not feminist
                statement jewelry. It is not luxury for the purpose of luxury.
              </p>
              <p>
                It is a house built around a single psychological proposition: the
                feeling of composed authority.
              </p>
              <p>
                The market for this is not a demographic. It is a disposition. Women
                who understand, instinctively, that how you dress for a room changes
                how the room receives you. Who dress not to impress but to settle — to
                communicate, without performance, that they are exactly where they
                intended to be.
              </p>
              <blockquote className="plan-pull">
                This market is underserved. Not because brands don't reach for it.
                Because most brands don't understand what it feels like from the inside.
              </blockquote>
              <p>We do.</p>
            </div>
          </section>

          {/* ── 06: The Long Game ── */}
          <section id="longgame" className="plan-section plan-section--last" aria-labelledby="longgame-title">
            <p className="plan-section__label">06 — The Long Game</p>
            <h2 id="longgame-title" className="plan-section__title">
              Object Permanence.
            </h2>
            <div className="plan-section__body">
              <p>
                Twenty years from now, there will be women who wear a BankerBand the
                way their grandmothers wore pearl studs.
              </p>
              <p>
                Not because a magazine told them to. Not because of a trend cycle or an
                algorithm. Because the object found its place in their vocabulary — part
                of the personal grammar through which they move through the world.
              </p>
              <p>That is the goal.</p>
              <p>
                Not seasons. Not campaigns. Not the exhausting machinery of
                fashion-industry relevance.
              </p>
              <blockquote className="plan-pull">
                Object permanence. The kind that outlasts everything — because it was
                never trying to be current. It was always trying to be true.
              </blockquote>
              <p className="plan-section__closing">— Maison BankerBands, 2026</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
