import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
// import sickLeavesHolidays from "./pages/sickLeavesHolidays";
// import Users from "./pages/Users";

import Home from "./pages/Home";
import CustomerList from "./components/CustomerList";
import UserList from "./components/UserList";
import LeavesAndHolidays from "./components/LeavesAndHolidays";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="users" element={<UserList />} />
        <Route path="sickleavesholidays" element={<LeavesAndHolidays />} />
      </Routes>
    </div>
  );
}

export default App;
