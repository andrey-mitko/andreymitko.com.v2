import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import experiences, { openForWork } from "@/data/experiences";
import ExperienceCell from "./ExperienceCell";
import { SectionTitle } from "@/stitches.config";
import {
  ExperienceWrapper,
  ContentContainer,
  ExperiencesList,
  MoreInfoWrapper,
  OpenToWorkText,
} from "./styles";

const ExperienceSection = () => {
  const comp = useRef<HTMLDivElement | null>(null);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(window.innerWidth < 768);
  }, []);

  // This is the animation that runs when the section loads
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
      <ContentContainer>
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
        <ExperiencesList className="animate-appear">
          {experiences.map((experience, index) => {
            return <ExperienceCell key={index} experience={experience} />;
          })}

          <MoreInfoWrapper>
            {openForWork && (
              <OpenToWorkText>
                * {mobile ? "Open for work" : "Currently open for work"}
              </OpenToWorkText>
            )}
          </MoreInfoWrapper>
        </ExperiencesList>
      </ContentContainer>
    </ExperienceWrapper>
  );
};

export default ExperienceSection;
