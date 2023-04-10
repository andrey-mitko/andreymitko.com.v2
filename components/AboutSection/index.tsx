import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionTitle } from "@/stitches.config";
import {
  AboutWrapper,
  ContentContainer,
  FeatureText,
  AboutText,
  FeaturesWrapper,
  ContentWrapper,
} from "./styles";

const AboutSection = () => {
  const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".animate-appear", { opacity: 0, y: 48 });
      gsap.to(".animate-appear", {
        scrollTrigger: {
          trigger: ".section-title",
          start: "-100% 65%",
          markers: false,
        },
        delay: 0.25,
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: {
          axis: "x",
          amount: 0.25,
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <AboutWrapper ref={comp}>
      <ContentContainer>
        <SectionTitle className="section-title animate-appear">
          About
        </SectionTitle>

        <ContentWrapper>
          <FeaturesWrapper className="animate-appear">
            <FeatureText>
              Business Oriented <br /> Product Engineer
            </FeatureText>
            <FeatureText>
              2+ years <br /> of experience
            </FeatureText>
          </FeaturesWrapper>
          <AboutText className="animate-appear">
            Self-taught software developer with a strong knowledge of
            TypeScript, JavaScript, Python and Swift.
            <br />
            <br /> An International Baccalaureate graduate from Leysin American
            School in Switzerland, I am currently pursuing a Bachelor of
            Business Administration in London, UK.
            <br />
            <br />I am fluent in English and Russian and have experience working
            and studying in an international environment.
          </AboutText>
        </ContentWrapper>
      </ContentContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
