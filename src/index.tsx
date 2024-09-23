import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@/components/theme-provider";
// import "./styles/globals.css";
import "./assets/index.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </StrictMode>
);