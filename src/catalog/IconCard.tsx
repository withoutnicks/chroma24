import type { IconEntry } from "./catalog";
import { useCopyIcon } from "./useCopyIcon";

type IconCardProps = {
  icon: IconEntry;
  size: number;
};

export function IconCard({ icon, size }: IconCardProps) {
  const { copied, copy } = useCopyIcon();

  return (
    <button
      type="button"
      onClick={() => void copy(icon)}
      aria-label={`${copied ? "Copied" : "Copy"} ${icon.name}.svg`}
      className={`relative flex min-w-0 cursor-pointer appearance-none flex-col overflow-hidden rounded-none border-0 p-0 text-left text-inherit transition-colors motion-reduce:transition-none focus-visible:z-10 focus-visible:bg-mint-50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-retro-cyan ${
        copied ? "bg-mint-100" : "bg-retro-surface hover:bg-mint-50 active:bg-mint-100"
      }`}
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
        <div className="flex w-full items-center justify-between gap-2 border-t border-retro-border pt-3">
          <span className="min-w-0 truncate font-mono text-[11px] text-retro-text">
            {icon.name}
          </span>
          <span
            className={`shrink-0 font-mono text-[11px] ${copied ? "text-retro-green-hover" : "text-retro-muted"}`}
            aria-hidden="true"
          >
            {copied ? "Copied" : "Copy"}
          </span>
        </div>
      </div>
    </button>
  );
}
