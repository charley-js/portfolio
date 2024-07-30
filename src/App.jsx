import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import DateTime from "./components/shared/DateTime";
import BackToTop from "./components/shared/BackToTop";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Sidebar />
        <DateTime />
        <BackToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" />
            <Route path="/articles" />
            <Route path="/open-source" />
            <Route path="/skills" />
            <Route path="/contact" />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
