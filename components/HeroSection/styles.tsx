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
  line-height: 1.25;
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

export const StyledArrowUp = styled.i`
  @keyframes fadeMoveAnimation {
    100% {
      opacity: 1;
      transform: translateY(-0.75em) translateX(-50%);
    }
  }

  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  font-size: 30px;
  color: var(--color-black50);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: fadeMoveAnimation 2.5s infinite alternate;
  animation-delay: 1s;
  animation-fill-mode: both;
`;
