import { create } from "zustand";
import type { EmployeeType } from "../../data/v0MockDataUser";
import { useNavigate } from "react-router-dom";

type AuthStoreType = {
  // Security Core
  isAuthenticated: false;
  accessToken: null;
  refreshToken: null;
  isLoading: false;
  error: null;

  // User Identity
  user: {
    id: null;
    email: null;
    firstName: null;
    lastName: null;
    avatarUrl: null;
  } | null;

  // Authorization
  roles: [];
  permissions: [];
  // API Calls
  callAuthenticateUser: () => void;
  callLogOutUser: () => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  // Actions
  setUser: (user: EmployeeType | null) =>
    set({
      user: {
        id: tempuser.employeeId,
        email: tempuser.email,
        firstName: tempuser.firstName,
        lastName: tempuser.lastName,
        avatarUrl: null,
      },
    }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  // API Calls
  callAuthenticateUser: () => {
    set({ isLoading: true });
    setTimeout(() => {}, 2000);
    set({ isAuthenticated: true });
    setTimeout(() => {}, 2000);
    set({ isLoading: false });
  },
  callLogOutUser: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isAuthenticated: false });
    }, 2000);
    setTimeout(() => {
      set({ isLoading: false });
    }, 2000);
  },
}));

const tempuser = {
  employeeId: "E001",
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: "+1 (555) 123-4567",
  dateOfBirth: "1990-03-15",
  nationality: "United States",
  maritalStatus: "Married",
  address: {
    street: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
  },
  emergencyContact: {
    name: "John Johnson",
    relationship: "Spouse",
    phoneNumber: "+1 (555) 123-4568",
  },
  department: "Engineering",
  position: "Software Engineer",
  employmentType: "Full-time",
  workLocation: "San Francisco HQ",
  employeeLevel: "Senior",
  dateOfHire: "2018-05-12",
  status: "Active",
  managerId: "E003",
  managerName: "Carol Williams",
  salary: 95000,
  bonusPercentage: 15,
  stockOptions: 5000,
  benefits: {
    health: true,
    dental: true,
    vision: true,
    retirement401k: true,
  },
  ptoBalance: 18,
  vacationDaysTaken: 7,
  vacationDaysRemaining: 13,
  sickDaysTaken: 2,
  personalDaysTaken: 1,
  workSchedule: "Monday-Friday, 9:00 AM - 5:00 PM",
  remoteDaysPerWeek: 3,
  overtimeHours: 5,
  performanceRating: "Excellent",
  lastReviewDate: "2024-09-15",
  nextReviewDate: "2025-09-15",
  goals: [
    "Lead migration to microservices architecture",
    "Mentor 2 junior developers",
    "Complete AWS certification",
  ],
  skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  certifications: ["AWS Solutions Architect", "Scrum Master"],
  trainingsCompleted: ["Leadership Training 2024", "Security Best Practices"],
  taxStatus: "Married Filing Jointly",
  backgroundCheckStatus: "Completed",
  ndaSignedDate: "2018-05-01",
  companyAssets: ['MacBook Pro 16"', "iPhone 14", "Access Card #A001"],
  notes: "Top performer, eligible for promotion consideration",
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      graduationYear: 2016,
      gpa: 3.8,
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "UC Berkeley",
      graduationYear: 2014,
      gpa: 3.6,
    },
  ],
  languages: [
    { language: "English", proficiency: "Native" },
    { language: "Spanish", proficiency: "Intermediate" },
  ],
  professionalMemberships: ["IEEE", "ACM"],
  publications: ["Microservices Architecture Best Practices (2023)"],
  workAuthorization: {
    status: "Citizen",
    sponsorshipRequired: false,
  },
  onboarding: {
    orientationCompleted: true,
    orientationDate: "2018-05-15",
    equipmentSetup: true,
    systemAccessProvisioned: true,
    onboardingProgress: 100,
  },
  performanceManagement: {
    feedback360Completed: true,
    lastFeedback360Date: "2024-09-01",
    promotionHistory: [
      {
        date: "2021-06-01",
        fromPosition: "Junior Software Engineer",
        toPosition: "Software Engineer",
        salaryIncrease: 15000,
      },
      {
        date: "2023-06-01",
        fromPosition: "Software Engineer",
        toPosition: "Senior Software Engineer",
        salaryIncrease: 20000,
      },
    ],
    disciplinaryActions: [],
    awards: [
      {
        date: "2024-01-15",
        title: "Employee of the Quarter",
        description: "Outstanding contribution to platform migration",
      },
    ],
  },
  workplaceAccommodations: {
    workspacePreferences: "Standing desk, dual monitors",
    ergonomicEquipment: [
      "Standing desk",
      "Ergonomic keyboard",
      "Vertical mouse",
    ],
    parkingAssignment: "P1-A23",
    buildingAccessLevel: "Full Access",
  },
  organizationalDevelopment: {
    successionPlanningStatus: "Identified",
    highPotential: true,
    flightRisk: "Low",
    mentorshipRole: "Mentor",
    menteeName: "Emma Davis",
    internalMobilityInterests: ["Engineering Manager", "Tech Lead"],
    careerPathStage: "Senior Individual Contributor",
  },
  engagementCulture: {
    engagementScore: 92,
    lastSurveyDate: "2024-09-01",
    satisfactionRating: 9,
    teamFitRating: 10,
    volunteerActivities: ["Code for Good", "Tech Mentorship Program"],
    companyEventsAttended: 12,
  },
  financialPayroll: {
    payrollHistory: [
      { date: "2024-09-30", amount: 7916, type: "Salary" },
      { date: "2024-08-31", amount: 7916, type: "Salary" },
      { date: "2024-07-31", amount: 7916, type: "Salary" },
    ],
    expenseReimbursements: 450,
    costCenter: "ENG-001",
    budgetResponsibility: 50000,
  },
  complianceSecurity: {
    securityClearanceLevel: "Level 2",
    confidentialityAgreementSigned: true,
    nonCompeteClause: true,
    nonCompeteExpiryDate: "2026-05-12",
    dataAccessPermissions: [
      "Production Database",
      "AWS Console",
      "GitHub Admin",
    ],
    complianceTrainingCompleted: [
      "Security Awareness 2024",
      "GDPR Training",
      "SOC 2 Compliance",
    ],
    policyAcknowledgments: [
      "Code of Conduct",
      "Remote Work Policy",
      "Data Protection Policy",
    ],
  },
  analyticsMetrics: {
    punctualityScore: 98,
    productivityMetrics: {
      tasksCompleted: 156,
      averageTaskTime: 4.2,
      qualityScore: 95,
    },
    utilizationRate: 92,
    projectCompletionRate: 98,
    absenteeismRate: 0.8,
  },
};
