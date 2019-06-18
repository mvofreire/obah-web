import React from "react";
const Page = React.lazy(() => import("."));

export default {
  auth: true,
  path: "/admin/profile",
  component: Page
};
