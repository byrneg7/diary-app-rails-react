import React from 'react';
import { Route, Switch } from "react-router";

import RouteWithLayout from "./hoc/RouteWithLayout";
import PageNotFound from "../components/misc/NotFound";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import LandingPage from "../components/landingPage/LandingPage";
import JournalPage from "./journals/JournalPage";

const Router = () => (
  <>
    <Switch>
      <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout}/>
      <RouteWithLayout path="/journals" exact component={JournalPage} layout={LandingPageLayout}/>
      <RouteWithLayout component={PageNotFound} layout={LandingPageLayout}/>
    </Switch>
  </>
);

export default Router;