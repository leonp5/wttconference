import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { mq } from "../MediaQueries";

// React Router Links

export const BasicLink = styled(NavLink)`
  color: ${props => props.theme.colors.secondary};
  transition: color 0.3s linear;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const InlineLink = styled(BasicLink)`
  font-size: 1rem;
  color: ${props => props.theme.colors.action};
  &:hover {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const SmallInlineLink = styled(InlineLink)`
  font-size: 0.9rem;
`;

export const MenuLink = styled(BasicLink)`
  ${mq[0]} {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.9rem;
    &:hover,
    &.active {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};
      width: 100%;
    }
  }
  font-size: 1.2rem;
  padding: 8px;
  border-bottom: 3px solid transparent;
  &:hover,
  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.secondary};
  }
`;

export const PopUpLink = styled(BasicLink)`
  color: ${props => props.theme.colors.action};
  &:hover {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const FooterLink = styled(BasicLink)`
  font-size: 1.1rem;
  padding: 7px;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;

export const BottomNavLink = styled(BasicLink)`
  font-size: 0.8rem;
  padding: 5px;
  color: ${props => props.theme.colors.secondary};
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;

// Anchortags

export const SimpleAnchor = styled.a`
  font-size: 1rem;
  color: ${props => props.theme.colors.action};
  &:hover {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const BottomAnchor = styled(SimpleAnchor)`
  font-size: 0.8rem;
  padding: 5px;
  color: ${props => props.theme.colors.secondary};
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;

export const SmallInlineAnchor = styled(SimpleAnchor)`
  font-size: 0.9rem;
`;
