import React from "react";
import Menu from "./header/menu";

const Header = () => {
  return (<>
  <Menu />
  <div id="header">
    <div id="crown" />
    <div id="menu-trigger" className="">
      <div className="menu-trigger" />
      <div className="menu-trigger" />
      <div className="menu-trigger" />
    </div>
  </div>
  </>
    
  );
};

export default Header;
