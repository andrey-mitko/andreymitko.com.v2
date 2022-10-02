import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";

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
              : "white"
          }
        />
        <main>
          <div ref={heroSectionRef}>
            <HeroSection />
          </div>
          <div ref={aboutSectionRef}>
            <AboutSection />
          </div>
          <div ref={experienceSectionRef}>
            <ExperienceSection />
          </div>
          <div ref={portfolioSectionRef}>
            <PortfolioSection />
          </div>
        </main>

        {/* <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </div>
    );
  }
};

export default Home;
