import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import { fuelConsumptionTrend } from "../services/DriverData";
import FuelCard from "./FuelCard";

function FuelConsumption() {
  return (
    <div className="w-100 h-auto bg-white shadow-[0_0_3px_rgba(0,0,0,0.3)] mt-2 p-1">
      <ResponsiveContainer width="90%" height="60%">
        <LineChart data={fuelConsumptionTrend.data}>
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />

          <YAxis
            domain={[0, 1000]}
            label={{
              value: "Liters",
              angle: -90,
              position: "insideLeft",
              fontSize: 12,
            }}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              fontSize: "12px",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#4338ca"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex gap-3">
        <FuelCard></FuelCard>
      </div>
    </div>
  );
}

export default FuelConsumption;
