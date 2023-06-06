import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../services/auth";
import useStableNavigate from "../utils/useStableNavigate";
import { FaCalendarAlt, FaUsers, FaCut, FaDog } from "react-icons/fa";
import { Menu, MenuItem } from "../components/menu";
import styled from "styled-components";
import Logo from "../components/logo/Logo";

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1 1 auto;
  padding: 1em;
`;

export function Layout() {
  const { isLoggedIn } = useAuth();
  const navigate = useStableNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);
  if (!isLoggedIn) {
    return null;
  }
  return (
    <Wrapper>
      <Menu>
        <Logo small />
        <MenuItem to="/schedule">
          <FaCalendarAlt /> Schedule
        </MenuItem>
        <MenuItem to="/employees">
          <FaUsers /> Employees
        </MenuItem>
        <MenuItem to="/customers">
          <FaDog /> Customers
        </MenuItem>
        <MenuItem to="/services">
          <FaCut /> Services
        </MenuItem>
      </Menu>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
