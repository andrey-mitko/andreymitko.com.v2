import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import projects from "@/data/projects";
import PortfolioProjectCell from "./PortfolioProjectCell";
import { PortfolioWrapper, ContentWrapper, StyledSectionTitle } from "./styles";

const PortfolioSection = () => {
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
          css={{
            "&::after": {
              backgroundColor: "var(--colors-green)",
            },
          }}
        >
          Portfolio
        </StyledSectionTitle>
        <ContentWrapper>
          {projects.map((project, index) => {
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
