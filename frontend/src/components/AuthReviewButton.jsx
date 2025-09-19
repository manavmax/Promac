import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { Button } from './ui/Button';

const AuthReviewButton = ({ 
  variant = "outline",
  size = "default",
  className = "",
  children = "Write a review",
  ...props 
}) => {
  const { isSignedIn, isLoaded } = useAuth();

  const handleClick = () => {
    if (isSignedIn) {
      // Handle review functionality here
      console.log('User can write a review');
    }
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

export default AuthReviewButton;
