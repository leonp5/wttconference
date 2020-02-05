import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.action};
  font-weight: bold;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.action};
  margin: 20px;
  padding: 10px;
  cursor: pointer;

  :active {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
  }
`;
