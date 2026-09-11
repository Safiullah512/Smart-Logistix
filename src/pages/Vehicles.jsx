import AllVehicles from "../components/AllVehicles.jsx";
import DonutVehicle from "../components/DonutVehicles.jsx";
import FuelConsumption from "../components/FuelConsumption.jsx";
import Header from "../components/Header";
import StateCard from "../components/StateCard (V)";
import VechicleAttention from "../components/VehicleAttention.jsx";

function Vehicles() {
  return (
    <div>
      <StateCard></StateCard>
      <AllVehicles></AllVehicles>
      <div className="flex gap-2 mb-10">
        <DonutVehicle></DonutVehicle>
        <FuelConsumption></FuelConsumption>
        <VechicleAttention></VechicleAttention>
      </div>
    </div>
  );
}
export default Vehicles;
