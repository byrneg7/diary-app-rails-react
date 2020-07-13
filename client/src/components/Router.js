import React from 'react';
import { Route, Switch } from "react-router";

import RouteWithLayout from "./hoc/RouteWithLayout";
import PageNotFound from "../components/misc/NotFound";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import LandingPage from "../components/landingPage/LandingPage";
import Test from "./Test";

const Router = () => (
  <>
    <Switch>
      <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout} />
      <Route path="/test" exact component={Test}/>
      <RouteWithLayout component={PageNotFound} layout={LandingPageLayout}/>
    </Switch>
  </>
);

export default Router;