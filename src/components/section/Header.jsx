import React, { useState } from "react";
import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
  const [isMenuActive, setIeMenuActive] = useState(false);

  const toggleMenu = () => {
    setIeMenuActive(!isMenuActive);
  };
  return (
    <header id="header" role="banner" className={isMenuActive ? "active" : ""}>
      <Logo toggleMenu={toggleMenu} />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;
