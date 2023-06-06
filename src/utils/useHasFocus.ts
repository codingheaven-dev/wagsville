import { useState } from "react";

function useHasFocus() {
  const [hasFocus, setHasFocus] = useState(false);

  const handleBlur = () => setHasFocus(false);
  const handleFocus = () => setHasFocus(true);

  return {
    hasFocus,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
}

export default useHasFocus;
