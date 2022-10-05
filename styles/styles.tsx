import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Fonts */
        --font-lato: Lato, sans-serif;
        --font-lora: Lora, serif;

        /* Colors */
        --color-black100: #333C48;
        --color-black70: #70777F;
        --color-black50: #999DA3;
        --color-black20: #D6D8DA;
        --color-white: #FFFFFF;
        --color-red: #E03838;
        --color-blue: #2870B4;
        --color-pink: #F16895;
        --color-green: #216A51;
        --color-orange: #FA9C1C;
        --color-purple: #7D4377;
        --color-lightblue: #FBFCFE;
        --color-lightpink: #FEFBFC;
        --color-lightgreen: #FBFEFD;
        --color-lightorange: #FFFDFA;
        --color-lightpurple: #FDFCFD;

        /* Screen Sizes */
        --screen-tablet: 940px;
        --screen-desktop: 1200px;
    }

    body {
        font-family: var(--font-lato);
        color: var(--color-black100);
        font-size: 20px;
    }

    input {
      all: unset;
    }

    h1,h2,h3,h4,h5,h6,p,a,button {
      color: unset;
      font-weight: normal;
      font-style: normal;
      font-size: 1em;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      text-decoration: none;
      background: transparent;
    }
    a:link,a:visited,a:hover,a:active { text-decoration: none; }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }

    .nofocus {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent !important;
    }
`;

export const Section = styled.div`
  padding: 0 24px 0 24px;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-lora);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;

  ::after {
    content: "";
    display: block;
    width: 50px;
    height: 5px;
    border-radius: 2.5px;
    // ts-ignore
    background-color: ${(props: any) =>
      props.color ? `var(--color-${props.color})` : "var(--color-blue)"};
    margin-top: 16px;
  }
`;
