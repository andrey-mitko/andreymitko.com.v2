import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
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
        <Navbar />
        <main>
          <HeroSection />
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
