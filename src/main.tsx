import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import { ScrollToTop } from "./app/layout/ScrollToTop.tsx";

import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </StrictMode>
);
