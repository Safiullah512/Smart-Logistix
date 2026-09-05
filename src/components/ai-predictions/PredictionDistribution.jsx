import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PredictionDistribution() {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4">

      <h2 className="font-bold text-sm mb-4">
        Prediction Distribution
      </h2>

      <div className="flex items-center justify-center gap-6">

        {/* Donut */}
        <div className="relative w-36 h-36">

          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "conic-gradient(#22c55e 0% 52%, #f97316 52% 80%, #ef4444 80% 92%, #3b82f6 92% 100%)",
            }}
          ></div>

          <div className="absolute inset-5 bg-white rounded-full flex flex-col items-center justify-center">
            <span className="font-bold text-lg">
              1,245
            </span>

            <span className="text-xs text-slate-500">
              Total
            </span>
          </div>

        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 text-xs">

          <div className="flex items-start gap-2">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-green-500 mt-1"
            />

            <div>
              <p>On-Time Delivery</p>
              <p className="font-bold">52% (647)</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-orange-500 mt-1"
            />

            <div>
              <p>Delivery Delay</p>
              <p className="font-bold">28% (348)</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-red-500 mt-1"
            />

            <div>
              <p>Route Disruption</p>
              <p className="font-bold">12% (149)</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-blue-500 mt-1"
            />

            <div>
              <p>High Traffic</p>
              <p className="font-bold">8% (101)</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PredictionDistribution;