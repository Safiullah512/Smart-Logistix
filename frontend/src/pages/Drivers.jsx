import AllDrivers from "../components/AllDriver";
import DeliveriesTrend from "../components/DeliveriesTrend";
import DeliveryChart from "../components/DeliveryChart";
import DeliveryTracking from "../components/DeliveryTracking";
import DonutChart from "../components/DonutChart";
import DonutDriver from "../components/DonutDriver";
import DriverDetails from "../components/DriverDetails";
import StateCard from "../components/StateCard 2";
import StateCardDriver from "../components/StateCardDriver";
import TopDelivery from "../components/TopDelivery";
import TopDrivers from "../components/TopDrivers";

function Drivers() {
  return (
    <>
      <div>
        <StateCardDriver></StateCardDriver>
        <div className="flex justify-between gap-2">
          <AllDrivers></AllDrivers>
          <div>
            <DriverDetails></DriverDetails>
            <DonutDriver></DonutDriver>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-30">
          <TopDrivers></TopDrivers>
          <DeliveriesTrend></DeliveriesTrend>
        </div>
      </div>
    </>
  );
}
export default Drivers;
