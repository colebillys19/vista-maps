/*
 *
 * App
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import LandingView from 'containers/Landing/Loadable';
import BrowseView from 'containers/Browse/Loadable';
import VistaView from 'containers/Vista/Loadable';
import UserView from 'containers/User/Loadable';
import NotFoundView from 'components/NotFoundView';
import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingView} />
        <Route exact path="/browse" component={BrowseView} />
        <Route exact path="/vista" component={VistaView} />
        <Route exact path="/user" component={UserView} />
        <Route component={NotFoundView} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
