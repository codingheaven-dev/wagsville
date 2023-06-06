import { useContext } from "react";
import AuthContext from "./context";

export default function useAuth() {
  const contextValue = useContext(AuthContext);
  if (!contextValue) throw new Error("No auth provider present");
  return contextValue;
}
