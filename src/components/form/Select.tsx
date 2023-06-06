import { ChangeEvent, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export const SelectElement = styled.select`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
  border-radius: 4px;
  border: none;
  border: 1px solid var(--color-secondary);
  transition: border-color 0.2s ease;

  &:invalid {
    border-color: var(--color-tertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

interface OnSelect<T> {
  name: string;
  value: T;
}

interface BaseProps
  extends Omit<ComponentPropsWithoutRef<"select">, "onSelect"> {
  options: string[];
}

interface SingularSelectProps extends BaseProps {
  multiple?: false;
  value: string;
  onSelect: ({ name, value }: OnSelect<string>) => void;
}
interface PluralSelectProps extends BaseProps {
  multiple: true;
  value: string[];
  onSelect: ({ name, value }: OnSelect<string[]>) => void;
}

type SelectProps = SingularSelectProps | PluralSelectProps;

function Input(props: SelectProps) {
  const { options, onSelect, ...rest } = props;
  const handleSelect = ({
    target: { name, selectedOptions },
  }: ChangeEvent<HTMLSelectElement>) => {
    const selection = Array.from(selectedOptions).map(({ value }) => value);
    if (props.multiple) {
      props.onSelect({ name, value: selection });
    } else {
      props.onSelect({ name, value: selection[0] });
    }
  };
  return (
    <SelectElement onChange={handleSelect} {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectElement>
  );
}

export default Input;
