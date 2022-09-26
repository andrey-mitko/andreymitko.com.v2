import styled from "styled-components";
import { Section } from "../../styles/styles";

export const HeroWrapper = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HeroText = styled.h1`
  font-family: var(--font-lora);
  font-size: 37px;
  font-weight: 600;
  line-height: 1.2;
`;

export const BlueText = styled.span`
  color: var(--color-blue);
`;

export const PinkText = styled.span`
  color: var(--color-pink);
`;

export const GreenText = styled.span`
  color: var(--color-green);
`;

export const OrangeText = styled.span`
  color: var(--color-orange);
`;
