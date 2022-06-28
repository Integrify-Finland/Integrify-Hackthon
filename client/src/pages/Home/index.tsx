import "./index.scss";
import Total from "../../components/widgets/total/Total";
import AboutUs from "../../components/widgets/aboutUs/AboutUs";
import Statistics from "../../components/widgets/statistics/Statistics";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <div className="item-1">
            <AboutUs />
          </div>
          <div className="item-2">
            <Total />
          </div>
          <div className="item-3">
            <Total />
          </div>
          <div className="item-4">
            <Statistics />
          </div>
          <div className="item-5">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}
