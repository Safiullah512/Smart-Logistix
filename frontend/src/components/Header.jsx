import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowDown,
  ArrowDownNarrowWideIcon,
  Bell,
  ChevronDown,
  LucideSidebar,
  Search,
  Sidebar,
  User,
  UserCircle,
} from "lucide-react";
import DeliveryChart from "./DeliveryChart";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const pageData = {
    "/": {
      title: "Dashboard",
      subtitle: "Welcome back, Admin Here's what's happening today",
    },
    "/deliveries": {
      title: "Deliveries",
      breadcrumb: "Dashboard > Deliveries",
    },
    "/aipredictions": {
      title: "AI Predictions",
      breadcrumb: "Dashboard > AI Predictions",
    },
    "/vehicles": {
      title: "Vehicles",
      breadcrumb: "Dashboard > Vehicles",
    },
    "/drivers": {
      title: "Drivers",
      breadcrumb: "Dashboard > Drivers",
    },
    "/setting": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting",
    },
    "/setting/profile": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting",
    },
    "/setting/notification": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting",
    },
  };

  const currentPage = pageData[location.pathname];

  return (
    <>
      <div className=" w-full flex justify-between px-5 py-3">
        <div className="flex justify-between">
          {/* left side of header */}
          <div className="flex gap-3">
            <div>
              <h2 className="text-xl font-bold">{currentPage?.title}</h2>

              {currentPage?.subtitle && (
                <p className="text-sm">{currentPage.subtitle}</p>
              )}

              {currentPage?.breadcrumb && (
                <p className="text-sm text-slate-500 mt-1">
                  {currentPage.breadcrumb}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center text-sm">
          <div className="w-fit p-2 border border-slate-500 flex gap-3 items-center rounded-lg text-xs">
            <span>
              <Search className="w-4 h-4"></Search>
            </span>
            <input
              type="text"
              placeholder="Search anything..."
              className="border-none outline-none"
            ></input>
          </div>
          <div>
            <Bell></Bell>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 text-center flex items-center gap-6 overflow-hidden justify-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-blue-500 text-4xl mt-3"
            ></FontAwesomeIcon>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Admin</h2>
            <p>Administrator</p>
          </div>
          <div>
            <span>
              <ChevronDown></ChevronDown>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
