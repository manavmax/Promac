import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const container = document.getElementById("root");
const root = createRoot(container);

// If Clerk key is not available, render app without authentication
if (!PUBLISHABLE_KEY) {
  console.warn("Clerk Publishable Key not found. Running without authentication.");
  root.render(<App />);
} else {
  root.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  );
}
