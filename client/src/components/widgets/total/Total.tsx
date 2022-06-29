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
  // console.log("Users: ", users[1].internalRate);
  // console.log("timesheet" + timesheet[1].duration);
  // const duration: any = parseInt(timesheet[1].duration);
  // const revenue = users[1].internalRate * (duration / 3600);
  // console.log(revenue);
  // console.log(timesheet);

  let totalEmployeeSalary = 0;
  let totalIncome = 0;
  for (let i = 0; i < users.length; i++) {
    let employeeSalary =
      (timesheet[i].userName.internalRate * parseInt(timesheet[i].duration)) /
      3600;
    totalEmployeeSalary += employeeSalary;

    if (timesheet[i].customerName.hourlyRate !== 0) {
      let income =
        (timesheet[i].customerName.hourlyRate *
          parseInt(timesheet[i].duration)) /
        3600;
    } else {
      let income =
        (timesheet[i].customerName.monthlyRate *
          parseInt(timesheet[i].duration)) /
        3600;
      totalIncome += income;

      console.log("e" + employeeSalary);
      // console.log("p" + profit);
    }
  }
  let profit = totalIncome - totalEmployeeSalary;
  console.log("i" + totalIncome);
  console.log("t" + totalEmployeeSalary);
  console.log("profit" + profit);

  return (
    <div className="totalWidget">
      <Typography className="title">Total revenue</Typography>
      <div>
        <Typography variant="h4" className="counter">
          {totalIncome.toFixed(1)}€
        </Typography>
        <Typography className="percentage">
          <ArrowUpwardIcon />
          105.23%
        </Typography>
      </div>
      <Typography className="title">Total Profit</Typography>
      <div>
        <Typography variant="h4" className="counter">
          {profit.toFixed(1)}€
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
