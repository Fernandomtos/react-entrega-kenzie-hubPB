import { useNavigate } from "react-router-dom";
import { StyledNav } from "./style";

export const NavBar = ({ children }) => {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
    window.localStorage.clear();
  };

  return (
    <StyledNav>
      <img src="./img/Logo.svg" alt="Logo da empresa" />
      <button onClick={voltar}>{children}</button>
    </StyledNav>
  );
};
