import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { driversData } from "../services/DriverData";

function TopDrivers() {
  return (
    <div className="w-100 p-5 mt-2 bg-white rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] text-sm">
      <div className="flex justify-between">
        <p className="font-bold">Top Drivers by Deliveries</p>
        <button className="text-blue-600 font-bold border border-slate-400 p-1 text-xs rounded">
          This Week
        </button>
      </div>

      {driversData.slice(0, 5).map((item) => (
        <div
          className="grid grid-cols-[150px_1fr_30px] gap-2 items-center mt-1 text-xs"
          key={item.id}
        >
          <div className="flex gap-2 items-center">
            <img
              src={item.image}
              className="w-6 h-6 rounded-full object-cover"
            ></img>
            <h1>{item.name}</h1>
          </div>
          <div className="w-fix h-1.5 bg-slate-400 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${(item.deliveries / 20) * 100}%` }}
            ></div>
          </div>
          <p>{item.deliveries}</p>
        </div>
      ))}
    </div>
  );
}
export default TopDrivers;
