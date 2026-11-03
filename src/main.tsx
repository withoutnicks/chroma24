import { PxlKitToastProvider } from "@pxlkit/ui-kit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PxlKitToastProvider position="top-center">
      <App />
    </PxlKitToastProvider>
  </StrictMode>,
);
