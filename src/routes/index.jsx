import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AppRoutes = ({ setUser, setLoading, loading }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          loading ? (
            <p>Carregando...</p>
          ) : (
            <Login setUser={setUser} setLoading={setLoading} />
          )
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
