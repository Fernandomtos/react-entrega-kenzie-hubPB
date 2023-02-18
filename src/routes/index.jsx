import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { PublicRoutes } from "../pages/PublicRoutes";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
