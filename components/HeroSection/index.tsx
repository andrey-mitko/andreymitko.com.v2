import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HeroWrapper, HeroText, ColouredText, StyledArrowUp } from "./styles";

const HeroSection = () => {
  const comp = useRef<HTMLDivElement | null>(null); // create a ref for the root level element (for scoping)

  // This is the animation that runs when the section loads
  useEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component
      gsap.set(".hero-text", { opacity: 0, y: 48 });
      gsap.to(".hero-text", {
        delay: 3.25,
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <>
      <HeroWrapper ref={comp}>
        <HeroText className="hero-text">
          I am a <ColouredText type="blue">cr</ColouredText>
          <ColouredText type="pink">ea</ColouredText>
          <ColouredText type="green">ti</ColouredText>
          <ColouredText type="orange">ve</ColouredText> software engineer
          currently based in London, UK
        </HeroText>
      </HeroWrapper>
      <StyledArrowUp className="ri-arrow-up-line"></StyledArrowUp>
    </>
  );
};

export default HeroSection;
