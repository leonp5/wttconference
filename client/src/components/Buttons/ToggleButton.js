import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100px;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.action};
  font-weight: bold;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.action};
  margin: 20px;
  padding: 14px;
  text-align: center;
  cursor: pointer;

  :active {
    background: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.secondary};
  }
`;
