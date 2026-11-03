import { iconCategories } from "./iconCategories";

export type IconCategory =
  | "interface"
  | "navigation"
  | "actions"
  | "communication"
  | "social"
  | "people"
  | "devices"
  | "security"
  | "files"
  | "nature"
  | "weather"
  | "media"
  | "food"
  | "places"
  | "brands"
  | "other";

/** Value used by the category filter: a category or the "all" bucket. */
export type CategoryFilter = "all" | IconCategory;

export type IconEntry = {
  name: string;
  category: IconCategory;
  /** Static URL served from `public/icons`. */
  url: string;
};

/** Display order for the category filter. `other` stays last: it is a review fallback. */
const CATEGORY_ORDER: IconCategory[] = [
  "interface",
  "navigation",
  "actions",
  "communication",
  "social",
  "people",
  "devices",
  "security",
  "files",
  "nature",
  "weather",
  "media",
  "food",
  "places",
  "brands",
  "other",
];

const CATEGORY_LABELS: Record<IconCategory, string> = {
  interface: "Interface",
  navigation: "Navigation",
  actions: "Actions",
  communication: "Communication",
  social: "Social",
  people: "People",
  devices: "Devices",
  security: "Security",
  files: "Files",
  nature: "Nature",
  weather: "Weather",
  media: "Media",
  food: "Food",
  places: "Places",
  brands: "Brands",
  other: "Other",
};

export const CATEGORY_OPTIONS = [
  { value: "all", label: "All categories" },
  ...CATEGORY_ORDER.map((category) => ({ value: category, label: CATEGORY_LABELS[category] })),
];

const ICONS_BASE = `${import.meta.env.BASE_URL}icons/`;

export const icons: IconEntry[] = Object.keys(iconCategories)
  .sort((a, b) => a.localeCompare(b))
  .map((name) => ({
    name,
    category: iconCategories[name],
    url: `${ICONS_BASE}${name}.svg`,
  }));
