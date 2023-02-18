import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalRegisterTech, setModalRegisterTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);

  const { techs, setTechs, setLoading } = useContext(UserContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("@Token");

  useEffect(() => {
    if (token) {
      const readTechs = async () => {
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

        readTechs();
      };
    }
  }, []);

  const createTech = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!");
      setTechs([...techs, response.data]);
      setModalRegisterTech(!modalRegisterTech);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (tech_id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso!");

      setModalEditTech(!modalEditTech);

      const newListTechs = techs.filter((tech) => tech.id !== tech_id);
      setTechs(newListTechs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateTech = async (data, tech_id) => {
    const status = {
      status: data.status,
    };

    try {
      setLoading(true);
      const response = await api.put(`/users/techs/${tech_id}`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso!");

      setModalEditTech(!modalEditTech);

      const newListTechs = techs.map((tech) => {
        if (tech.id === tech_id) {
          return { ...tech, ...data };
        } else {
          return tech;
        }
      });

      setTechs(newListTechs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        modalRegisterTech,
        setModalRegisterTech,
        modalEditTech,
        setModalEditTech,
        deleteTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
