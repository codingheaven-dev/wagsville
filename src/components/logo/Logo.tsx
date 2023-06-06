import styled from "styled-components";
import { FaDog } from "react-icons/fa";

const P = styled.p`
  font-family: "Comfortaa", cursive;
  text-align: center;
  line-height: 1;

  svg {
    font-size: 120%;
  }
`;

function Logo({ small = false }) {
  return (
    <P style={{ fontSize: small ? "1.5rem" : "2.5rem" }}>
      <FaDog /> Wagsville
    </P>
  );
}

export default Logo;
