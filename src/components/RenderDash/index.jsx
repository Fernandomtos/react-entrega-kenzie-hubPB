// A renderDash é um desenvolvimento futuro, houve atualização do figma e fiquei sabendo somente depois que essa parte ficaria para outra entrega.

import { StyledMain } from "./style";

export const RenderDash = ({ techs }) => {
  return (
    <>
      <StyledMain>
        <div className="boxMenuUl">
          <h2>Tecnologias</h2>
          <button type="button">+</button>
        </div>
        <div className="containerUl">
          <ul>
            {techs.map((tech) => {
              return (
                <li key={tech.id}>
                  <p>{tech.title}</p>
                  <span>{tech.status}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </StyledMain>
    </>
  );
};
