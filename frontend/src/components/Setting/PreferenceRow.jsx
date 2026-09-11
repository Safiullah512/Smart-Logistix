export default function PreferenceRow({ icon: Icon, iconBg, iconColor, title, description, value, onChange, isLast }) {
  const options = ["Instant", "Daily", "Weekly", "Off"];

  return (
    <div className={`flex items-center justify-between py-4 ${isLast ? "" : "border-b border-slate-100"}`}>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{title}</p>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm text-slate-600 border border-slate-200 rounded-lg px-3 py-2 w-32 bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30"
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
