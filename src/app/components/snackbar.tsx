import { useEffect } from "react";

interface SnackbarProps {
  visible: boolean;
  text: string;
  onClose: () => void;
  onOpen: () => void;
}

export function Snackbar({ visible, text, onClose, onOpen }: SnackbarProps) {
  useEffect(() => {
    if (visible) {
      onOpen();
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide snackbar after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`fixed z-50 top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-transform duration-300 text-body w-fit whitespace-nowrap ${visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} md:text-body`}
    >
      {text}
    </div>
  );
}
