import { FormLogin } from "../../components/FormLogin";
import { StyledHeader, StyledMainContainer } from "./style";

export const Login = ({ setUser, setLoading }) => {
  return (
    <>
      <StyledHeader>
        <img src="./img/Logo.svg" alt="Logo da empresa" />
      </StyledHeader>
      <StyledMainContainer>
        <FormLogin setUser={setUser} setLoading={setLoading} />
      </StyledMainContainer>
    </>
  );
};
