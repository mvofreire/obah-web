import React from "react";
import { AppContext } from "contexts/app";
import Configuration from "./Configuration";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <Configuration {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
