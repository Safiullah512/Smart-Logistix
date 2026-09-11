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
  BellIcon,
  Shield,
  ShieldLockIcon,
  Workflow,
  UserSquare,
  Users2,
  ShieldAlert,
  ReceiptIcon,
  Notebook,
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
          to=""
          end
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

        {/* notification */}

        <NavLink
          to="notification"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <BellIcon></BellIcon>{" "}
          </span>
          <span>Notificationa</span>
        </NavLink>

        {/* securtiy */}

        <NavLink
          to="security"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <ShieldLockIcon></ShieldLockIcon>
          </span>
          <span>Security</span>
        </NavLink>

        {/* Integration */}

        <NavLink
          to="integrations"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <Workflow></Workflow>
          </span>
          <span>Integrations</span>
        </NavLink>

        {/* User & Roles */}

        <NavLink
          to="user&roles"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <Users2></Users2>
          </span>
          <span>User & Roles</span>
        </NavLink>

        {/* Data & Privacy */}

        <NavLink
          to="data&privacy"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <ShieldAlert></ShieldAlert>
          </span>
          <span>Data & Privacy</span>
        </NavLink>

        {/* Billing */}

        <NavLink
          to="billing"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <ReceiptIcon />
          </span>
          <span>Billing</span>
        </NavLink>

        {/* System Preferences */}

        <NavLink
          to="systemPreference"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <Settings />
          </span>
          <span>System Preferences</span>
        </NavLink>

        <NavLink
          to="activity"
          className={({ isActive }) =>
            `mb-1 flex w-full h-11 items-center gap-3 rounded-lg px-4 py-1 text-xs transition ${
              isActive
                ? " text-blue-600 bg-blue-200"
                : "text-black hover:bg-blue-200 hover:text-blue-600"
            }`
          }
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">
            <Notebook></Notebook>
          </span>
          <span>Activity Logs</span>
        </NavLink>
      </aside>
    </>
  );
}
export default SettingSidebar;
