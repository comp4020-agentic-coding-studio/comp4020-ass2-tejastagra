## Voice

Dry, plain, and sincere: closer to a practitioner's memo than a self-help
blog. Precision is the source of any humour, not winking at the reader. The
site is also a real university course convened by an academic, so it should
read like credible, precise notes from a person who knows the subject: a
well-written syllabus or a clear lecturer's course notes, not a journal
abstract full of throat-clearing, and not stiff, pompous, or hedged prose
either. Where "academic register" and "plain and dry" seem to pull apart,
plain and dry wins; the academic part is about credibility and care, not
formality for its own sake.

All four people's bios (Tejas and the three tutors, including Tucker Vance)
use this same dry register, alongside module content, assessments, and the
policies page.

## Content rules (apply to all generated prose)

- No em dashes anywhere on the site, ever, including em dashes and en dashes
  used as em dashes (a spaced en dash standing in for one). This applies to
  every deck, every lecture and Weekly Sync page, the homepage, the policies
  page, assessment pages, and people bios, not just prose pages. Rewrite as
  a full stop, a comma, or a colon, whichever the sentence actually needs.
  En dashes used for genuine numeric or time ranges with no surrounding
  spaces (`11am–12pm`, `2pm–3pm`, a week range) are not em dashes and stay.
- No "not X but Y" rhetorical construction, and no "X, but Y" sentence used
  for rhetorical contrast rather than a plain conjunction. Reword into
  direct sentences instead. This applies everywhere on the site, including
  decks, with exactly one exception: the homepage course-description
  sentence in `src/course-config.ts` ("not because they're badly written
  but because the reader is skimming a full inbox in seconds"), which was
  deliberately kept. Ordinary, non-rhetorical uses of "but" (idioms like
  "nothing but forward", compound descriptions like "true but generic") are
  not the banned construction and don't need rewording.
- No two weeks may share a failure-mode tag, and no week may restate a prior
  week's failure mode. Twelve weeks, twelve distinct failures.
- Any claim about reply rates, open rates, or other behavioural statistics
  must be phrased directionally ("shorter emails tend to get faster replies"),
  never as a fabricated precise statistic ("73% of investors ignore emails
  over 150 words") unless a real source is cited. This is not just a rule
  about reply rates: no content anywhere on the site, including a
  composite/illustrative example, states a fabricated precise statistic of
  any kind. Directional claims only, unless a real source is cited.
- No repetition within a single page. A section must not restate what
  another section on the same page already said. If two sections are
  saying the same thing, cut one or merge them rather than let both stand.
- Index-page card descriptions (Lectures, Weekly Syncs, Assessment, People)
  must not share a repeated sentence formula across entries. Each
  description should read as genuinely about that specific item, not a
  template with the topic swapped in.
- No stock photos and no fabricated or AI-generated photos of real-seeming
  people, anywhere on the site. Fictional people (the convenor, the tutors)
  are represented with an initials circle or hand-built SVG illustration,
  never a photo standing in for a person who doesn't exist.
- Tutor bios stay short (one to three lines), name a real plausible degree,
  and never describe what the tutor does in the course (no "marks the
  portfolio", no "reviews weekly work", no other grading language). What a
  tutor does belongs on the assessment pages, not in the person's bio.
- Every week's deck includes at least one concrete example illustrating that
  week's failure mode, built directly into a slide (see
  docs/course-structure.md — no separate sources page). The lecture page
  itself is a short recap and does not carry the example; the deck is where
  it lives. Two kinds are both allowed, and it matters which one you're
  using:
  - **Real or redacted**, when the point is that this specific documented
    thing happened (week 1's Ghulati/Janoch/Field cases). Attribute it
    honestly, don't invent details beyond what's documented.
  - **Composite/invented**, when the point is a pattern rather than a
    specific person's failure (week 4's "I really enjoyed your recent talk
    on scaling engineering teams..." line). This is fine and often clearer,
    since it can be built to demonstrate the mechanism precisely, but it
    must not be presented as something a real person actually sent, and
    should read as illustrative rather than gossip about someone specific.
  Default to composite for weeks that critique a generic failure mode;
  reach for real/redacted only when the historical fact of what happened is
  itself part of the point (fundraising outcomes, documented reply rates).
- Reconstructed emails, not screenshots. When a real documented email is
  shown (Ghulati, Janoch, Field), typeset it on the page using the email-block
  component (bordered block with bold From/To/Subject header lines and the
  body below, styled to read like an email client), built from publicly
  reported content, and label it clearly as reconstructed from public
  reporting. Never reproduce or embed an actual screenshot or image of a real
  email — a screenshot of a real email is a copyrighted work even though the
  underlying facts are not. Composite/invented example emails use the same
  email-block component so they read as emails, not as body prose.
- Prose should read like it comes from someone who has actually read cold
  emails professionally — concrete, specific, no generic career-advice
  filler.

## Banned and avoided vocabulary

- No hype language. Banned words/phrases (non-exhaustive, extend by the same
  logic): "revolutionize", "game-changing", "unlock", "leverage" (as a verb),
  "supercharge", "seamless", "cutting-edge", "empower", "unleash", "10x",
  "disrupt", "synergy".
- "Taxonomy" and "failure taxonomy" are banned words anywhere on the site,
  including People bios. Say what it means in plain terms instead of
  reaching for the shorthand.
- "Triage" is avoided as a visible word on the site. The underlying idea
  behind the course (the reader skims a full inbox fast and decides in
  seconds) stays central and must still come through, but express it in
  plain language rather than the word itself, with the single exception of
  the one homepage sentence already granted the "not X but Y" exception
  in Content rules above.

## Mechanism over assertion (the depth bar)

The depth bar that used to apply to the lecture page's summary now applies
to the deck: the deck is what a marker reads to judge whether the week
teaches something real, and it must explain the mechanism of that week's
failure mode, not just name it. "Vague asks fail" (assertion) is not enough;
walking through why they move cost onto the reader (explanation) is the
standard, and that explanation belongs on the slides.

## Writing like a human, not a model

All generated prose on the site (week pages, assessment briefs, the policies
page, bios) must read like it was written by a person, not a language model.
If the `humanizer` skill is available in this environment, run every page of
prose through it before committing. If it isn't available, apply these rules
directly:

- No "not X but Y" contrasts (see the full rule and its one exception in
  Content rules above).
- No one-line closers that restate the paragraph above them ("That's the
  real lesson.").
- No staged run-ups ("Let's break this down", "Here's the thing").
- No forced triads or rhythm-by-rule sentence structure.
- No bold labels on list items where the label carries no information a
  plain sentence wouldn't.
- No inflated claims dressing an ordinary point as a hidden truth ("at its
  core", "what really matters", "the architecture of").
- No chatbot residue anywhere ("I hope this helps", "let me know").
- Vary sentence length. Real writing doesn't move in a steady rhythm.
- Keep specific, odd, concrete detail. Cut generic filler before cutting
  detail.

This applies to every page, with no exceptions: see the Voice section above.
