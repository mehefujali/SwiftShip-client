import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProtectedRoute from "../components/routes/ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Role } from "@/types";

import ManageUsers from "@/pages/dashboard/Admin/ManageUsers";

import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Home from "@/pages/public/Home";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <App />,
            children: [
                  { index: true, element: <Home /> },
                  { path: "about", element: <About /> },
                  { path: "contact", element: <Contact /> },
            ],
      },
      {
            path: "/login",
            element: <Login />,
      },
      {
            path: "/register",
            element: <Register />,
      },
      {
            path: "/dashboard",
            element: (
                  <ProtectedRoute>
                        <DashboardLayout />
                  </ProtectedRoute>
            ),
            children: [
                  {
                        index: true,
                        element: <DashboardHome />,
                  },
                  {
                        path: "admin/manage-users",
                        element: (
                              <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                                    <ManageUsers />
                              </ProtectedRoute>
                        ),
                  },
            ],
      },
]);