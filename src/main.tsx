import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import MonumentsContextProvider from "./monument/context/MonumentsContextProvider";

import "./styles/styles.css";
import "@fontsource-variable/outfit/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MonumentsContextProvider>
        <AppRouter />
      </MonumentsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
