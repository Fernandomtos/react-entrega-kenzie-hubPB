import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    nav {
      width: 370px;
    }
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  padding-left: 3.2%;
  padding-right: 3.2%;
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    padding: 0px;
  }
`;
