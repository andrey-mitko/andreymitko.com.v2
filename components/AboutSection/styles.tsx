import styled from "styled-components";
import { Section } from "../../styles/styles";
import ScreenSizes from "../../utils/mediaVariables";

export const AboutWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 136px;
  background-color: var(--color-lightblue);
`;

export const FeatureText = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-black100);

  @media (min-width: ${ScreenSizes.tablet}) {
    width: fit-content;
  }
`;

export const AboutText = styled.p`
  margin-top: 52px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-black100);

  @media (min-width: ${ScreenSizes.tablet}) {
    margin-top: 0px;
    max-width: 400px;
    margin-left: 0px;
  }
`;

export const FeaturesWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 28px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    min-width: 165px;
    height: 100%;
    margin-left: 120px;
    margin-top: 0px;
  }
`;

export const ContentWrapper = styled.div`
  @media (min-width: ${ScreenSizes.tablet}) {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 56px;
  }
`;
