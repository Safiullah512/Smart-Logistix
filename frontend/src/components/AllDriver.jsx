import {
  faBox,
  faCalendar,
  faCheck,
  faCheckSquare,
  faRectangleAd,
  faRectangleList,
  faSearch,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { driversData } from "../services/DriverData";
import { Star } from "lucide-react";

function AllDrivers() {
  const [currentPage, SetCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [location, setLocation] = useState("Location");
  const itemsPerPage = 8;

  const filterdriversData = driversData.filter((items) => {
    const statusMath =
      selectedStatus === "Status" || items.status === selectedStatus;
    const locationMatch =
      location === "Location" || items.location === location;

    return statusMath && locationMatch;
  });

  const completed = driversData.filter((items) => {
    return items.status === "Delivered";
  }).length;
  console.log(completed);

  const totalPages = Math.ceil(filterdriversData.length / itemsPerPage);

  // Starting Position **********

  const startIndex = (currentPage - 1) * itemsPerPage;

  // data current page *********

  const currentData = filterdriversData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div>
      <div className="w-fit flex flex-col bg-white rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] p-4 mt-3">
        <div className="w-150 flex justify-between ">
          <h1 className="font-bold text-sm">All Driver</h1>
          <div className="w-28 flex gap-1 border border-slate-500 text-xs rounded-sm items-center">
            <span className="ml-1">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </span>
            <input
              placeholder="Search drivers..."
              className="outline-none border-none placeholder:text-xs"
            ></input>
          </div>
          <select
            className="p-1 border border-slate-500 rounded-sm text-xs "
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              SetCurrentPage(1);
            }}
          >
            <option value="Status">Status</option>
            <option value="on Duty">on Duty</option>
            <option value="In Transit">off Duty</option>
            <option value="on Trip">on Trip</option>
            <option value="on Duty">on Duty</option>
          </select>
          <select
            className="p-1 border border-slate-500 rounded-sm text-xs "
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              SetCurrentPage(1);
            }}
          >
            <option value="Location">Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Noida">Noida</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <div className="p-1 border border-slate-500 rounded-sm text-xs">
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            <select className="outline-none bg-transparent">
              <option>May 12- May 19</option>
              <option>In Transit</option>
              <option>Pending</option>
            </select>
          </div>
          <button className="bg-violet-600 text-white text-sm p-1 rounded-sm">
            + Add Driver
          </button>
        </div>
        <div className="w-full mt-3">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-100 *:p-3 border border-slate-200">
                <th>ID</th>
                <th>Driver Name</th>
                <th>Phone</th>
                <th>License Type</th>
                <th>Status</th>
                <th>Rating</th>
                <th>Trips</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr
                  key={item.id}
                  className="*:p-3 bg-slate-50 border border-slate-200 *:pl-3 cursor-pointer hover:bg-white"
                >
                  <td>{item.id}</td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-8 h-8 rounded-full object-cover"
                      ></img>
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{item.phone}</td>
                  <td>{item.licenseType}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="flex gap-2">
                      <p>{item.rating}</p>
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={10}
                      ></Star>
                    </div>
                  </td>
                  <td>{item.trips}</td>
                  <td>:</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between text-xs mt-5">
          <p className="text-slate-600">
            Showing 1 to * of {driversData.length} entries
          </p>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => SetCurrentPage(index + 1)}
                className={`px-1 py-2 rounded ${currentPage === index + 1 ? "bg-purple-600 text-white" : "bg-gray-100"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllDrivers;
