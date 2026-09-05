import { ChevronDown } from "lucide-react";

function PredictionAccuracy() {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm">
          Prediction Accuracy Trend
          <span className="font-normal text-xs text-slate-500 ml-1">
            (This Week)
          </span>
        </h2>

        <button className="border border-slate-300 rounded-lg px-3 py-1 text-xs flex items-center gap-2">
          This Week
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Chart */}
      <div className="relative h-56">

        {/* Y axis */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-10 h-full relative">

          {/* Horizontal lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="border-t border-dashed border-slate-300"></div>
            <div className="border-t border-dashed border-slate-300"></div>
            <div className="border-t border-dashed border-slate-300"></div>
            <div className="border-t border-dashed border-slate-300"></div>
            <div className="border-t border-dashed border-slate-300"></div>
          </div>

          {/* Line */}
          <svg
            viewBox="0 0 700 200"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Area */}
            <polygon
              points="
                0,100
                116,50
                233,75
                350,62
                466,38
                583,75
                700,38
                700,200
                0,200
              "
              fill="rgba(99,102,241,0.10)"
            />

            {/* Line */}
            <polyline
              points="
                0,100
                116,50
                233,75
                350,62
                466,38
                583,75
                700,38
              "
              fill="none"
              stroke="#4f46e5"
              strokeWidth="3"
            />

            {/* Points */}
            <circle cx="0" cy="100" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="116" cy="50" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="233" cy="75" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="350" cy="62" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="466" cy="38" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="583" cy="75" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="700" cy="38" r="5" fill="white" stroke="#4f46e5" strokeWidth="3" />
          </svg>

          {/* Days */}
          <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-xs text-slate-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-2 mt-8">

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">This Week</p>
          <p className="font-bold text-sm mt-1">87%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Last Week</p>
          <p className="font-bold text-sm mt-1">82%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Best Accuracy</p>
          <p className="font-bold text-sm mt-1">91%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Lowest Accuracy</p>
          <p className="font-bold text-sm mt-1">74%</p>
        </div>

      </div>
    </div>
  );
}

export default PredictionAccuracy;