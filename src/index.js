import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./pages/Fallback";

const errorHandler = (error, errorInfo) => {
  console.log("logging", error, errorInfo);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
