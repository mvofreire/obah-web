import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

export const Content = ({ pages }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {pages.map((page, i) => (
        <Route key={`public-page-${i}`} {...page} />
      ))}
    </Switch>
  </Suspense>
);
