import { faCheckCircle, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fuel } from "lucide-react";

function FuelCard() {
  return (
    <div className="bg-white p-2 rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.3)] flex gap-5 items-center text-xs">
      <div className="flex gap-2 *:justify-center items-center">
        <div className="bg-green-200 rounded p-1">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-600 "
          ></FontAwesomeIcon>
        </div>
        <div>
          <h2>Total Distance</h2>
          <h1 className="font-bold text-sm">2450 km</h1>
        </div>

        <div className="bg-orange-200 rounded p-1">
          <Fuel className="text-orange-500"></Fuel>
        </div>
        <div>
          <h2>Total Fuel Used</h2>
          <h1 className="font-bold text-sm">285.6 L</h1>
        </div>

        <div className="bg-blue-200 rounded p-1">
          <FontAwesomeIcon
            icon={faKey}
            className="text-blue-600 "
          ></FontAwesomeIcon>
        </div>
        <div>
          <h2>Avg. Efficiency</h2>
          <h1 className="font-bold text-sm">8.6 km/l</h1>
        </div>
      </div>
    </div>
  );
}
export default FuelCard;
