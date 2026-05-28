"use client";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  closeModal: (value: boolean) => void;
}

export default function Modal({ isOpen, children, closeModal }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={` ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"} fixed z-0  top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50  w-full transition duration-300 `}
      onClick={() => closeModal(false)}
    >
      <div className="bg-white min-w-[800px] "   onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
