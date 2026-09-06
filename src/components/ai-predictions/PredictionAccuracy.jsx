import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { day: "Mon", accuracy: 50 },
  { day: "Tue", accuracy: 76 },
  { day: "Wed", accuracy: 63 },
  { day: "Thu", accuracy: 70 },
  { day: "Fri", accuracy: 83 },
  { day: "Sat", accuracy: 63 },
  { day: "Sun", accuracy: 82 },
];

function PredictionAccuracyTrend() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] h-[470px]">
      
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">
          Prediction Accuracy Trend{" "}
          <span className="font-normal text-sm text-slate-500">
            (This Week)
          </span>
        </h2>

        <button className="border border-slate-300 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
          This Week
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="h-[300px] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Accuracy"]}
            />

            <Area
              type="monotone"
              dataKey="accuracy"
              stroke="#4f46e5"
              fill="#eef2ff"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-2">

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">This Week</p>
          <p className="font-bold text-lg mt-1">87%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Last Week</p>
          <p className="font-bold text-lg mt-1">82%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Best Accuracy</p>
          <p className="font-bold text-lg mt-1">91%</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3">
          <p className="text-xs text-slate-500">Lowest Accuracy</p>
          <p className="font-bold text-lg mt-1">74%</p>
        </div>

      </div>
    </div>
  );
}

export default PredictionAccuracyTrend;