import React from "react";
import PersonalInformation from "./PersonalInformation";
import ProfilePhoto from "./ProfilePhoto";

/**
 * ProfileSettings - poora profile settings page (screenshot jaisa).
 * Layout: left card (Personal Information) 2/3 width, right card (Profile Photo) 1/3 width.
 */
export default function ProfileSettings() {
  return (
    <div className="w-full min-h-screen bg-white p-4 shadow-[0_0_3px_rgba(0,0,0,0.3)] rounded">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-sm text-gray-500 mt-1 mb-8">
          Update your personal information and account details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <PersonalInformation />
          </div>
          <div className="md:col-span-1">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </div>
  );
}
