import React from "react";
import { AppContext } from "contexts/app";
import Dashboard from "./Dashboard";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <Dashboard {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
