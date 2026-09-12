import React from "react";
import CompanyInformation from "./CompanyInformation";
import RegionalSettings from "./RegionalSettings";
import SystemPreferences from "./SystemPreferences";
import NotificationPreferences from "./NotificationPreferences";
import SecuritySettings from "./SecuritySettings";

/**
 * GeneralSettings - poora settings page, jo screenshot mein dikhaya gaya hai.
 * Layout: top pe 2x2 grid (Company Info, Regional, System Prefs, Notifications),
 * neeche full-width Security Settings card.
 */
export default function GeneralSettings() {
  return (
    <div className="min-h-screen bg-white p-4 shadow-[0_0_3px_rgba(0,0,0,0.3)] rounded">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">General Settings</h1>
        <p className="text-sm text-gray-500 mt-1 mb-8">
          Manage your platform preferences and configuration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <CompanyInformation />
          <RegionalSettings />
          <SystemPreferences />
          <NotificationPreferences />
        </div>

        <SecuritySettings />
      </div>
    </div>
  );
}
