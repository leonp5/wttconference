import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AttendeeRegistration from "./pages/Registration";
import AppBar from "./components/AppBar";

const Container = styled.div`
  margin-top: 70px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar />
      <Container>
        <AttendeeRegistration />
      </Container>
    </ThemeProvider>
  );
}

export default App;
