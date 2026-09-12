import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  ShieldCheck,
  Moon,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

// ---------------- Small components ----------------

function MenuItem({ icon: Icon, title, subtitle, active, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex cursor-pointer items-center gap-3.5 px-4 py-3 rounded-xl text-left transition-colors ${
        active ? "bg-indigo-50" : "hover:bg-white"
      }`}
    >
      <Icon
        className={`w-5 h-5 shrink-0 ${
          danger ? "text-red-500" : "text-slate-700"
        }`}
      />
      <div>
        <p
          className={`text-[15px] font-semibold ${
            danger ? "text-red-500" : "text-slate-900"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-sm mt-0.5 ${
            danger ? "text-red-400" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </button>
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

// ---------------- Main component ----------------

export default function ProfileMenuCard({
  toggleMenuBar,
  profileMenu,
  handleProfile,
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-screen  flex items-center justify-center rounded">
      <div className="w-full max-w-95 bg-slate-100 rounded-2xl  border border-slate-100 p-3 shadow-[0_0_8px_rgba(0,0,0,0.3)] ">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 cursor-pointer border-b border-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-tight">
                Admin
              </p>
              <p className="text-sm text-slate-500 leading-tight">
                Administrator
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Online
          </span>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-1 cursor-pointer">
          <MenuItem
            onClick={handleProfile}
            icon={User}
            title="My Profile"
            subtitle="View and edit your profile"
          />
          <MenuItem
            icon={Settings}
            title="Settings"
            subtitle="Manage your account settings"
          />
          {/* <MenuItem
            icon={ShieldCheck}
            title="Security"
            subtitle="Password & two factor authentication"
          /> */}

          <div className="my-2 border-t border-slate-100 hover:bg-white" />

          <div className="flex items-center justify-between px-4 py-3 hover:bg-white">
            <div className="flex items-center gap-3.5">
              <Moon className="w-5 h-5 text-slate-700 shrink-0" />
              <p className="text-[15px] font-semibold text-slate-900">
                Dark Mode
              </p>
            </div>
            <Toggle checked={darkMode} onChange={setDarkMode} />
          </div>

          {/* <MenuItem
            icon={HelpCircle}
            title="Help & Support"
            subtitle="Get help or contact support"
          /> */}

          <div className="my-2 border-t border-slate-100" />

          <MenuItem
            icon={LogOut}
            title="Logout"
            subtitle="Sign out from your account"
            danger
          />
        </div>
      </div>
    </div>
  );
}
