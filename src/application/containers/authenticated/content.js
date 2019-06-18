import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

export default ({ pages }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {pages.map((page, i) => (
        <Route key={`page-admin-${i}`} {...page} />
      ))}
    </Switch>
  </Suspense>
);
