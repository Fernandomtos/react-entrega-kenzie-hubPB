import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //const localStorageUserId = localStorage.getItem("@UserId");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AppRoutes setUser={setUser} setLoading={setLoading} loading={loading} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
