import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/ContextProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
    <Toaster position="top-right" richColors closeButton duration={2000} />
  </ContextProvider>,
);
