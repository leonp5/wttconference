import styled from "@emotion/styled";

export const CloseButton = styled.a`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.4;

  :hover {
    cursor: pointer;
    opacity: 1;
  }

  :before,
  :after {
    position: absolute;
    content: " ";
    height: 25px;
    width: 3px;
    background-color: ${props => props.theme.colors.tertiary};
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;
