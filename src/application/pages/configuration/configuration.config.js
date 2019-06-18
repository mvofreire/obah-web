import React from "react";
const Page = React.lazy(() => import("."));

export default {
  auth: true,
  menu: {
    key: "config",
    path: "/admin/configuration",
    icon: "setting",
    label: "Configurações"
  },
  path: "/admin/configuration",
  component: Page
};
