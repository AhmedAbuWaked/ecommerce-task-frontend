import { FC } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/models";
import { useAuthStore } from "@/stores/auth.store";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowedRoles = [] }) => {
  const { currentUser } = useAuthStore();
  console.log("🚀 ~ file: index.tsx:13 ~ currentUser:", currentUser);
  const location = useLocation();

  return currentUser && currentUser.token ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
