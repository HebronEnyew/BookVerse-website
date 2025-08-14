import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/50 flex items-start justify-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="!bg-white w-full max-w-md rounded-2xl shadow-xl mt-24 p-6 relative"
        onClick={stop}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
