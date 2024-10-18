import React from "react";
import LogoWrapper from "./logo-wrapper/LogoWrapper";
import MenuWrapper from "./menu-wrapper/MenuWrapper";
import "./HeaderWrapper.scss";

const HeaderWrapper = () => {
  return (
    <header>
      <LogoWrapper /> {/* Render the logo */}
      <MenuWrapper /> {/* Render the menu */}
    </header>
  );
};

export default HeaderWrapper;
