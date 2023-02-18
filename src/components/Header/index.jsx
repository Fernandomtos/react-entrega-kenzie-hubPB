import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledHeader } from "./style";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <div>
        <h1>
          Olá, <span>{user.name}</span>
        </h1>
        <p>{user.course_module}</p>
      </div>
    </StyledHeader>
  );
};
