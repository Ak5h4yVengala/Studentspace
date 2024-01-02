import React from "react";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import Shop from "./Shop.jsx";
import Clubs from "./Clubs.jsx";
import Events from "./Events.jsx";
import Socials from "./Socials.jsx";
import Login from "./Login.jsx";
const Layout = () => {
  return (
    <div className="layout-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/clubs" element={<Clubs />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/socials" element={<Socials />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Layout;
