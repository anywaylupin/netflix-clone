import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: black;
        color: #FFFFFF;
        line-height: normal;
        font-size: 16px;
    }
    button {
        background-color: #f65261;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
    .find-title, .search-bar {
        margin-top: 40px;
    }
`;
