import { PropsWithChildren } from "react";
import styled from "styled-components";

interface GroupProps {
  label: string;
}

const Wrapper = styled.label`
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--color-secondary);

  &:has(input:focus, select:focus) {
    color: var(--color-primary);
  }
`;

const Label = styled.span`
  font-size: 0.8em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  line-height: 1;
`;

export default function Group({
  label,
  children,
}: PropsWithChildren<GroupProps>) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
}
