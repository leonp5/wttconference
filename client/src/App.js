import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { theme } from "./themes/theme";
import AppBar from "./components/Navigation/AppBar";
import FooterNav from "./components/Navigation/FooterNav";
import { MenuLink, FooterLink, BottomNavLink } from "./components/Navigation/NavLinks";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import Organization from "./pages/Organization";
import ConferenceFee from "./pages/ConferenceFee";
import { Main } from "./components/Container/Main";
import { PageContainer } from "./components/Container/PageContainer";
import HeaderImage from "./components/Images";
import ProtectedRoute from "./components/ProtectedRoute";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Router>
          {/* <ScrollToTop /> */}
          <GlobalStyles />
          <AppBar>
            <MenuLink to="/" exact={true}>
              Start
            </MenuLink>
            <MenuLink to="/registration">Anmelden</MenuLink>
            <MenuLink to="/conferencefee">Tagungsbeitrag</MenuLink>
            <MenuLink to="/workshops">Workshops</MenuLink>
            <MenuLink to="/program">Tagungsprogramm</MenuLink>
            <MenuLink to="/contact">Kontakt/Tagungsbüro</MenuLink>
            <MenuLink to="/impressum">Impressum</MenuLink>
            <MenuLink to="/Privacy">Datenschutz</MenuLink>
          </AppBar>
          <Switch>
            <Main>
              <HeaderImage />
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
              <ProtectedRoute path="/organization" component={Organization} />
            </Main>
          </Switch>
          <FooterNav>
            <FooterLink to="/impressum">Impressum</FooterLink>
            <FooterLink to="/privacy">Datenschutz</FooterLink>
            <BottomNavLink to="organization">Teilnehmer & Workshops</BottomNavLink>
          </FooterNav>
        </Router>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
