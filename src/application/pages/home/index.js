import React from "react";
import { AppContext } from "contexts/app";
import Home from "./Home";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <Home {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
