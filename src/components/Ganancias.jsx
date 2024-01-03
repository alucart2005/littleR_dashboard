import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils/utils";

export function Ganancias() {
  return <EarningsCard></EarningsCard>;
}

const EarningsCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;
