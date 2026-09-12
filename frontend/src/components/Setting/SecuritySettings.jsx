import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Monitor,
  History,
  Eye,
  EyeOff,
  CheckCircle2,
  User,
} from "lucide-react";

// ---------- Small reusable bits ----------

function SectionCard({ children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      {children}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-slate-900 font-semibold text-[15px]">{title}</h2>
          <p className="text-slate-500 text-sm mt-0.5">{subtitle}</p>
        </div>
      </div>
      {action}
    </div>
  );
}

function PasswordField({ label, placeholder, value, onChange }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
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
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
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

// ---------- Main component ----------

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  const sessions = [
    {
      device: "Windows Chrome",
      note: "This device",
      location: "India",
      ip: "103.123.45.67",
      lastActive: "May 19, 2025 - 12:40 PM",
      status: "Active",
    },
  ];

  const activity = [
    {
      icon: CheckCircle2,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: "Password changed",
      subtitle: "You changed your password",
      time: "May 15, 2025 - 10:24 AM",
    },
    {
      icon: Monitor,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      title: "Login from new device",
      subtitle: "Chrome on Windows",
      time: "May 12, 2025 - 08:17 PM",
    },
    {
      icon: User,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-500",
      title: "Profile updated",
      subtitle: "You updated your profile information",
      time: "May 10, 2025 - 11:03 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-3 rounded shadow-[0_0_3px_rgba(0,0,0,0.3)]">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Page header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">Security</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Manage your account security and keep your data safe.
            </p>
          </div>
        </div>

        {/* Change password */}
        <SectionCard>
          <SectionHeader
            icon={Lock}
            title="Change Password"
            subtitle="Update your password regularly to keep your account secure."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <PasswordField
              label="Current Password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <PasswordField
              label="New Password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mt-5 sm:w-1/2 sm:pr-2.5">
            <PasswordField
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Update Password
            </button>
          </div>
        </SectionCard>

        {/* Two factor authentication */}
        <SectionCard>
          <SectionHeader
            icon={ShieldCheck}
            title="Two-Factor Authentication"
            subtitle="Add an extra layer of security to your account."
            action={
              <Toggle checked={twoFAEnabled} onChange={setTwoFAEnabled} />
            }
          />
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">
                  2FA is not enabled
                </p>
                <p className="text-sm text-slate-500">
                  Use an authenticator app to secure your account.
                </p>
              </div>
            </div>
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              Enable 2FA
            </button>
          </div>
        </SectionCard>

        {/* Login sessions */}
        <SectionCard>
          <SectionHeader
            icon={Monitor}
            title="Login Sessions"
            subtitle="Manage your active sessions and devices."
            action={
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                View All Sessions
              </button>
            }
          />
          <div className="overflow-x-auto -mx-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-left">
                  <th className="font-medium px-6 py-2.5">Device</th>
                  <th className="font-medium px-6 py-2.5">Location</th>
                  <th className="font-medium px-6 py-2.5">IP Address</th>
                  <th className="font-medium px-6 py-2.5">Last Active</th>
                  <th className="font-medium px-6 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2.5">
                        <Monitor className="w-4 h-4 text-indigo-500" />
                        <div>
                          <p className="text-slate-800 font-medium">
                            {s.device}
                          </p>
                          <p className="text-slate-400 text-xs">{s.note}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-slate-600">{s.location}</td>
                    <td className="px-6 py-3 text-indigo-600">{s.ip}</td>
                    <td className="px-6 py-3 text-slate-600">{s.lastActive}</td>
                    <td className="px-6 py-3">
                      <span className="inline-flex items-center gap-1.5 text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Account activity */}
        <SectionCard>
          <SectionHeader
            icon={History}
            title="Account Activity"
            subtitle="Recent actions on your account."
          />
          <div className="flex flex-col">
            {activity.map((a, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3.5 ${
                  i !== activity.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${a.iconBg}`}
                  >
                    <a.icon className={`w-4 h-4 ${a.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {a.title}
                    </p>
                    <p className="text-sm text-slate-500">{a.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 whitespace-nowrap">
                  {a.time}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
