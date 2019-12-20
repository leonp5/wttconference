import React from "react";
import { ThemeProvider } from "emotion-theming";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AppBar from "./components/AppBar";
import AttendeeRegistration from "./pages/registration";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar />
      <AttendeeRegistration />
    </ThemeProvider>
  );
}

export default App;
