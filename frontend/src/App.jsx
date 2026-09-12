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

// setting import component ************************************
import SettingLayout from "./layouts/SettingsLayout";
import ProfileSettings from "./components/Setting/ProfileSettings";
import SecuritySettings from "./components/Setting/SecuritySettings";

import NotificationsSettings from "./components/Setting/NotificationsSettings";
import SettingSecurity from "./components/Setting/SettingSecurity";
import SettingsIntegrationsPage from "./components/Setting/SettingsIntegrationsPage";
import SettingUserRoles from "./components/Setting/SettingUser&Roles";
import SettingDataPrivacy from "./components/Setting/SettingData&Privacy";
import SettingBilling from "./components/Setting/SettingBilling";
import SettingPreference from "./components/Setting/SettingSystemPreferences";
import SettingActivity from "./components/Setting/SettingActivity";
import SettingGeneral from "./components/Setting/GeneralSettings";
import IntegrationsPanel from "./components/Setting/IntegrationsPanel";
import UserRolesPage from "./components/Setting/UsersRolesPage";
import DataPrivacyPage from "./components/Setting/DataPrivacyPage";
import BillingPage from "./components/Setting/BillingPage";
import SystemPreferencePage from "./components/Setting/SystemPreferencesPage";
import ActivityLogsPage from "./components/Setting/ActivityLogsPage";
import Routess from "./pages/Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout></DashboardLayout>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route
              path="deliveries"
              element={<Deliveries></Deliveries>}
            ></Route>
            <Route path="drivers" element={<Drivers></Drivers>}></Route>
            <Route path="vehicles" element={<Vehicles></Vehicles>}></Route>
            <Route path="routes" element={<Routess></Routess>}></Route>
            <Route
              path="aipredictions"
              element={<AiPredictions></AiPredictions>}
            ></Route>
            <Route path="setting" element={<SettingLayout></SettingLayout>}>
              <Route index element={<SettingGeneral></SettingGeneral>}></Route>
              <Route
                path="profile"
                element={<ProfileSettings></ProfileSettings>}
              ></Route>
              <Route
                path="notification"
                element={<NotificationsSettings></NotificationsSettings>}
              ></Route>
              <Route
                path="security"
                element={<SecuritySettings></SecuritySettings>}
              ></Route>
              <Route
                path="integrations"
                element={<IntegrationsPanel></IntegrationsPanel>}
              ></Route>
              <Route
                path="user&roles"
                element={<UserRolesPage></UserRolesPage>}
              ></Route>
              <Route
                path="data&privacy"
                element={<DataPrivacyPage></DataPrivacyPage>}
              ></Route>
              <Route
                path="billing"
                element={<BillingPage></BillingPage>}
              ></Route>
              <Route
                path="systemPreference"
                element={<SystemPreferencePage></SystemPreferencePage>}
              ></Route>
              <Route
                path="activity"
                element={<ActivityLogsPage></ActivityLogsPage>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
