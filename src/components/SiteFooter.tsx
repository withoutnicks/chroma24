export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-retro-border/70">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-4 flex gap-1" aria-hidden="true">
            <span className="size-2 bg-ocean-400" />
            <span className="size-2 bg-mint-400" />
            <span className="size-2 bg-tomato-400" />
          </div>
          <p className="font-mono text-[11px] leading-relaxed text-retro-muted">
            Chroma24 is an independent colored collection based on Pixelarticons
          </p>
        </div>
        <a
          href="https://wts-portfolio.netlify.app/"
          title="Gerardo Caycho"
          rel="noreferrer"
          target="_blank"
          className="group flex items-center space-x-2 transition-colors hover:text-black dark:hover:text-white"
        >
          <span className="hidden md:block font-mono leading-relaxed text-retro-muted text-sm">
            by
          </span>
          <img
            className="group-hover:ring-react-symbol-aqua h-6 w-6 rounded-full transition-shadow group-hover:ring-2"
            src="https://avatars.githubusercontent.com/u/123419105?v=4"
            alt="Gerardo Caycho"
          />
          <span className="font-mono leading-relaxed text-retro-muted text-sm">Gerardo Caycho</span>
        </a>
      </div>
    </footer>
  );
}
