import styled, { createGlobalStyle, css } from "styled-components";
import ScreenSizes from "../utils/mediaVariables";

export const GlobalStyle = createGlobalStyle`

     
   
    html {
      scroll-behavior: initial;
      @media (min-width: ${ScreenSizes.tablet}) {
        scroll-behavior: smooth;
      }
    }
      
    
    /* Adjusts # links for fixed header */
    [id]::before {
      @media (min-width: ${ScreenSizes.tablet}) {
        content: '';
        display: block;
        height:      86px;
        margin-top: -86px;
        visibility: hidden;
      }
    }

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
        /* These are inside /utils/mediaVariables.tsx */
    }

    body {
        font-family: var(--font-lato);
        color: var(--color-black100);
        font-size: 20px;
    }

    input, textarea {
      all: unset;
    }

    textarea {
      resize: vertical;
      height: auto; 
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

  @media (min-width: ${ScreenSizes.tablet}) {
    padding: 0;
    .container {
      max-width: 715px;
      margin: 0 auto;
    }
  }

  @media (min-width: ${ScreenSizes.laptop}) {
    padding: 0;
    .container {
      max-width: 815px;
      margin: 0 auto;
    }
  }
  @media (min-width: ${ScreenSizes.desktop}) {
    padding: 0;
    .container {
      max-width: 1050px;
      margin: 0 auto;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-lora);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;

  ::after {
    content: "";
    display: block;
    width: 48px;
    height: 7px;
    border-radius: 3.5px;
    // ts-ignore
    background-color: ${(props: any) =>
      props.color ? `var(--color-${props.color})` : "var(--color-blue)"};
    margin-top: 16px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 36px;
  }

  @media (min-width: ${ScreenSizes.desktop}) {
    font-size: 40px;
  }
`;
