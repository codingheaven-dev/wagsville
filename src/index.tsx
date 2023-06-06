import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const e = document.getElementById("root");
if (!e) throw new Error("No root node");

createRoot(e).render(
  <StrictMode>
    <App />
  </StrictMode>
);
