import styled from "@emotion/styled";

export const Heading = styled.h1`
  font-family: "Baar Philos";
  color: ${props => props.theme.colors.tertiary};
  margin: 0;
  padding: 35px 0px 15px 0px;
`;

export const Heading2 = styled.h2`
  font-family: "Baar Philos";
  color: ${props => props.theme.colors.tertiary};
  text-align: center;
  padding: 5px;
`;

export const Heading3 = styled.h3`
  color: ${props => props.theme.colors.tertiary};
`;

export const Text = styled.p`
  padding: 15px;
  font-size: 1.1rem;
  line-height: 2rem;
`;
