import styled from "@emotion/styled";

const Anchor = styled.a`
  color: ${props => props.theme.colors.secondary};
  transition: color 0.3s linear;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export default Anchor;
