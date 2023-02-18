import { Header } from "../../components/Header";
import { RenderDash } from "../../components/RenderDash";
import { StyledDiv, StyledMain } from "./style";
import { NavBar } from "../../components/NavBar";

export const Dashboard = () => {
  return (
    <>
      <StyledDiv>
        <NavBar>Sair</NavBar>
      </StyledDiv>
      <Header />
      <StyledMain>
        <RenderDash />
      </StyledMain>
    </>
  );
};
