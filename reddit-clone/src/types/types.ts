const IconNames = [
  "arrowDown",
  "arrowUp",
  "atom",
  "comment",
  "fire",
  "graphSpline",
  "webClock",
  "chevronUp",
  "loading",
  "share",
  "save",
  "hide",
  "report"
] as const;

export type IconName = typeof IconNames[number];