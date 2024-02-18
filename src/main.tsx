import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import { routes } from "./pages";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <Analytics />
    <Toaster />
    <RouterProvider router={createBrowserRouter(routes)} />
  </StrictMode>,
);
