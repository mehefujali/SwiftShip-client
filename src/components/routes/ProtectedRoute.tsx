import { useAppSelector } from "@/hooks/reduxHooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Role } from "@/types";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: Role[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const location = useLocation();
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return children;
}