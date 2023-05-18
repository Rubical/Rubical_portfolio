import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import { customTheme } from "./styles/theme/customTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
