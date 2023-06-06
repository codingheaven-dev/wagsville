import { useCallback, useRef } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

function useStableNavigate() {
  const navigate = useNavigate();
  const ref = useRef(navigate);
  ref.current = navigate;
  const stableNavigate = useCallback((to: To, options?: NavigateOptions) => {
    ref.current(to, options);
  }, []);
  return stableNavigate;
}

export default useStableNavigate;
