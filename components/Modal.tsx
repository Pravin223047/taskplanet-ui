// components/Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="relative bg-white p-6 md:p-12 rounded-lg shadow-lg min-w-[350px]">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 bg-rose-200 p-1 pb-[10px] rounded-full h-8 w-8 flex items-center justify-center text-rose-600 hover:text-rose-800 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          {/* Modal Content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
