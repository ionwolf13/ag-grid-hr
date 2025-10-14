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
import { MetricCardRow } from "../../components/card/MetricCardRow";
import { employeeColumnDefs } from "../../agGrid/columnDefs/employeeColumnDefs";

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

  const metricData = {
    departments: {
      title: "Departments",
      icon: Building,
      value: dashBoardSummary.departments
    },
    totalEmployees: {
      title: "Total Employees",
      icon: Users,
      value: dashBoardSummary.totalEmployees
    },
    activeEmployees: {
      title: "Active Employees",
      icon: Activity,
      value: dashBoardSummary.activeEmployees
    },
    salary: {
      title: "Avg. Salary",
      icon: DollarSign,
      value: dashBoardSummary.salary
    }
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
      <MetricCardRow keys={keys} data={metricData} />
      <ReuseContainer className="flex-col gap-2">
        <Nav
          bottomBorder={false}
          className="border-t-2 border-sky-900 pt-2"
          left={[<ReuseHeading title="All Employees" />]}
          middle={[<div></div>]}
          right={[
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
              showTooltip
              tooltipTitle="New Employee"
            />,
            <ReuseButton
              name="Save"
              variant={ButtonVariantEnum.secondary}
              icon={Save}
              showTooltip
              tooltipTitle="Save Updates"
              disabled
            />,
            <ReuseButton
              name="Download"
              variant={ButtonVariantEnum.action}
              icon={FileDown}
              showTooltip
              tooltipTitle="Download Table"
            />
          ]}
        />
        <ReuseTable data={dataSetOne} columnDefs={employeeColumnDefs} />
      </ReuseContainer>
    </ReuseContainer>
  );
};
