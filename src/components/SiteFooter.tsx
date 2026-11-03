import { appConfig } from "../config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-retro-border/60 py-6">
      <div className="flex flex-col gap-2 font-mono text-[11px] leading-relaxed text-retro-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          Icons by Gerrit Halfmann, MIT. Colored derivatives of{" "}
          <a
            href="https://pixelarticons.com/"
            className="font-bold text-retro-cyan transition-colors hover:text-retro-text hover:underline"
          >
            pixelarticons
          </a>
        </p>

        <nav aria-label="Attribution links" className="flex gap-4">
          <a
            href={appConfig.links.upstream}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-retro-text"
          >
            Upstream
          </a>
          <a
            href={appConfig.links.license}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-retro-text"
          >
            License
          </a>
        </nav>
      </div>
    </footer>
  );
}
