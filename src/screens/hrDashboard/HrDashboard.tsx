import { ReuseTable } from "../../agGrid/ReuseTable/ReuseTable";
import { MetricCard } from "../../components/card/MetricCard";
import { User, Users, Activity, Building, DollarSign } from "lucide-react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { dataSetOne } from "../../data/dataSet";

export const HrDashboard = () => {
  const dashBoardSummary: {
    departments: string[];
    totalEmployees: number;
    activeEmployees: number;
    salary: number;
  } = dataSetOne.reduce(
    (a, b) => {
      a.totalEmployees += 1;
      a.salary += b.compensation.baseSalary;
      if (b.position.status === "Active") {
        a.activeEmployees += 1;
      }
      if (!a.departments.find((item) => item === b.position.department)) {
        a.departments.push(b.position.department);
      }
      return a;
    },
    {
      departments: [],
      totalEmployees: 0,
      activeEmployees: 0,
      salary: 0
    }
  );

  const metricTitles = {
    departments: "Departments",
    totalEmployees: "Total Employees",
    activeEmployees: "Active Employees",
    salary: "Avg. Salary"
  };

  const metricIcons = {
    departments: Building,
    totalEmployees: Users,
    activeEmployees: Activity,
    salary: DollarSign
  };

  console.log("DASHBOARD SUMMARY", dashBoardSummary);

  return (
    <ReuseContainer className="flex-col gap-8">
      <ReuseContainer className="justify-evenly">
        {Object.keys(dashBoardSummary).map((key) => (
          <MetricCard
            key={`metric-card-${key}`}
            title={metricTitles[key]}
            icon={metricIcons[key]}
            value={
              key === "departments"
                ? dashBoardSummary[key].length
                : Number(dashBoardSummary[key]).toLocaleString()
            }
          />
        ))}
      </ReuseContainer>
      <ReuseTable data={dataSetOne} />
    </ReuseContainer>
  );
};
