import React, { useEffect, useRef } from "react";
import { PortfolioWrapper, ContentWrapper, StyledSectionTitle } from "./styles";
import { PortfolioProject } from "../../utils/types";
import PortfolioProjectCell from "./PortfolioProjectCell";
import TabagerImage from "../../public/portfolio/tabager.png";
import JoePeshallImage from "../../public/portfolio/joepeshall.png";
import DriftImage from "../../public/portfolio/drift.png";
import SpringImage from "../../public/portfolio/byspring.png";
import ZonloImage from "../../public/portfolio/zonlo.png";
import { gsap } from "gsap";
type Props = {};

const PortfolioSection = (props: Props) => {
  // MARK: - Portfolio Data
  const portfolioProjects: PortfolioProject[] = [
    {
      title: "Joe’s Portfolio Website",
      subtitle: "Web Development",
      image: JoePeshallImage,
      url: "https://www.joepeshall.co.uk",
    },
    {
      title: "Spring — Full Service Studio",
      subtitle: "Web Development",
      image: SpringImage,
      url: "https://www.byspring.co",
    },
    {
      title: "Drift — Focus & Meditation",
      subtitle: "Mobile Development",
      image: DriftImage,
      url: "https://apps.apple.com/us/app/drift-focus-meditation/id1620172749",
    },
    {
      title: "Tabager — Manage Web Tabs",
      subtitle: "Product Design, Web Development",
      image: TabagerImage,
      url: "https://www.tabager.com/register",
    },
    {
      title: "Zonlo — Internships Across UK",
      subtitle: "Product Design, Web Development",
      image: ZonloImage,
      url: "https://zonlo.vercel.app",
    },
  ];

  const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".animate-appear", { opacity: 0, y: 48 });
      gsap.to(".animate-appear", {
        scrollTrigger: {
          trigger: ".section-title",
          start: "-25% 55%",
          markers: false,
        },
        delay: 0.25,
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: {
          axis: "x",
          amount: 0.75,
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <PortfolioWrapper ref={comp}>
      <div className="container">
        <StyledSectionTitle
          className="section-title animate-appear"
          color="green"
        >
          Portfolio
        </StyledSectionTitle>
        <ContentWrapper>
          {portfolioProjects.map((project, index) => {
            return (
              <PortfolioProjectCell
                className="animate-appear"
                key={index}
                project={project}
              />
            );
          })}
        </ContentWrapper>
      </div>
    </PortfolioWrapper>
  );
};

export default PortfolioSection;
