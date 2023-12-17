import Home from "../components/home";
import Todo from "../components/todo";
import Users from "../components/users";
import MainLayout from "../container/MainLayout";
import { RouteObject, useRoutes } from "react-router-dom";
export type MyRouteObject = RouteObject;
export const routes: MyRouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
] as MyRouteObject[];
//as niye yaziriq

export const mapRoutes = (routes: MyRouteObject[]) => {
  return routes?.map((route) => route);
};

export const useRoute = () => {
  return useRoutes(mapRoutes(routes));
};
