import AllVehicles from "../components/AllVehicles.jsx";
import DonutVehicle from "../components/DonutVehicles.jsx";
import FuelConsumption from "../components/FuelConsumption.jsx";
import Header from "../components/Header";
import StateCard from "../components/StateCard (V)";

function Vehicles() {
  return (
    <div>
      <StateCard></StateCard>
      <AllVehicles></AllVehicles>
      <div className="flex gap-2">
        <DonutVehicle></DonutVehicle>
        <FuelConsumption></FuelConsumption>
      </div>
    </div>
  );
}
export default Vehicles;
