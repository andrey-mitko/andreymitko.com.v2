import styled from "styled-components";
import { Section } from "@/stitches.config";
import ScreenSizes from "@/utils/mediaVariables";

export const ExperienceWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 136px;
  background-color: var(--color-lightpink);

  @media (min-width: ${ScreenSizes.desktop}) {
    height: 92vh;
    padding-top: 0px;
    padding-bottom: 0px;
    .container {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 40px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    margin-top: 56px;
  }

  @media (min-width: ${ScreenSizes.desktop}) {
    margin-top: 0px;
    flex-grow: 1;
    margin-left: 112px;
  }
`;

export const MoreInfoWrapper = styled.div`
  line-height: 1.2;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

export const StyledLink = styled.a`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const StyledArrowRight = styled.i`
  font-size: 16px;
  margin-left: 4px;
`;

export const OpenToWorkText = styled.h5`
  color: var(--color-black70);
  font-size: 16px;
  display: none;

  @media (min-width: ${ScreenSizes.tablet}) {
    display: block;
  }
`;

export const OpenToWorkTextMobile = styled.h5`
  color: var(--color-black70);
  font-size: 16px;
  display: block;
  @media (min-width: ${ScreenSizes.tablet}) {
    display: none;
  }
`;
