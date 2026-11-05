import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { IconCatalog } from "./catalog/IconCatalog";

function App() {
  return (
    <div className="min-h-dvh bg-retro-bg text-retro-text">
      <a className="skip-link" href="#main-content">
        Skip to icon catalog
      </a>
      <SiteHeader />
      <main id="main-content" className="mx-auto w-full max-w-360 px-4 sm:px-6">
        <IconCatalog />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
