import React from "react";
import { ThemeProvider } from "emotion-theming";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AppBar from "./components/AppBar";
import AttendeForm from "./components/AttendeeForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar />
      <AttendeForm />
    </ThemeProvider>
  );
}

export default App;
