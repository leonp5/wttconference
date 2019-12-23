import React from "react";
import { ThemeProvider } from "emotion-theming";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AttendeeRegistration from "./pages/registration";
import AppBar from "./components/AppBar";

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
