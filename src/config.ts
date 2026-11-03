export const appConfig = {
  links: {
    repository: "https://github.com/your-user/pixelarticon-colored",
    upstream: "https://github.com/halfmage/pixelarticons",
    license: "https://github.com/halfmage/pixelarticons/blob/master/LICENSE",
  },
  sharing: {
    text: "Pixelarticons colored — free pixel icons",
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
