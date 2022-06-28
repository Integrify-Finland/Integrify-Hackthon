import "./index.scss";
import Reports from "../../components/TopUsers";
import Dashboard from "../../components/widgets/Dashboard";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Dashboard />
        <Reports />
      </div>
    </div>
  );
}
