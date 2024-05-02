import { IconX } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 duration-500"
            : "opacity-0 duration-500 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <button onClick={onClose} className="absolute top-0 right-0 p-1">
            <IconX />
          </button>
          <div className="p-2">
            <h1>Belum ada video</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
