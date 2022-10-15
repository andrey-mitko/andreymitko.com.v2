import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/styles";
import "normalize.css/normalize.css";
import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      {/* Check by typing "dataLayer" on client terminal */}
      {/* https://enlear.academy/add-google-analytics-to-a-next-js-application-5525892844db */}

      <Script strategy="lazyOnload" id="gtm-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
      </Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
