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
  Settings2,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faBowlFood,
  faHome,
  faHomeAlt,
  faUser,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { faGoodreads } from "@fortawesome/free-brands-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SettingSidebar() {
  return (
    <>
      <aside className="w-fit min-h-screen bg-white text-white flex flex-col shadow-[0_0_3px_rgba(0,0,0,0.3)] rounded p-3">
        {/* Navigation */}

        {/* General */}

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <Settings className="w-5 h-5"></Settings>
          </span>
          <span>General</span>
        </NavLink>

        {/* Profile */}

        <NavLink
          to="profile"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <User></User>
          </span>
          <span>Profile</span>
        </NavLink>

        {/* Vehicles */}

        <NavLink
          to="profile"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <User></User>
          </span>
          <span>Notificationa</span>
        </NavLink>

        {/* Drivers */}
        <NavLink
          to="/drivers"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          </span>
          <span>Drivers</span>
        </NavLink>

        {/* Routes */}

        <button className="mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <span>
            <RouteIcon className="w-5 h-5" />
          </span>
          <span>Route</span>
        </button>

        {/* Accessibility */}

        {/* <button className="mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <span>
              <Accessibility className="w-5 h-5" />
            </span>
            <span>Accessibility</span>
          </button> */}
        {/* AI */}

        <NavLink
          to="/aipredictions"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center">🤖</span>
          <span>AI Predictions</span>
        </NavLink>

        <p className="mb-1 mt-3 pt-3 px-3 text-xs font-semibold uppercase text-white border-t  w-full border-slate-800">
          Reports
        </p>

        {/* Reports */}

        <button className="mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <span>
            <Database className="w-5 h-5" />
          </span>
          <span>Reports & Analytics</span>
        </button>

        {/* Settings */}

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 text-xs transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Settings className="w-5 h-5" />
          <span>Setting</span>
        </NavLink>

        {/* Logout */}

        <div className="mt-auto w-full flex justify-center items-center gap-3 py-3 px-4 shrink-0 text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer">
          <span>
            <LogOut className="w-5 h-5" />
          </span>
          <p className="cursor-pointer">Logout</p>
        </div>
      </aside>
    </>
  );
}
export default SettingSidebar;
