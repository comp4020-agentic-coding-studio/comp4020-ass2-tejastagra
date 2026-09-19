---
title: The Machine-Written One
description:
  What a sequence gains in scale it loses in the specificity this course
  spends ten weeks arguing for — and what that trade actually costs.
week: 11
date: 2027-04-19
teachers:
  - tejas-tagra
failure_mode: automation-flattening
related:
  - lectures/week-11
---

An automated sequence can send a thousand emails in the time a one-to-one
version takes to write one. It cannot, by construction, contain the kind of
specificity week 4 argued for, because that specificity has to be true of one
reader and false of the rest. A sequence merges fields into a template; it
doesn't know anything about the recipient that a template variable didn't
already know.

This isn't an argument against automation. It's an argument for knowing what
it costs: a sequence trades reply rate per email for volume of emails sent,
and a writer who doesn't know that trade is being made will optimise the
wrong thing.

> I noticed {{company}} has been doing great things in the {{industry}}
> space lately.

Everything around a line like this can be competently merged; this one
isn't, and it's the tell. A template can hold a company name and an
industry field, but it can't know what "great things" means for one
specific reader, so it falls back to a phrase true of none of them in
particular.

## Exercise

Take a one-to-one email you're proud of and try to turn it into a template
with two variables. Note exactly which sentences survive the merge and which
ones only made sense because they were true of one specific reader.
