import React, { useState } from "react";
import { Monitor } from "lucide-react";
import Card from "../common/Card";
import ToggleSwitch from "../common/ToggleSwitch";
import SaveButton from "../common/SaveButton";

export default function SystemPreferences() {
  const [prefs, setPrefs] = useState({
    darkMode: false,
    compactMode: false,
    performanceTips: true,
    autoRefresh: true,
  });

  const toggle = (key) => (value) => setPrefs((p) => ({ ...p, [key]: value }));

  const handleSave = () => {
    console.log("Saving system preferences:", prefs);
  };

  return (
    <Card icon={<Monitor size={20} />} title="System Preferences" footer={<SaveButton onClick={handleSave} />}>
      <ToggleSwitch
        label="Enable Dark Mode"
        description="Switch between light and dark theme"
        checked={prefs.darkMode}
        onChange={toggle("darkMode")}
      />
      <ToggleSwitch
        label="Compact Mode"
        description="Reduce spacing and use compact view"
        checked={prefs.compactMode}
        onChange={toggle("compactMode")}
      />
      <ToggleSwitch
        label="Show Performance Tips"
        description="Display helpful tips and suggestions"
        checked={prefs.performanceTips}
        onChange={toggle("performanceTips")}
      />
      <ToggleSwitch
        label="Auto Refresh Dashboard"
        description="Automatically refresh dashboard data"
        checked={prefs.autoRefresh}
        onChange={toggle("autoRefresh")}
      />
    </Card>
  );
}
