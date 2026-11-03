import { appConfig } from "../config";
import { type CategoryFilter, icons } from "./catalog";
import { IconCard } from "./IconCard";
import { CatalogControls } from "./CatalogControls";
import { PxlKitIcon } from "@pxlkit/core";
import { Sad } from "@pxlkit/social";
import { PixelButton, PixelEmptyState, PixelPagination, useLocalStorage } from "@pxlkit/ui-kit";
import { useState } from "react";

const { pageSize, storageKey, iconSize } = appConfig.catalog;
const iconSizeLimits: { min: number; max: number } = iconSize;
const defaultIconSize: number = iconSize.default;

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
    <section aria-label="Colored icons" className="flex flex-col gap-6 pb-16">
      <CatalogControls
        query={query}
        onQueryChange={handleQueryChange}
        category={category}
        onCategoryChange={handleCategoryChange}
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {visibleIcons.map((icon) => (
              <IconCard key={icon.name} icon={icon} size={size} />
            ))}
          </div>

          {totalPages > 1 ? (
            <PixelPagination page={safePage} total={totalPages} onChange={setCurrentPage} />
          ) : null}
        </>
      )}
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
