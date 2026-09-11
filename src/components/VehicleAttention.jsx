import { AlarmCheck, AlertTriangle, Fuel, Wrench } from "lucide-react";
import { maintenanceAlerts } from "../services/DriverData";
function VechicleAttention() {
  return (
    <div className="bg-white w-fit rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] mt-2 p-3">
      <div className="w-90 flex justify-between">
        <h1 className="font-bold ">Vehicle Requiring Attention</h1>
        <button className="bg-blue-500 rounded text-white p-1 text-xs">
          View All
        </button>
      </div>
      <div className="mt-5 text-sm">
        {maintenanceAlerts.map((item) => (
          <div
            key={item.vehicleId}
            className="w-full flex justify-between gap-2 mt-3"
          >
            <div className="flex items-center gap-2">
              {item.issue.toLocaleLowerCase().includes("service") ? (
                <Wrench className="text-lg text-red-600"></Wrench>
              ) : item.issue.toLocaleLowerCase().includes("oil") ? (
                <Fuel className="text-xl text-orange-500"></Fuel>
              ) : item.issue.toLocaleLowerCase().includes("inspection") ? (
                <AlertTriangle className="text-yellow-500"></AlertTriangle>
              ) : null}
              <p>{item.vehicleId}</p>
            </div>
            <p>{item.issue}</p>
            <div className="w-16 flex flex-col justify-center items-center">
              <p>
                <span
                  className={
                    item.urgency === "high"
                      ? "bg-red-200 rounded px-4 py-1 text-red-600"
                      : item.urgency === "medium"
                        ? "bg-orange-200 rounded px-4 py-1 text-orange-600"
                        : item.urgency === "low"
                          ? "bg-blue-200 text-blue-600 px-4 py-1 rounded"
                          : null
                  }
                >
                  {item.urgency}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default VechicleAttention;
