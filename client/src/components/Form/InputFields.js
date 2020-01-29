import styled from "@emotion/styled";

export const BasicInput = styled.input`
  width: 250px;
  background: ${props => props.theme.colors.background};
  border: none;
  padding: 10px;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
`;

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors.background};
  border: none;
  width: 250px;
  height: 130px;
  padding: 10px;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
`;
