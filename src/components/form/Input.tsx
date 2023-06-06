import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export const InputElement = styled.input`
  width: 100%;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
  border-radius: 4px;
  border: none;
  border: 1px solid var(--color-secondary);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: #bbb;
  }
`;

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "defaultValue">;

function Input(props: InputProps) {
  return <InputElement {...props} />;
}

export default Input;
