import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Profile, { loader as profileLoader } from "./features/profile/Profile";
import Meal, { loader as mealLoader } from "./features/meal/Meal";
import Status from "./features/status/Status";
import Login from "./features/login/Login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Status />,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "/meal",
        element: <Meal />,
        loader: mealLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
