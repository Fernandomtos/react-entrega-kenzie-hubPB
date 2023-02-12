import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  padding-left: 3.2%;
  padding-right: 3.2%;
  display: flex;
  justify-content: center;

  div {
    flex-direction: column;
    margin-top: 37px;

    p {
      margin-top: 23px;
      font-size: var(--title2);
      color: white;
    }
  }

  @media (min-width: 769px) {
    padding: 0px;
  }
`;
