import React, { useRef, useEffect } from "react";
import {
  ExperienceWrapper,
  ContentWrapper,
  MoreInfoWrapper,
  OpenToWorkText,
  OpenToWorkTextMobile,
} from "./styles";
import { SectionTitle } from "../../../styles/styles";
import ExperienceCell from "./ExperienceCell";
import { Experience } from "../../../utils/types";
import StyledLink from "../../Elements/StyledLink";
import { gsap } from "gsap";

type Props = {};

const ExperienceSection = (props: Props) => {
  // MARK: - Experiences Data
  const experiences: Experience[] = [
    {
      title: "Full-Stack Developer",
      company: "Spring — Full Service Studio",
      period: "Mar 2022 — Jul 2022",
    },
    {
      title: "iOS Engineer",
      company: "Crowdhaus — Property Discovery",
      period: "Jan 2021 — Mar 2022",
    },
    {
      title: "Founder",
      company: "Card — Share Social Profiles",
      period: "Jun 2020  — Nov 2022",
    },
  ];
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
        <SectionTitle className="section-title animate-appear" color="pink">
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
