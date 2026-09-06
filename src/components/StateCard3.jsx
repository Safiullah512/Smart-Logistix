import {
  faBrain,
  faCheckCircle,
  faChartColumn,
  faTriangleExclamation,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDown, ArrowUp } from "lucide-react";

function StateCard3() {
  return (
    <div className="grid grid-cols-5 gap-3 mb-3">

      {/* Overall Prediction Accuracy */}
      <div className="bg-white rounded-lg p-3 h-32 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <h2 className="text-xs leading-4 h-5">
          Overall Prediction Accuracy
        </h2>

        <div className="flex items-center gap-3 mt-2 h-11">
          <div className="bg-violet-200 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
            <FontAwesomeIcon
              icon={faBrain}
              className="text-violet-600 text-base"
            />
          </div>

          <h1 className="font-bold text-xl">
            87%
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-4 h-4" />
            <span className="font-bold text-xs">5.6%</span>
          </span>

          <p className="text-xs">
            from last week
          </p>
        </div>
      </div>


      {/* High Confidence Predictions */}
      <div className="bg-white rounded-lg p-3 h-32 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <h2 className="text-xs leading-4 h-5">
          High Confidence Predictions
        </h2>

        <div className="flex items-center gap-3 mt-2 h-11">
          <div className="bg-green-200 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-600 text-base"
            />
          </div>

          <h1 className="font-bold text-xl">
            342
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-4 h-4" />
            <span className="font-bold text-xs">8.2%</span>
          </span>

          <p className="text-xs">
            from last week
          </p>
        </div>
      </div>


      {/* Predictions Generated */}
      <div className="bg-white rounded-lg p-3 h-32 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <h2 className="text-xs leading-4 h-5">
          Predictions Generated
        </h2>

        <div className="flex items-center gap-3 mt-2 h-11">
          <div className="bg-orange-200 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
            <FontAwesomeIcon
              icon={faChartColumn}
              className="text-orange-600 text-base"
            />
          </div>

          <h1 className="font-bold text-xl">
            1,245
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-4 h-4" />
            <span className="font-bold text-xs">6.7%</span>
          </span>

          <p className="text-xs">
            from last week
          </p>
        </div>
      </div>


      {/* Alerts Predicted */}
      <div className="bg-white rounded-lg p-3 h-32 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <h2 className="text-xs leading-4 h-5">
          Alerts Predicted
        </h2>

        <div className="flex items-center gap-3 mt-2 h-11">
          <div className="bg-red-200 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-red-600 text-base"
            />
          </div>

          <h1 className="font-bold text-xl">
            28
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-red-600 flex items-center">
            <ArrowDown className="w-4 h-4" />
            <span className="font-bold text-xs">12.5%</span>
          </span>

          <p className="text-xs">
            from last week
          </p>
        </div>
      </div>


      {/* Actions Recommended */}
      <div className="bg-white rounded-lg p-3 h-32 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <h2 className="text-xs leading-4 h-5">
          Actions Recommended
        </h2>

        <div className="flex items-center gap-3 mt-2 h-11">
          <div className="bg-blue-200 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-blue-600 text-base"
            />
          </div>

          <h1 className="font-bold text-xl">
            156
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 flex items-center">
            <ArrowUp className="w-4 h-4" />
            <span className="font-bold text-xs">9.3%</span>
          </span>

          <p className="text-xs">
            from last week
          </p>
        </div>
      </div>

    </div>
  );
}

export default StateCard3;