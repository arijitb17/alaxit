"use client";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  className?: string;
  children?: React.ReactNode; // Optional
}

export const Button: React.FC<ButtonProps> = ({
  children,
  borderRadius = "1.5rem",
  className = "",
  ...props
}) => {
  return (
    <button
      style={{ borderRadius }}
      className={`px-6 py-3 border text-sm font-medium transition-all 
        bg-blue-500 border-gray-300 text-slate-100 shadow-md
        hover:shadow-lg active:shadow-sm focus:ring-2 focus:ring-blue-500 
        focus:outline-none ${className}`}
      {...props}
    >
      {children || "Default Text"} {/* Default content if children is undefined */}
    </button>
  );
};
