import React from "react";
import { PortfolioWrapper, ContentWrapper } from "./styles";
import { SectionTitle } from "../../styles/styles";
import { PortfolioProject } from "../../utils/types";
import PortfolioProjectCell from "./PortfolioProjectCell";
import TabagerImage from "../../public/portfolio/tabager.png";
import JoePeshallImage from "../../public/portfolio/joepeshall.png";
import DriftImage from "../../public/portfolio/drift.png";
import SpringImage from "../../public/portfolio/byspring.png";
import ZonloImage from "../../public/portfolio/zonlo.png";

type Props = {};

const PortfolioSection = (props: Props) => {
  // MARK: - Portfolio Data
  const portfolioProjects: PortfolioProject[] = [
    {
      title: "Tabager — Manage Web Tabs",
      subtitle: "Product Design, Web Development",
      image: TabagerImage,
      url: "https://www.tabager.com",
    },
    {
      title: "Zonlo — Internships Across UK",
      subtitle: "Product Design, Web Development",
      image: ZonloImage,
      url: "https://zonlo.vercel.app",
    },
    {
      title: "Joe’s Portfolio Website",
      subtitle: "Web Development",
      image: JoePeshallImage,
      url: "https://www.joepeshall.co.uk",
    },
    {
      title: "Drift — Focus & Meditation",
      subtitle: "Mobile Development",
      image: DriftImage,
      url: "https://apps.apple.com/us/app/drift-focus-meditation/id1620172749",
    },
    {
      title: "Spring — Full Service Studio",
      subtitle: "Web Development",
      image: SpringImage,
      url: "https://www.byspring.co",
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
