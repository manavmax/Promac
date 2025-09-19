import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

// Development version without Clerk authentication
const container = document.getElementById("root");
const root = createRoot(container);

console.log("Running in development mode without authentication");

root.render(<App />);
