import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import Main from "./pages/Main";

const App = () => (
  <BrowserRouter>
    <Main />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
