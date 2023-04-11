import { createStitches } from "@stitches/react";
import { Lato, Lora } from "next/font/google";

// Import Inter font
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

// Import Lora font
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black100: "#333C48",
      black70: "#70777F",
      black50: "#999DA3",
      black20: "#D6D8DA",
      white: "#FFFFFF",
      red: "#E03838",
      blue: "#2870B4",
      pink: "#F16895",
      green: "#216A51",
      orange: " #FA9C1C",
      purple: "#7D4377",
      lightblue: "#FBFCFE",
      lightpink: "#FEFBFC",
      lightgreen: "#FBFEFD",
      lightorange: "#FFFDFA",
      lightpurple: "#FDFCFD",
    },
    fonts: {
      lato: lato.style.fontFamily,
      lora: lora.style.fontFamily,
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  media: {
    tablet: "(min-width: 768px)",
    laptop: "(min-width: 992px)",
    desktop: "(min-width: 1200px)",
    hover: "(hover: hover)",
  },
  utils: {
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
  },
});

const resetCss = {
  /*
   * A complete CSS reset
   * https://github.com/jtrost/Complete-CSS-Reset
   */

  /* Displays for HTML 5 */
  "article, aside, audio, command, datagrid, details, dialog, embed, figcaption, footer, header, hgroup, menu, nav, section, summary, video, wbr":
    {
      display: "block",
    },
  "bdi, figcaption, keygen, mark, meter, progress, rp, rt, ruby, time": {
    display: "inline",
  },
  /* Deprecated tags */
  "acronym, applet, big, center, dir, font, frame, frameset, noframes, s, strike, tt, u, xmp":
    { display: "none" },

  /* Reset styles for all structural tags */
  "a, abbr, area, article, aside, audio, b, bdo, blockquote, body, button, canvas, caption, cite, code, col, colgroup, command, datalist, dd, del, details, dialog, dfn, div, dl, dt, em, embed, fieldset, figure, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, keygen, kbd, label, legend, li, map, mark, menu, meter, nav, noscript, object, ol, optgroup, option, output, p, param, pre, progress, q, rp, rt, ruby, samp, section, select, small, span, strong, sub, sup, table, tbody, td, textarea, tfoot, th, thead, time, tr, ul, var, video":
    {
      background: "transparent",
      border: 0,
      fontSize: "100%",
      margin: 0,
      outline: "none",
      padding: 0,
      textAlign: "left",
      textDecoration: "none",
      verticalAlign: "baseline",
      zIndex: 1,
      color: "unset",
    },

  /* Miscellaneous resets */
  body: { lineHeight: 1 },
  "ol, ul": { listStyle: "none" },
  "blockquote, q": { quotes: "none" },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "none",
  },
  table: { borderCollapse: "collapse", borderSpacing: 0 },
};

export const globalStyles = globalCss({
  ...resetCss,
  // Global Styles
  "*, a": {
    fontFamily: "$lato",
    color: "$black100",
    fontSize: "20px",
    fontWeight: "$regular",
  },

  html: {
    scrollBehavior: "smooth",
  },

  /* Adjusts anchor links for fixed header */
  "[id]::before": {
    "@tablet": {
      content: "",
      display: "block",
      height: "86px",
      marginTop: "-86px",
      visibility: "hidden",
    },
  },
});

//MARK: Components that are reused throughout the app
export const Section = styled("div", {
  padding: "0 24px 0 24px",
  "@tablet": {
    padding: "0",
    "& > div:first-child ": {
      maxWidth: "715px",
      margin: "0 auto",
    },
  },
  "@laptop": {
    padding: "0",
    "& > div:first-child ": {
      maxWidth: "815px",
      margin: "0 auto",
    },
  },
  "@desktop": {
    padding: "0",
    "& > div:first-child ": {
      maxWidth: "1050px",
      margin: "0 auto",
    },
  },
});

export const SectionTitle = styled("h2", {
  fontFamily: "$lora",
  fontSize: "32px",
  fontWeight: "$semibold",
  lineHeight: "1.2",
  "&::after": {
    content: "",
    display: "block",
    width: "48px",
    height: "7px",
    borderRadius: "3.5px",
    backgroundColor: "$blue",
    marginTop: "16px",
  },
  "@tablet": {
    fontSize: "40px",
  },
});
