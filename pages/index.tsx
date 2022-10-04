import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import FooterSection from "../components/FooterSection";

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const navBarHeight = "-100px";

  const [heroSectionRef, heroSectionInView] = useInView({
    rootMargin: navBarHeight,
  });
  const [aboutSectionRef, aboutSectionInView] = useInView({
    rootMargin: navBarHeight,
  });
  const [experienceSectionRef, experienceSectionInView] = useInView({
    rootMargin: navBarHeight,
  });
  const [portfolioSectionRef, portfolioSectionInView] = useInView({
    rootMargin: navBarHeight,
  });
  const [footerSectionRef, footerSectionInView] = useInView({
    rootMargin: navBarHeight,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  } else {
    return (
      <div>
        <Head>
          <title>Andrey Mitko</title>
          <meta
            name="description"
            content="Relevant education & experience, CV, Portfolio and other information related to Andrey Mitko"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar
          bgColor={
            heroSectionInView
              ? "white"
              : aboutSectionInView
              ? "lightblue"
              : experienceSectionInView
              ? "lightpink"
              : portfolioSectionInView
              ? "lightgreen"
              : footerSectionInView
              ? "white"
              : "white"
          }
        />
        <main>
          <div ref={heroSectionRef}>
            <HeroSection />
          </div>
          <div id="about" ref={aboutSectionRef}>
            <AboutSection />
          </div>
          <div id="experience" ref={experienceSectionRef}>
            <ExperienceSection />
          </div>
          <div id="portfolio" ref={portfolioSectionRef}>
            <PortfolioSection />
          </div>
        </main>
        <div id="contact" ref={footerSectionRef}>
          <FooterSection />
        </div>
      </div>
    );
  }
};

export default Home;
