import { StyledHeader } from "./style";

export const Header = ({ profileUser }) => {
  return (
    <StyledHeader>
      <div>
        <h1>
          Olá, <span>{profileUser.name}</span>
        </h1>
        <p>{profileUser.course_module}</p>
      </div>
    </StyledHeader>
  );
};
