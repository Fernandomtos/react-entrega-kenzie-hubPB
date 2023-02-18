import { StyledDiv } from "./style";

export const InputSelect = ({ label, id, error, register }) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <select {...register(id)}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
      {error ? <p>{error}</p> : null}
    </StyledDiv>
  );
};

export const InputSelectTech = ({ label, id, error, register }) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <select {...register(id)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      {error ? <p>{error}</p> : null}
    </StyledDiv>
  );
};
