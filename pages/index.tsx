import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import FooterSection from "../components/FooterSection";

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const navBarHeight = "-87px";

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

  const page = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      let ctx = gsap.context(() => {
        var tl = gsap.timeline();
        tl.set("#main-content", {
          opacity: 0,
          visibility: "hidden",
        });
        tl.set(".footer", {
          opacity: 0,
          visibility: "hidden",
        });

        tl.to(["#main-content", ".footer"], {
          delay: 1,
          duration: 1,
          opacity: 1,
        });
        tl.to(["#main-content", ".footer"], {
          delay: 1,
          visibility: "visible",
        });
        tl.add(() => {
          document.body.style.overflow = "unset";
        });
      }, page);

      return () => ctx.revert();
    }
  }, [hasMounted]);

  return (
    <div ref={page}>
      <Head>
        <title>Andrey Mitko</title>
        <meta
          name="description"
          content="Relevant education & experience, CV, Portfolio and other information related to Andrey Mitko"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og.png" />
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
      <main id="main-content">
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
      <div className="footer" id="contact" ref={footerSectionRef}>
        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
