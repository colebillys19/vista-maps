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
import LandingView from 'containers/Landing/Loadable';
import BrowseView from 'containers/Browse/Loadable';
import VistaView from 'containers/Vista/Loadable';
import UserView from 'containers/User/Loadable';
import NotFoundView from 'components/NotFoundView';
import GlobalStyle from 'global-styles';

export default function App() {
  // const isMobile = useMediaQuery('(max-width: 420px)'); // move to redux
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingView} />
          <Route exact path="/browse" component={BrowseView} />
          <Route exact path="/vista" component={VistaView} />
          <Route exact path="/user" component={UserView} />
          <Route component={NotFoundView} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </StylesProvider>
  );
}
