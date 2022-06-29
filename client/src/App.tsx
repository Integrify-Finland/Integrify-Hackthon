import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from './hooks/appHooks';
import {fetchUsers} from './reducers/reducer'
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import SickLeavesHolidays from "./pages/SickLeavesHolidays";
import Home from "./pages/Home";
import { fetchCustomers } from './reducers/customerReducer';
import { fetchTimesheet } from './reducers/timeSheetReducer';

function App() {
const dispatch = useAppDispatch();
const users = useAppSelector(state => state.userReducer);
useEffect(() =>{
  dispatch(fetchUsers())
  dispatch(fetchCustomers())
  dispatch(fetchTimesheet())
}, [dispatch])
console.log('Users from app.tsx: ',users)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="sickleavesholidays" element={<SickLeavesHolidays />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
