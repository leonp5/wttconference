import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AttendeeRegistration from "./pages/Registration";
import AppBar from "./components/AppBar";
import FooterNav from "./components/FooterNav";
import Program from "./pages/Program";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import Lift from "./pages/Lift";
import About from "./pages/About";

const Main = styled.div`
  margin-top: 70px;
  width: 100vw;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color 0.3s linear;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 5px;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppBar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/program">Programm</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
          <NavLink to="/registration">Anmelden</NavLink>
          <NavLink to="/lift">Mitfahren</NavLink>
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
              <AttendeeRegistration />
            </Route>
            <Route path="/lift">
              <Lift />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Main>
        </Switch>
        <FooterNav />
      </Router>
    </ThemeProvider>
  );
}

export default App;
