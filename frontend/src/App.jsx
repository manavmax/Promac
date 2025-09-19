import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900"
      style={{
        position: 'relative',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: `
          0 0 30px rgba(255, 255, 255, 0.1),
          inset 0 0 30px rgba(255, 255, 255, 0.05)
        `,
      }}
    >
        <CartProvider>
          <WishlistProvider>
            <Routes />
          </WishlistProvider>
        </CartProvider>
    </div>
  );
}

export default App;
