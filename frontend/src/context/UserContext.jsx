import { Children, createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [photoUrl, setPhotoUrl] = useState(
    localStorage.getItem("profileImage"),
  );
  return (
    <UserContext.Provider value={{ photoUrl, setPhotoUrl }}>
      {children}
    </UserContext.Provider>
  );
}
