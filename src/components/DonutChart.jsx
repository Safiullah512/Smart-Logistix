import { Cell, Pie, PieChart } from "recharts";
import donChartData from "../services/DonutChart";

function DonutChart() {
  const totalValue = donChartData.reduce((sum, item) => sum + item.value, 0);
  return (
    <div>
      <div className="w-fit h-fit bg-white rounded mt-3 shadow-[0_0_3px_rgba(0,0,0,0.3)] p-4">
        <h1 className="font-bold">Deliveris by Status</h1>
        <div className="mt-5 flex gap-15">
          <div className="relative w-25 h-25">
            <PieChart width={100} height={100}>
              <Pie
                data={donChartData}
                dataKey="value"
                innerRadius={30}
                outerRadius={50}
              >
                {donChartData.map((item, index) => (
                  <Cell key={index} fill={item.color}></Cell>
                ))}
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-bold">
              <h2>120</h2>
              <>Total</>
            </div>
          </div>
          <div>
            {donChartData.map((item, index) => (
              <div
                className="grid grid-cols-[25px_120px_1fr] items-center text-sm"
                key={index}
              >
                <p
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></p>
                <p>{item.name}</p>

                <p className="text-xs">
                  {item.value} ({((item.value / totalValue) * 100).toFixed(0)}%)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DonutChart;
