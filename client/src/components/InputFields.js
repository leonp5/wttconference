import styled from "@emotion/styled";

export const BasicInput = styled.input`
  width: 250px;
  background: ${props => props.theme.colors.background};
  border: none;
  margin-top: 15px;
  padding: 10px;
`;

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors.background};
  border: none;
  width: 100%;
  height: 130px;
  margin-bottom: 50px;
`;
