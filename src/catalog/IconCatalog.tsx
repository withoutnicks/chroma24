import { appConfig } from "../config";
import { CATEGORY_OPTIONS, type CategoryFilter, icons } from "./catalog";
import { IconCard } from "./IconCard";
import { CatalogControls } from "./CatalogControls";
import { CatalogSidebar } from "./CatalogSidebar";
import { PxlKitIcon } from "@pxlkit/core";
import { Sad } from "@pxlkit/social";
import { PixelButton, PixelEmptyState, PixelPagination, useLocalStorage } from "@pxlkit/ui-kit";
import { useState } from "react";

const { pageSize, storageKey, iconSize } = appConfig.catalog;
const iconSizeLimits: { min: number; max: number } = iconSize;
const defaultIconSize: number = iconSize.default;

const categoryCounts = CATEGORY_OPTIONS.reduce(
  (counts, option) => {
    counts[option.value as CategoryFilter] =
      option.value === "all"
        ? icons.length
        : icons.filter((icon) => icon.category === option.value).length;
    return counts;
  },
  {} as Record<CategoryFilter, number>,
);

export function IconCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [storedSize, setStoredSize] = useLocalStorage(storageKey, defaultIconSize);
  const size = Math.min(Math.max(storedSize, iconSizeLimits.min), iconSizeLimits.max);
  const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, "-");

  const filteredIcons = icons.filter((icon) => {
    if (category !== "all" && icon.category !== category) return false;
    return !normalizedQuery || icon.name.includes(normalizedQuery);
  });

  const totalPages = Math.ceil(filteredIcons.length / pageSize);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const startIndex = (safePage - 1) * pageSize;
  const visibleIcons = filteredIcons.slice(startIndex, startIndex + pageSize);

  function handleQueryChange(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(value: CategoryFilter) {
    setCategory(value);
    setCurrentPage(1);
  }

  function handleClearFilters() {
    setQuery("");
    setCategory("all");
    setCurrentPage(1);
  }

  return (
    <section aria-labelledby="catalog-title">
      <div className="workbench-layout">
        <CatalogSidebar
          query={query}
          onQueryChange={handleQueryChange}
          category={category}
          onCategoryChange={handleCategoryChange}
          categoryCounts={categoryCounts}
        />

        <div className="min-w-0">
          <CatalogControls
            resultCount={filteredIcons.length}
            totalCount={icons.length}
            size={size}
            onSizeChange={setStoredSize}
          />

          {filteredIcons.length === 0 ? (
            <PixelEmptyState
              title="No icons found"
              description={emptyDescription(query, category)}
              icon={<PxlKitIcon icon={Sad} size={32} decorative />}
              action={
                <PixelButton
                  variant="outline"
                  tone="neutral"
                  size="sm"
                  onClick={() => handleClearFilters()}
                >
                  Clear filters
                </PixelButton>
              }
            />
          ) : (
            <>
              <div className="workbench-grid" aria-label="Icon results">
                {visibleIcons.map((icon) => (
                  <IconCard key={icon.name} icon={icon} size={size} />
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                {totalPages > 1 ? (
                  <PixelPagination page={safePage} total={totalPages} onChange={setCurrentPage} />
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function emptyDescription(query: string, category: CategoryFilter) {
  const label = category === "all" ? "" : category.toLowerCase();
  const scope = label ? ` in ${label}` : "";

  if (query) return `Nothing matches “${query}”${scope}. Try a different name or category.`;
  if (!label) return "Try a different name or category.";

  return `No icons are filed under ${label} yet.`;
}
