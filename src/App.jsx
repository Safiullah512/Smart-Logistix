import Dashboard from "./pages/Dashboard";
import DeliveryChart from "./components/DeliveryChart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Deliveries from "./pages/Deliveries";

import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";

import AiPredictions from "./pages/AiPredictions";
import Setting from "./pages/Settings";
import SettingLayout from "./layouts/SettingsLayout";
import SettingProfile from "./components/SettingProfile";
import SettingNotification from "./components/SettingNotification";
import SettingSecurity from "./components/SettingSecurity";
import SettingIntegration from "./components/SettingIntegration";
import SettingUserRoles from "./components/SettingUser&Roles";
import SettingDataPrivacy from "./components/SettingData&Privacy";
import SettingBilling from "./components/SettingBilling";
import SettingPreference from "./components/SettingSystemPreferences";
import SettingActivity from "./components/SettingActivity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout></DashboardLayout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="deliveries" element={<Deliveries></Deliveries>}></Route>
          <Route path="drivers" element={<Drivers></Drivers>}></Route>
          <Route path="vehicles" element={<Vehicles></Vehicles>}></Route>
          <Route
            path="aipredictions"
            element={<AiPredictions></AiPredictions>}
          ></Route>
          <Route path="setting" element={<SettingLayout></SettingLayout>}>
            <Route index element={<Setting></Setting>}></Route>
            <Route
              path="profile"
              element={<SettingProfile></SettingProfile>}
            ></Route>
            <Route
              path="notification"
              element={<SettingNotification></SettingNotification>}
            ></Route>
            <Route
              path="security"
              element={<SettingSecurity></SettingSecurity>}
            ></Route>
            <Route
              path="integrations"
              element={<SettingIntegration></SettingIntegration>}
            ></Route>
            <Route
              path="user&roles"
              element={<SettingUserRoles></SettingUserRoles>}
            ></Route>
            <Route
              path="data&privacy"
              element={<SettingDataPrivacy></SettingDataPrivacy>}
            ></Route>
            <Route
              path="billing"
              element={<SettingBilling></SettingBilling>}
            ></Route>
            <Route
              path="systemPreference"
              element={<SettingPreference></SettingPreference>}
            ></Route>
            <Route
              path="activity"
              element={<SettingActivity></SettingActivity>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
