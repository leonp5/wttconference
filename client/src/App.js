import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AppBar from "./components/Navigation/AppBar";
import FooterNav from "./components/Navigation/FooterNav";
import { MobileLink } from "./components/Navigation/NavLink";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import Attendees from "./pages/Attendees";
import ConferenceFee from "./pages/ConferenceFee";
import { Main } from "./components/Container/Main";
import { PageContainer } from "./components/Container/PageContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Router>
          <GlobalStyles />
          <AppBar>
            <MobileLink to="/">Start</MobileLink>
            <MobileLink to="/registration">Anmelden</MobileLink>
            <MobileLink to="/conferencefee">Tagungsbeitrag</MobileLink>
            <MobileLink to="/workshops">Workshops</MobileLink>
            <MobileLink to="/program">Tagungsprogramm</MobileLink>
            <MobileLink to="/contact">Kontakt/Tagungsbüro</MobileLink>
            <MobileLink to="/impressum">Impressum</MobileLink>
            <MobileLink to="/Privacy">Datenschutz</MobileLink>
          </AppBar>
          <Switch>
            <Main>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/conferencefee">
                <ConferenceFee />
              </Route>
              <Route path="/program">
                <Program />
              </Route>
              <Route path="/workshops">
                <Workshops />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/impressum">
                <Impressum />
              </Route>
              <Route path="/privacy">
                <Privacy />
              </Route>
              <Route path="/attendees">
                <Attendees />
              </Route>
            </Main>
          </Switch>
          <FooterNav />
        </Router>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
