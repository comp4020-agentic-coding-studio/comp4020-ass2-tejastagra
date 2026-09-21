# CLAUDE.md — SLOP3089: Getting Read

This file is the harness for building the course site. It exists because the
assignment is marked partly on the rules encoded here, not just the output.
Every rule below reflects a course-design decision, not a style preference —
if you can't tell why a rule exists, ask before dropping it.

## Course thesis (the one idea every page must serve)

A cold email is a triage problem, not a persuasion problem. The reader has
fifty of these and a few seconds each. Almost every common writing failure is
really a failure to understand that constraint, not a failure of charm or
persuasion technique.

Every week names ONE specific, distinct failure mode of this kind. If a page
doesn't clearly serve the triage framing, cut it or fold it into another week
rather than let it drift into generic "how to network" content.

## Course structure (must appear on the homepage)

- 3 credits.
- Runs in the summer and winter non-standard teaching periods.
- Each week is a 1-hour lecture (Mondays 11am–12pm) plus a 1-hour Weekly
  Sync: two contact hours per week.
- Weekly Syncs are run by the three tutors across the week; the homepage
  carries a table of which tutor runs which sync and when.
- Three assessment components, stated on the homepage with a link to the
  assessment page: Assignment 01 (22%), Assignment 02 (30%), and Weekly
  syncs: attendance and completion (48%, one assessment entry covering all
  twelve Weekly Syncs, not twelve separate entries). Its own page explains,
  in plain English, that each week's 4% splits into 2% for attendance and
  2% for completing that week's work, that everything is graded through
  Canvas, and that a missed sync can only be made up through the
  University's extenuating circumstances process.
- Graded CRS (pass/fail), does not count toward GPA. The percentage weights
  (22/30/48) stay in the frontmatter and data only because the platform's
  schema requires a numeric weight per assessment and needs them to sum to
  100% to build; they are not a mark the student is chasing. What actually
  determines the pass/fail outcome, and what must be stated in plain
  English on every assessment page and on the main Assessment page, is: a
  student passes the course by passing Assignment 01, passing Assignment
  02, and completing at least 8 of the 12 weekly syncs. The Weekly Syncs
  page in particular must lead with the 8-of-12 threshold, not the
  percentages, since that threshold is the thing that actually decides
  whether a student passes. IMPORTANT: before
  writing this to the homepage, verify the template's fixed grading/marks
  model actually permits a CRS/pass-fail grade type. The spec says SlopU's
  "name, marks and palette stay as they arrived," so a custom grade scheme
  that conflicts with the fixed university reads as ignoring the brief. If the
  template doesn't support CRS, flag it and stop rather than inventing one.
- Homepage help line: for help, email SLOP3089@slop.university or use the
  Canvas page.

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
- No two weeks may share a failure-mode tag, and no week may restate a prior
  week's failure mode. Twelve weeks, twelve distinct failures.
- Any claim about reply rates, open rates, or other behavioural statistics
  must be phrased directionally ("shorter emails tend to get faster replies"),
  never as a fabricated precise statistic ("73% of investors ignore emails
  over 150 words") unless a real source is cited.
- Voice is plain, dry, and sincere — closer to a practitioner's memo than a
  self-help blog. Precision is the source of any humour, not winking at the
  reader. The one deliberate exception is Bodhi Kessler-Nakamura's own voice
  (see People) — his bio and any quoted material from him is intentionally
  overblown, as contrast to the course's own register. Everything else
  (module content, assessments, the policies page) stays dry.
- Every week's deck includes at least one concrete example illustrating that
  week's failure mode, built directly into a slide (see Sessions vs.
  lectures below — no separate sources page). The lecture page itself is a
  short recap and does not carry the example; the deck is where it lives.
  Two kinds are both allowed, and it matters which one you're using:
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

## Structural rules (do not deviate without flagging)

- Do not modify the fixed platform: astro-theme-slop / astro-theme-university,
  the content collection schemas, the generated API, or the build pipeline.
- Course code is SLOP3089. The allocated 089 must not change. The leading
  digit (3) is final.
- Exactly 12 dated teaching weeks, all falling between the configured
  start/end dates.
