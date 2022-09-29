import styled from "styled-components";
import { Section } from "../../styles/styles";

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
`;

export const AboutText = styled.p`
  margin-top: 52px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-black100);
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
`;

export const ContentWrapper = styled.div``;
