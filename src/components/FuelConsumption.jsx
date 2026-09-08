import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import { fuelConsumptionTrend } from "../services/DriverData";

function FuelConsumption() {
  return (
    <div className="w-100 bg-white shadow-[0_0_3px_rgba(0,0,0,0.3)] mt-2 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={fuelConsumptionTrend.data}>
          <XAxis dataKey="day" />

          <YAxis
            domain={[0, 1000]}
            label={{
              value: "Liters",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#4338ca"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FuelConsumption;
