import React from "react";

export default function Button({ label, onClick, variant = "primary" }) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}
