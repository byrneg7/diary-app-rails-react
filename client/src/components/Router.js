import React from 'react';
import { Route, Switch } from "react-router";

import RouteWithLayout from "./hoc/RouteWithLayout";
import PageNotFound from "../components/misc/NotFound";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import LandingPage from "../components/landingPage/LandingPage";
import JournalPage from "./journals/JournalPage";
import Journal from "./journals/Journal";
import { useSelector } from "react-redux";
import AuthLayout from "./layouts/AuthLayout";
import LoadingPage from "./loading/LoadingPage";
import Test from "./layouts/TestLayout";

const Router = () => {
  const user = useSelector(state => state.user);

  const handleAuth = () => {
    if (user) {
      // authenticated
      return (
        <Switch>
          <RouteWithLayout path="/" exact component={JournalPage} layout={AuthLayout}/>
          <RouteWithLayout path="/journals/:id" exact component={Journal} layout={AuthLayout}/>
          <RouteWithLayout component={PageNotFound} layout={AuthLayout}/>
        </Switch>
      )
    } else if (user === false) {
      // not authenticated
      return (
        <Switch>
          <RouteWithLayout exact component={LandingPage} layout={LandingPageLayout}/>
        </Switch>
      )
    } else {
      // loading
      return (
        <Switch>
          <Route exact component={LoadingPage}/>
        </Switch>
      )
    }
  };

  return handleAuth()

};


export default Router;