import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Palette,
  Bell,
  Database,
  ShieldCheck,
  Sun,
  Moon,
  Check,
  ChevronDown,
  Save,
} from "lucide-react";

// ---------------- Small components ----------------

function CardHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h2 className="text-slate-900 font-semibold text-[15px]">{title}</h2>
        <p className="text-slate-500 text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function TextField({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
      />
    </div>
  );
}

function SelectField({ label, value, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <select
          defaultValue={value}
          className="w-full appearance-none rounded-lg border border-slate-300 px-4 py-2.5 pr-9 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 bg-white"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
        checked ? "bg-indigo-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-700">{label}</span>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

// ---------------- Main page ----------------

export default function SystemPreferencesPage() {
  const [systemName, setSystemName] = useState("SmartLogix AI");
  const [theme, setTheme] = useState("Light");
  const [color, setColor] = useState("indigo");

  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const [autoBackup, setAutoBackup] = useState(true);

  const colors = [
    { key: "indigo", hex: "#6366F1" },
    { key: "blue", hex: "#2563EB" },
    { key: "green", hex: "#16A34A" },
    { key: "orange", hex: "#F97316" },
    { key: "red", hex: "#EF4444" },
    { key: "gray", hex: "#94A3B8" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <SettingsIcon className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">
              System Preferences
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Configure system settings and preferences for your platform.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Settings */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <CardHeader
              icon={SettingsIcon}
              title="System Settings"
              subtitle="Basic system configuration and preferences."
            />
            <div className="flex flex-col gap-5">
              <TextField
                label="System Name"
                value={systemName}
                onChange={(e) => setSystemName(e.target.value)}
              />
              <SelectField
                label="Timezone"
                value="Asia/Kolkata (IST)"
                options={["Asia/Kolkata (IST)", "UTC", "America/New_York"]}
              />
              <SelectField
                label="Date Format"
                value="DD MMM YYYY"
                options={["DD MMM YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]}
              />
              <SelectField
                label="Time Format"
                value="12 Hour (1:00 PM)"
                options={["12 Hour (1:00 PM)", "24 Hour (13:00)"]}
              />
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <CardHeader
              icon={Palette}
              title="Appearance"
              subtitle="Customize the look and feel of the platform."
            />
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">
                  Theme
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTheme("Light")}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                      theme === "Light"
                        ? "border-indigo-400 bg-indigo-50 text-indigo-600"
                        : "border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("Dark")}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                      theme === "Dark"
                        ? "border-indigo-400 bg-indigo-50 text-indigo-600"
                        : "border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">
                  Primary Color
                </p>
                <div className="flex items-center gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setColor(c.key)}
                      style={{ backgroundColor: c.hex }}
                      className="w-7 h-7 rounded-full flex items-center justify-center ring-offset-2"
                    >
                      {color === c.key && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <SelectField label="Language" value="English" options={["English", "Hindi"]} />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <CardHeader
              icon={Bell}
              title="Notifications"
              subtitle="Manage how you receive notifications."
            />
            <div className="flex flex-col gap-4">
              <ToggleRow
                label="Email Notifications"
                checked={emailNotif}
                onChange={setEmailNotif}
              />
              <ToggleRow
                label="Push Notifications"
                checked={pushNotif}
                onChange={setPushNotif}
              />
              <ToggleRow
                label="SMS Notifications"
                checked={smsNotif}
                onChange={setSmsNotif}
              />
              <ToggleRow
                label="Weekly Reports"
                checked={weeklyReports}
                onChange={setWeeklyReports}
              />
            </div>
          </div>

          {/* Data & Backup */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <CardHeader
              icon={Database}
              title="Data & Backup"
              subtitle="Manage your data backup and retention settings."
            />
            <div className="flex flex-col gap-5">
              <ToggleRow
                label="Auto Backup"
                checked={autoBackup}
                onChange={setAutoBackup}
              />
              <SelectField
                label="Backup Frequency"
                value="Daily"
                options={["Daily", "Weekly", "Monthly"]}
              />
              <SelectField
                label="Data Retention Period"
                value="12 Months"
                options={["3 Months", "6 Months", "12 Months", "24 Months"]}
              />
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">
                Save Settings
              </p>
              <p className="text-sm text-slate-500">
                Your changes will be saved automatically.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
