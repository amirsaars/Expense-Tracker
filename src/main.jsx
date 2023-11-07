import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BudgetProvider } from "./contexts/BudgetContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BudgetProvider>
    <App />
  </BudgetProvider>
);
