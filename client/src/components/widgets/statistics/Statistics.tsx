import { Typography } from "@mui/material";
import "./statistics.scss";
import { Bar } from "react-chartjs-2";

const Statistics = () => {
  return (
    <div className="statisticsWidget">
      <Typography className="title">Total revenue</Typography>
      {/* <Bar
        data={{
          labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [
            {
              label: "# of votes",
              data: "12, 19, 3, 5, 2",
            },
          ],
        }}
        height={80}
        width={80}
        options={{
          maintainAspectRatio: false,
        }}
      /> */}
    </div>
  );
};

export default Statistics;
