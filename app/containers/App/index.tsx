/*
 *
 * App
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import muiTheme from 'resources/muiTheme';
import Nav from 'components/Nav';
import LandingPage from 'containers/Landing/Loadable';
import BrowsePage from 'containers/Browse/Loadable';
import VistaPage from 'containers/Vista/Loadable';
import UserPage from 'containers/User/Loadable';
import NotFoundPage from 'components/NotFoundPage';
import GlobalStyle from 'global-styles';

export default function App() {
  // const isMobile = useMediaQuery('(max-width: 420px)'); // move to redux
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/vista" component={VistaPage} />
          <Route exact path="/user" component={UserPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </StylesProvider>
  );
}
