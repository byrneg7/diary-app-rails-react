import React from 'react';
import {Switch} from "react-router";

import RouteWithLayout from "./hoc/RouteWithLayout";
import PageNotFound from "../components/misc/NotFound";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import LandingPage from "../components/landingPage/LandingPage";

const Router = () => (
  <>
    <Switch>
      <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout} />
      <RouteWithLayout component={PageNotFound} layout={LandingPageLayout}/>
    </Switch>
  </>
);

export default Router;