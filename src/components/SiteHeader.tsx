import { appConfig } from "../config";
import { PxlKitIcon } from "@pxlkit/core";
import { Share } from "@pxlkit/social";
import { useState } from "react";
import { ShareDialog } from "./ShareDialog";

const iconActionClasses =
  "inline-flex size-8 items-center justify-center text-retro-muted transition-colors text-retro-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-retro-cyan";

export function SiteHeader() {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <header className="flex flex-row justify-between py-6 sm:items-start">
      <h1 className="relative font-pixel text-sm leading-relaxed">
        Pixelarticons{" "}
        <span className="absolute bottom-4 bg-linear-to-r from-ocean-400 via-mint-400 to-tomato-400 bg-clip-text text-[8px] text-transparent">
          colored
        </span>
      </h1>

      <nav aria-label="Project links" className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Share this page"
          className={iconActionClasses}
          onClick={() => setShareOpen(true)}
        >
          <PxlKitIcon icon={Share} size={20} appearance="solid" decorative />
        </button>

        <a
          href={appConfig.links.repository}
          target="_blank"
          rel="noreferrer"
          aria-label="View source on GitHub"
          className={iconActionClasses}
        >
          <svg width="24" height="24" aria-hidden="true" focusable="false">
            <use href="/icons.svg#github-icon"></use>
          </svg>
        </a>
      </nav>

      <ShareDialog open={shareOpen} onClose={() => setShareOpen(false)} />
    </header>
  );
}
