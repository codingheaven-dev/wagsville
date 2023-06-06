import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../services/auth";
import useStableNavigate from "../utils/useStableNavigate";

export function Root() {
  const { isLoggedIn } = useAuth();
  const navigate = useStableNavigate();
  useEffect(() => {
    navigate(isLoggedIn ? "/schedule" : "/login");
  }, [isLoggedIn, navigate]);
  return <Outlet />;
}
