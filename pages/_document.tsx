import _Document, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../stitches.config";
export default class Document extends _Document {
  render() {
    return (
      <Html lang="en" style={{ visibility: "hidden" }}>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body style={{ overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
