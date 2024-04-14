import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import graph from "../../../images/graph.png";
import "./StockApp.css";

const StockOverviewPage = () => {
  return (
    <div>
      <div className="graph">
        <img src={graph} />
      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};

export default StockOverviewPage;
