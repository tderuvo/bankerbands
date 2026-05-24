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
  { id: 'narrative',   num: '—',  label: 'It all began'   },
  { id: 'premise',     num: '01', label: 'The Premise'    },
  { id: 'psychology',  num: '02', label: 'The Psychology' },
  { id: 'collections', num: '03', label: 'The Collections'},
  { id: 'symbol',      num: '04', label: 'The Symbol'     },
  { id: 'strategy',    num: '05', label: 'The Strategy'   },
  { id: 'longgame',    num: '06', label: 'The Long Game'  },
];

export default function PlanPage() {
  const [activeId, setActiveId] = useState('narrative');

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

          {/* ── Narrative: It all began ── */}
          <section id="narrative" className="plan-section plan-narrative" scroll-margin-top="2.5rem">
            <p className="plan-section__label">It all began</p>
            <div className="plan-narrative__body">

              <p>When I was twenty-two, I spent a summer in Florence pretending to study sculpture.</p>

              <p>That was the agreement, at least. My parents would pay for the apartment and the classes if I promised it would "look good later." I remember nodding earnestly over the phone from California, though the truth was that I wanted very little to do with résumés or future planning. I wanted distance. Beauty. Heat. Something I couldn't yet name.</p>

              <p>Florence in July feels less like a city than a fever dream someone forgot to wake you from. The stone glows at night. Espresso tastes darker there. Even the silence feels inhabited.</p>

              <p>He taught mornings in a studio not far from Santo Spirito. Sculpture, drawing, anatomy. He was older than me by enough years to make my friends back home raise their eyebrows when I described him later — though I rarely did. Some experiences resist translation.</p>

              <p>What I remember most now is not his face, exactly.</p>

              <p>It was the way he moved through rooms.</p>

              <p>Even covered in marble dust, he remained impossibly composed. White shirts with the sleeves carefully folded. Soft leather shoes. A watch he wore loose at the wrist. And always — always — the bands at his forearms.</p>

              <p>At first I thought they were some kind of tailoring eccentricity. An old-world affectation. I had never seen anything like them in America. One morning while he worked clay between his hands, I finally asked him what they were called.</p>

              <p>"<em>Ferma maniche</em>," he said.</p>

              <p>I repeated it badly. He laughed softly and corrected my pronunciation by touching two fingers lightly against my arm.</p>

              <p>I became obsessed with them after that.</p>

              <p>The different fabrics. The stripes. The tiny clasps. The intimacy of the object itself. They sat so close to the skin they almost disappeared, yet somehow changed the entire silhouette of a person wearing them. They made him look disciplined and relaxed at the same time. European in the way Americans secretly romanticize.</p>

              <p>One morning near the end of the summer, I stayed behind in his apartment while he left early for the studio. Florence was unbearably hot already. The shutters were half open and somewhere below, someone was arguing beautifully in Italian.</p>

              <p>His shirt was hanging over the back of a chair.</p>

              <p>I remember making espresso barefoot in his kitchen wearing nothing except the oversized white shirt I had stolen from the floor beside the bed. And there, still wrapped around the sleeve, was the pair I loved most — dark elastic with a narrow cream stripe and a worn brass clasp polished smooth by years of use.</p>

              <p>I slipped them onto my own arms almost absentmindedly.</p>

              <p>Then I stood in front of the mirror for a very long time.</p>

              <p>It sounds ridiculous now, trying to explain it. It wasn't about wanting to look masculine. It wasn't costume. It was something quieter than that. For the first time in my life, I understood how an object could alter the way a person felt inside themselves.</p>

              <p>Not transform. Reveal.</p>

              <p>Years later, I would still remember that morning with impossible clarity. The espresso cooling beside the sink. The church bells somewhere in the distance. The smell of clay dust and his cologne in the linen.</p>

              <p>On my last day in Florence, he left before I woke.</p>

              <p>At first I felt wounded by it. Then I saw the envelope on the table beside my suitcase.</p>

              <p>Inside was a note written in his uneven English. He said that seeing me off properly would make the goodbye smaller somehow. Too ordinary. Better, he wrote, to leave things exactly as they were — suspended at their most beautiful point.</p>

              <p>Folded inside the letter was the pair of ferma maniche.</p>

              <p>My pair now, though neither of us said that directly.</p>

              <p>At the bottom of the note, almost as an afterthought, he had written:</p>

              <p>"Keep this gift band."</p>

              <p>Then underneath, in Italian:</p>

              <p><em>Non ferma maniche.<br />Ferma tempo.</em></p>

              <p>Not sleeve stopper.<br />Time stopper.</p>

              <p>I can still imagine him smiling while he wrote it, apologizing to himself for his terrible English.</p>

              <p>The band still smells faintly of his cologne when the weather turns warm enough.</p>

            </div>
          </section>

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
