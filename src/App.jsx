import React from "react";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Layout />
    </div>
  );
};

export default App;
