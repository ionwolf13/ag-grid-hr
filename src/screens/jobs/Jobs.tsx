import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { ReuseTable } from "../../agGrid/ReuseTable/ReuseTable";
import { jobsData } from "../../data/jobs";
import { jobColumnDefs } from "../../agGrid/columnDefs/jobColumnDefs";
import { ReuseHeading } from "../../components/heading/ReuseHeading";
import { Dropdown } from "../../components/inputs/Dropdown";
import { Input } from "../../components/inputs/Input";
import { ReuseButton } from "../../components/buttons/Button";
import { Nav } from "../../components/nav/Nav";
import { ButtonVariantEnum } from "../../shared/enums/globalEnums";
import { Plus, Save, FileDown } from "lucide-react";

interface JobsInterface {}

export const Jobs: React.FC<JobsInterface> = () => {
  return (
    <ReuseContainer>
      <Nav
        bottomBorder={false}
        className="border-t-2 border-sky-900 pt-2"
        left={[<ReuseHeading title="All Jobs" />]}
        middle={[]}
        right={[
          <Dropdown />,
          <Input
            value={"lol"}
            name="search"
            onChange={(e) => {
              // setTest(e.target.value);
            }}
          />,
          <ReuseButton
            name="Job"
            variant={ButtonVariantEnum.secondary}
            icon={Plus}
            showTooltip
            tooltipTitle="New Job"
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
          />,
        ]}
      />
      {/* <ReuseTable data={jobsData} columnDefs={jobColumnDefs} /> */}
    </ReuseContainer>
  );
};
