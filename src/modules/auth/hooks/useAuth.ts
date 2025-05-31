import { useContext } from "react";
import { AuthContext } from "../components/MockAuthProvider"; // Import AuthContext from the component file

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a MockAuthProvider");
  }
  return context;
}
