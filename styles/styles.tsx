import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
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
    }
    
`;
