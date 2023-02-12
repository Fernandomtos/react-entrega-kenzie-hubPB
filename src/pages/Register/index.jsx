import { FormRegister } from "../../components/FormRegister";
import { NavBar } from "../../components/NavBar";
import { StyledDiv, StyledMain } from "./style";

export const Register = () => {
  return (
    <>
      <StyledDiv>
        <NavBar>Voltar</NavBar>
      </StyledDiv>
      <StyledMain>
        <FormRegister />
      </StyledMain>
    </>
  );
};
