import styled from "@emotion/styled";

const MenuButton = styled.button`
  height: 30px;
  width: 100%;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: none;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;

export default MenuButton;
