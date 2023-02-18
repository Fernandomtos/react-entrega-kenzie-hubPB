import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;

  background-color: yellow;
  background-color: rgba(0, 0, 0, 0.7);

  .boxModal {
    width: 100%;
    max-width: 296px;
    min-height: 273.41px;
    //margin: 0 12px 34px 12px;
    margin: 148px auto;
    border-radius: 4px;
    background-color: var(--grey-3);

    .titleTech {
      width: 100%;
      height: 40.11px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: var(--grey-2);
      padding: 10px 16px 10px 16px;
      margin: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-bottom: 14.44px;

      .closeModal {
        width: 11px;
        height: 26px;
        background-color: transparent;
        color: var(--grey-1);
      }

      h3 {
        font-size: var(--title3);
        font-weight: 700;
        color: var(--grey-0);
      }
    }

    p {
      font-size: var(--headline);
      color: var(--grey-1);
    }

    form {
      width: 100%;
      height: auto;
      padding: 0 18px 0px 18px;

      input {
        ::placeholder {
          font-size: var(--title2);
        }
      }

      select,
      select > option {
        font-size: var(--title2);
      }

      label {
        margin-top: 0;
      }

      div {
        margin-top: 0;
        margin-bottom: 17.65px;
      }

      .btnContainer {
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 26px;
        flex-direction: row;

        .btnSalvar {
          width: 163.09px;
          height: 38.37px;

          button {
            background-color: var(--color-primary-negativo);
          }
        }

        .btnDelete {
          width: 78.35px;
          height: 38.37px;

          button {
            background-color: var(--grey-1);
          }
        }
      }
    }

    button {
      margin: 0;
      background-color: var(--color-primary);
    }
  }

  @media (min-width: 769px) {
    .boxModal {
      max-width: 369px;
      min-height: 342px;
      margin: 189px auto;
      .titleTech {
        height: 50px;
      }
    }
  }
`;
