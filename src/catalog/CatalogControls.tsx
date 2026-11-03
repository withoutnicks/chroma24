import { appConfig } from "../config";
import { CATEGORY_OPTIONS, type CategoryFilter } from "./catalog";
import { PxlKitIcon } from "@pxlkit/core";
import { Search } from "@pxlkit/ui";
import { PixelInput, PixelKbd, PixelSelect, PixelSlider } from "@pxlkit/ui-kit";
import { useEffect, useRef } from "react";

type CatalogControlsProps = {
  query: string;
  onQueryChange: (value: string) => void;
  category: CategoryFilter;
  onCategoryChange: (value: CategoryFilter) => void;
  size: number;
  onSizeChange: (value: number) => void;
};

export function CatalogControls({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  size,
  onSizeChange,
}: CatalogControlsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconSizeLimits: { min: number; max: number; step: number } = appConfig.catalog.iconSize;
  const { min, max, step } = iconSizeLimits;

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
    <div className="sticky top-0 z-30 -mx-4 border-b border-retro-border/60 bg-retro-bg/85 pb-4 px-4 backdrop-blur-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="min-w-0 flex-1">
          <PixelInput
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

        <div className="w-full md:w-52">
          <PixelSelect
            label="Category"
            options={CATEGORY_OPTIONS}
            value={category}
            onChange={(value) => onCategoryChange(value as CategoryFilter)}
            tone="neutral"
          />
        </div>

        <div className="w-full md:w-44">
          <PixelSlider
            label="Icon size"
            min={min}
            max={max}
            step={step}
            value={size}
            onChange={onSizeChange}
            tone="neutral"
          />
        </div>
      </div>
    </div>
  );
}
