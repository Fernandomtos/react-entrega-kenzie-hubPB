import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { RenderDash } from "../../components/RenderDash";
import { StyledDiv, StyledMain } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Dashboard = () => {
  const [profileUser, setProfileUser] = useState([]);
  const token = localStorage.getItem("@Token");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <StyledDiv>
        <NavBar>Sair</NavBar>
      </StyledDiv>
      <Header profileUser={profileUser} />
      <StyledMain>
        <div>
          <h2>Que pena! Estamos em desenvolvimento {":("}</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
        {/* <RenderDash techs={profileUser.techs} /> */}
      </StyledMain>
    </>
  );
};
