import HomeConfig from "./home/home.config";
import RegisterConfig from "./register/register.config";
import LoginConfig from "./login/login.config";

import DashboardConfig from "./dashboard/dashboard.config";
import ProfileConfig from "./profile/profile.config";
import SystemConfig from "./configuration/configuration.config";

const pagesRoutes = [
  HomeConfig,
  RegisterConfig,
  LoginConfig,
  DashboardConfig,
  ProfileConfig,
  SystemConfig,
];

export const publicPages = pagesRoutes.filter(page => !page.auth);
export const privatePages = pagesRoutes.filter(page => !!page.auth);
