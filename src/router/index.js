import Login from "../features/login/Login";
import Dashboard from "../features/admin/dashboard";
import LandingPage from "../features/customer/LandingPage";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]
