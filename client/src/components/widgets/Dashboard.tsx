import Total from "../../components/widgets/total/Total";
import Total2 from "../../components/widgets/total/Total2";
import AboutUs from "../../components/widgets/aboutUs/AboutUs";
import Statistics from "../../components/widgets/statistics/Statistics";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="widgets">
      <div className="item-1">
        <AboutUs />
      </div>
      <div className="item-2">
        <Total />
      </div>
      <div className="item-3">
        <Total2 />
      </div>
      <div className="item-4">
        <Statistics />
      </div>
      <div className="item-5">
        <Statistics />
      </div>
    </div>
  );
}
