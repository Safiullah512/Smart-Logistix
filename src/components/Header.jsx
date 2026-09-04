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

function Header() {
  return (
    <>
      <div className=" w-full flex justify-between px-5 py-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            
            <div>
              <h2 className="text-xl font-bold">Dashboard</h2>
              <p className="text-sm">
                Welcome back, Admin Here's what's happening today
              </p>
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
