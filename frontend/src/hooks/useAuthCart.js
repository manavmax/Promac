import { useCart } from '../contexts/CartContext';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';

export const useAuthCart = () => {
  const { addToCart, isSignedIn } = useCart();
  const { isLoaded } = useAuth();

  const handleAddToCart = async (product, onSuccess, onError) => {
    if (!isLoaded) {
      return; // Wait for auth to load
    }

    if (!isSignedIn) {
      // Show sign-in modal for unauthenticated users
      const signInButton = document.querySelector('[data-clerk-sign-in-button]');
      if (signInButton) {
        signInButton.click();
      } else {
        // Fallback: show alert
        alert('Please sign in to add items to your cart');
      }
      return;
    }

    try {
      await addToCart(product);
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError(error);
    }
  };

  const handleBuyNow = async (product, onSuccess, onError) => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      // Show sign-in modal for unauthenticated users
      const signInButton = document.querySelector('[data-clerk-sign-in-button]');
      if (signInButton) {
        signInButton.click();
      } else {
        alert('Please sign in to purchase items');
      }
      return;
    }

    try {
      await addToCart(product);
      // Redirect to checkout after adding to cart
      window.location.href = '/checkout';
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError(error);
    }
  };

  return {
    handleAddToCart,
    handleBuyNow,
    isSignedIn,
    isLoaded
  };
};
