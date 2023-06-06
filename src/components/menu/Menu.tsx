import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  padding: 0.5em;
  gap: 0.5em;
  list-style: none;
  min-width: 15em;
  background-color: var(--color-secondary);
  color: white;
  min-height: 100vh;
`;

function Menu({ children }: PropsWithChildren) {
  return <StyledMenu>{children}</StyledMenu>;
}

export default Menu;
