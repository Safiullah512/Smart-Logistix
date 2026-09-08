import { Cell, Pie, PieChart } from "recharts";
import donChartData from "../services/DonutChart";
import { driversData } from "../services/DriverData";

function DonutVehicle() {
  const inTrasit = driversData.filter(
    (driver) => driver.assignedVehicles[0].status === "In Transit",
  ).length;

  const stopped = driversData.filter(
    (driver) => driver.assignedVehicles[0].status === "Stopped",
  ).length;

  const maintenance = driversData.filter(
    (driver) => driver.assignedVehicles[0].status === "In Maintenance",
  ).length;

  const outOfService = driversData.filter(
    (driver) => driver.assignedVehicles[0].status === "Out of Service",
  ).length;

  const drivers = [
    { id: 1, status: "In Transit", value: inTrasit, color: "#22C55E" },
    { id: 2, status: "Stopped", value: stopped, color: "#3B82F6" },
    { id: 3, status: "In Maintenance", value: maintenance, color: "#F97316" },
    { id: 4, status: "Out of Service", value: outOfService, color: "#EC4899" },
  ];
  const totalValue = donChartData.reduce((sum, item) => sum + item.value, 0);

  const userChart = [{ name: "Total Driver", value: driversData.length }];
  const driverlength = driversData.length;
  return (
    <div>
      <div className="w-fit h-fit bg-white rounded mt-2 shadow-[0_0_3px_rgba(0,0,0,0.3)] p-4 px-6">
        <h1 className="font-bold">Virtual Status Overview</h1>
        <div className="mt-2 flex gap-15">
          <div className="relative w-25 h-25">
            <PieChart width={100} height={100}>
              <Pie
                data={drivers}
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
              <h2>{driversData.length}</h2>
              <p>Vehicles</p>
            </div>
          </div>
          <div>
            {drivers.map((item) => (
              <div
                className="grid grid-cols-[25px_120px_1fr] items-center text-sm"
                key={item.id}
              >
                <p
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></p>
                <p>{item.status}</p>

                <p className="text-xs">
                  {item.value} ({((item.value / driverlength) * 100).toFixed(0)}
                  %)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DonutVehicle;
