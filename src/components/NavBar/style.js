import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  max-width: 370px;
  margin-left: 3.2%;
  margin-right: 3.2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49.46px 0px 31.62px;

  button {
    width: 79.54px;
    height: 31.95px;
    background-color: var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    font-size: var(--headlineBold);
    font-weight: 600;
  }

  @media (min-width: 769px) {
    min-width: 54.16%;
  }
`;
