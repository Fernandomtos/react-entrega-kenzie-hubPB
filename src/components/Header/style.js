import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);

  div {
    width: 100%;
    height: 100%;
    max-width: 370px;
    margin-left: 3.2%;
    margin-right: 3.2%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 10px;

    h1,
    span {
      font-size: var(--title1);
      font-weight: 700;
      color: var(--grey-0);
    }

    p {
      font-size: var(--headlineBold);
      color: var(--grey-1);
      font-weight: 600;
    }
  }

  @media (min-width: 769px) {
    div {
      min-width: 54.16%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
