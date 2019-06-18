import React from "react";
const DashboardPage = React.lazy(() => import("."));

export default {
  auth: true,
  path: "/admin/dashboard",
  component: DashboardPage
};
