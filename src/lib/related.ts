// Destination-type label for a RELATED link, keyed by the target's
// collection. Anything not listed here (assessments, people, the
// hand-added Assessment link) renders with no prefix.
const relatedTypeLabels: Record<string, string> = {
  lectures: "Lecture",
  sessions: "Weekly Sync",
};

export function relatedLinkText(entry: { collection: string; data: { title: string } }) {
  const prefix = relatedTypeLabels[entry.collection];
  return prefix ? `${prefix}: ${entry.data.title}` : entry.data.title;
}
