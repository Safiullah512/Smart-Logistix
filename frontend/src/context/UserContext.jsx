import { Children, createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUsers] = useState({
    fullName: "Admin",
    email: "admin@smartlogix.ai",
    phone: "+91 98765 43210",
    designation: "Administrator",
    bio: "Logistics admin for SmartLogix AI.",
    profileImage: null,
  });
  return (
    <UserContext.Provider value={{ user, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
