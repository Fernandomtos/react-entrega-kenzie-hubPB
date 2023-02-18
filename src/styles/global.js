import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    list-style: none;
  }
  
  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negativo: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #f5f5f5;
  
    --feedback-sucess: #3FE864;
    --feedback-negative: #E83F5B;
    
    --title1: 1.8rem;
    --title2: 1.6rem;
    --title3: 1.4rem;
    --headline: 1.2rem;
    --headlineBold: 1.2rem;
    --headlineItalic: 1.2rem;

    --radius-default: 4.06px;
    
    font-size: 50.0%;
  }
  
  body {
    background-color: var(--grey-4);
    width: 100vw;
    height: 100vh;
    font-family: "Inter", sans-serif;

    .imgLoading {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 250px;
        height: 250px;
      }
    }
  }

  

  label {
    font-size: var(--headline);
    color: var(--grey-0);
    /* margin-bottom: 22.33px; */
  }
  
  button {
    cursor: pointer;
    border-radius: var(--radius-default);
    border: none;
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-size: var(--title1);
    color: var(--grey-0);
    font-weight: 700;
  }

  @media (min-width: 769px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
