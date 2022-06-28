import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import SickLeavesHolidays from "./pages/SickLeavesHolidays";
import Users from "./pages/Users";
import Home from "./pages/Home";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sickleavesholidays" element={<SickLeavesHolidays />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
