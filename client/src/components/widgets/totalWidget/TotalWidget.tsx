import "./totalWidget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography } from "@mui/material";

const TotalWidget = () => {
  return (
    <div className="widget">
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

export default TotalWidget;
