import React from "react";
const LoginPage = React.lazy(() => import("."));

export default {
  path: "/login",
  component: LoginPage
};
