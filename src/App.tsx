import "./App.css";
import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { HrDashboard } from "./screens/hrDashboard/HrDashboard";
import { Nav } from "./components/nav/Nav";
import ReuseButton from "./components/buttons/Button";
import { User, TableProperties } from "lucide-react";
import { ReuseHeading } from "./components/heading/ReuseHeading";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ProfileDashboard } from "./screens/profileDashboard/ProfileDashboard";
import { Overview } from "./screens/overview/Overview";
import { Jobs } from "./screens/jobs/Jobs";

function App() {
  ModuleRegistry.registerModules([AllEnterpriseModule]);
  LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_KEY);
  const navigate = useNavigate();
  const urlParams = useLocation();
  const isProfileOrDashboard = [
    "/profile",
    "/employees",
    "/overview",
    "/jobs"
  ].includes(urlParams.pathname);

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
            <ReuseButton
              name="Overview"
              icon={TableProperties}
              onClick={() => navigate("/overview")}
              showTooltip
            />,
            <ReuseButton
              name="Jobs"
              icon={User}
              onClick={() => navigate("/jobs")}
              showTooltip
            />,
            <ReuseButton
              name="employees"
              icon={TableProperties}
              onClick={() => navigate("/employees")}
              showTooltip
            />,
            <ReuseButton
              name="Profile"
              icon={User}
              onClick={() => navigate("/profile")}
              showTooltip
            />
          ]}
        />
      )}
      <Routes>
        <Route path="/" element={<div> SignIn/SignUp </div>} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/employees" element={<HrDashboard />} />
        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
    </div>
  );
}

export default App;
