// components/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute({ isAuth }) {
  return !isAuth ? <Outlet /> : <Navigate to="/" replace />;
}
