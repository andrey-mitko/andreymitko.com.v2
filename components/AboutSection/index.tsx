import React from "react";
import {
  AboutWrapper,
  FeatureText,
  AboutText,
  FeaturesWrapper,
  ContentWrapper,
} from "./styles";
import { SectionTitle } from "../../styles/styles";
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <AboutWrapper>
      <div className="container">
        <SectionTitle color="blue">About</SectionTitle>

        <ContentWrapper>
          <FeaturesWrapper>
            <FeatureText>
              Business Oriented <br /> Product Engineer
            </FeatureText>
            <FeatureText>
              2+ years <br /> of experience
            </FeatureText>
          </FeaturesWrapper>
          <AboutText>
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
