import React, { useState } from "react";
import { Globe } from "lucide-react";
import Card from "../common/Card";
import SelectField from "../common/SelectField";
import SaveButton from "../common/SaveButton";

export default function RegionalSettings() {
  const [form, setForm] = useState({
    language: "English",
    timeZone: "(GMT+05:30) Asia/Kolkata",
    dateFormat: "May 19, 2025",
    timeFormat: "12 Hour (hh:mm A)",
  });

  const update = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSave = () => {
    console.log("Saving regional settings:", form);
  };

  return (
    <Card icon={<Globe size={20} />} title="Regional Settings" footer={<SaveButton onClick={handleSave} />}>
      <div className="grid grid-cols-2 gap-5">
        <SelectField
          label="Language"
          value={form.language}
          onChange={update("language")}
          options={["English", "Hindi"]}
        />
        <SelectField
          label="Time Zone"
          value={form.timeZone}
          onChange={update("timeZone")}
          options={["(GMT+05:30) Asia/Kolkata", "(GMT+00:00) UTC", "(GMT-05:00) EST"]}
        />
        <SelectField
          label="Date Format"
          value={form.dateFormat}
          onChange={update("dateFormat")}
          options={["May 19, 2025", "19/05/2025", "2025-05-19"]}
        />
        <SelectField
          label="Time Format"
          value={form.timeFormat}
          onChange={update("timeFormat")}
          options={["12 Hour (hh:mm A)", "24 Hour (HH:mm)"]}
        />
      </div>
    </Card>
  );
}
