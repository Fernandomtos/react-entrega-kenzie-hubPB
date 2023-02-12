import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 16.21px;
    margin-bottom: 14px;
  }

  p {
    margin-top: 5px;
    color: var(--grey-0);
  }

  select {
    width: 100%;
    min-height: 38.5px;
    border-radius: 3.21px;
    background-color: var(--grey-2);
    padding-left: 16.24px;
    color: var(--grey-1);
    font-size: var(--headline);
    border: none;

    :focus {
      border: 0.98px solid var(--grey-0);
    }
  }

  @media (min-width: 769px) {
    select {
      min-height: 48px;
    }
  }
`;
