import React from "react";
import { Link } from "react-router-dom";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

import "../images/reactronlogo.PNG";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="user-card">
        <img src="../images/reactronlogo.PNG" alt="Reactron logo" />
        <p>Welcome Back!</p>
        <p className="user-role">Admin</p>
      </div>
      <div>
        <Link to="/">
          <img src="../images/reactronlogo.PNG" alt="Reactron logo" />
          Dashboard
        </Link>
        <Link to="/calendar">
          <CalendarMonthIcon /> Calendar
        </Link>
        <Link to="/users">
          <GroupIcon /> Users
        </Link>
        <Link to="/sickleavesholidays">
          <ListAltIcon />
          Sick leaves/holidays
        </Link>
        <Link to="/customers">
          <GroupsIcon />
          Customers
        </Link>
        <Link to="/settings">
          <SettingsIcon />
          Settings
        </Link>
        <button className="logout-btn">
          <MeetingRoomIcon />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
