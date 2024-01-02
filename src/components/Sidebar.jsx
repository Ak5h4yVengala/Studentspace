import React from "react";
import { menuItems } from "../helper/constants";
import logo from "../assets/logo.svg";
import login from "../assets/login.svg";
import signup from "../assets/signup.svg";
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSidebar } from "../hooks/useSidebar";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarOpened, handleSidebar } = useSidebar();

  const SidebarOpened = isSidebarOpened ? "" : "collapsed";
  return (
    <div className={`sidebar-container ${SidebarOpened}`}>
      <Link to="/" className="logo-container">
        <img className="logo" src={logo}></img>
        <span className={`menu-title`}>STUDENTSPACE</span>
      </Link>
      <List className="menu-items-container">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <ListItem disablePadding className={`menu-item-container`}>
              <ListItemButton>
                <ListItemIcon>
                  <img className="menu-logo" src={item.logo} />
                </ListItemIcon>
                <span className={`menu-title`}>{item.name}</span>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <List className="login-container">
        <Link to="/login">
          <ListItem disablePadding className={`menu-item-container`}>
            <ListItemButton>
              <ListItemIcon>
                <img className="menu-logo" src={login} />
              </ListItemIcon>
              <span className={`menu-title`}>Login</span>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
