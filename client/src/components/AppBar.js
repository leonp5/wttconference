import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  width: 100vw;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
`;

const Mobile = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

function AppBar({ children }) {
  return (
    <Container>
      <Mobile>{children}</Mobile>
    </Container>
  );
}

export default AppBar;
