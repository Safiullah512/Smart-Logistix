import AllDrivers from "../components/AllDriver";
import DeliveriesTrend from "../components/DeliveriesTrend";
import DonutDriver from "../components/DonutDriver";
import DriverDetails from "../components/DriverDetails";
import StateCardDriver from "../components/StateCardDriver";
import TopDrivers from "../components/TopDrivers";

function Drivers() {
  return (
    <div className="w-full">

      <StateCardDriver />

      {/* All Drivers - Full Width */}
      <div className="w-full">
        <AllDrivers />
      </div>

      {/* Driver Details + Right Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

        {/* Driver Details */}
        <div className="lg:col-span-7 min-w-0">
          <DriverDetails />
        </div>

        {/* Driver by Status + Deliveries Trend */}
        <div className="lg:col-span-5 min-w-0 flex flex-col gap-3">
          <DonutDriver />
          <DeliveriesTrend />
        </div>

      </div>

      {/* Top Drivers */}
      <div className="mt-3 mb-30">
        <TopDrivers />
      </div>

    </div>
  );
}

export default Drivers;