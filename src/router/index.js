import { Outlet } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import LogOutPage from "../pages/Logout";
import DiaGioiHanhChinh from "../pages/DiaGioiHanhChinh";
import WrapperRouteComponent from "./config";
import { useRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
const routeList = [
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <WrapperRouteComponent element={<Outlet />} guest />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "/auth",
        element: <WrapperRouteComponent element={<Outlet />} auth />,
        children: [
          {
            path: "",
            element: <DiaGioiHanhChinh />,
          },
          {
            path: "logout",
            element: <LogOutPage />,
          },
        ],
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
