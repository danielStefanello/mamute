import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Git Mamute" />
    </Container>
  );
}

export default Header;
