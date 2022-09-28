import styled from "styled-components";
import { Section } from "../../styles/styles";

export const AboutWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 136px;
  background-color: var(--color-lightblue);
`;

export const FeatureText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 28px;
  color: var(--color-black100);
`;

export const AboutText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-black100);
`;

export const FeaturesWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div``;
