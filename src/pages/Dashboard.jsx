import ActiveVehicles from "../components/ActiveVehicles";
import AiPredictions from "../components/AiPredictions";
import DeliveryChart from "../components/DeliveryChart";
import RecentDeliveries from "../components/RecentDeliveries";
import TopRoutes from "../components/TopRoutes";
import StateCard from "../components/StateCard";

function Dashboard() {
  return (
    <>
      <div>
        <StateCard></StateCard>
        <div className="mt-3 flex gap-3">
          <DeliveryChart></DeliveryChart>
          <RecentDeliveries></RecentDeliveries>
          <div className="flex flex-col gap-3">
            <AiPredictions></AiPredictions>
            <AiPredictions></AiPredictions>
          </div>
        </div>
        <div className="flex gap-4">
          <ActiveVehicles></ActiveVehicles>
          <TopRoutes></TopRoutes>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
