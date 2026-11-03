import { PixelCard, PixelIconButton, PixelTooltip } from "@pxlkit/ui-kit";
import type { IconEntry } from "./catalog";
import { useCopyIcon } from "./useCopyIcon";

type IconCardProps = {
  icon: IconEntry;
  size: number;
};

export function IconCard({ icon, size }: IconCardProps) {
  const { copied, copy } = useCopyIcon();

  return (
    <PixelCard className="group">
      <div className="mt-4 flex items-center justify-center relative">
        <PixelTooltip content={copied ? "Copied" : "Copy SVG"} position="top">
          <PixelIconButton
            size="sm"
            tone={copied ? "green" : "neutral"}
            label={`Copy ${icon.name}.svg`}
            icon={
              copied ? (
                <svg width="14" height="14" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#check-icon"></use>
                </svg>
              ) : (
                <svg width="14" height="14" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#copy-icon"></use>
                </svg>
              )
            }
            onClick={() => void copy(icon)}
            className="absolute left-10 bottom-8"
          />
        </PixelTooltip>
        <img
          src={icon.url}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="[image-rendering:pixelated] transition-transform duration-150 motion-safe:group-hover:scale-105 my-4"
          style={{ width: size, height: size }}
        />
      </div>
    </PixelCard>
  );
}
