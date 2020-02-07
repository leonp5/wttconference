import styled from "@emotion/styled";

export const Heading = styled.h1`
  font-family: "Baar Philos";
  color: ${props => props.theme.colors.tertiary};
  margin: 0;
  padding: 35px 0px 15px 0px;
  text-align: center;
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

export const Heading6 = styled.h6`
  color: ${props => props.theme.colors.font};
`;

export const Headline = styled(Heading3)`
  text-align: left;
  width: 100%;
  padding-left: 15px;
  margin-bottom: 0px;
`;

export const Text = styled.p`
  padding: 15px;
  font-size: 1.1rem;
  line-height: 2rem;
  color: ${props => props.theme.colors.font};
`;

export const PageText = styled(Text)`
  text-align: center;
`;

export const PopUpText = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.font};
`;

export const AlertText = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.action};
`;

export const CheckBoxText = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;
