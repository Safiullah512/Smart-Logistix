import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StateCard from "../components/StateCard";
import { useState } from "react";

function DashboardLayout() {
  const [activeSidebar, setActiveSidebar] = useState(true);

  const toggleBar = () => {
    return setActiveSidebar(!activeSidebar);
  };
  return (
    <>
      <div className="flex">
        {activeSidebar && <Sidebar></Sidebar>}
        <div className="flex-1 min-w-0 mx-3">
          <Header toggleBar={toggleBar}></Header>

          <main>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
}
export default DashboardLayout;
