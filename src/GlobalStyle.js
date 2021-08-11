import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1200px;
        --lightGrey: #efefef;
        --medGrey: #999999;
        --darkGrey: #1c1c1c;
        --pageColor: #f2eecbff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --loadingDuration: 1s;
    }

    * {
        box-sizing: border-box;
        font-family: "Merriweather", sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--pageColor);

        h1 {
            font-size: 2rem;
            font-weight: 900;
        }

        h2 {
            font-size: var(--fontBig);
            font-weight: 600;
        }

        h3 {
            font-size: var(--fontSmall);
            color: var(--medGrey);
            font-weight: normal;
        }

        p {
            font-size: var(--fontSmall);
        }
    }
`;