import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AppBar from "./components/Navigation/AppBar";
import FooterNav from "./components/Navigation/FooterNav";
import { NavLink } from "./components/Navigation/NavLink";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import About from "./pages/About";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import Attendees from "./pages/Attendees";
import { Main } from "./components/Container/Main";
import { WholeContent } from "./components/Container/WholeContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WholeContent>
        <Router>
          <GlobalStyles />
          <AppBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/program">Programm</NavLink>
            <NavLink to="/workshops">Workshops</NavLink>
            <NavLink to="/registration">Anmelden</NavLink>
            <NavLink to="/about">Über uns</NavLink>
          </AppBar>
          <Switch>
            <Main>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/program">
                <Program />
              </Route>
              <Route path="/workshops">
                <Workshops />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/about">
                <About />
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
      </WholeContent>
    </ThemeProvider>
  );
}

export default App;
