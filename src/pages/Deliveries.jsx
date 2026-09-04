import AllDerliveries from "../components/AllDeliveries";
import DeliveryTracking from "../components/DeliveryTracking";
import StateCard from "../components/StateCard 2";

function Deliveries() {
  return (
    <>
      <div>
        <StateCard></StateCard>
        <div className="flex justify-between">
          <AllDerliveries></AllDerliveries>
          <DeliveryTracking></DeliveryTracking>
        </div>
      </div>
    </>
  );
}
export default Deliveries;
