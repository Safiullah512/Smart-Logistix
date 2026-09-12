import React, { useState } from "react";
import { User } from "lucide-react";
import Card from "../common/Card";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import TextAreaField from "../common/TextAreaField";
import PrimaryButton from "../common/PrimaryButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function PersonalInformation() {
  const { user, setUsers } = useContext(UserContext);

  const [form, setForm] = useState(user);

  const update = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSave = () => {
    // yahan API call laga sakte ho profile data save karne ke liye
    setUsers(form);
  };

  return (
    <Card
      icon={<User size={20} />}
      title="Personal Information"
      footer={<PrimaryButton onClick={handleSave} />}
    >
      <InputField
        label="Full Name"
        value={form.fullName}
        onChange={update("fullName")}
      />
      <InputField
        label="Email Address"
        value={form.email}
        onChange={update("email")}
        type="email"
      />
      <InputField
        label="Phone Number"
        value={form.phone}
        onChange={update("phone")}
      />
      <SelectField
        label="Designation"
        value={form.designation}
        onChange={update("designation")}
        options={["Administrator", "Manager", "Dispatcher", "Driver"]}
      />
      <TextAreaField
        label="Bio (Optional)"
        value={form.bio}
        onChange={update("bio")}
        maxLength={200}
      />
    </Card>
  );
}
