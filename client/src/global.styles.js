import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans Condensed";
  padding: 20px 60px;

@media screen and (max-width: 800px) {
    padding:10px;
}

}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 1em;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
`