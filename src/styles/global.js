import { createGlobalStyle } from "styled-components";

import backgroundImg from "../assets/background.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EDEDED url(${backgroundImg}) no-repeat top;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
    color: #8c5929;
    font-family: 'Gochi Hand', cursive;
  }

  body, input, button {
    font: 18px 'Gochi Hand', cursive;
  }

  button, input {
    height: 40px;
    border: 0;
    padding: 5px;
    color: #8c5929;
  }

  button {
    cursor: pointer;
  }
  `;
