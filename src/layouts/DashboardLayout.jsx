import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StateCard from "../components/StateCard";

function DashboardLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="flex-1 min-w-0 mx-3">
          <Header></Header>
          
          <main>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
}
export default DashboardLayout;
