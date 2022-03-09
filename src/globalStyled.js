import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: #0e0e0e;
        overflow-x: hidden;
    }

    :root {
        --body-background: #0e0e0e;
        --color-logo: #ff5b50;
        --card-color: #252525;
        --text-color: #fff;
        --button-color: #fff;
        --border-color: #fff;
        --subtitle-color: #5a5757;
        --black-text: #000;
        --color-input: #0D0D0D;

        // Font-size

        --font-1: 1.125rem; // 18px
        --font-2: 1rem; // 16px
        --font-3: 3.125rem; // 50px
        --font-4: 1.25rem; // 20px
    }
`;

export default GlobalStyled;
