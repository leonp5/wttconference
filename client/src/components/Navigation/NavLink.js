import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color 0.3s linear;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export const MobileLink = styled(NavLink)`
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    width: 100%;
  }
`;

export const FooterLink = styled(NavLink)`
  font-size: 1.1rem;
  padding: 7px;
`;

export const BottomLink = styled(NavLink)`
  font-size: 0.8rem;
  padding: 5px;
`;
