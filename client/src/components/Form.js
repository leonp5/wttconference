import styled from "@emotion/styled";

const Form = styled.form`
  height: 90vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
`;

export default Form;
