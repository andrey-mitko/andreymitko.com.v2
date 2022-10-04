import React from "react";
import {
  ExperienceWrapper,
  ContentWrapper,
  MoreInfoWrapper,
  OpenToWorkText,
} from "./styles";
import { SectionTitle } from "../../styles/styles";
import ExperienceCell from "./ExperienceCell";
import { Experience } from "../../types";
import StyledLink from "../StyledLink";

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

  return (
    <ExperienceWrapper>
      <SectionTitle color="pink">Experience</SectionTitle>
      <ContentWrapper>
        {experiences.map((experience, index) => {
          return <ExperienceCell key={index} experience={experience} />;
        })}

        <MoreInfoWrapper>
          <OpenToWorkText>Open for Work </OpenToWorkText>
          <StyledLink href="/resume.pdf" title="EXPLORE FULL CV" />
        </MoreInfoWrapper>
      </ContentWrapper>
    </ExperienceWrapper>
  );
};

export default ExperienceSection;