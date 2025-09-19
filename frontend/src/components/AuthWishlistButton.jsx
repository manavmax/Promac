import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import Icon from './AppIcon';

const AuthWishlistButton = ({ 
  product,
  isWishlisted,
  onToggle,
  className = "",
  ...props 
}) => {
  const { isSignedIn, isLoaded } = useAuth();

  const handleClick = () => {
    if (isSignedIn) {
      onToggle();
    }
  };

  if (!isLoaded) {
    return (
      <button
        className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors font-medium bg-gray-100 text-gray-400 cursor-not-allowed ${className}`}
        disabled
        {...props}
      >
        <Icon name="Heart" size={16} />
        <span>Loading...</span>
      </button>
    );
  }

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button
          className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors font-medium bg-white border-gray-300 text-gray-600 hover:bg-gray-50 ${className}`}
          {...props}
        >
          <Icon name="Heart" size={16} />
          <span>Add to Wishlist</span>
        </button>
      </SignInButton>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors font-medium ${
        isWishlisted 
          ? 'bg-red-50 border-red-200 text-red-600' 
          : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
      } ${className}`}
      {...props}
    >
      <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
      <span>
        {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </span>
    </button>
  );
};

export default AuthWishlistButton;
