import React from "react";
const HomePage = React.lazy(() => import("./Home"));

export default {
  path: "/",
  exact: true,
  component: HomePage
};
