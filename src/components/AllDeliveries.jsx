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
import allDelivery from "../services/AllDeliveries";
import { useState } from "react";

function AllDerliveries() {
  const [currentPage, SetCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [location, setLocation] = useState("Location");
  const itemsPerPage = 8;

  const filterAllDelivery = allDelivery.filter((items) => {
    const statusMath =
      selectedStatus === "Status" || items.status === selectedStatus;
    const locationMatch =
      location === "Location" || items.location === location;

    return statusMath && locationMatch;
  });

  const completed = allDelivery.filter((items) => {
    return items.status === "Delivered";
  }).length;
  console.log(completed);

  const totalPages = Math.ceil(filterAllDelivery.length / itemsPerPage);

  // Starting Position **********

  const startIndex = (currentPage - 1) * itemsPerPage;

  // data current page *********

  const currentData = filterAllDelivery.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div>
      <div className="w-fit flex flex-col bg-white rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] p-4 mt-3">
        <div className="w-fit flex gap-4 ">
          <h1 className="font-bold">All Deliveries</h1>
          <div className="flex gap-1 border border-slate-500 p-1 text-xs rounded-sm w-35">
            <span>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </span>
            <input
              placeholder="Search deliveries..."
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
            <option value="Delivered">Delivered</option>
            <option value="In Transit">In Transit</option>
            <option value="Pending">Pending</option>
            <option value="Delayed">Delayed</option>
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
            + Add Delivery
          </button>
        </div>
        <div className="w-full mt-3">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-100 *:p-2 border border-slate-200">
                <th>ID</th>
                <th>Consignee</th>
                <th>Location</th>
                <th>Status</th>
                <th>Vehicle</th>
                <th>Driver</th>
                <th>ETA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr
                  key={item.id}
                  className="*:p-2 bg-slate-50 border border-slate-200 *:pl-3"
                >
                  <td>{item.id}</td>
                  <td>{item.consignee}</td>
                  <td>{item.location}</td>
                  <td>{item.status}</td>
                  <td>{item.vehicle}</td>
                  <td>{item.driver}</td>
                  <td>{item.eta}</td>
                  <td>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between text-xs mt-5">
          <p className="text-slate-600">
            Showing 1 to * of {allDelivery.length} entries
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
export default AllDerliveries;
