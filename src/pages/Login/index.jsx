import { FormLogin } from "../../components/FormLogin";
import { StyledHeader, StyledMainContainer } from "./style";

export const Login = () => {
  return (
    <>
      <StyledHeader>
        <img src="./img/Logo.svg" alt="Logo da empresa" />
      </StyledHeader>
      <StyledMainContainer>
        <FormLogin />
      </StyledMainContainer>
    </>
  );
};
