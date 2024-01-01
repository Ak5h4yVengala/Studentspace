import React from "react";
import { menuItems } from "../helper/constants";
import logo from "../assets/logo.svg";
import { Button, Collapse } from "@mui/material";
import { useSidebar } from "../hooks/useSidebar";
const Sidebar = () => {
  const { isSidebarOpened, handleSidebar } = useSidebar();

  const SidebarOpened = isSidebarOpened ? "" : "collapsed";
  return (
    <div className={`sidebar-container ${SidebarOpened}`}>
      <div className="logo-container">
        <img className="logo" src={logo}></img>
        <span className={`menu-title`}>STUDENTSPACE</span>
      </div>
      <div className="menu-items-container">
        {menuItems.map((item) => (
          <div className={`menu-item-container`} key={item.name}>
            <img className="menu-logo" src={item.logo}></img>
            <span className={`menu-title`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
