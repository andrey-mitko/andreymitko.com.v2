import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/styles";
import "normalize.css/normalize.css";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
