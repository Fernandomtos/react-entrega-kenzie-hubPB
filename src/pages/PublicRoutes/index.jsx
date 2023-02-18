import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const PublicRoutes = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? (
        <div className="imgLoading">
          <img src="/img/Spinner-1s-200px.svg" alt="Loading..." />
        </div>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};
