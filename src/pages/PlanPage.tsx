/**
 * /plan — Maison BankerBands private brand document
 *
 * NOT public. Not in navbar, footer, or sitemap.
 * Isolated shell — no site nav/footer.
 * noindex / nofollow set dynamically via useEffect.
 */

import { useEffect, useState } from 'react';
import '../plan.css';

/* ── Chapter + section registry ─────────────────────────────────────────── */

const CHAPTERS = [
  { id: 'plan',         label: 'The Plan'       },
  { id: 'collection',   label: 'The Collection'  },
  { id: 'branding',     label: 'Branding'        },
  { id: 'financials',   label: 'Financials'      },
  { id: 'distribution', label: 'Distribution'    },
  { id: 'notes',        label: 'Notes'           },
] as const;

type ChapterId = typeof CHAPTERS[number]['id'];
type Section   = { id: string; label: string; num?: string };

const CHAPTER_SECTIONS: Record<ChapterId, Section[]> = {
  plan: [
    { id: 'narrative', label: 'It all began'   },
    { id: 'claire',    label: 'Claire Marlowe' },
  ],
  collection: [
    { id: 'americana-revival', label: 'American Revival', num: '01' },
    { id: 'balletcore',        label: 'Balletcore',       num: '02' },
    { id: 'tokyo-atelier',     label: 'Tokyo Atelier',    num: '03' },
    { id: 'quiet-luxury',      label: 'Quiet Luxury',     num: '04' },
    { id: 'streetwear-luxe',   label: 'Streetwear Luxe',  num: '05' },
    { id: 'euro-summer',       label: 'Euro Summer',      num: '06' },
    { id: 'dark-academia',     label: 'Dark Academia',    num: '07' },
  ],
  branding:     [],
  financials:   [],
  distribution: [],
  notes:        [],
};

/* ══ PlanPage ════════════════════════════════════════════════════════════════ */