- All 12 weeks get a lecture page, and every week carries a full, polished
  `.deck.mdx` slide deck linked from its lecture page. Week 6 ("The Reader's
  Reply Calculation") is the reference for quality. All 12 decks stay visually
  consistent with each other. No placeholder decks.

### Deck construction rules (every deck must follow these)

- **No content may overflow a slide.** If an email, quote, or block of text
  doesn't fit on one slide, split it across slides (continue it on the next
  slide) or shorten it. A slide with text cut off at the edge is a bug, not a
  style choice. This is the single most common current fault — check every
  slide renders fully at both viewports before considering a deck done.
- **Title slide:** full-bleed background artwork (a randomly-generated /
  hand-built SVG in the SlopU gold-and-black risograph palette is permitted
  and encouraged), with the week number and week title over it. Never a plain
  flat coloured rectangle with text — that reads as unfinished.
- **Section-divider slides:** break each deck into parts with big statement
  slides that carry one short line (the reference deck uses "the spec is the
  contract" as a full-slide statement). Use these as dividers between the
  deck's main movements, and place some of them in the MIDDLE of the deck, not
  only at the start. These divider/statement slides may use the same
  full-bleed SVG-art treatment as the title slide.
- **An agenda slide near the top** ("what this lecture covers" / today's
  beats): a few bullets naming the beats in order.
- **In-class discussion / activity slides in every deck.** Every deck must
  include recurring audience-participation slides: a "now you try" or
  "talk to your neighbour" prompt, often as a fill-in-the-blank the room
  completes (the reference deck uses "One thing this plan is still missing is
  ______"), a "predict, then watch" prompt, or "look this up" activities.
  These are what make it a lecture rather than a wall of text. At least two
  per deck, spread through it.
- **No exercises at the end of the lecture deck.** The two 30-minute exercises
  live in that week's Weekly Sync, not the lecture. The lecture deck ends on a
  recap / synthesis slide, not an exercise brief. (In-class discussion prompts
  above are NOT exercises — those stay.)
- **Emails on slides use the email-block component** (From/To/Subject header,
  body below), and must fit the slide — split a long email across two slides
  rather than letting it clip.
- **One idea per slide, short dry headings**, matching the site's register and
  the reference deck's rhythm.

### Summary / lecture-page consistency rule

The deck is the full teaching content, including the worked example. The
lecture page's "In brief" section is a short recap only, not a subset
transcript of the deck's detail: it names the week's failure mode, states
its mechanism in one line, and says why it matters, in 3-4 sentences. It
never includes an example, a reconstructed email, or a rubric block — those
stay on the slides. Before removing an example from a lecture page, confirm
it already exists in that week's deck, so nothing is lost in the move.
- Assessment weights must sum to exactly 100% across exactly three
  assessment components (Assignment 01, Assignment 02, Weekly syncs).
  Do not ship if they don't. Weekly syncs are graded as one assessment
  entry worth 48% overall, not as twelve separate 4% entries — the
  breakdown by week lives in that one entry's own page, not in the
  assessment collection's structure. These weights are internal data
  the platform needs to build; the pass/fail outcome for a student is
  governed by the pass-Assignment-01/pass-Assignment-02/complete-8-of-12
  rule above, not by the weights, and the assessment pages must say so.
- Assessment descriptions must be written in plain English that a student
  understands without having seen any lecture or slide. No course jargon
  ("failure mode", "taxonomy", or other internal shorthand) on the
  assessment pages themselves.
- People collection needs exactly four entries: Tejas Tagra (instructor) and
  three tutors, one of whom is Bodhi Kessler-Nakamura. Do not invent staff
  beyond these four. Only Bodhi's bio uses the overblown register (see
  Content rules); Tejas and the other two tutors stay dry, or the "one
  deliberate exception" loses its point. The two new tutors need distinct,
  plausible practitioner backgrounds, not variations on Bodhi.

## Weekly Syncs vs. lectures — what goes where

The `sessions` collection is displayed to readers as "Weekly Syncs" (the
internal collection name, folder, and URLs stay `sessions`; only the display
label in `src/site-config.ts` changes). These are two different jobs, not two
views of the same content.

**Weekly Syncs** (`src/content/sessions/`) are the tutor-led hour, but no
single sync page names a leading tutor. The three tutors each run the same
week's sync content at a different time during the week — a student
attends one of the three — so no individual sync belongs to one of them.
That schedule (which tutor runs which time) lives on the homepage table,
not on the sync page itself. Each week's sync page is deliberately thin
and contains only:
- a link to that week's related lecture/week
- exactly two exercises, each scoped to about 30 minutes

The Weekly Sync page does NOT carry the full teaching argument or the
mechanism. It is the practical hour attached to the lecture, not the reading.
Keep it short.

**Lectures** (`src/content/lectures/`) are now where the deck-backed weekly
content lives, but the page itself is deliberately thin. The deck carries
the depth; the page is a pointer to it. Tejas Tagra convenes and takes
every lecture, so lecture pages don't carry a per-page instructor line
either — that fact belongs on the People page, not repeated 12 times. Each
lecture page carries, in this order:
- the date
- a short overview paragraph
- a link to the slide deck (week 6 required; others per the deck rule above)
- a callout reading roughly: "This is just to get a quick understanding
  before the lecture. The examples and the rest are in the lecture, so it's
  advisable you attend."
- an "In brief" section: 3-4 sentences naming the week's failure mode,
  stating its mechanism in one line, and saying why it matters. No example,
  no reconstructed email, no rubric block — see the Summary / lecture-page
  consistency rule above.
- the Outline
- a link to that week's Weekly Sync (already satisfied automatically by
  `related` frontmatter and the platform's own related-content rendering;
  no separate link needs to be hand-built)

