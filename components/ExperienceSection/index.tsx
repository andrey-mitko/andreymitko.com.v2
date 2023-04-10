import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import experiences from "@/data/experiences";
import StyledLink from "@/components/StyledLink";
import ExperienceCell from "./ExperienceCell";
import { SectionTitle } from "@/stitches.config";
import {
  ExperienceWrapper,
  ContentWrapper,
  MoreInfoWrapper,
  OpenToWorkText,
  OpenToWorkTextMobile,
} from "./styles";

const ExperienceSection = () => {
  const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".animate-appear", { opacity: 0, y: 48 });
      gsap.to(".animate-appear", {
        scrollTrigger: {
          trigger: ".section-title",
          start: "-50% 65%",
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
    <ExperienceWrapper ref={comp}>
      <div className="container">
        <SectionTitle
          className="section-title animate-appear"
          css={{
            "&::after": {
              backgroundColor: "var(--colors-pink)",
            },
          }}
        >
          Experience
        </SectionTitle>
        <ContentWrapper className="animate-appear">
          {experiences.map((experience, index) => {
            return <ExperienceCell key={index} experience={experience} />;
          })}

          <MoreInfoWrapper>
            <OpenToWorkText>* Currently open for work! </OpenToWorkText>
            <OpenToWorkTextMobile>* Open for Work! </OpenToWorkTextMobile>
            <StyledLink href="/resume.pdf" title="EXPLORE FULL CV" />
          </MoreInfoWrapper>
        </ContentWrapper>
      </div>
    </ExperienceWrapper>
  );
};

export default ExperienceSection;
