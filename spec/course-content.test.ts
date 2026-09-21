import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course content promises", () => {
  it("has exactly twelve lectures, week 1 is the only one without a failure mode, and the rest are distinct", () => {
    const lectures = byType("lectures");
    expect(lectures).toHaveLength(12);

    const withoutFailureMode = lectures.filter((lecture) => lecture.meta?.failure_mode === undefined);
    expect(withoutFailureMode.map((l) => l.id)).toEqual(["lectures/week-01"]);

    const failureModes = lectures
      .filter((lecture) => lecture.meta?.failure_mode !== undefined)
      .map((lecture) => lecture.meta?.failure_mode);
    expect(failureModes).toHaveLength(11);
    for (const mode of failureModes) {
      expect(typeof mode).toBe("string");
    }
    expect(new Set(failureModes).size, "two weeks share a failure mode").toBe(failureModes.length);
  });

  it("weights every assessment to exactly 100% overall", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("marks every assessment pass/fail (holistic), per the CRS grading model", () => {
    const assessments = byType("assessments");
    expect(assessments.length).toBeGreaterThan(0);
    for (const assessment of assessments) {
      const marking = assessment.meta?.marking as { mode?: string } | undefined;
      expect(marking?.mode, `${assessment.id} is not marked holistic`).toBe("holistic");
    }
  });

  it("carries the one real deck on at least one lecture", () => {
    const lectures = byType("lectures");
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0);
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });

  it("embeds a real or redacted example directly in every week's lecture page", () => {
    const lectures = byType("lectures");
    for (const lecture of lectures) {
      const slug = lecture.id.replace(/^lectures\//, "");
      const html = readFileSync(resolve(`dist/lectures/${slug}/index.html`), "utf8");
      const hasQuotedExample = /<blockquote>/.test(html);
      const isIntroWeekWithNamedSources = slug === "week-01" && html.includes("Ghulati");
      expect(
        hasQuotedExample || isIntroWeekWithNamedSources,
        `${lecture.id} has no example embedded in its own page`,
      ).toBe(true);
    }
  });

  it("gives every Weekly Sync exactly one named tutor and two exercises", () => {
    const sessions = byType("sessions");
    expect(sessions).toHaveLength(12);
    for (const session of sessions) {
      const teachers = session.meta?.teachers as unknown[] | undefined;
      expect(teachers?.length, `${session.id} does not name exactly one tutor`).toBe(1);

      const slug = session.id.replace(/^sessions\//, "");
      const html = readFileSync(resolve(`dist/sessions/${slug}/index.html`), "utf8");
      const exerciseHeadings = html.match(/<h2[^>]*>\s*Exercise/g) ?? [];
      expect(exerciseHeadings.length, `${session.id} does not have exactly two exercises`).toBe(2);
    }
  });

  it("has exactly four people: one instructor and three tutors", () => {
    const people = byType("people");
    expect(people).toHaveLength(4);

    const instructors = people.filter((person) => person.meta?.role === "instructor");
    const tutors = people.filter((person) => person.meta?.role === "tutor");
    expect(instructors).toHaveLength(1);
    expect(tutors).toHaveLength(3);
  });
});
