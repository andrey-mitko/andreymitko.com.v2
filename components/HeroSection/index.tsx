import React, { useState } from "react";
import {
  HeroText,
  HeroWrapper,
  BlueText,
  PinkText,
  GreenText,
  OrangeText,
} from "./styles";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <HeroWrapper>
      <HeroText>
        I am a <BlueText>cr</BlueText>
        <PinkText>ea</PinkText>
        <GreenText>ti</GreenText>
        <OrangeText>ve</OrangeText> software developer currently based in
        London, UK
      </HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;
