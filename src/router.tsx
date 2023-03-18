import { lazy } from "react";
import { RouteObject } from "react-router";
import { ROUTES } from "./models";
import { BaseLayout } from "./layouts";
import Loader from "./components/loader";
import ProtectedRoute from "./components/ProtectedRoute";

const NotFound = Loader(lazy(() => import("./pages/not-found")));
const Products = Loader(lazy(() => import("./pages/products")));
const CartItem = Loader(lazy(() => import("./pages/CartItem")));
const Orders = Loader(lazy(() => import("./pages/Orders")));
const Login = Loader(lazy(() => import("./pages/Login")));
const Register = Loader(lazy(() => import("./pages/Register")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Products />,
      },
      {
        path: "",
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.CART_ITEMS,
            element: <CartItem />,
          },
          {
            path: ROUTES.ORDERS,
            element: <Orders />,
          },
        ],
      },
    ],
  },

  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
