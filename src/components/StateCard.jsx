import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import {
  faBox,
  faBoxesPacking,
  faBoxOpen,
  faClock,
  faShuttleVan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUp, ArrowUp01, Box } from "lucide-react";

function StateCard() {
  return (
    <div className="w-full mt-3 flex gap-3">
      <div className="w-65 flex p-4 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-5 items-center text-sm">
        <div className="bg-blue-200 rounded-2xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-blue-600 p-3 text-3xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Total Deliveries</h2>
          <h1 className="font-bold text-2xl">120</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold">12.5%</p>
            </span>
            <p>form yesterday</p>
          </div>
        </div>
      </div>
      <div className="w-65 flex p-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-5 items-center">
        <div className="bg-blue-200 rounded-2xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faShuttleVan}
            className="text-green-600 p-3 text-3xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center text-sm">
          <h2>Active Vehicles</h2>
          <h1 className="font-bold text-2xl">25</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold text-sm">8.3%</p>
            </span>
            <p>form yesterday</p>
          </div>
        </div>
      </div>
      <div className="w-65 flex p-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-5 items-center">
        <div className="bg-orange-200 rounded-2xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faClock}
            className="text-orange-600 p-3 text-3xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Pending Deliveries</h2>
          <h1 className="font-bold text-2xl">18</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold text-sm">3.6%</p>
            </span>
            <p>form yesterday</p>
          </div>
        </div>
      </div>
      <div className="w-65 flex p-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-5 items-center">
        <div className="bg-violet-200 rounded-2xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faAccessibleIcon}
            className="text-violet-600 p-3 text-3xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2>Accessibility Score</h2>
          <h1 className="font-bold text-2xl">120</h1>
          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp></ArrowUp>
              <p className="font-bold text-sm">72%</p>
            </span>
            <p>Good</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StateCard;
