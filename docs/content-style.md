## Content rules (apply to all generated prose)

- Human academic register. The site is a real university course convened by
  an academic, and should read like one: credible, precise, and written by a
  person who knows the subject. This does NOT mean stiff, pompous, or hedged
  prose, and it does not override the dry-practitioner voice or the
  anti-slop rules below — a good academic writes clearly and concretely.
  Think a well-written syllabus or a clear lecturer's course notes, not a
  journal abstract full of throat-clearing. Where "academic register" and
  "plain and dry" seem to pull apart, plain and dry wins; the academic part
  is about credibility and care, not formality for its own sake.
- No hype language. Banned words/phrases (non-exhaustive, extend by the same
  logic): "revolutionize", "game-changing", "unlock", "leverage" (as a verb),
  "supercharge", "seamless", "cutting-edge", "empower", "unleash", "10x",
  "disrupt", "synergy".
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
  over 150 words") unless a real source is cited.
- Voice is plain, dry, and sincere — closer to a practitioner's memo than a
  self-help blog. Precision is the source of any humour, not winking at the
  reader. The one deliberate exception is Tucker Vance's own voice
  (see docs/course-structure.md) — his bio and any quoted material from him
  is intentionally overblown, as contrast to the course's own register.
  Everything else (module content, assessments, the policies page) stays
  dry.
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

- No "not X, but Y" contrasts used just to add weight. State the point
  directly.
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

This applies to every page except Tucker Vance's own bio and
quoted material, which is deliberately overblown as tonal contrast, per the
Content rules above. The other three people (Tejas and the two other tutors)
stay in the dry register like the rest of the site.
