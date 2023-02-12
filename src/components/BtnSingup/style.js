import styled from "styled-components";
import { Link as StyledLink } from "react-router-dom";

export const Link = styled(StyledLink)`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38.5px;
  background-color: var(--grey-1);
  color: var(--grey-0);

  text-decoration: none;
  cursor: pointer;
  border-radius: 4.06px;
  font-size: var(--title2);
  font-weight: 500;
`;
