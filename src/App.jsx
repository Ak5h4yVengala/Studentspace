import React from "react";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
