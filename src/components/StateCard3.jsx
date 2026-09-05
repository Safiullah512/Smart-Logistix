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
    <div className="w-full mt-3 flex gap-3">

      {/* Overall Prediction Accuracy */}
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">
        
        <div className="bg-violet-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faBrain}
            className="text-violet-600 p-3 text-xl"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2>Overall Prediction Accuracy</h2>

          <h1 className="font-bold text-xl">
            87%
          </h1>

          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp />
              <p className="font-bold">5.6%</p>
            </span>

            <p>from last week</p>
          </div>
        </div>
      </div>


      {/* High Confidence Predictions */}
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">

        <div className="bg-green-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-600 p-3 text-xl"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2>High Confidence Predictions</h2>

          <h1 className="font-bold text-xl">
            342
          </h1>

          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp />
              <p className="font-bold">8.2%</p>
            </span>

            <p>from last week</p>
          </div>
        </div>
      </div>


      {/* Predictions Generated */}
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">

        <div className="bg-orange-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faChartColumn}
            className="text-orange-600 p-3 text-xl"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2>Predictions Generated</h2>

          <h1 className="font-bold text-xl">
            1,245
          </h1>

          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp />
              <p className="font-bold">6.7%</p>
            </span>

            <p>from last week</p>
          </div>
        </div>
      </div>


      {/* Alerts Predicted */}
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">

        <div className="bg-red-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-600 p-3 text-xl"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2>Alerts Predicted</h2>

          <h1 className="font-bold text-xl">
            28
          </h1>

          <div className="flex gap-2 text-xs">
            <span className="text-red-600 flex">
              <ArrowDown />
              <p className="font-bold">12.5%</p>
            </span>

            <p>from last week</p>
          </div>
        </div>
      </div>


      {/* Actions Recommended */}
      <div className="w-fit flex px-2 py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white rounded-lg gap-2 items-center text-sm">

        <div className="bg-blue-200 rounded-xl w-auto h-auto text-center">
          <FontAwesomeIcon
            icon={faBullseye}
            className="text-blue-600 p-3 text-xl"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2>Actions Recommended</h2>

          <h1 className="font-bold text-xl">
            156
          </h1>

          <div className="flex gap-2 text-xs">
            <span className="text-green-600 flex">
              <ArrowUp />
              <p className="font-bold">9.3%</p>
            </span>

            <p>from last week</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StateCard3;