import { appConfig } from "../config";
import { PixelSlider } from "@pxlkit/ui-kit";

type CatalogControlsProps = {
  resultCount: number;
  totalCount: number;
  size: number;
  onSizeChange: (value: number) => void;
};

export function CatalogControls({
  resultCount,
  totalCount,
  size,
  onSizeChange,
}: CatalogControlsProps) {
  const iconSizeLimits: { min: number; max: number; step: number } = appConfig.catalog.iconSize;
  const { min, max, step } = iconSizeLimits;

  return (
    <div className="workbench-toolbar" role="toolbar" aria-label="Catalog display controls">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-retro-muted">
          Catalog
        </span>
        <p className="mt-1 font-mono text-xs text-retro-text">
          {resultCount === totalCount ? `${totalCount} icons` : `${resultCount} matches`}
        </p>
      </div>

      <div className="w-full max-w-xs sm:w-44">
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
  );
}
