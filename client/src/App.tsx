import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
