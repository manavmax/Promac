import React from 'react';
import { Button } from './ui/Button';
import { useAuthCart } from '../hooks/useAuthCart';
import { SignInButton } from '@clerk/clerk-react';

const AuthCartButton = ({ 
  product, 
  variant = "default", 
  size = "default", 
  className = "",
  children = "Add to Cart",
  onSuccess,
  onError,
  ...props 
}) => {
  const { handleAddToCart, isSignedIn, isLoaded } = useAuthCart();

  const handleClick = () => {
    handleAddToCart(product, onSuccess, onError);
  };

  if (!isLoaded) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        className={className}
        disabled
        {...props}
      >
        Loading...
      </Button>
    );
  }

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <Button 
          variant={variant} 
          size={size} 
          className={className}
          {...props}
        >
          {children}
        </Button>
      </SignInButton>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AuthCartButton;
