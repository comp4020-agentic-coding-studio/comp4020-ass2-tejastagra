# Process overview

<!-- TEMPLATE: this file is a shape to fill in, not a form. Replace everything
     in it with your own overview, and delete this comment — `pnpm
     check:evidence` will remind you if it's still here. -->

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

One paragraph: the thing, and the idea behind it.

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
result was right, in whatever order makes it clear.

Cite the record as you go, as links whose text is the commit hash or range and
whose target is this repo's commit or compare URL, so a reader clicks straight
to the evidence:

- one commit: [`a1b2c3d`](https://github.com/YOUR-ORG/YOUR-REPO/commit/a1b2c3d)
- a range:
  [`a1b2c3d...e4f5a6b`](https://github.com/YOUR-ORG/YOUR-REPO/compare/a1b2c3d...e4f5a6b)

To pair a prompt with the commit it produced, quote the prompt (curated, not a
full transcript) next to the citation:

> the prompt, verbatim

Screenshots are welcome where one carries the point better than a sentence does.
Commit the file to this repo and link it with a **relative** path, which is what
makes it render on GitHub: `![alt text](docs/before.png)`. Images don't count
towards the word count and don't replace the citation.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
