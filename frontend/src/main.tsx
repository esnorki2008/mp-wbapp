import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./ui/router/AppRouter";
import "./index.css";

const root = createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
