import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { Clock, UserPlus, TriangleAlert, ClipboardCheck } from "lucide-react";
import { MetricCardRow } from "../../components/card/MetricCardRow";
import { Card } from "../../components/card/Card";
import { HeadingWithContent } from "../../components/heading/HeadingWithContent";
import ReuseButton from "../../components/buttons/Button";
import { TextVariantEnum } from "../../shared/enums/globalEnums";
import { CheckCircle, CircleX } from "lucide-react";

// interface OverviewInterface {}

export const Overview: React.FC = () => {
  const data = {
    pendingApprovals: {
      title: "Pending Approvals",
      value: 3,
      subtitle: "Time-off requests",
      icon: Clock
    },
    activeRecruitment: {
      title: "Active Recruitment",
      value: 4,
      subtitle: "Open candidates",
      icon: UserPlus
    },
    complianceAlerts: {
      title: "Compliance Alerts",
      value: 3,
      subtitle: "High priority",
      icon: TriangleAlert
    },
    activeReviews: {
      title: "Active Reviews",
      value: 1,
      subtitle: "Review cycles",
      icon: ClipboardCheck
    }
  };

  const keys: string[] = Object.keys(data);

  return (
    <ReuseContainer className="flex-col gap-8">
      <MetricCardRow keys={keys} data={data} />
      <Card
        className={"px-8"}
        header={
          <HeadingWithContent
            title={"Time-Off Requests"}
            content={<ReuseButton name="View All" />}
            titleVariant={TextVariantEnum.header3}
          />
        }
        body={
          <Card
            header={
              <HeadingWithContent
                title={"Alice Johnson"}
                subtitle={"Vacation | 7 days"}
                caption={"2025-05-15 to 2025-05-22"}
                content={
                  <ReuseContainer>
                    <ReuseButton
                      icon={CheckCircle}
                      variant="secondary"
                      showTooltip
                      tooltipTitle="Approve"
                    />
                    <ReuseButton
                      icon={CircleX}
                      variant="danger"
                      showTooltip
                      tooltipTitle="Decline"
                    />
                  </ReuseContainer>
                }
                titleVariant={TextVariantEnum.header3}
              />
            }
          />
        }
      />
    </ReuseContainer>
  );
};
