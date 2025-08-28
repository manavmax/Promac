import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
