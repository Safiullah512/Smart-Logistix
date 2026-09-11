import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import {
  faBox,
  faBoxesPacking,
  faBoxOpen,
  faCheck,
  faCheckCircle,
  faClock,
  faGasPump,
  faShuttleVan,
  faVanShuttle,
  faWrench,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDown, ArrowUp, ArrowUp01, Box } from "lucide-react";

import DriverData, { driversData } from "../services/DriverData";
import { fuelConsumptionTrend } from "../services/DriverData";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

function StateCard() {
  const totalDelivery = driversData.length;

  const onDuty = driversData.filter((items) => {
    return items.status === "On Duty";
  }).length;

  const offline = driversData
    .flatMap((driver) => driver.assignedVehicles)
    .filter((vehicle) => vehicle.status === "Offline").length;

  const inMaintenance = driversData.filter((items) => {
    return items.assignedVehicles[0].status === "In Maintenance";
  }).length;
  console.log("In Maintenance :", inMaintenance);
  const delayed = driversData.filter((items) => {
    return items.status === "Delayed";
  }).length;

  return (
    <div className="w-full mt-3 flex gap-3">
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        <div className="bg-violet-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-violet-600 p-3 text-xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Total Vehicles</h2>
          <h1 className="font-bold text-xl">{totalDelivery}</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold">12.5%</p>
            </span>
            <p>from last week</p>
          </div>
        </div>
      </div>
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        <div className="bg-green-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-600 p-3 text-xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Active Vehicles</h2>
          <h1 className="font-bold text-xl">{onDuty}</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold">15.2%</p>
            </span>
            <p>from last week</p>
          </div>
        </div>
      </div>
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        <div className="bg-orange-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faWrench}
            className="text-orange-500 p-3 text-xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Under Maintenance</h2>
          <h1 className="font-bold text-xl">{inMaintenance}</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold">5.3%</p>
            </span>
            <p>from last week</p>
          </div>
        </div>
      </div>
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        <div className="bg-blue-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faGasPump}
            className="text-blue-600 p-3 text-xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Avg. Fuel Efficiency</h2>
          <h1 className="font-bold text-xl">
            {fuelConsumptionTrend.summary.avgPerVehicle}
          </h1>
          <div className="flex gap-2 text-xs">
            <span className="text-red-600 flex">
              <ArrowDown></ArrowDown>
              <p className="font-bold">8.1%</p>
            </span>
            <p>form last week</p>
          </div>
        </div>
      </div>
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        <div className="bg-red-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-600 p-3 text-xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Vehicles Offline</h2>
          <h1 className="font-bold text-xl">{offline}</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-red-600 flex">
              <ArrowDown></ArrowDown>
              <p className="font-bold">20%</p>
            </span>
            <p>from last week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StateCard;
