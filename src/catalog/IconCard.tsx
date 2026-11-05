import { PixelCard } from "@pxlkit/ui-kit";
import type { IconEntry } from "./catalog";
import { useCopyIcon } from "./useCopyIcon";

type IconCardProps = {
  icon: IconEntry;
  size: number;
};

export function IconCard({ icon, size }: IconCardProps) {
  const { copied, copy } = useCopyIcon();

  return (
    <PixelCard
      interactive
      onClick={() => void copy(icon)}
      aria-label={`${copied ? "Copied" : "Copy"} ${icon.name}.svg`}
      className={`workbench-cell ${copied ? "workbench-cell--copied" : ""}`}
      padding="none"
    >
      <div className="flex min-h-40 flex-col items-center justify-between px-3 py-4 sm:min-h-44">
        <div className="flex min-h-24 flex-1 items-center justify-center">
          <img
            src={icon.url}
            alt=""
            width={size}
            height={size}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="pixelated-image"
            style={{ width: size, height: size }}
          />
        </div>
        <div className="flex w-full items-center justify-between gap-2 border-t border-retro-border/50 pt-3">
          <span className="min-w-0 truncate font-mono text-[10px] text-retro-text">
            {icon.name}
          </span>
          <span className="shrink-0 font-mono text-[9px] text-retro-muted" aria-hidden="true">
            {copied ? "Copied" : "Copy"}
          </span>
        </div>
      </div>
    </PixelCard>
  );
}
