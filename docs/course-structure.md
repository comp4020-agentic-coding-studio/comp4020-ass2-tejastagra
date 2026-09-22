## Course structure (must appear on the homepage)

- Runs in the summer and winter non-standard teaching periods.
- Each week is a 1-hour lecture (Mondays 11am–12pm) plus a 1-hour Weekly
  Sync: two contact hours per week.
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
- People collection needs exactly four entries: Tejas Tagra (instructor) and
  three tutors, one of whom is Tucker Vance. Do not invent staff
  beyond these four. Only Tucker's bio uses the overblown register (see
  docs/content-style.md); Tejas and the other two tutors stay dry, or the
  "one deliberate exception" loses its point. The two new tutors need
  distinct, plausible practitioner backgrounds, not variations on Tucker.

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
- at least two exercises that fit inside the hour between them. Most
  weeks split cleanly into two roughly 30-minute halves; some weeks'
  material genuinely separates into three or four shorter tasks instead.
  The count is decided by what that week's material actually supports,
  not fixed at two for its own sake — don't pad a week to raise its count
  or merge distinct tasks to lower it.

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
