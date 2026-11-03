import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { IconCatalog } from "./catalog/IconCatalog";

function App() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4">
      <SiteHeader />
      <IconCatalog />
      <SiteFooter />
    </main>
  );
}

export default App;
