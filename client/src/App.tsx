import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import SickLeavesHolidays from "./pages/SickLeavesHolidays";
// import sickLeavesHolidays from "./pages/sickLeavesHolidays";
// import Users from "./pages/Users";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="sickleavesholidays" element={<SickLeavesHolidays />} />
      </Routes>
    </div>
  );
}

export default App;
