import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenuCard from "./ProfileMenuCard";
import {
  ArrowDown,
  ArrowDownNarrowWideIcon,
  Bell,
  ChevronDown,
  LucideSidebar,
  Menu,
  Search,
  Sidebar,
  SidebarOpen,
  User,
  UserCircle,
} from "lucide-react";
import DeliveryChart from "./DeliveryChart";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ toggleBar }) {
  const location = useLocation();

  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/setting");
  };

  const [profileMenu, setProfileMenu] = useState(false);

  const toggleMenuBar = () => {
    return setProfileMenu(!profileMenu);
  };

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
    "/routes": {
      title: "Routes",
      breadcrumb: "Dashboard > Routes",
    },
    "/setting": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting",
    },
    "/setting/profile": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Profile",
    },
    "/setting/notification": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Notification",
    },
    "/setting/security": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Security",
    },
    "/setting/integrations": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Integration",
    },
    "/setting/user&roles": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Uer & Roles",
    },
    "/setting/data&privacy": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Data & Privacy",
    },
    "/setting/billing": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Billing",
    },
    "/setting/systemPreference": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > System Preference",
    },
    "/setting/activity": {
      title: "Setting",
      breadcrumb: "Dashboard > Setting > Activity",
    },
  };

  const currentPage = pageData[location.pathname];

  return (
    <>
      <div className=" w-full flex justify-between px-5 py-3">
        <div className="flex justify-between">
          {/* left side of header */}
          <div className="flex gap-3">
            <div className="flex gap-5 items-center">
              <div>
                <Menu
                  className="hover:cursor-pointer"
                  onClick={toggleBar}
                ></Menu>
              </div>
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
          <div className="flex items-center gap-2 relative">
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
                <ChevronDown
                  className="cursor-pointer"
                  onClick={toggleMenuBar}
                ></ChevronDown>
              </span>
            </div>
            {profileMenu && (
              <div className="absolute top-18 z-10 right-0">
                <ProfileMenuCard
                  toggleMenuBar={toggleMenuBar}
                  profileMenu={profileMenu}
                  handleProfile={handleProfile}
                ></ProfileMenuCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
