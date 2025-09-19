import React from 'react';
import { Button } from './ui/Button';
import { useAuthCart } from '../hooks/useAuthCart';
import { SignInButton } from '@clerk/clerk-react';

const AuthBuyButton = ({ 
  product, 
  variant = "default", 
  size = "default", 
  className = "",
  children = "Buy Now",
  onSuccess,
  onError,
  ...props 
}) => {
  const { handleBuyNow, isSignedIn, isLoaded } = useAuthCart();

  const handleClick = () => {
    handleBuyNow(product, onSuccess, onError);
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

export default AuthBuyButton;
