import { createContext } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
