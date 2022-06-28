import "./total.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../hooks/appHooks";

const Total = () => {
  // import { useNavigate } from "react-router-dom";
  return (
    <div className="totalWidget">
      <Typography className="title">Total revenue</Typography>
      <div>
        <Typography variant="h4" className="counter">
          $34.1K
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
