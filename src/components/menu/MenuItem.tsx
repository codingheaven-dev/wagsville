import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: rgba(255 255 255 / 0.2);
    cursor: pointer;
  }
  svg {
    font-size: 150%;
  }
`;

interface MenuItemProps {
  to: string;
}

function MenuItem({ children, to }: PropsWithChildren<MenuItemProps>) {
  return (
    <ListItem>
      <StyledLink to={to}>{children}</StyledLink>
    </ListItem>
  );
}

export default MenuItem;
