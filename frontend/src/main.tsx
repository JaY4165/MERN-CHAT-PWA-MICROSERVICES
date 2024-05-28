import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Toaster } from "sonner";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <Theme accentColor="mint">
        <RouterProvider router={router} />
        {/* <ThemePanel /> */}
        <Toaster closeButton richColors />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
