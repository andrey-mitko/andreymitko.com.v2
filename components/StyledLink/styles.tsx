import styled from "styled-components";
import ScreenSizes from "@/utils/mediaVariables";

export const Link = styled.a`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  @media (min-width: ${ScreenSizes.laptop}) and (hover: hover) {
    color: var(--color-black70);
    transition: all 0.2s ease-in-out;
    :hover {
      color: var(--color-black100);
    }
  }
`;

export const StyledArrowRight = styled.i`
  font-size: 16px;
  margin-left: 4px;
`;
