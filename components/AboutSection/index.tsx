import React, { useEffect, useRef } from "react";
import {
  AboutWrapper,
  FeatureText,
  AboutText,
  FeaturesWrapper,
  ContentWrapper,
} from "./styles";
import { SectionTitle } from "../../styles/styles";
import { gsap } from "gsap";

type Props = {};

const AboutSection = (props: Props) => {
  const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".animate-appear", { opacity: 0, y: 48 });
      gsap.to(".animate-appear", {
        scrollTrigger: {
          trigger: ".section-title",
          start: "-100% 55%",
          markers: true,
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
      <div className="container">
        <SectionTitle className="section-title animate-appear" color="blue">
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
            Self-taught Web (Full-Stack) & iOS Developer with a strong knowledge
            of JavaScript, Swift, Git and design in Figma and Sketch. <br />
            <br /> An International Baccalaureate graduate from Leysin American
            School in Switzerland, I am currently pursuing a Bachelor of
            Business Administration in London, UK.
            <br />
            <br />I am fluent in English and Russian and have experience working
            and studying in an international environment.
          </AboutText>
        </ContentWrapper>
      </div>
    </AboutWrapper>
  );
};

export default AboutSection;
