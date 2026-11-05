import { PxlKitIcon } from "@pxlkit/core";
import { Search } from "@pxlkit/ui";
import { PixelInput, PixelKbd } from "@pxlkit/ui-kit";
import { useEffect, useRef } from "react";
import { CATEGORY_OPTIONS, type CategoryFilter } from "./catalog";

type CatalogSidebarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  category: CategoryFilter;
  onCategoryChange: (value: CategoryFilter) => void;
  categoryCounts: Record<CategoryFilter, number>;
};

export function CatalogSidebar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categoryCounts,
}: CatalogSidebarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      event.preventDefault();
      inputRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside className="workbench-sidebar" aria-label="Catalog filters">
      <div className="workbench-sidebar__search">
        <label className="sr-only" htmlFor="icon-search">
          Search icons
        </label>
        <PixelInput
          id="icon-search"
          ref={inputRef}
          type="search"
          aria-label="Search icons"
          placeholder="Search icons…"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onClear={() => onQueryChange("")}
          clearable
          icon={<PxlKitIcon icon={Search} size={16} appearance="solid" decorative />}
          suffix={<PixelKbd>/</PixelKbd>}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <div className="workbench-sidebar__heading">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-retro-muted">
          Library
        </h2>
        <span className="font-mono text-[10px] text-retro-muted">{categoryCounts.all}</span>
      </div>

      <nav aria-label="Icon categories" className="workbench-category-list">
        {CATEGORY_OPTIONS.map((option) => {
          const selected = category === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onCategoryChange(option.value as CategoryFilter)}
              className={`workbench-category ${selected ? "workbench-category--active" : ""}`}
            >
              <span>{option.label}</span>
              <span className="font-mono text-[10px] text-retro-muted">
                {categoryCounts[option.value as CategoryFilter]}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
