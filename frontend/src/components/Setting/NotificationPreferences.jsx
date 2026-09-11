import React, { useState } from "react";
import { Bell } from "lucide-react";
import Card from "../common/Card";
import ToggleSwitch from "../common/ToggleSwitch";
import SaveButton from "../common/SaveButton";

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({
    email: true,
    sms: false,
    deliveryAlerts: true,
    systemAlerts: true,
  });

  const toggle = (key) => (value) => setPrefs((p) => ({ ...p, [key]: value }));

  const handleSave = () => {
    console.log("Saving notification preferences:", prefs);
  };

  return (
    <Card icon={<Bell size={20} />} title="Notification Preferences" footer={<SaveButton onClick={handleSave} />}>
      <ToggleSwitch
        label="Email Notifications"
        description="Receive updates via email"
        checked={prefs.email}
        onChange={toggle("email")}
      />
      <ToggleSwitch
        label="SMS Notifications"
        description="Receive important alerts via SMS"
        checked={prefs.sms}
        onChange={toggle("sms")}
      />
      <ToggleSwitch
        label="Delivery Alerts"
        description="Get notified about delivery updates"
        checked={prefs.deliveryAlerts}
        onChange={toggle("deliveryAlerts")}
      />
      <ToggleSwitch
        label="System Alerts"
        description="Receive system and security alerts"
        checked={prefs.systemAlerts}
        onChange={toggle("systemAlerts")}
      />
    </Card>
  );
}
