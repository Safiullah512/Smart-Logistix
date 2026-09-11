import React from "react";
import { Shield } from "lucide-react";

/**
 * SecuritySettings - full-width card, 3 columns: Password, 2FA, Active Sessions.
 * Isme Card wrapper use nahi kiya kyunki layout thoda alag hai (icon+title header
 * ke neeche 3-column grid, koi single footer button nahi).
 */
export default function SecuritySettings() {
  const handleChangePassword = () => console.log("Open change password flow");
  const handleManage2FA = () => console.log("Open manage 2FA flow");
  const handleViewSessions = () => console.log("Open active sessions list");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Shield size={20} />
        </div>
        <h2 className="text-base font-semibold text-gray-900">Security Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Password */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Password</p>
          <p className="tracking-widest text-gray-700 mb-1">••••••••••••</p>
          <p className="text-sm text-gray-500 mb-4">Last changed 20 days ago</p>
          <button
            onClick={handleChangePassword}
            className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Change Password
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</p>
          <p className="text-sm text-gray-500 mb-1">Add an extra layer of security</p>
          <p className="text-sm mb-4">
            Status: <span className="text-green-600 font-medium">Enabled</span>
          </p>
          <button
            onClick={handleManage2FA}
            className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Manage 2FA
          </button>
        </div>

        {/* Active Sessions */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Active Sessions</p>
          <p className="text-sm text-gray-500 mb-1">Manage your active sessions</p>
          <p className="text-sm text-indigo-600 font-medium mb-4">2 active sessions</p>
          <button
            onClick={handleViewSessions}
            className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            View Sessions
          </button>
        </div>
      </div>
    </div>
  );
}
