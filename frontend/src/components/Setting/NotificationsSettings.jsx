import { useState } from "react";
import { Bell, Mail, MessageSquare, Truck, User, Car, Settings, Gift } from "lucide-react";
import ChannelRow from "./ChannelRow.jsx";
import PreferenceRow from "./PreferenceRow.jsx";
import TestNotificationBanner from "./TestNotificationBanner.jsx";

const CHANNELS = [
  {
    key: "email",
    icon: Mail,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Email notifications",
    description: "Receive important updates and alerts via email.",
  },
  {
    key: "sms",
    icon: Bell,
    iconBg: "bg-brand-600/10",
    iconColor: "text-brand-600",
    title: "SMS notifications",
    description: "Receive critical alerts via SMS.",
  },
  {
    key: "inApp",
    icon: MessageSquare,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "In-app notifications",
    description: "Get real-time updates in the application.",
  },
];

const PREFERENCES = [
  {
    key: "deliveryUpdates",
    icon: Truck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Delivery updates",
    description: "Status changes, ETA updates, delivery completion.",
    default: "Instant",
  },
  {
    key: "driverAlerts",
    icon: User,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Driver alerts",
    description: "Driver status, availability, and location updates.",
    default: "Instant",
  },
  {
    key: "vehicleAlerts",
    icon: Car,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Vehicle alerts",
    description: "Vehicle status, maintenance, and issues.",
    default: "Daily",
  },
  {
    key: "systemNotifications",
    icon: Settings,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    title: "System notifications",
    description: "System updates, new features, and maintenance.",
    default: "Weekly",
  },
  {
    key: "promotions",
    icon: Gift,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    title: "Promotions & offers",
    description: "Latest offers, plans and platform updates.",
    default: "Weekly",
  },
];

export default function NotificationsSettings() {
  const [channels, setChannels] = useState({ email: true, sms: true, inApp: true });
  const [preferences, setPreferences] = useState(
    Object.fromEntries(PREFERENCES.map((p) => [p.key, p.default]))
  );

  const toggleChannel = (key, value) => setChannels((prev) => ({ ...prev, [key]: value }));
  const setPreference = (key, value) => setPreferences((prev) => ({ ...prev, [key]: value }));

  const handleSendTest = () => {
    alert("Test notification sent to your registered email and phone.");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-brand-600/10">
          <Bell className="h-5 w-5 text-brand-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-800">Notifications</h1>
          <p className="text-sm text-slate-500">Manage how you want to receive notifications from SmartLogix AI.</p>
        </div>
      </div>

      {/* Notification channels */}
      <section className="border border-slate-100 rounded-2xl p-4 space-y-3">
        <h2 className="text-sm font-semibold text-slate-800">Notification channels</h2>
        {CHANNELS.map((c) => (
          <ChannelRow
            key={c.key}
            icon={c.icon}
            iconBg={c.iconBg}
            iconColor={c.iconColor}
            title={c.title}
            description={c.description}
            checked={channels[c.key]}
            onChange={(val) => toggleChannel(c.key, val)}
          />
        ))}
      </section>

      {/* Notification preferences */}
      <section className="border border-slate-100 rounded-2xl p-4">
        <h2 className="text-sm font-semibold text-slate-800 mb-1">Notification preferences</h2>
        <div>
          {PREFERENCES.map((p, i) => (
            <PreferenceRow
              key={p.key}
              icon={p.icon}
              iconBg={p.iconBg}
              iconColor={p.iconColor}
              title={p.title}
              description={p.description}
              value={preferences[p.key]}
              onChange={(val) => setPreference(p.key, val)}
              isLast={i === PREFERENCES.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Test notification */}
      <TestNotificationBanner onSendTest={handleSendTest} />
    </div>
  );
}
