import React, { useState } from "react";
import { Building2 } from "lucide-react";
import Card from "../common/Card";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SaveButton from "../common/SaveButton";

export default function CompanyInformation() {
  const [form, setForm] = useState({
    name: "SmartLogix AI",
    email: "info@smartlogix.ai",
    phone: "+91 98765 43210",
    country: "India",
  });

  const update = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSave = () => {
    // yahan API call laga sakte ho form data save karne ke liye
    console.log("Saving company info:", form);
  };

  return (
    <Card icon={<Building2 size={20} />} title="Company Information" footer={<SaveButton onClick={handleSave} />}>
      <InputField label="Company Name" value={form.name} onChange={update("name")} />
      <InputField label="Company Email" value={form.email} onChange={update("email")} type="email" />
      <InputField label="Phone Number" value={form.phone} onChange={update("phone")} />
      <SelectField
        label="Country / Region"
        value={form.country}
        onChange={update("country")}
        options={["India", "USA", "UK", "UAE", "Singapore"]}
      />
    </Card>
  );
}