The depth bar that used to apply to the lecture page's summary now applies
to the deck: the deck is what a marker reads to judge whether the week
teaches something real, and it must explain the mechanism of that week's
failure mode, not just name it. "Vague asks fail" (assertion) is not enough;
walking through why they move cost onto the reader (explanation) is the
standard, and that explanation belongs on the slides.

Not every week needs a rubric or framework. Use one only where the failure
mode is genuinely a decision-making pattern (a vague ask, fake
personalisation). Weeks with a mechanical failure mode (length, platform
mismatch, follow-up timing) shouldn't be forced into the same rubric shape
just for consistency — that produces its own version of "twelve weeks that
repeat one another," at the structural level.

The lecture page and its Weekly Sync must agree on what the week covers. If a
sync exercise assumes something the lecture never taught, that's a bug.

No separate sources page or reference collection, for any week. Examples get
built directly into that week's deck as slides, the way week 1's deck
carries Ghulati, Janoch, and Field. A line like "see the example below" only
ever points to content already in the same deck, never to a page that
doesn't exist.

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

This applies to every page except Bodhi Kessler-Nakamura's own bio and
quoted material, which is deliberately overblown as tonal contrast, per the
Content rules above. The other three people (Tejas and the two other tutors)
stay in the dry register like the rest of the site.

## spec/ checks to implement

- All 12 sessions/weeks exist, dated within range.
- No two weeks share a failure-mode tag (add a `failure_mode` field to each
  week's frontmatter if the schema allows it, or enforce via a checked list).
- Weeks are grouped into blocks via `block` and `blockTitle` frontmatter
  fields (not "units").
- Every lecture links a real `/decks/...` file (all 12 weeks carry a deck).
- Exactly three assessment components exist (Assignment 01, Assignment 02,
  Weekly syncs) and their weights sum to 100%.
- Every week's deck contains at least one concrete example (real/redacted
  or composite, per the Content rules above) built into a slide.
- Every Weekly Sync page has exactly two exercises and names no single
  leading tutor (the tutor/time schedule lives on the homepage table only).
- Exactly four people entries exist (one instructor, three tutors).

## Process habits (not enforced by any check, but expected)

- Commit as you go. One logical change per commit. Commit messages describe
  the course-design decision behind the change, not just the mechanical
  action (e.g. "Add week 8: separate cold-ask and warm-intro genres" rather
  than "update week8.md").
- Commit every time CLAUDE.md changes, on its own, before moving on. A change
  to the harness is itself a course-design decision and belongs in the
  history as one, with a message saying what rule changed and why.
- Keep the repo private until submission.
- Do not editorialise tone beyond what's specified per section — e.g. the
  policies page stays dry even though Bodhi's bio doesn't.
