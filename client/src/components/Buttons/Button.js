import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 80px;
  background: ${props => props.theme.colors.action};
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  border-radius: 4px;
  border: none;
  margin: 20px;
  padding: 14px;
  text-align: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:disabled {
    background: ${props => props.theme.colors.disabled};
  }
`;
