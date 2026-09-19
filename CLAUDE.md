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

Every week except week 1 names ONE specific, distinct failure mode of this
kind. Week 1 sets the baseline through contrast instead — real cold emails
that worked, and why — before week 2 starts naming what goes wrong. If a
page doesn't clearly serve the triage framing, cut it or fold it into
another week rather than let it drift into generic "how to network" content.

## Content rules (apply to all generated prose)

- No hype language. Banned words/phrases (non-exhaustive, extend by the same
  logic): "revolutionize", "game-changing", "unlock", "leverage" (as a verb),
  "supercharge", "seamless", "cutting-edge", "empower", "unleash", "10x",
  "disrupt", "synergy".
- No two weeks may share a failure-mode tag, and no week may restate a prior
  week's failure mode. Eleven weeks (2–12), eleven distinct failures; week 1
  carries no failure_mode tag by design.
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
- Every week's page contains at least one real or plausibly-redacted example
  email written directly into its own prose, illustrating that week's
  failure mode. No separate sources/examples page or collection — the
  example lives in the session text itself, the way week 1 writes its three
  source cases inline.
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
- All 12 weeks get a lecture page. Week 6 ("The One That Gets Ignored")
  carries the one real `.deck.mdx` — build it as an actual content outline
  (title slide, reader time-cost framework, worked example, recap, exercise
  brief), not a placeholder deck.
- Assessment weights must sum to exactly 100%. Do not ship if they don't.
- People collection needs exactly two entries: Tejas Tagra (instructor) and
  Bodhi Kessler-Nakamura (tutor). Do not invent additional staff.

## Sessions vs. lectures — what goes where

These are two different jobs, not two views of the same content. Get this
wrong and either the session is thin or the lecture duplicates it.

**Sessions** (`src/content/sessions/`) are the actual reading. This is where
the argument lives in full: the mechanism behind the failure mode (not just
the claim that it exists), a worked example written directly into the page,
a rubric or framework where one genuinely fits the week's failure mode (see
below), and the exercise. A student who only ever reads the session pages
should come away having learned the course.

**Lectures** (`src/content/lectures/`) are the syllabus entry for the class
where that session's argument gets delivered out loud. Fixed shape, every
week:
- one-line description
- a short summary paragraph restating the session's point at a summary
  level — never re-arguing it, never introducing new claims
- an outline of bullet points naming the beats in delivery order (topics,
  not conclusions — "the three jobs a vague ask hands to the reader," not
  the explanation of what those jobs are)
- teaching team
- a link back to the session (via RELATED)

A lecture page must make sense as "here's what this class covers" without
needing the session open. It must NOT contain the mechanism explanation, the
full worked example text, or the exercise — those stay in the session. If a
lecture bullet only makes sense after reading the session, that's fine,
that's what the RELATED link is for. If a lecture page promises something
(e.g. "when cold email beats a warm intro, and when it doesn't") that the
session doesn't actually cover, that's a bug — the two pages must agree on
what the week covers, even though only the session covers it in depth.

Depth over length. There is no minimum word count for a session page, and
padding one to seem thorough is a bug. A session is not "done enough" once a
claim is made. It's done once the mechanism behind the claim is actually
explained, not just asserted and moved past — see the difference between
"vague asks fail" (assertion) and walking through why they move cost onto
the reader and pricing the fix concretely (explanation).

Not every week needs a rubric or three-question framework. Use one only
where the failure mode is genuinely a decision-making pattern (a vague ask,
fake personalisation). Weeks with a more mechanical failure mode (length,
platform mismatch, follow-up timing) shouldn't be forced into the same
rubric shape just for consistency — that produces its own version of "twelve
weeks that repeat one another," just at the structural level.

No separate sources page or reference collection, for any week. Real or
redacted examples get written directly into the session page's own prose,
the way week 1 writes Ghulati, Janoch, and Field inline. A closing line like
"see the example below" should point to content already on the same page,
never link out to a page that doesn't exist in the content model.

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
quoted material, which is deliberately overblown on purpose as tonal
contrast, per the Content rules above.

## spec/ checks to implement

- All 12 sessions/weeks exist, dated within range.
- No two weeks share a failure-mode tag (weeks 2–12 each get a `failure_mode`
  field in frontmatter; week 1 has none, by design).
- At least one lecture's page links to a real `/decks/...` file.
- Assessment weights sum to 100%.
- Every week's page contains at least one example embedded in its own prose
  (not a link out to a separate examples page).

## Process habits (not enforced by any check, but expected)

- Commit as you go. One logical change per commit. Commit messages describe
  the course-design decision behind the change, not just the mechanical
  action (e.g. "Add week 8: separate cold-ask and warm-intro genres" rather
  than "update week8.md").
- Any change to this file (CLAUDE.md itself) gets its own commit, made
  immediately, separate from whatever content change prompted it. The
  harness's rules are part of the graded record — its edit history needs to
  stand on its own, not be buried inside an unrelated content commit.
- Keep the repo private until submission.
- Do not editorialise tone beyond what's specified per section — e.g. the
  policies page stays dry even though Bodhi's bio doesn't.