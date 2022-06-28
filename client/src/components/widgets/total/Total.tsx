import "./total.scss";
import React, { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../hooks/appHooks";
import { fetchCustomers } from "../../../reducers/customerReducer";
import { fetchTimesheet } from "../../../reducers/timeSheetReducer";
import { fetchUsers } from "../../../reducers/reducer";
import { User } from "../../../types/User";

const Total = () => {
  const dispatch = useAppDispatch();
  const users: any = useAppSelector((state) => state.userReducer);
  const timesheet = useAppSelector((state) => state.timesheetReducer);
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchCustomers());
    dispatch(fetchTimesheet());
  }, [dispatch]);
  console.log("Users: ", users);
  console.log("user" + users);
  // console.log("timesheet" + userdata);

  return (
    <div className="totalWidget">
      <Typography className="title">Total revenue</Typography>
      <div>
        <Typography variant="h4" className="counter">
          {/* {users[0].fullName} */}
        </Typography>
        <Typography className="percentage">
          <ArrowUpwardIcon />
          105.23%
        </Typography>
      </div>
    </div>
  );
};

export default Total;
