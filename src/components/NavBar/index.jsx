import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { StyledNav } from "./style";

export const NavBar = ({ children }) => {
  const { logout } = useContext(UserContext);

  //const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

  return (
    <StyledNav>
      <img src="./img/Logo.svg" alt="Logo da empresa" />
      <button
        type="button"
        onClick={children === "voltar" ? () => voltar() : () => logout()}
      >
        {children}
      </button>
    </StyledNav>
  );
};
