import ToggleSwitch from "./ToggleSwitch.jsx";

export default function ChannelRow({ icon: Icon, iconBg, iconColor, title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between border border-slate-100 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{title}</p>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>
      <ToggleSwitch checked={checked} onChange={onChange} />
    </div>
  );
}
