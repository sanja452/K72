import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Box from "./componets/animation/box.jsx";
import NavProvider from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Box>
        <NavProvider>
          <App />
        </NavProvider>
      </Box>
    </BrowserRouter>
  </StrictMode>,
);