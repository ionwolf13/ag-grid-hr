import "./App.css";
import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { dataSetOne } from "./data/dataSet";
import { HrDashboard } from "./screens/hrDashboard/HrDashboard";
import { Nav } from "./components/nav/Nav";
import ReuseButton from "./components/buttons/Button";
import { Plus } from "lucide-react";
import ReuseText from "./components/text/ReuseText";

function App() {
  ModuleRegistry.registerModules([AllEnterpriseModule]);
  LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_KEY);
  console.log("data", dataSetOne.length);
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-1">
      <Nav
        left={[<ReuseText variant="header1"> HR Management </ReuseText>]}
        right={[
          <ReuseButton name="Dashboard" />,
          <ReuseButton name="Profile" />,
          <ReuseButton name="Employee" icon={Plus} />
        ]}
      />
      <HrDashboard />
      <div> lol</div>
    </div>
  );
}

export default App;
