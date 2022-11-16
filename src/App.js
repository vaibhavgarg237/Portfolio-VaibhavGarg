import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import UnderMaintenance from "./components/UnderMaintenance";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<UnderMaintenance />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/work" element={<UnderMaintenance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
