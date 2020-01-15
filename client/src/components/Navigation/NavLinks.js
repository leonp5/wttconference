import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { mq } from "../MediaQueries";

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

export const InlineLink = styled(NavLink)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.action};
  &:hover {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const MenuLink = styled(NavLink)`
  ${mq[0]} {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.9rem;
    &:hover {
      width: 100%;
    }
  }
  font-size: 1.2rem;
  padding: 8px;
  outline: transparent;
`;

export const PopUpLink = styled(NavLink)`
  color: ${props => props.theme.colors.action};
  &:hover {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
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
