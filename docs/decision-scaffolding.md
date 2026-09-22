This file is different from the other three topic docs. It doesn't hold
content rules or design rules; it holds the decision-making patterns used to
build this site, so future work (and the PROCESS.md account of how the site
was built) has a scaffolding to point to, not just a pile of individual
rules picked up along the way.

## 1. Content-safety-before-deletion

Before removing content from one place (a lecture page's summary, a section
of a page), confirm it already exists in its new home (that week's deck,
another section) first. Never let a trim happen before its replacement is
verified to be there.

Why: a trim and a move are two different operations. Doing the trim before
confirming the move leaves a window where the content exists nowhere at
all, and that window can silently become permanent if nobody checks back.
This is a standing rule for all future edits, not just the ones already
done under it.

## 2. Spec-conflict resolution

If a requested change would break an existing `spec/` check, do not silently
edit the check to make it pass. Stop, name the conflict plainly, and let the
person building the course decide whether the underlying rule changes.

Why: a spec check exists because it protects a course-design decision made
earlier, not because it protects itself. Changing the check is itself a
course-design decision, and making that change invisibly (by quietly
loosening the check instead of surfacing the conflict) hides a decision
that should have been made out loud.

## 3. Small changes, verified before the next one starts

Prefer one clear change per commit over batching several together. After a
change, show the rendered result, not just a description of it, before
treating it as done, and only start the next change once the current one is
confirmed.

Why: batching changes together makes it unclear which change caused a
problem when one shows up, and describing a result instead of showing it
lets a wrong result pass as a right one. Small, verified steps keep both
failures visible while they're still cheap to fix.

## 4. Verify, don't just report

A claim that something is "fixed" or "matches the reference" is not
confirmed until the actual rendered output is checked against what was
asked for.

Why: this matters most for visual and styling changes, where a description
can sound correct while the actual result doesn't match. A described fix
and a verified fix are not the same thing, and only the second one counts
as done.

## 5. Reusable-component discipline

Once a visual or structural pattern is established (a callout style, a card
layout, a content-block component), apply it consistently everywhere it
belongs rather than reinventing it per page. A new instance of that pattern
should reuse the existing component, not approximate it with bespoke markup.

Why: an approximated pattern drifts from the original a little more each
time it's copied, and the site ends up with several near-identical versions
of the same thing instead of one. Reusing the component keeps every
instance changing together instead of separately.

## 6. The "why does this exist" test

Every rule in this harness should have a traceable reason. If a rule's
purpose can't be stated, that's a sign to question it rather than keep it
by default.

Why: a rule kept only out of habit is indistinguishable, from the outside,
from a rule that's actively load-bearing, and the two deserve different
treatment. The same test cuts both ways: a rule with a clear, stated reason
should not be dropped just because it's inconvenient in the moment, since
inconvenience is not evidence the reason has stopped applying.
