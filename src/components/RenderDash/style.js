import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .boxMenuUl {
    width: 100%;
    max-width: 370px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 32.49px;
      height: 42px;
      background-color: var(--grey-3);
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .containerUl {
    width: 100%;
    max-width: 370px;
    padding: 34px 18px 34px 18px;
    border-radius: 4px;
    background-color: var(--grey-3);

    li {
      width: 100%;
      height: 48.73px;
      background-color: var(--grey-4);
      border-radius: var(--radius-default);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12.18px;
      margin-bottom: 16px;

      p {
        font-size: var(--title3);
        font-weight: 700;
        color: var(--grey-0);
      }

      span {
        font-size: var(--headline);
        color: var(--grey-1);
      }
    }
  }

  @media (min-width: 769px) {
    width: 54.16%;

    .boxMenuUl {
      min-width: 54.16%;
      max-width: 780px;
    }

    .containerUl {
      width: 100%;
      max-width: 780px;
    }
  }
`;
