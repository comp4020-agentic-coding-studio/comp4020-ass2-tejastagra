## Established course facts (do not let an edit contradict these)

- The course is titled "Writing to Strangers" (SLOP3089). The homepage
  states it is more informally known as "Nobody Owes You a Reply."

## Course structure (must appear on the homepage)

- Runs in Semester 1, 2027 only. No prerequisites.
- Each week is a 1-hour lecture (Mondays 11am–12pm, Sloppy Slop Slop
  Building, Rm 7.09) plus a 1-hour Weekly Sync: two contact hours per week.
- Weekly Syncs are run by the three tutors across the week; the homepage
  carries a table of which tutor runs which sync and when.
- Three assessment components, stated on the homepage with a link to the
  assessment page: Assignment 1 (30%), Assignment 2 (22%), and Weekly
  syncs: attendance and completion (48% in the underlying data, one
  assessment entry covering all twelve Weekly Syncs, not twelve separate
  entries). The Weekly Syncs page carries no percentage or weight on
  screen (see the pass/fail note below): it explains, in plain English,
  what a weekly sync actually is, that you pass one by showing up,
  engaging and finishing the in-class task through Canvas, and that a
  missed sync can only be made up through the University's extenuating
  circumstances process.
- Graded CRS (pass/fail), does not count toward GPA. The percentage weights
  (22/30/48) stay in the frontmatter and data only because the platform's
  schema requires a numeric weight per assessment and needs them to sum to
  100% to build; they are not a mark the student is chasing. What actually
  determines the pass/fail outcome, and what must be stated in plain
  English on every individual assessment page, is: a
  student passes the course by passing Assignment 1, passing Assignment
  2, and completing at least 8 of the 12 weekly syncs. The main Assessment
  page's intro states only the CRS pass/fail fact, not the full rule; the
  full rule lives on the three individual assessment pages. The Weekly Syncs
  page in particular must lead with the 8-of-12 threshold, not the
  percentages, since that threshold is the thing that actually decides
  whether a student passes, and must not display a weight or a
  percentage on the page at all, even though the weight stays in that
  entry's frontmatter so the assessment collection's weights still sum
  to 100% for the platform's build check. IMPORTANT: before
  writing this to the homepage, verify the template's fixed grading/marks
  model actually permits a CRS/pass-fail grade type. The spec says SlopU's
  "name, marks and palette stay as they arrived," so a custom grade scheme
  that conflicts with the fixed university reads as ignoring the brief. If the
  template doesn't support CRS, flag it and stop rather than inventing one.
- Homepage help line: for help, email SLOP3089@slop.university or use the
  Canvas page.
- Homepage "Where to go next" section: six boxes, in this order: Lectures,
  Weekly Syncs, Assessment, Policies, People, Students' Union. The
  Students' Union box links `sa.union@slop.university` and is described as
  independent help for academic integrity concerns or anything a student
  would rather not raise with the course directly.

## Summary / lecture-page consistency rule

The deck is the full teaching content, including the worked example. The
lecture page's "In brief" section is a short recap only, not a subset
transcript of the deck's detail: it names the week's failure mode, states
its mechanism in one line, and says why it matters, in 3-4 sentences. It
never includes an example, a reconstructed email, or a rubric block — those
stay on the slides. Before removing an example from a lecture page, confirm
it already exists in that week's deck, so nothing is lost in the move.

## Assessment weights and the pass/fail model

- Weekly syncs are graded as one assessment entry worth 48% overall, not as
  twelve separate 4% entries — the breakdown by week lives in that one
  entry's own page, not in the assessment collection's structure. These
  weights are internal data the platform needs to build; the pass/fail
  outcome for a student is governed by the pass-Assignment-1/pass-
  Assignment-2/complete-8-of-12 rule above, not by the weights, and each
  individual assessment page must say so.
- Assessment descriptions must be written in plain English that a student
  understands without having seen any lecture or slide. No course jargon
  ("failure mode", "taxonomy", or other internal shorthand) on the
  assessment pages themselves.
- All three assessment entries (Assignment 1, Assignment 2, Weekly syncs),
  not only Weekly syncs, hide their weight on screen (`hideWeight: true`
  in frontmatter). No assessment page or index shows a percentage or
  weight on screen, anywhere; the weight stays in the data only for the
  platform's sum-to-100 build check.
- The pass rule, stated plainly wherever assessment is discussed: a
  student passes the course by passing Assignment 1, passing Assignment 2,
  and completing at least 8 of the 12 Weekly Syncs. State the real rule in
  plain English in place of a percentage every time a page would otherwise
  reach for one.
- People collection needs exactly four entries: Tejas Tagra (instructor) and
  three tutors, one of whom is Tucker Vance. Do not invent staff
  beyond these four. Only Tucker's bio uses the overblown register (see
  docs/content-style.md); Tejas and the other two tutors stay dry, or the
  "one deliberate exception" loses its point. The two new tutors need
  distinct, plausible practitioner backgrounds, not variations on Tucker.

