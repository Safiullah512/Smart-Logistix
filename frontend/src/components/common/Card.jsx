import React from "react";

/**
 * Card - har settings section ka common wrapper (icon box, title, content).
 *
 * Props:
 * - icon: lucide-react icon component (e.g. <Building2 />)
 * - title: card ka heading
 * - children: card ka body content
 * - footer: (optional) card ke bottom mein render hone wala content, jaise "Save Changes" button
 */
export default function Card({ icon, title, children, footer }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="space-y-5">{children}</div>

      {footer && <div className="flex justify-end mt-6">{footer}</div>}
    </div>
  );
}
