import { StyledDiv } from "./style";

export const Input = ({ label, id, type, placeholder, error, register }) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register(id)} />
      {error ? <p>{error}</p> : null}
    </StyledDiv>
  );
};
