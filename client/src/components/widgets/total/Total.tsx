import "./total.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks';

const Total = () => {
  const users = useAppSelector(state => state.userReducer);
  const timesheet = useAppSelector(state => state.timesheetReducer);

  return (
    <div className="totalWidget">
      <Typography className="title">Total revenue</Typography>
      <div>
        <Typography variant="h4" className="counter">
          {/* {Object.values(timesheet[0].from)} */}
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
