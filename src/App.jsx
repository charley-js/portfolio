import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import DateTime from "./components/shared/DateTime";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <DateTime />
      <Routes>
        <Route path="/home" />
        <Route path="/projects" />
        <Route path="/articles" />
        <Route path="/open-source" />
        <Route path="/skills" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
};

export default App;
