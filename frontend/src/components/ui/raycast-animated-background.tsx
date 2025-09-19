import { cn } from "../../utils/cn";
import { useState, useEffect } from "react";
import React from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const Component = () => {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Start animation immediately on mount, don't wait for dimensions
    setMounted(true);
  }, []);

  // Use fallback dimensions if window size not available yet
  const displayWidth = width > 0 ? width : 1920;
  const displayHeight = height > 0 ? height : 1080;

  // Always render, use fallback dimensions if needed
  if (!mounted) {
    return React.createElement(
      'div',
      {
        className: "w-full h-full relative bg-black"
      }
    );
  }

  return React.createElement(
    'div',
    {
      className: "w-full h-full relative"
    },
    React.createElement(UnicornScene, {
      production: true,
      projectId: "cbmTT38A0CcuYxeiyj5H",
      width: displayWidth,
      height: displayHeight,
      onError: (error) => {
        console.error('UnicornScene Error:', error);
      },
      onLoad: () => {
        console.log('UnicornScene loaded successfully');
      }
    })
  );
};
