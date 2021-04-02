import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "shared/constants/paths";

const Main = lazy(() => import('modules/Main'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback="">
      <Switch>
        <Route path={routes.main} component={Main} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
