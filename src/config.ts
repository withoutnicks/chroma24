export const appConfig = {
  sharing: {
    feedbackDurationMs: 1400,
  },
  catalog: {
    pageSize: 96,
    storageKey: "pixelarticons:icon-size",
    iconSize: {
      min: 32,
      max: 64,
      step: 4,
      default: 48,
    },
  },
} as const;
