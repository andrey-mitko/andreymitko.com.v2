import React from "react";
import { PortfolioWrapper, ContentWrapper } from "./styles";
import { SectionTitle } from "../../styles/styles";
import { PortfolioProject } from "../../types";
import PortfolioProjectCell from "./PortfolioProjectCell";

type Props = {};

const PortfolioSection = (props: Props) => {
  // MARK: - Portfolio Data
  const portfolioProjects: PortfolioProject[] = [
    {
      title: "Tabager — Manage Web Tabs",
      subtitle: "Product Design, Web Development",
      image: "/tabager.png",
      url: "https://www.tabager.com",
    },
    {
      title: "Joe’s Portfolio Website",
      subtitle: "Web Development",
      image: "/joepeshall.png",
      url: "https://www.joepeshall.co.uk",
    },
    {
      title: "Drift — Focus & Meditation",
      subtitle: "Mobile Development",
      image: "/drift.png",
      url: "https://apps.apple.com/us/app/drift-focus-meditation/id1620172749",
    },
    {
      title: "Spring — Full Service Studio",
      subtitle: "Web Development",
      image: "/byspring.png",
      url: "https://www.byspring.co",
    },
    {
      title: "Zonlo — Internships Across UK",
      subtitle: "Product Design, Web Development",
      image: "/zonlo.png",
      url: "https://www.zonlo.co.uk",
    },
  ];

  return (
    <PortfolioWrapper>
      <SectionTitle color="green">Portfolio</SectionTitle>
      <ContentWrapper>
        {portfolioProjects.map((project, index) => {
          return <PortfolioProjectCell key={index} project={project} />;
        })}
      </ContentWrapper>
    </PortfolioWrapper>
  );
};

export default PortfolioSection;
