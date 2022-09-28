import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [heroSectionRef, heroSectionInView] = useInView({
    rootMargin: "-100px",
  });
  const [aboutSectionRef, aboutSectionInView] = useInView({
    rootMargin: "-100px",
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
          <AboutSection />
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
