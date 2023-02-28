import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import AddCategory from "../views/AddCategory";
import AddForm from "../views/AddForm";
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
        element: <Favourites />,
      },
      {
        path: "/Add-Form",
        element: <AddForm />,
      },
      {
        path: "/Add-Category",
        element: <AddCategory />,
      },
    ],
  },
]);

export default router;
