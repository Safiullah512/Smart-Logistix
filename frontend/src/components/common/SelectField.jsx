import React from "react";

/**
 * SelectField - label ke sath ek dropdown.
 * options: array of strings, e.g. ["India", "USA", "UK"]
 */
export default function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
