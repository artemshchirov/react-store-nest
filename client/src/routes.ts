import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
} from "./utils/constants";
import { Admin } from "./pages/Admin/Admin.lazy";
import { Basket } from "./pages/Basket/Basket.lazy";
import { Shop } from "./pages/Shop/Shop.lazy";
import { DevicePage } from "./pages/DevicePage/DevicePage.lazy";
import { Signup } from "./pages/Signup/Signup.lazy";
import { Signin } from './pages/Signin/Signin.lazy';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Signin,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Signup,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: "*",
    Component: Shop,
  },
];
