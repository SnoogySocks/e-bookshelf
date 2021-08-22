import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1200px;
        --maxContentWidth: 800px;
        --lightGrey: #efefef;
        --medGrey: #999999;
        --darkGrey: #3d3d3d;
        --lightBeige: #faf8eaff;
        --medBeige: #E7E3C1;
        --darkBeige: #cbb87a;
        --darkestBeige: #afa482ff;
        --translucent: rgba(0, 0, 0, 38%);
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.1rem;
        --fontSmall: 1rem;
        --loadingDuration: 1s;
    }

    * {
        box-sizing: border-box;
        font-family: "Merriweather", sans-serif;
    }

    body {
        margin: 0 80px;
        padding: 0;
        background-color: var(--medBeige);

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