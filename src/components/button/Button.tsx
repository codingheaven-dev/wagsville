import { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

const ButtonElement = styled.button<ButtonProps>`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ outline }) =>
    outline ? "var(--color-white)" : "var(--color-secondary)"};
  border: 0px solid;
  border-width: ${({ outline }) => (outline ? 1 : 0)}px;
  color: ${({ outline }) =>
    outline ? "var(--color-secondary)" : "var(--color-white)"};
  border-radius: 4px;
  align-self: stretch;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled),
  &:active:not(:disabled) {
    ${({ outline }) =>
      outline
        ? "color: var(--color-primary)"
        : "background-color: var(--color-primary)"};
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  svg {
    width: 0.8em;
  }
`;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon?: FC;
  outline?: boolean;
}

function Button({
  icon: Icon,
  outline = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonElement {...rest} outline={outline}>
      {Icon && <Icon />}
      {children}
    </ButtonElement>
  );
}

export default Button;
