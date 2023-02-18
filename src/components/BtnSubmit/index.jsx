import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

import { StyledBtn } from "./style";

export const BtnSubmit = ({ children, editTech, type }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <StyledBtn
      type={type === "button" ? "button" : "submit"}
      onClick={type === "button" ? () => deleteTech(editTech.id) : null}
    >
      {children}
    </StyledBtn>
  );
};
