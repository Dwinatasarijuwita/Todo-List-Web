import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import AddCategory from "../views/AddCategory";
import AddForm from "../views/AddForm";
import Login from "../views/Login";
import Register from "../views/Register";
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
        path: "/Add-Form",
        element: <AddForm />,
      },
      {
        path: "/Add-Category",
        element: <AddCategory />,
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
