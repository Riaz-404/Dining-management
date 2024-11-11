import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Profile from "./features/profile/Profile";
import Meal from "./features/meal/Meal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/meal",
        element: <Meal />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
