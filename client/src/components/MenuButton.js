import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  height: 30px;
  width: 100%;
  background: transparent;
  color: ${props => props.theme.colors.secondary};
  border: none;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.actioncolor};
  }
`;

function MenuButton() {
  return <Button>Home</Button>;
}

export default MenuButton;
