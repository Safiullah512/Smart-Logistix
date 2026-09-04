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
      <div className="flex-1 min-w-0 p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg">
        <div className="flex items-center gap-5">
          <div className="bg-blue-200 rounded-2xl shrink-0">
            <FontAwesomeIcon
              icon={faBoxesPacking}
              className="text-blue-600 p-3 text-3xl"
            />
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h2 className="whitespace-nowrap">Total Deliveries</h2>
            <h1 className="font-bold text-2xl">120</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs whitespace-nowrap mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-5 h-5" />
            <p className="font-bold">12.5%</p>
          </span>

          <p>from yesterday</p>
        </div>
      </div>
      <div className="flex-1 min-w-0 p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg">
        <div className="flex items-center gap-5">
          <div className="bg-blue-200 rounded-2xl shrink-0">
            <FontAwesomeIcon
              icon={faShuttleVan}
              className="text-green-600 p-3 text-3xl"
            />
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h2 className="whitespace-nowrap">Active Vehicles</h2>
            <h1 className="font-bold text-2xl">25</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs whitespace-nowrap mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-5 h-5" />
            <p className="font-bold">8.3%</p>
          </span>
          <p>from yesterday</p>
        </div>
      </div>
      <div className="flex-1 min-w-0 p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg">
        <div className="flex items-center gap-5">
          <div className="bg-orange-200 rounded-2xl shrink-0">
            <FontAwesomeIcon
              icon={faClock}
              className="text-orange-600 p-3 text-3xl"
            />
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h2 className="whitespace-nowrap">Pending Deliveries</h2>
            <h1 className="font-bold text-2xl">18</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs whitespace-nowrap mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-5 h-5" />
            <p className="font-bold">3.6%</p>
          </span>
          <p>from yesterday</p>
        </div>
      </div>
      <div className="flex-1 min-w-0 p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg">
        <div className="flex items-center gap-5">
          <div className="bg-violet-200 rounded-2xl shrink-0">
            <FontAwesomeIcon
              icon={faAccessibleIcon}
              className="text-violet-600 p-3 text-3xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h2 className="whitespace-nowrap">Accessibility Score</h2>
            <h1 className="font-bold text-2xl">120</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs whitespace-nowrap mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-5 h-5" />
            <p className="font-bold">72%</p>
          </span>
          <p>Good</p>
        </div>
      </div>
    </div>
  );
}
export default StateCard;
