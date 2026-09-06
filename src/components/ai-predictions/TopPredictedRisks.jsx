import {
  faClock,
  faCloudRain,
  faScrewdriverWrench,
  faGasPump,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopPredictedRisks() {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-sm">
          Top Predicted Risks
        </h2>

        <button className="text-blue-600 font-semibold text-xs">
          View All
        </button>
      </div>

      {/* Risk 1 */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <FontAwesomeIcon
            icon={faClock}
            className="text-violet-600 text-xs"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs">
            Delivery Delay (Traffic)
          </p>
        </div>

        <div className="w-24 h-1 bg-slate-200 rounded-full">
          <div className="w-[38%] h-full bg-violet-600 rounded-full"></div>
        </div>

        <span className="text-xs font-semibold w-8 text-right">
          38%
        </span>

      </div>


      {/* Risk 2 */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <FontAwesomeIcon
            icon={faCloudRain}
            className="text-violet-600 text-xs"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs">
            Route Disruption (Weather)
          </p>
        </div>

        <div className="w-24 h-1 bg-slate-200 rounded-full">
          <div className="w-[24%] h-full bg-violet-600 rounded-full"></div>
        </div>

        <span className="text-xs font-semibold w-8 text-right">
          24%
        </span>

      </div>


      {/* Risk 3 */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className="text-violet-600 text-xs"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs">
            Vehicle Breakdown
          </p>
        </div>

        <div className="w-24 h-1 bg-slate-200 rounded-full">
          <div className="w-[18%] h-full bg-violet-600 rounded-full"></div>
        </div>

        <span className="text-xs font-semibold w-8 text-right">
          18%
        </span>

      </div>


      {/* Risk 4 */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <FontAwesomeIcon
            icon={faGasPump}
            className="text-violet-600 text-xs"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs">
            High Fuel Consumption
          </p>
        </div>

        <div className="w-24 h-1 bg-slate-200 rounded-full">
          <div className="w-[12%] h-full bg-violet-600 rounded-full"></div>
        </div>

        <span className="text-xs font-semibold w-8 text-right">
          12%
        </span>

      </div>


      {/* Risk 5 */}
      <div className="flex items-center gap-3">

        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <FontAwesomeIcon
            icon={faBox}
            className="text-violet-600 text-xs"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs">
            Late Pickup Risk
          </p>
        </div>

        <div className="w-24 h-1 bg-slate-200 rounded-full">
          <div className="w-[8%] h-full bg-violet-600 rounded-full"></div>
        </div>

        <span className="text-xs font-semibold w-8 text-right">
          8%
        </span>

      </div>

    </div>
  );
}

export default TopPredictedRisks;