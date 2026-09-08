import Dashboard from "./pages/Dashboard";
import DeliveryChart from "./components/DeliveryChart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Deliveries from "./pages/Deliveries";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout></DashboardLayout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="deliveries" element={<Deliveries></Deliveries>}></Route>
          <Route path="drivers" element={<Drivers></Drivers>}></Route>
          <Route path="vehicles" element={<Vehicles></Vehicles>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
