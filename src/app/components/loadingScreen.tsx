import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10); // 2-second delay
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="relative text-center">
      <div
        className={`absolute text-center text-h1-lg top-0 right-0 z-50 w-full h-full transition-opacity duration-1000transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div
        className={`transition-opacity duration-1000 ${visible ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default LoadingScreen;
