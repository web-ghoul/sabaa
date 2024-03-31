import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./contexts/AppContext.tsx";
import ExcelsProvider from "./contexts/ExcelsContext.tsx";
import FormsProvider from "./contexts/FormsContext.tsx";
import SidebarProvider from "./contexts/SidebarsContext.tsx";
import "./index.css";
import { router } from "./router.tsx";
import { store } from "./store/store.ts";
import { theme } from "./theme.ts";
import { ImportMetaEnv } from "./types/app.types.ts";

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ExcelsProvider>
          <FormsProvider>
            <SidebarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SidebarProvider>
          </FormsProvider>
        </ExcelsProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
