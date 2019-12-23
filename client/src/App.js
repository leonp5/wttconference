import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AttendeeRegistration from "./pages/Registration";
import AppBar from "./components/AppBar";
import FooterNav from "./components/FooterNav";

const Container = styled.div`
  margin-top: 70px;
  width: 100vw;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar />
      <Container>
        <AttendeeRegistration />
      </Container>
      <FooterNav />
    </ThemeProvider>
  );
}

export default App;