export default function PlanPage() {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('plan');
  const [activeSection, setActiveSection] = useState<string>('narrative');

  const currentSections = CHAPTER_SECTIONS[activeChapter];

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
    return () => { document.querySelector('meta[name="robots"]')?.remove(); };
  }, []);

  /* ── Scroll-spy: plan chapter only ── */
  useEffect(() => {
    if (activeChapter !== 'plan') return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-10% 0px -85%' }
    );
    CHAPTER_SECTIONS.plan.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [activeChapter]);

  /* ── Chapter switch ── */
  function switchChapter(id: ChapterId) {
    const first = CHAPTER_SECTIONS[id][0];
    setActiveChapter(id);
    setActiveSection(first?.id ?? '');
    window.scrollTo({ top: 0 });
  }

  /* ── Section navigation ── */
  function goToSection(sectionId: string) {
    setActiveSection(sectionId);
    if (activeChapter === 'plan') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <div className="plan-root">

      {/* ── Top chapter navigation ── */}
      <header className="plan-chapters">
        <div className="plan-chapters__inner">
          <span className="plan-chapters__brand">Maison BankerBands</span>
          <nav aria-label="Document chapters">
            <ul className="plan-chapters__list">
              {CHAPTERS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`plan-chapter-btn${activeChapter === id ? ' plan-chapter-btn--active' : ''}`}
                    onClick={() => switchChapter(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="plan-layout">

        {/* ── Left sidebar (desktop) ── */}
        <nav className="plan-nav" aria-label="Section navigation">
          <div>
            <p className="plan-nav__eyebrow">Internal Document</p>
            <p className="plan-nav__title">Maison<br />BankerBands</p>

            {currentSections.length > 0 && (
              <ul className="plan-nav__toc">
                {currentSections.map(({ id, label, num }) => (
                  <li key={id}>
                    <button
                      className={`plan-nav__link${activeSection === id ? ' plan-nav__link--active' : ''}`}
                      onClick={() => goToSection(id)}
                    >
                      {num && <span className="plan-nav__num">{num}</span>}
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="plan-nav__foot">
            <p>Confidential</p>
            <p>2026</p>
          </div>
        </nav>

        {/* ── Right body: mobile subnav + content ── */}
        <div className="plan-body">

          {/* Mobile section subnav (Option A: sticky horizontal strip) */}
          {currentSections.length > 0 && (
            <nav className="plan-mobile-subnav" aria-label="Section navigation">
              <ul className="plan-mobile-subnav__list">
                {currentSections.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      className={`plan-mobile-subnav__btn${activeSection === id ? ' plan-mobile-subnav__btn--active' : ''}`}
                      onClick={() => goToSection(id)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <main className="plan-content">
            {activeChapter === 'plan'         && <ChapterPlan />}
            {activeChapter === 'collection'   && <ChapterCollection activeSection={activeSection} />}
            {activeChapter === 'branding'     && <ChapterPlaceholder title="Branding"     />}
            {activeChapter === 'financials'   && <ChapterPlaceholder title="Financials"   />}
            {activeChapter === 'distribution' && <ChapterPlaceholder title="Distribution" />}
            {activeChapter === 'notes'        && <ChapterPlaceholder title="Notes"        />}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ══ Chapter: The Plan ════════════════════════════════════════════════════════ */

function ChapterPlan() {
  return (
    <>
      {/* Hero */}
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

      {/* Narrative: It all began */}
      <section id="narrative" className="plan-section plan-narrative">
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

      {/* Claire Marlowe */}
      <section id="claire" className="plan-section plan-narrative plan-section--last" aria-labelledby="claire-title">
        <h2 id="claire-title" className="plan-claire__name">Claire Marlowe</h2>
        <div className="plan-narrative__body">

          <p>Claire Marlowe never intended to start a company.</p>

          <p>For most of her life, the object belonged only to her.</p>

          {/* Portrait */}
          <figure className="plan-portrait">
            <img
              src="/images/claire-marlowe.png"
              alt="Claire Marlowe, Southern California"
              className="plan-portrait__img"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="plan-portrait__caption">
              Claire Marlowe, photographed in Southern California, 2026.
            </figcaption>
          </figure>

          <p>After Florence, she returned to California carrying far more than a single summer romance. Over the years she built a quiet life around beauty — interiors, travel, textiles, art direction, vintage tailoring, the kinds of details most people feel before they notice. Friends described her as impossibly observant. The sort of woman who could walk into a room and somehow remember the exact scent of the candles six months later.</p>

          <p>Fashion entered her life gradually, then all at once.</p>

          <p>Not through runways or magazines, but through the accumulation of objects. Silk scarves found in Paris markets. Worn leather notebooks from Rome. Old cufflinks discovered in Palm Springs estate sales. Things touched by time. Things carrying residue.</p>

          <p>The <em>ferma maniche</em> remained among them.</p>

          <p>For years it lived quietly in drawers, wrapped in linen, moved from apartment to apartment as relationships, cities, and versions of herself changed around it. Sometimes she wore it beneath oversized white shirts while writing late at night. Sometimes she forgot it existed for months at a time before rediscovering it unexpectedly and feeling, all over again, the strange emotional suspension of that Florentine summer.</p>

          <p>Marco had eventually confessed the truth during the final weeks of their affair.</p>

          <p>The art professor was not simply an art professor.</p>

          <p>His family belonged to one of the old banking dynasties stretching back generations through northern Italy — private banking, old money, old rules, the kind of wealth that does not need to introduce itself. He spoke about it reluctantly, almost apologetically, as though it belonged to another version of him entirely.</p>

          <p>When she asked again what <em>ferma maniche</em> meant in English, he laughed and searched for the words.</p>

          <p>"Banker bands," he finally said in broken English.</p>

          <p>"Because my family… always bankers. Always these things."</p>

          <p>The phrase stayed with her almost as long as the object itself.</p>

          <p>Years later, while searching for a birthday gift for one of her closest friends, Claire found herself thinking less about jewelry and more about gestures. About the objects people quietly keep long after they stop being fashionable. About mixtapes in shoeboxes. Hotel matchbooks. Scarves borrowed and never returned.</p>

          <p>Without fully planning to, she sat at her dining table one evening and made one herself.</p>

          <p>A narrow band in soft cream and faded black elastic, stitched by hand and paired with a short handwritten note thanking her friend for remaining such an important part of her life through the years. Nothing dramatic. Nothing overly sentimental. Just something personal enough that it could never have come from a department store.</p>

          <p>Her friend cried when she opened it.</p>

          <p>Not because of the object itself, Claire thinks now.</p>

          <p>Because people are starved for thoughtful things.</p>

          <p>A few months later, her daughter borrowed one before a music festival. Then another friend asked for one. Then another. Soon Claire found herself designing versions she never could have imagined back in Florence — desert-toned woven elastics for Coachella, delicate satin versions for evenings out, striped Americana variations, darker noir editions worn beneath vintage leather jackets.</p>

          <p>The girls looked beautiful in them.</p>

          <p>Not styled. Not branded. Just… unmistakably themselves.</p>

          <p>That was the moment Claire realized the object had survived long enough to become something else.</p>

        </div>
      </section>
    </>
  );
}

/* ══ Chapter: The Collection ══════════════════════════════════════════════════ */

function ChapterCollection({ activeSection }: { activeSection: string }) {
  return (
    <div className="plan-collection-chapter">
      {activeSection === 'americana-revival' && <CollectionAmericanaRevival />}
      {activeSection === 'balletcore'        && <CollectionComingSoon name="Balletcore"      num="02" />}
      {activeSection === 'tokyo-atelier'     && <CollectionComingSoon name="Tokyo Atelier"   num="03" />}
      {activeSection === 'quiet-luxury'      && <CollectionComingSoon name="Quiet Luxury"    num="04" />}
      {activeSection === 'streetwear-luxe'   && <CollectionComingSoon name="Streetwear Luxe" num="05" />}
      {activeSection === 'euro-summer'       && <CollectionComingSoon name="Euro Summer"     num="06" />}
      {activeSection === 'dark-academia'     && <CollectionComingSoon name="Dark Academia"   num="07" />}
    </div>
  );
}

function CollectionAmericanaRevival() {
  return (
    <article className="plan-collection-view">
      <div className="plan-collection-view__hero">
        <img
          src="/images/americana-revival.png"
          alt="American Revival — Collection 2027"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1536}
          height={1024}
        />
      </div>
      <div className="plan-collection-view__body">
        <p className="plan-collection-view__eyebrow">Collection 01</p>
        <h2 className="plan-collection-view__title">American Revival</h2>
        <p className="plan-collection-view__season">Collection 2027</p>
        <div className="plan-collection-view__desc">
          <p>American Revival began accidentally.</p>
          <p>Claire's daughter wore the first desert-striped bands to a music festival outside Palm Springs. By the end of the weekend, strangers were stopping her to ask what they were.</p>
          <p>The collection draws from rodeo nights, vintage Americana, sun-faded motel signs, desert highways, denim, leather, silver jewelry, and the strange glamour of the modern American West.</p>
          <p>Somewhere between Coachella and old Marlboro postcards, the object became something younger, freer, and impossible to categorize.</p>
          <p>Rooted in heritage.</p>
          <p>Made for now.</p>
        </div>
      </div>
    </article>
  );
}

function CollectionComingSoon({ name, num }: { name: string; num: string }) {
  return (
    <div className="plan-collection-soon">
      <p className="plan-collection-soon__num">Collection {num}</p>
      <p className="plan-collection-soon__name">{name}</p>
      <p className="plan-collection-soon__note">In development.</p>
    </div>
  );
}

/* ══ Chapter: Placeholder ════════════════════════════════════════════════════ */

function ChapterPlaceholder({ title }: { title: string }) {
  return (
    <div className="plan-placeholder">
      <p className="plan-placeholder__title">{title}</p>
      <p className="plan-placeholder__note">In development.</p>
    </div>
  );
}
