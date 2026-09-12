import React from "react";

/**
 * InputField - label ke sath ek text input.
 */
export default function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}
