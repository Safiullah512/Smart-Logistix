import SettingSidebar from "../components/Setting_Sidebar";
import Sidebar from "../components/Sidebar";
import Setting from "../pages/Settings";
import { Outlet } from "react-router-dom";

function SettingLayout() {
  return (
    <div>
      <div className="flex gap-5">
        <SettingSidebar></SettingSidebar>
        <div>
          <main>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SettingLayout;
