const IconNames = [
  "arrowDown",
  "arrowUp",
  "atom",
  "comment",
  "fire",
  "graphSpline",
  "webClock",
  "chevronUp",
  "loading"
] as const;

export type IconName = typeof IconNames[number];