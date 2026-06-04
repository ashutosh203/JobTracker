import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { JobContextProvider } from "./context/jobContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </JobContextProvider>
  </StrictMode>,
);
