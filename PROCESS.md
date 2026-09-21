# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## Interim note (crit 6 retro)

This is a working snapshot for the crit 6 retro, not the finished
submission. My Assignment 2 extension (two days) doesn't carry over to the
crit cutoff, so this file reflects the repo as it stands today, with the
remainder of the write-up to follow before the extended deadline. The
sections below are accurate as far as they go; "How I got here" will get
fuller treatment once the rest of the content is in.

## What I built

A course site for "Getting Read" (SLOP3089), a course that treats cold
email as a triage problem rather than a persuasion problem: the reader has
fifty of these and a few seconds each, and almost every common writing
failure is really a failure to respect that constraint. Eleven of the
twelve weeks each name one specific, distinct failure mode (a vague ask, a
weak subject line, fake personalisation, and so on); week 1 is the
exception by design, opening from three real documented cold emails that
worked instead of a failure. Every session embeds its own worked example
directly in its prose rather than linking out to a separate examples page,
and the harness (`CLAUDE.md`) encodes the course-design rules — including
the split between what a session argues in full and what its matching
lecture page is allowed to restate — as decisions I had to justify to the
agent, not just style preferences.

## How I got here

The first working session produced most of the course's early structure —
course config, all twelve weeks' sessions and lectures, the three
assessments, the two people bios, the policy, and several rounds of
CLAUDE.md — without committing any of it. I noticed this once I went back
to CLAUDE.md's own process rule, which asks for commits that describe the
decision behind a change, not just the file touched, and realised I had
nothing to point this file at. I committed that first batch of work as a
small set of logical commits grouped by what actually belonged together
(course record and starter cleanup in
[`22971b9...fc77d4a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/compare/22971b9...fc77d4a),
each week's session and lecture as a pair in
[`12371b6...428e930`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/compare/12371b6...428e930),
the spec checks in
[`ab16b37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/commit/ab16b37),
and CLAUDE.md's state at that point in
[`49c94f2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/commit/49c94f2)),
rather than one commit dumping everything at once or, worse, backdating
commits to imply a discipline I hadn't actually kept. From that point on I
committed after each discrete piece of work: a finished week, a CLAUDE.md
revision, a new spec/ check.

I'm noting this directly rather than letting the timestamps speak for
themselves, because the gap is real and an honest account of catching and
fixing it says more about how I actually worked than a commit history
massaged to look clean from the start would.

The rest of the account: how the work actually went, and how I knew the
result was right.

The breakthrough worth citing here is a harness correction, not a content
fix. Early on, each week's example email lived on its own page under
`src/pages/examples/week-XX/`, linked from that week's session. That
matched a literal reading of CLAUDE.md's original rule ("links to at least
one real or plausibly-redacted example email") but produced exactly the
kind of thing the course's own thesis argues against: a reader has to open
a second page to find the one piece of information the session was
building toward. I caught this by checking week 1 against the rule and
noticing it didn't have a second page at all — its three real cases
(Ghulati, Janoch, Field) were written straight into the session's own
prose. Rather than let weeks 1 and 2 diverge from weeks 3–12 structurally,
I asked the agent to confirm scope (all twelve weeks, not just the two I'd
flagged) and rewrote CLAUDE.md's rule itself before touching content again:
"No separate sources/examples page or collection — the example lives in
the session text itself." That rewrite, and the twelve session pages it
then required editing, are in
[`c05b2b7...ab16b37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/compare/c05b2b7...ab16b37).

Before: a session pointed away from itself at the exact moment it needed
to make its case. After: the example is load-bearing prose on the same
page, checked by
[`spec/course-content.test.ts`](spec/course-content.test.ts)'s assertion
that every session's built HTML contains an embedded example rather than a
link out. The fix worked because it came from re-reading the rule against
the one week that already violated it by accident (week 1 having no second
page was never a deliberate exception to the sources-page structure — it
just happened to be right), not from a general instinct that "inline is
better."

A second discipline gap worth citing plainly: a full session's worth of
work (course config, all twelve weeks, CLAUDE.md through several
revisions) went uncommitted before I checked the repo's own git history
against CLAUDE.md's process rule and found nothing there. That gap, how it
was caught, and the commits that resulted are described above and in
[`22971b9...e873225`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-tejastagra/compare/22971b9...e873225).

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
