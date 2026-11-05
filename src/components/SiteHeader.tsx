const brandIconUrl = `${import.meta.env.BASE_URL}favicon.ico`;
const iconSpriteUrl = `${import.meta.env.BASE_URL}icons.svg`;

export function SiteHeader() {
  return (
    <header className="workbench-header sticky top-0 z-40 border-b border-retro-border/70 bg-retro-bg/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-full max-w-360 items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href={import.meta.env.BASE_URL}
          aria-label="Chroma24 home"
          className="group flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan"
        >
          <img
            src={brandIconUrl}
            alt=""
            width="32"
            height="32"
            className="pixelated-image size-8 shrink-0"
          />
          <span className="truncate font-pixel text-[11px] leading-none text-retro-text transition-colors group-hover:text-retro-cyan sm:text-xs">
            Chroma24
          </span>
          <span className="hidden border-l border-retro-border pl-3 font-mono text-[10px] text-retro-muted md:inline">
            colored pixel icons
          </span>
        </a>

        <nav
          aria-label="Project links"
          className="flex shrink-0 items-center gap-4 font-mono text-[10px] sm:gap-6 sm:text-[11px]"
        >
          <a
            href="https://pixelarticons.com/"
            target="_blank"
            rel="noreferrer"
            className="external-link inline-flex items-center gap-2 text-retro-muted transition-colors hover:text-retro-cyan"
          >
            <svg width="18" height="18" aria-hidden="true" focusable="false">
              <use href={`${iconSpriteUrl}#px-icon`}></use>
            </svg>
            Pixelarticons
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <a
            href="https://github.com/withoutnicks/chroma24"
            target="_blank"
            rel="noreferrer"
            aria-label="View Pixelarticons on GitHub (opens in a new tab)"
            className="external-link inline-flex items-center gap-2 text-retro-muted transition-colors hover:text-retro-text"
          >
            <svg width="18" height="18" aria-hidden="true" focusable="false">
              <use href={`${iconSpriteUrl}#github-icon`}></use>
            </svg>
            <span className="hidden sm:inline">GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
