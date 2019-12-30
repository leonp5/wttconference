import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color 0.3s linear;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 5px;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export default NavLink;
