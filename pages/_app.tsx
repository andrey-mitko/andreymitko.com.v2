import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/styles";
import { Reset } from "styled-reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
