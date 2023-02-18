import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typePassword, setTypePassword] = useState(true);

  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  const viewPassword = () => {
    setTypePassword(!typePassword);
  };

  useEffect(() => {
    const token = localStorage.getItem("@Token");

    if (token) {
      const userAutoLogin = async () => {
        try {
          setLoading(true);
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@Token");
        } finally {
          setLoading(false);
        }
      };

      userAutoLogin();
    }
  }, []);

  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      localStorage.setItem("@Token", response.data.token);
      localStorage.setItem("@UserId", response.data.user.id);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(
        "Login inválido, favor verificar dados cadastrados e tentar novamente!"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    localStorage.removeItem("@UserId");
    navigate("/");
  };

  const createUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        viewPassword,
        loginUser,
        typePassword,
        createUser,
        user,
        logout,
        techs,
        setTechs,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
