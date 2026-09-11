import { LineDotRightHorizontal } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    day: "Mon",
    completed: 15,
    transit: 8,
    pending: 4,
    cancelled: 2,
  },
  {
    day: "Tue",
    completed: 30,
    transit: 14,
    pending: 5,
    cancelled: 3,
  },
  {
    day: "Wed",
    completed: 33,
    transit: 20,
    pending: 10,
    cancelled: 2,
  },
  {
    day: "Thu",
    completed: 31,
    transit: 18,
    pending: 8,
    cancelled: 1,
  },
  {
    day: "Fri",
    completed: 50,
    transit: 32,
    pending: 15,
    cancelled: 6,
  },
  {
    day: "Sat",
    completed: 40,
    transit: 27,
    pending: 12,
    cancelled: 3,
  },
  {
    day: "Sun",
    completed: 58,
    transit: 42,
    pending: 26,
    cancelled: 12,
  },
];

function DeliveryChart() {
  return (
    <div className="w-100 bg-white p-3 rounded shadow">
      <div className="flex justify-between mb-4">
        <p className="font-bold">Deliveries Overview</p>
        <select className="border px-2 rounded-lg text-xs border-slate-300">
          <option>This Week</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={15}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={15}
          />
          <Tooltip />

          <Line type="monotone" dataKey="completed" stroke="#3B82F6" />

          <Line type="monotone" dataKey="transit" stroke="#22C55E" />

          <Line type="monotone" dataKey="pending" stroke="#F97316" />

          <Line type="monotone" dataKey="cancelled" stroke="#EF4444" />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex gap-4 text-xs justify-center mt-3">
        <div className="flex items-center gap-2">
          <span>
            <LineDotRightHorizontal className="w-5 h-4 text-blue-700"></LineDotRightHorizontal>
          </span>
          <p>Completed</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <LineDotRightHorizontal className="w-5 h-4 text-green-800"></LineDotRightHorizontal>
          </span>
          <p>In Transit</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <LineDotRightHorizontal className="w-5 h-4 text-orange-700"></LineDotRightHorizontal>
          </span>
          <p>Pending</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <LineDotRightHorizontal className="w-5 h-4 text-red-800"></LineDotRightHorizontal>
          </span>
          <p>Cancelled</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryChart;
