import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Favourites from "../views/Favourites";
import TodoList from "../views/TodoList";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/List",
        element: <TodoList />,
      },
      {
        path: "/Favourites",
        element: <Favourites/>
      }
    ],
  },
]);

export default router;
