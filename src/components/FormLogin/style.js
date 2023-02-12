import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  max-width: 369px;
  display: flex;
  align-items: center;
  padding: 34px 18px 34px 18px;
  flex-direction: column;
  background-color: var(--grey-3);
  border-radius: 4px;

  form {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: var(--title1);
    color: var(--grey-0);
    font-weight: 700;
    margin-bottom: 17.65px;
  }

  .inputPassword {
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 14px;
      height: 22px;
      position: absolute;
      top: 50px;
      right: 18px;
    }
  }

  span {
    color: var(--grey-1);
    font-size: var(--headlineBold);
    display: flex;
    justify-content: center;
    margin-top: 27.27px;
    margin-bottom: 17.65px;
  }

  @media (min-width: 769px) {
    .inputPassword {
      img {
        top: 60px;
      }
    }
  }
`;
