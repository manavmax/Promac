import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + (typeof action.payload.price === 'string' 
            ? parseFloat(action.payload.price.replace('₹', '').replace(',', '')) 
            : action.payload.price)
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + (typeof action.payload.price === 'string' 
            ? parseFloat(action.payload.price.replace('₹', '').replace(',', '')) 
            : action.payload.price)
        };
      }
    
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount: state.totalAmount - ((typeof itemToRemove.price === 'string' 
          ? parseFloat(itemToRemove.price.replace('₹', '').replace(',', '')) 
          : itemToRemove.price) * itemToRemove.quantity)
      };
    
    case 'UPDATE_QUANTITY':
      const itemToUpdate = state.items.find(item => item.id === action.payload.id);
      const quantityDiff = action.payload.quantity - itemToUpdate.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        totalItems: state.totalItems + quantityDiff,
        totalAmount: state.totalAmount + ((typeof itemToUpdate.price === 'string' 
          ? parseFloat(itemToUpdate.price.replace('₹', '').replace(',', '')) 
          : itemToUpdate.price) * quantityDiff)
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0
      };
    
    case 'LOAD_CART':
      return {
        ...state,
        ...action.payload
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { isSignedIn, userId } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalAmount: 0
  });

  // Load cart from localStorage on mount (only for signed-in users)
  useEffect(() => {
    if (isSignedIn && userId) {
      const savedCart = localStorage.getItem(`promac-cart-${userId}`);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      }
    } else {
      // Clear cart for unauthenticated users
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [isSignedIn, userId]);

  // Save cart to localStorage whenever it changes (only for signed-in users)
  useEffect(() => {
    if (isSignedIn && userId) {
      localStorage.setItem(`promac-cart-${userId}`, JSON.stringify(state));
    }
  }, [state, isSignedIn, userId]);

  const addToCart = (product) => {
    if (!isSignedIn) {
      // Return a promise that rejects to indicate authentication is required
      return Promise.reject(new Error('Authentication required'));
    }
    dispatch({ type: 'ADD_TO_CART', payload: product });
    return Promise.resolve();
  };

  const removeFromCart = (productId) => {
    if (!isSignedIn) {
      return Promise.reject(new Error('Authentication required'));
    }
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    return Promise.resolve();
  };

  const updateQuantity = (productId, quantity) => {
    if (!isSignedIn) {
      return Promise.reject(new Error('Authentication required'));
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    return Promise.resolve();
  };

  const clearCart = () => {
    if (!isSignedIn) {
      return Promise.reject(new Error('Authentication required'));
    }
    dispatch({ type: 'CLEAR_CART' });
    return Promise.resolve();
  };

  const isInCart = (productId) => {
    if (!isSignedIn) return false;
    return state.items.some(item => item.id === productId);
  };

  const getCartItemQuantity = (productId) => {
    if (!isSignedIn) return 0;
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Get display values (always show 0 for unauthenticated users)
  const displayTotalItems = isSignedIn ? state.totalItems : 0;
  const displayTotalAmount = isSignedIn ? state.totalAmount : 0;
  const displayItems = isSignedIn ? state.items : [];

  return (
    <CartContext.Provider value={{
      ...state,
      // Display values (always 0 for unauthenticated users)
      totalItems: displayTotalItems,
      totalAmount: displayTotalAmount,
      items: displayItems,
      // Authentication status
      isSignedIn,
      // Cart functions
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isInCart,
      getCartItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 