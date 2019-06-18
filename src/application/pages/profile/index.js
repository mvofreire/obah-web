import React from "react";
import { AppContext } from "contexts/app";
import Profile from "./Profile";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <Profile {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
