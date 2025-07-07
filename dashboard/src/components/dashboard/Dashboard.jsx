import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Apps from "./Apps.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";
import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "../common/Summary.jsx";
import WatchList from "./WatchList.jsx";
import { GeneralContextProvider, GeneralContext } from "../../context/GeneralContext.jsx";
import BuyActionWindow from "../actions/BuyActionWindow.jsx";

const DashboardContent = () => {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  return (
    <>
      <WatchList />
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <DashboardContent />
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
