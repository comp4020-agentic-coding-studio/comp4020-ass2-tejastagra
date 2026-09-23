## spec/ checks to implement

- All 12 sessions/weeks exist, dated within range.
- No two weeks share a failure-mode tag (add a `failure_mode` field to each
  week's frontmatter if the schema allows it, or enforce via a checked list).
- Weeks are grouped into blocks via `block` and `blockTitle` frontmatter
  fields (not "units").
- Every lecture links a real `/decks/...` file (all 12 weeks carry a deck).
- Exactly three assessment components exist (Assignment 1, Assignment 2,
  Weekly syncs) and their weights sum to 100%.
- Every week's deck contains at least one concrete example (real/redacted
  or composite, per docs/content-style.md) built into a slide.
- Every Weekly Sync page has at least two exercises. No sync page names a
  leading tutor — the schedule of which tutor runs which sync lives only on
  the homepage table.
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
- Do not editorialise tone beyond what's specified per section: every page,
  including all four people's bios, stays in the site's dry register.
