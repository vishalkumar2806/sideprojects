'use client';
import React from "react";
import Menu from "./header/menu";

import { useState } from "react";
const Header = () => {
  const [ state , setState ] = useState(false)
  const handleState = (state : boolean) => { 
    setState( (state) => !state )
  }
  return (<>
  <Menu />
  <div id="header">
    <div id="crown" />
    <div id="menu-trigger" className={state ? "close" : ""} onClick={e => handleState(state)}>
      <div className="menu-trigger" />
      <div className="menu-trigger" />
      <div className="menu-trigger" />
    </div>
  </div>
  </>
  );
};

export default Header;
