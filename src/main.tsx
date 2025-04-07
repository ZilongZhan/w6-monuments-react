import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

import "./styles/styles.css";
import "@fontsource-variable/outfit/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
