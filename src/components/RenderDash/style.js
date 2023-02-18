import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .boxMenuUl {
    width: 100%;
    max-width: 780px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

    .btnAddTech {
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
    padding: 34px 18px 34px 18px;
    border-radius: 4px;
    background-color: var(--grey-3);
    margin-top: 0;

    li {
      width: 100%;
      height: 48.73px;
      background-color: var(--grey-4);
      border-radius: var(--radius-default);
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* padding: 12.18px; */
      margin-bottom: 16px;

      p {
        font-size: var(--title3);
        font-weight: 700;
        color: var(--grey-0);
        margin-top: 0;
      }

      span {
        font-size: var(--headline);
        color: var(--grey-1);
      }

      .btnEditTech {
        width: 100%;
        height: 49px;
        margin: 0;
        padding: 0;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12.18px;
      }

      .activeBtnEdit {
        background-color: var(--grey-2);
      }
    }
  }

  @media (min-width: 769px) {
    width: 54.16%;
    max-width: 780px;
    .boxMenuUl {
      min-width: 54.16%;
    }

    .containerUl {
      width: 100%;

      li {
        .btnEditTech {
          padding: 13px 22.22px 13px 22.22px;
        }
      }
    }
  }
`;
