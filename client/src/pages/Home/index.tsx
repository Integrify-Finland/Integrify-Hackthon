import "./index.scss";
import TotalWidget from "../../components/widgets/totalWidget/TotalWidget";
import AboutUs from "../../components/widgets/aboutUsWidget/AboutUs";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <AboutUs />
          <TotalWidget />
          <TotalWidget />
        </div>
      </div>
    </div>
  );
}