## Feedback, appeals and extensions

- Feedback for an assessment is returned within 14 days of submitting it.
  A late submission may get feedback later than the rest of the class,
  since the 14 days runs from that student's own submission, not the
  class due date.
- Students can raise a result informally by emailing the course. A formal
  appeal is against the overall course result, not a single assessment,
  must be lodged within 20 working days, and follows the University's
  Coursework policies and procedures.
- Late submissions are not accepted without a previously approved
  extension (email the course; no documentation required in the first
  instance). All work is submitted through Canvas, never by email.
  Extensions up to 10 working days are handled by the course directly;
  beyond 10 working days requires a formal Extenuating Circumstances
  Application (ECA) through the University's Exams, Graduations and
  Prizes office, a process the course convenor does not manage.

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
- at least two exercises that fit inside the hour between them. Most
  weeks split cleanly into two roughly 30-minute halves; some weeks'
  material genuinely separates into three or four shorter tasks instead.
  The count is decided by what that week's material actually supports,
  not fixed at two for its own sake — don't pad a week to raise its count
  or merge distinct tasks to lower it.

The Weekly Sync page does NOT carry the full teaching argument or the
mechanism. It is the practical hour attached to the lecture, not the reading.
Keep it short. It also does not carry an inline link to that week's lecture
at the top of the page: that link lives only in the RELATED block at the
bottom, so the lecture isn't linked twice on one page.

**Lectures** (`src/content/lectures/`) are now where the deck-backed weekly
content lives, but the page itself is deliberately thin. The deck carries
the depth; the page is a pointer to it. Tejas Tagra convenes and takes
every lecture, so lecture pages don't carry a per-page instructor line
either — that fact belongs on the People page, not repeated 12 times. Each
lecture page carries, in this order:
- the date
- a short overview paragraph
- a link to the slide deck (week 6 required; others per docs/deck-design.md)
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

## Site component conventions

These conventions were established while building the site and apply to any
future page or component, not just the ones that happened to introduce them.

- **Callout component:** a flat rectangle, never rounded (`border-radius: 0`),
  no border, with a 3px accent-coloured rule along the top edge. The
  background is the accent colour itself blended in at 12% opacity via
  `color-mix()`, so it stays legible and adapts automatically in both light
  and dark themes without a separate dark-mode override. Three accent
  variants: green, gold, neutral. Inline code inside a callout gets a faint
  accent-tinted highlight rather than the page's normal inline-code style.
  Callouts are used site-wide (the lecture attend-note, the homepage help
  line, assessment and policy notes), not just on one page, so any new
  callout use follows this same styling rather than a bespoke one.
- **RELATED block labeling:** a link to a lecture is prefixed `"Lecture: "`,
  a link to a Weekly Sync is prefixed `"Weekly Sync: "`, and a link to
  anything else (an assessment, a person) carries no prefix. This keys off
  the destination's collection (see `src/lib/related.ts`), not the page it
  appears on, so it applies uniformly wherever a RELATED block is built. A
  lecture page's RELATED block links that week's Weekly Sync. A Weekly
  Sync page's RELATED block links that week's lecture AND the main
  Assessment page: the Assessment link appears only here, nowhere else in
  RELATED.
- **People contact-card layout:** a circular photo, or an initials fallback
  when no photo file exists yet; the person's name appears once, as the
  page's own heading, and is not repeated inside the card (the card header
  serves as the page's heading, so name and title each appear exactly once
  per page); Role, Affiliation, Email, Office hours (or Contact for
  tutors), and Web render as zebra-striped label/value rows. Office hours
  read "N/A" for tutors; only the convenor has real office hours. The
  convenor is always listed first, on both the index and in the People
  collection's display order. Affiliation is shown both on the People
  index cards (under the role label) and on each person's detail page,
  from the same `affiliation` field, so the two views cannot drift apart.
  Index cards show name, title, and affiliation only, no bio blurb: the
  full bio lives only on that person's own detail page.
- **Index pages render a visible heading via `ContentLayout`.** The People,
  Assessment, and Weekly Syncs index pages are plain `.astro` pages using
  `ContentLayout` for this reason, not MDX pages relying on the site's
  default layout, which sets the document title but renders no visible
  heading on the page itself.
- **The header must fit the logo, nav links, and search on one row at
  desktop widths (≥640px), never wrapping to a second row.** If a change
  makes it wrap, fix it via spacing, not by changing the header's height or
  breaking the mobile collapse behaviour (below 640px): tighten the gap via
  the theme's `brandCss` layering hook (an additional, unlayered stylesheet
  loaded alongside the theme's own), never by editing the fixed
  `astro-theme-university` package directly.
