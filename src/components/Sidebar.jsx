import {
  Van,
  Home,
  LucideVan,
  UserCircle,
  UserCircleIcon,
  User,
  Route,
  RouteIcon,
  Accessibility,
  Book,
  Database,
  Settings,
  LogOut,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faBowlFood,
  faHome,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGoodreads } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <aside className="w-fit min-h-screen bg-[#111827] color-white  text-white ">
        <div className="border-b border-slate-800 px-6 py-5 ">
          <div className="flex gap-2">
            <span>
              <Van className="w-15 h-15 text-violet-700"></Van>
            </span>
            <div>
              <h2 className="text-xl font-bold ">SmartLogix AI</h2>
              <h2 className="mt-1 text-xs text-gray-200">
                Smart Logistics Platform
              </h2>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="px-4 py-3">
          <p className="mb-3 px-3 text-xs font-semibold uppercase text-white">
            Main
          </p>

          {/* Dasboard */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `mb-1 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-xs transition ${isActive ? "bg-blue-500 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`
            }
          >
            <span>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </span>
            <span>Dashboard</span>
          </NavLink>

          {/* Deliveries */}

          <NavLink
            to="/deliveries"
            className={({ isActive }) =>
              `mb-1 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-xs transition ${isActive ? "bg-blue-500 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`
            }
          >
            <span>
              <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
            </span>
            <span>Deliveries</span>
          </NavLink>

          {/* Vehicles */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2 py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>
              <Van></Van>
            </span>
            <span>Vehicles</span>
          </button>

          {/* Drivers */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>
              <User></User>
            </span>
            <span>Driver</span>
          </button>

          {/* Routes */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>
              <RouteIcon></RouteIcon>
            </span>
            <span>Route</span>
          </button>

          {/* Accessibility */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>
              <Accessibility></Accessibility>
            </span>
            <span>Accessibility</span>
          </button>
          {/* AI */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>🤖</span> <span>AI Predictions</span>
          </button>

          <p className="mb-1 mt-3 pt-3 px-3 text-xs font-semibold uppercase text-white border-t  w-full border-slate-800">
            Reports
          </p>

          {/* Reports */}

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white border-b border-slate-800 pb-5">
            <span>
              <Database></Database>
            </span>
            <span>Reports & Analytics</span>
          </button>

          {/* Settings */}

          <p className="mb-1 mt-3 pt-3 px-3 text-xs font-semibold uppercase text-white border-t  w-full border-slate-800">
            Setting
          </p>

          <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-4 p-2  py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white border-b border-slate-800 pb-5">
            <span>
              <Settings></Settings>
            </span>
            <span>Setting</span>
          </button>
        </nav>

        {/* Logout */}

        <div className="mt-50 text-center flex justify-center mb-10 gap-3">
          <span>
            <LogOut></LogOut>
          </span>
          <p className="cursor-pointer">Logout</p>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
