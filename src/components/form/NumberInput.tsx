import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";
import { InputElement } from "./Input";
import useHasFocus from "../../utils/useHasFocus";

interface NumberInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "type" | "pattern"> {
  unit?: string;
  value: number;
}

function NumberInput({
  value,
  onChange,
  unit = "",
  ...rest
}: NumberInputProps) {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => void setInnerValue(value), [value]);
  const { hasFocus, onFocus, onBlur } = useHasFocus();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(evt.target.valueAsNumber);
    onChange?.(evt);
  };

  const type = hasFocus ? "number" : "text";
  const displayValue = hasFocus
    ? innerValue
    : `${innerValue?.toLocaleString()} ${unit}`.trim();

  return (
    <InputElement
      type={type}
      value={displayValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default NumberInput;
