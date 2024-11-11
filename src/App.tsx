import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Profile from "./features/profile/Profile";
import Meal from "./features/meal/Meal";
import Status from "./features/status/Status";

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
