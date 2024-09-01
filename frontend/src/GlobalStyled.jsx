import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jockey One", sans-serif;
}

a, li{
    list-style: none;
    text-decoration: none;
    color: black;
}
`;
