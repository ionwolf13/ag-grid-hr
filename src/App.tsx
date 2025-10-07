import "./App.css";
import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { dataSetOne } from "./data/dataSet";
import { HrDashboard } from "./screens/hrDashboard/HrDashboard";
import { Nav } from "./components/nav/Nav";
import ReuseButton from "./components/buttons/Button";
import { Plus, User, TableProperties } from "lucide-react";
import { ReuseHeading } from "./components/heading/ReuseHeading";

function App() {
  ModuleRegistry.registerModules([AllEnterpriseModule]);
  LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_KEY);
  console.log("data", dataSetOne.length);
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-8">
      <Nav
        left={[
          <ReuseHeading
            title="HR Management"
            subtitle="Employee directory and management"
          />
        ]}
        right={[
          <ReuseButton name="Dashboard" icon={TableProperties} />,
          <ReuseButton name="Profile" icon={User} />,
          <ReuseButton name="Employee" icon={Plus} />
        ]}
      />
      <HrDashboard />
    </div>
  );
}

export default App;
