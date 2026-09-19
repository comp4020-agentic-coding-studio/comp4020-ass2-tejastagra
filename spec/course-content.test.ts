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
  it("has exactly twelve weeks, week 1 is the only one without a failure mode, and the rest are distinct", () => {
    const sessions = byType("sessions");
    expect(sessions).toHaveLength(12);

    const withoutFailureMode = sessions.filter((session) => session.meta?.failure_mode === undefined);
    expect(withoutFailureMode.map((s) => s.id)).toEqual(["sessions/01-why-cold-email-works"]);

    const failureModes = sessions
      .filter((session) => session.meta?.failure_mode !== undefined)
      .map((session) => session.meta?.failure_mode);
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

  it("carries the one real deck on at least one lecture", () => {
    const lectures = byType("lectures");
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0);
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });

  it("embeds a real or redacted example directly in every week's own page", () => {
    const sessions = byType("sessions");
    for (const session of sessions) {
      const slug = session.id.replace(/^sessions\//, "");
      const html = readFileSync(resolve(`dist/sessions/${slug}/index.html`), "utf8");
      const hasQuotedExample = /<blockquote>/.test(html);
      const isIntroWeekWithNamedSources = slug === "01-why-cold-email-works" && html.includes("Ghulati");
      expect(
        hasQuotedExample || isIntroWeekWithNamedSources,
        `${session.id} has no example embedded in its own page`,
      ).toBe(true);
    }
  });
});
