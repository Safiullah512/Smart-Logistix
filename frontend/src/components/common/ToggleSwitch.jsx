import React from "react";

/**
 * ToggleSwitch - on/off switch, jaise "Enable Dark Mode", "Email Notifications" etc.
 *
 * Props:
 * - label: bold heading text (e.g. "Enable Dark Mode")
 * - description: chhota grey subtext
 * - checked: boolean - switch on hai ya off
 * - onChange: function - jab user switch toggle kare
 */
export default function ToggleSwitch({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ${
          checked ? "bg-indigo-600" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
