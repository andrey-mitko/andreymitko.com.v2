import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --font-lato: 'Lato', sans-serif;
        --font-lora: 'Lora', serif;
    }

    body {
        font-family: var(--font-lato);
    }
    
`;
