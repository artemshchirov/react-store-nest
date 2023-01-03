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
import { Auth } from "./pages/Auth/Auth.lazy";
import { Shop } from "./pages/Shop/Shop.lazy";
import { DevicePage } from "./pages/DevicePage/DevicePage.lazy";

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
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
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
