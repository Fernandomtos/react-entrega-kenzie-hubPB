import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  return (
    <>
      {loading ? (
        <div className="imgLoading">
          <img src="/img/Spinner-1s-200px.svg" alt="Loading..." />
        </div>
      ) : (
        <>{user ? <Outlet /> : <Navigate to="/" />}</>
      )}
    </>
  );
};
