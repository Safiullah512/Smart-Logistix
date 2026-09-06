import Dashboard from "./pages/Dashboard";
import DeliveryChart from "./components/DeliveryChart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Deliveries from "./pages/Deliveries";
import AiPredictions from "./pages/AiPredictions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout></DashboardLayout>}>
          <Route index element={<Dashboard />} />
          <Route path="deliveries" element={<Deliveries />} />
          <Route path="aipredictions" element={<AiPredictions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
