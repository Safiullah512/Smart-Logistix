import React from "react";

/**
 * PrimaryButton - solid filled indigo button (jaise Profile Settings ka "Save Changes").
 * SaveButton.jsx outline style hai; ye filled/solid style ke liye hai.
 */
export default function PrimaryButton({ onClick, label = "Save Changes" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
