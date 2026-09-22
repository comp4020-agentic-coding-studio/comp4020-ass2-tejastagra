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

## Non-negotiable structural facts

- Do not modify the fixed platform: astro-theme-slop / astro-theme-university,
  the content collection schemas, the generated API, or the build pipeline.
- Course code is SLOP3089. The allocated 089 must not change. The leading
  digit (3) is final.
- Exactly 12 dated teaching weeks, all falling between the configured
  start/end dates.
- Assessment weights must sum to exactly 100% across exactly three
  assessment components (Assignment 1, Assignment 2, Weekly syncs).
  Do not ship if they don't.

## The rest of the harness

The full set of rules this file used to hold in one piece now lives in four
topic files, imported below so every session still loads all of it:

- @docs/content-style.md — the writing rules: human register, no em dashes,
  no rhetorical "not X but Y", the hype-language ban, the humanizer pass, and
  the mechanism-over-assertion depth standard.
- @docs/deck-design.md — deck completeness and the construction rules every
  `.deck.mdx` must follow: title slides, dividers, activity slides, no
  overflow, the email-block component.
- @docs/course-structure.md — the homepage's course structure, assessment
  weights and the pass/fail model, Weekly Syncs vs. lectures, and the People
  rules.
- @docs/spec-and-process.md — the spec/ checklist and the commit-discipline
  process habits.
