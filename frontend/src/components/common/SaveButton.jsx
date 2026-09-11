import React from "react";

/**
 * SaveButton - har card ke neeche "Save Changes" button.
 */
export default function SaveButton({ onClick, label = "Save Changes" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
    >
      {label}
    </button>
  );
}
