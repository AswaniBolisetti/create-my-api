import React, { useEffect, useState } from "react";

/**
 * BackToTopButton Component
 * 
 * This component renders a button that appears when the user scrolls down 
 * beyond 300 pixels. On clicking the button, the page smoothly scrolls back to the top.
 * 
 * Features:
 * - Smooth scrolling to the top
 * - Visibility toggles based on scroll position
 * - Optimized event listener management
 */
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Tracks button visibility state

  /**
   * Toggles the visibility of the button based on the scroll position.
   * The button becomes visible if the scroll position is greater than 300 pixels.
   */
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Scrolls the window smoothly to the top when the button is clicked.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Sets up the scroll event listener when the component mounts
   * and removes it when the component unmounts to avoid memory leaks.
   */
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      // Dynamically applies opacity class based on visibility state
      className={`fixed bottom-7 right-7 p-2 text-white rounded-full shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        display: isVisible ? "flex" : "none", // Controls display
        zIndex: 1, // Ensures the button stays above other elements
        backgroundColor: "#EF4444", // Sets background color to red
      }}
    >
      {/* SVG icon for the button */}
      <svg
        className="h-8 w-8 md:h-8 md:w-8"
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#fff"
      >
        <path d="M480-554 304-378q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l197-197q9-9 21-9t21 9l198 198q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9L480-554Z" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
