import React from "react";
import { Link } from "react-router-dom";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

import avatar from "../images/logo.svg";
import logo from "../images/reactronlogo.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="user-card">
        <img src={avatar} alt="Reactron logo" />
        <p>Welcome Back!</p>
        <p className="user-role">Admin</p>
      </div>
      <div className="nav-links">
        <Link to="/" className="navlink">
          <img src={logo} alt="Reactron logo" />
          Dashboard
        </Link>
        <Link to="/calendar" className="navlink">
          <CalendarMonthIcon /> Calendar
        </Link>
        <Link to="/users" className="navlink">
          <GroupIcon /> Users
        </Link>
        <Link to="/sickleavesholidays" className="navlink">
          <ListAltIcon />
          Sick leaves/holidays
        </Link>
        <Link to="/customers" className="navlink">
          <GroupsIcon />
          Customers
        </Link>
        <Link to="/settings" className="navlink">
          <SettingsIcon />
          Settings
        </Link>
      </div>
      <button className="logout-btn">
        <MeetingRoomIcon />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
