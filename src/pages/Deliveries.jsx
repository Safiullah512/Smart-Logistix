import AllDerliveries from "../components/AllDeliveries";
import DeliveriesTrend from "../components/DeliveriesTrend";
import DeliveryChart from "../components/DeliveryChart";
import DeliveryTracking from "../components/DeliveryTracking";
import DonutChart from "../components/DonutChart";
import StateCard from "../components/StateCard 2";
import TopDelivery from "../components/TopDelivery";

function Deliveries() {
  return (
    <>
      <div>
        <StateCard></StateCard>
        <div className="flex justify-between">
          <AllDerliveries></AllDerliveries>
          <DeliveryTracking></DeliveryTracking>
        </div>
        <div className="flex items-center gap-2 mb-30">
          <DonutChart></DonutChart>
          <DeliveriesTrend></DeliveriesTrend>
          <TopDelivery></TopDelivery>
        </div>
      </div>
    </>
  );
}
export default Deliveries;
