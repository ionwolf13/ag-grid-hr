import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { mockEmployees } from "../../data/v0MockDataUser";
import { HeadingWithContent } from "../../components/heading/HeadingWithContent";
import { Mail, User } from "lucide-react";
import { Card } from "../../components/card/Card";
import ReuseText from "../../components/text/ReuseText";

interface ProfileDashboardInterface {}

export const ProfileDashboard: React.FC<ProfileDashboardInterface> = () => {
  const user = mockEmployees[0];
  console.log("USEr", user);

  const profileData = [
    {
      section: "Contact Information",
      data: [
        { title: "Email", subtitle: "alice@gmail.com", icon: User },
        { title: "Phone", subtitle: "+1 123 123 1234", icon: User },
        {
          title: "Address",
          subtitle: "123 Main Street San Francisco, CA 94102",
          icon: User
        }
      ]
    },
    {
      section: "Personal Information",
      data: [
        { title: "Date Of Birth", subtitle: "alice@gmail.com", icon: User },
        { title: "Marital Status", subtitle: "+1 123 123 1234", icon: User },
        {
          title: "Nationality",
          subtitle: "123 Main Street San Francisco, CA 94102",
          icon: User
        }
      ]
    },
    {
      section: "Emergency Contact",
      data: [
        { title: "Name", subtitle: "alice@gmail.com", icon: User },
        { title: "Relationship", subtitle: "+1 123 123 1234", icon: User },
        {
          title: "Phone",
          subtitle: "123 Main Street San Francisco, CA 94102",
          icon: User
        },
        {
          title: "Email",
          subtitle: "123 Main Street San Francisco, CA 94102",
          icon: User
        }
      ]
    },
    {
      section: "Employment Details",
      data: [
        { title: "Department", subtitle: "Engineering", icon: User },
        { title: "Position", subtitle: "Software Engineering", icon: User },
        { title: "Level", subtitle: "Senior", icon: User },
        { title: "Work Location", subtitle: "San Francisco HQ", icon: User },
        { title: "Date Of Hire", subtitle: "May 11, 2028", icon: User },
        { title: "Tenure", subtitle: "7 years, 5 months", icon: User },
        { title: "Reports To", subtitle: "Carol Williams", icon: User }
      ]
    },
    {
      section: "Education",
      data: []
    },
    {
      section: "Languages",
      data: []
    },
    {
      section: "Work Authorization",
      data: []
    }
  ];

  return (
    <ReuseContainer>
      <ReuseContainer className="flex-col gap-8">
        {profileData.map((data) => {
          const sectionsDetails = data.data.map((items) => {
            return (
              <HeadingWithContent
                title={items.title}
                subtitle={items.subtitle}
                content={items.icon}
                leftSideContent
              />
            );
          });
          return (
            <Card
              header={[
                <ReuseText variant="subtitle1"> {data.section}</ReuseText>
              ]}
              body={sectionsDetails}
            />
          );
        })}
      </ReuseContainer>
      <ReuseContainer> Righ Side </ReuseContainer>
    </ReuseContainer>
  );
};
