import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 370px;
  height: auto;
  padding: 34px 18px 34px 18px;
  gap: 17.65px;
  border-radius: 4px;
  background-color: var(--grey-3);
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: var(--headline);
    color: var(--grey-1);
  }

  form {
    width: 100%;
    height: auto;
  }

  button {
    background-color: var(--color-primary-negativo);
  }
`;
