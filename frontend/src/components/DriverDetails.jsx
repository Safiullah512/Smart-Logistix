import { DotIcon, LocateFixedIcon, LocateIcon } from "lucide-react";

import { driversData } from "../services/DriverData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocation,
  faLocationDot,
  faMap,
  faMapLocation,
  faRoad,
  faTimes,
  faTrain,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import DriverRating from "./DriverRating";
import performanceData from "../services/DriverPerformance";

function DriverDetails() {
  const driversData1 = driversData[0];
  console.log(driversData1);
  return (
    <div className="w-fix h-auto bg-white shadow-[0_0_3px_rgba(0,0,0,0.3)] p-4 mt-3 text-sm">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Deriver Details</h1>
        <div className="flex gap-2">
          <button className="bg-green-200 text-green-700 rounded p-1 text-xs font-bold">
            On Duty
          </button>
          <button>
            <DotIcon></DotIcon>
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-3 items-center">
        <div>
          <img
            src={driversData1.image}
            className="w-20 h-20 rounded-full object-cover"
          ></img>
          <div>
            <DriverRating></DriverRating>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-bold">{driversData1.name}</h1>
            <p>({driversData1.id})</p>
          </div>
          <div className="flex gap-6 text-xs">
            <p>{driversData1.phone}</p>
            <div className="flex items-center gap-1 text-xs">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>{driversData1.email}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p>{driversData1.location}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between *:rounded text-xs *:px-4 *:py-1 mt-3 *:bg-white **:text-slate-700 *:border-slate-500 **:gap-y-1">
        <div className="px-2 flex flex-col items-center border border-slate-500">
          <p>License Type</p>
          <p>{driversData1.licenseType}</p>
        </div>
        <div className="px-2 flex flex-col items-center border border-slate-500">
          <p>Experience</p>
          <p>{driversData1.experience}</p>
        </div>
        <div className="px-2 flex flex-col items-center border border-slate-500">
          <p>Joined On</p>
          <p>{driversData1.joined}</p>
        </div>
        <div className="px-2 flex flex-col items-center border border-slate-500">
          <p>Total Trips</p>
          <p>{driversData1.trips}</p>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-sm font-bold">Today's Summary</h1>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faMapLocation}
              className="p-2 bg-blue-100 text-blue-600 rounded"
            ></FontAwesomeIcon>
            <div className="flex flex-col">
              <p>Trip</p>
              <p>{driversData1.todayTrip}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faRoad}
              className="p-2 bg-blue-100 text-blue-600 rounded"
            ></FontAwesomeIcon>
            <div className="flex flex-col">
              <p>Distance</p>
              <p>{driversData1.todayDistance}</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon
              icon={faClock}
              className="p-2 bg-blue-100 text-blue-600 rounded"
            ></FontAwesomeIcon>
            <div className="flex flex-col">
              <p>Driving Time</p>
              <p>{driversData1.drivingTime}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faVanShuttle}
              className="p-2 bg-blue-100 text-blue-600 rounded"
            ></FontAwesomeIcon>
            <div className="flex flex-col">
              <p>Deliveries</p>
              <p>{driversData1.deliveries}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance section **************/}

      <div className="mt-2">
        <h1 className="font-bold text-xl items-center">Performance</h1>
        <div className="grid gap-y-2 mt-2">
          {performanceData.map((item) => (
            <div
              className="grid grid-cols-[120px_1fr_30px] items-center gap-3"
              key={item.title}
            >
              <p>{item.title}</p>
              <div className="h-1.5 w-full rounded-full border border-slate-300 bg-slate-300">
                <div
                  className={`h-full ${item.color}`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <p>{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DriverDetails;
