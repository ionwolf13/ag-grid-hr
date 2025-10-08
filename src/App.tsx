import "./App.css";
import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { HrDashboard } from "./screens/hrDashboard/HrDashboard";
import { Nav } from "./components/nav/Nav";
import ReuseButton from "./components/buttons/Button";
import { User, TableProperties } from "lucide-react";
import { ReuseHeading } from "./components/heading/ReuseHeading";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProfileDashboard } from "./screens/profileDashboard/ProfileDashboard";

function App() {
  ModuleRegistry.registerModules([AllEnterpriseModule]);
  LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_KEY);

  const urlParams = useLocation();
  const isProfileOrDashboard =
    urlParams.pathname === "/profile" || urlParams.pathname === "/dashboard";
  console.log("URLS", urlParams);
  console.log("is true", isProfileOrDashboard);
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-8">
      {isProfileOrDashboard && (
        <Nav
          left={[
            <ReuseHeading
              title="HR Management"
              subtitle="Employee directory and management"
            />
          ]}
          right={[
            <ReuseButton name="Overview" icon={TableProperties} />,
            <ReuseButton name="Dashboard" icon={TableProperties} />,
            <ReuseButton name="Profile" icon={User} />
          ]}
        />
      )}
      <Routes>
        <Route path="/" element={<div> SignIn/SignUp </div>} />
        <Route path="/overview" element={<div> Overview </div>} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/dashboard" element={<HrDashboard />} />
        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
    </div>
  );
}

export default App;
