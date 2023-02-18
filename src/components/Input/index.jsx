import { StyledDiv } from "./style";

export const Input = ({
  label,
  id,
  type,
  placeholder,
  error,
  register,
  readOnlyInput,
  defaultValue,
}) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <input
        readOnly={readOnlyInput}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        defaultValue={defaultValue}
      />
      {error ? <p>{error}</p> : null}
    </StyledDiv>
  );
};
