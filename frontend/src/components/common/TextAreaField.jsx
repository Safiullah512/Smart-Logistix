import React from "react";

/**
 * TextAreaField - label ke sath multi-line textarea, saath mein character counter.
 *
 * Props:
 * - label: field label (e.g. "Bio (Optional)")
 * - value: current text
 * - onChange: function(newValue)
 * - maxLength: max characters allowed (counter isi ke against dikhta hai)
 * - rows: textarea height (lines)
 */
export default function TextAreaField({ label, value, onChange, maxLength = 200, rows = 4 }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1.5">{label}</label>
      <textarea
        value={value}
        rows={rows}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <p className="text-xs text-gray-400 text-right mt-1">
        {value.length}/{maxLength}
      </p>
    </div>
  );
}
