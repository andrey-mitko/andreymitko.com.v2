import React from "react";
import {
  HeroText,
  HeroWrapper,
  BlueText,
  PinkText,
  GreenText,
  OrangeText,
  StyledArrowUp,
} from "./styles";

type Props = {};

const HeroSection = (props: Props, ref: any) => {
  return (
    <>
      <HeroWrapper>
        <HeroText>
          I am a <BlueText>cr</BlueText>
          <PinkText>ea</PinkText>
          <GreenText>ti</GreenText>
          <OrangeText>ve</OrangeText> software developer currently based in
          London, UK
        </HeroText>
      </HeroWrapper>
      <StyledArrowUp className="ri-arrow-up-line"></StyledArrowUp>
    </>
  );
};

export default HeroSection;
