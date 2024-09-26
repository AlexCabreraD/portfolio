import { useState } from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "end" | "start";
  children: React.ReactNode;
}

export function Tooltip({ text, position = "top", children }: TooltipProps) {
  const [hovered, setHovered] = useState(false);

  // Conditional classes for different positions
  const getTooltipPosition = () => {
    switch (position) {
      case "bottom":
        return "left-1/2 -translate-x-1/2 top-full mt-2"; // Tooltip below
      case "end":
        return "left-full ml-2 top-1/2 -translate-y-1/2"; // Tooltip on the right (end)
      case "start":
        return "right-full mr-2 top-1/2 -translate-y-1/2"; // Tooltip on the left (start)
      case "top":
      default:
        return "left-1/2 -translate-x-1/2 bottom-full mb-2"; // Tooltip above (default)
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      {hovered && (
        <div
          className={`absolute z-10 w-max px-2 py-1 bg-black text-white text-sm rounded shadow-lg opacity-90 pointer-events-none ${getTooltipPosition()}`}
        >
          {text}
        </div>
      )}
    </div>
  );
}
