import React from "react";
import { ReuseTable } from "../../agGrid/ReuseTable/ReuseTable";
import { MetricCard } from "../../components/card/MetricCard";
import { Users, Activity, Building, DollarSign, FileDown } from "lucide-react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { dataSetOne } from "../../data/dataSet";
import { Nav } from "../../components/nav/Nav";
import { ReuseButton } from "../../components/buttons/Button";
import { Plus, Save } from "lucide-react";
import { ReuseHeading } from "../../components/heading/ReuseHeading";
import { Input } from "../../components/inputs/Input";
import { ButtonVariantEnum } from "../../shared/enums/globalEnums";
import { Dropdown } from "../../components/inputs/Dropdown";
import { Chip } from "../../components/chips/chip";

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
      departments: [] as string[],
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

  const keys: (keyof typeof dashBoardSummary)[] = [
    "totalEmployees",
    "activeEmployees",
    "departments",
    "salary"
  ];

  const [test, setTest] = React.useState<string>("");

  console.log("DASHBOARD SUMMARY", dashBoardSummary);

  return (
    <ReuseContainer className="flex-col gap-8">
      <ReuseContainer className="justify-evenly">
        {keys.map((key) => (
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
      <ReuseContainer className="flex-col gap-2">
        <Nav
          bottomBorder={false}
          className="border-t-2 border-sky-900 pt-2"
          left={[<ReuseHeading title="All Employees" />]}
          middle={[<div></div>]}
          right={[
            <Chip name="Chippie" />,
            <Dropdown />,
            <Input
              value={test}
              name="search"
              onChange={(e) => {
                setTest(e.target.value);
              }}
            />,
            <ReuseButton
              name="Employee"
              variant={ButtonVariantEnum.secondary}
              icon={Plus}
            />,
            <ReuseButton
              name="Save"
              variant={ButtonVariantEnum.secondary}
              icon={Save}
              disabled
            />,
            <ReuseButton
              name="Download"
              variant={ButtonVariantEnum.action}
              icon={FileDown}
            />
          ]}
        />
        <ReuseTable data={dataSetOne} />
      </ReuseContainer>
    </ReuseContainer>
  );
};
