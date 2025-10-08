export interface EmployeeType {
  // Basic Information
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  nationality: string;
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
  profilePhoto?: string;

  // Address
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };

  // Emergency Contact
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };

  // Employment Details
  department: string;
  position: string;
  employmentType: "Full-time" | "Part-time" | "Contract";
  workLocation: string;
  employeeLevel: string;
  dateOfHire: string;
  probationEndDate?: string;
  contractEndDate?: string;
  status: "Active" | "On Leave" | "Inactive";

  // Manager & Reporting
  managerId?: string;
  managerName?: string;

  // Compensation & Benefits
  salary: number;
  bonusPercentage: number;
  stockOptions?: number;
  benefits: {
    health: boolean;
    dental: boolean;
    vision: boolean;
    retirement401k: boolean;
  };

  // Time Off
  ptoBalance: number;
  vacationDaysTaken: number;
  vacationDaysRemaining: number;
  sickDaysTaken: number;
  personalDaysTaken: number;

  // Work Schedule
  workSchedule: string;
  remoteDaysPerWeek: number;
  overtimeHours: number;

  // Performance & Development
  performanceRating: "Excellent" | "Good" | "Average" | "Needs Improvement";
  lastReviewDate: string;
  nextReviewDate: string;
  goals: string[];
  skills: string[];
  certifications: string[];
  trainingsCompleted: string[];

  // Administrative
  taxStatus: string;
  backgroundCheckStatus: "Completed" | "Pending" | "Not Required";
  ndaSignedDate: string;
  companyAssets: string[];
  notes?: string;

  // Education & Qualifications
  education: {
    degree: string;
    institution: string;
    graduationYear: number;
    gpa?: number;
  }[];
  languages: {
    language: string;
    proficiency: "Native" | "Fluent" | "Intermediate" | "Basic";
  }[];
  professionalMemberships?: string[];
  publications?: string[];
  patents?: string[];

  // Immigration & Work Authorization
  workAuthorization: {
    status:
      | "Citizen"
      | "Permanent Resident"
      | "Work Visa"
      | "Sponsorship Required";
    visaType?: string;
    visaExpiryDate?: string;
    sponsorshipRequired: boolean;
  };

  // Onboarding & Offboarding
  onboarding: {
    orientationCompleted: boolean;
    orientationDate?: string;
    equipmentSetup: boolean;
    systemAccessProvisioned: boolean;
    onboardingProgress: number;
  };
  offboarding?: {
    exitInterviewCompleted?: boolean;
    exitInterviewDate?: string;
    resignationDate?: string;
    terminationDate?: string;
    reasonForLeaving?: string;
    rehireEligible: boolean;
  };

  // Performance Management (extended)
  performanceManagement: {
    performanceImprovementPlan?: boolean;
    pipStartDate?: string;
    pipEndDate?: string;
    feedback360Completed: boolean;
    lastFeedback360Date?: string;
    promotionHistory: Array<{
      date: string;
      fromPosition: string;
      toPosition: string;
      salaryIncrease: number;
    }>;
    disciplinaryActions: Array<{
      date: string;
      type: string;
      description: string;
    }>;
    awards: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  };

  // Workplace & Accommodations
  workplaceAccommodations: {
    disabilityAccommodations?: string;
    workspacePreferences?: string;
    ergonomicEquipment?: string[];
    parkingAssignment?: string;
    buildingAccessLevel: string;
  };

  // Organizational Development
  organizationalDevelopment: {
    successionPlanningStatus:
      | "Identified"
      | "In Development"
      | "Ready"
      | "Not Applicable";
    highPotential: boolean;
    flightRisk: "Low" | "Medium" | "High";
    mentorshipRole?: "Mentor" | "Mentee" | "Both" | "None";
    mentorName?: string;
    menteeName?: string;
    internalMobilityInterests?: string[];
    careerPathStage: string;
  };

  // Engagement & Culture
  engagementCulture: {
    engagementScore: number;
    lastSurveyDate: string;
    satisfactionRating: number;
    teamFitRating: number;
    volunteerActivities?: string[];
    companyEventsAttended: number;
  };

  // Financial & Payroll
  financialPayroll: {
    payrollHistory: Array<{
      date: string;
      amount: number;
      type: "Salary" | "Bonus" | "Commission";
    }>;
    commissionStructure?: string;
    expenseReimbursements: number;
    garnishments?: string;
    costCenter: string;
    budgetResponsibility?: number;
  };

  // Compliance & Security
  complianceSecurity: {
    securityClearanceLevel?: string;
    confidentialityAgreementSigned: boolean;
    nonCompeteClause: boolean;
    nonCompeteExpiryDate?: string;
    dataAccessPermissions: string[];
    complianceTrainingCompleted: string[];
    policyAcknowledgments: string[];
  };

  // Analytics & Metrics
  analyticsMetrics: {
    punctualityScore: number;
    productivityMetrics?: {
      tasksCompleted: number;
      averageTaskTime: number;
      qualityScore: number;
    };
    utilizationRate?: number;
    customerSatisfactionScore?: number;
    projectCompletionRate: number;
    absenteeismRate: number;
  };
}

export interface EmployeeStats {
  totalEmployees: number;
  activeEmployees: number;
  departments: number;
  averageSalary: number;
}

export const mockEmployees: EmployeeType[] = [
  {
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
      zipCode: "94102"
    },
    emergencyContact: {
      name: "John Johnson",
      relationship: "Spouse",
      phoneNumber: "+1 (555) 123-4568"
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
      retirement401k: true
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
      "Complete AWS certification"
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
        gpa: 3.8
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "UC Berkeley",
        graduationYear: 2014,
        gpa: 3.6
      }
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Intermediate" }
    ],
    professionalMemberships: ["IEEE", "ACM"],
    publications: ["Microservices Architecture Best Practices (2023)"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2018-05-15",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-09-01",
      promotionHistory: [
        {
          date: "2021-06-01",
          fromPosition: "Junior Software Engineer",
          toPosition: "Software Engineer",
          salaryIncrease: 15000
        },
        {
          date: "2023-06-01",
          fromPosition: "Software Engineer",
          toPosition: "Senior Software Engineer",
          salaryIncrease: 20000
        }
      ],
      disciplinaryActions: [],
      awards: [
        {
          date: "2024-01-15",
          title: "Employee of the Quarter",
          description: "Outstanding contribution to platform migration"
        }
      ]
    },
    workplaceAccommodations: {
      workspacePreferences: "Standing desk, dual monitors",
      ergonomicEquipment: [
        "Standing desk",
        "Ergonomic keyboard",
        "Vertical mouse"
      ],
      parkingAssignment: "P1-A23",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Identified",
      highPotential: true,
      flightRisk: "Low",
      mentorshipRole: "Mentor",
      menteeName: "Emma Davis",
      internalMobilityInterests: ["Engineering Manager", "Tech Lead"],
      careerPathStage: "Senior Individual Contributor"
    },
    engagementCulture: {
      engagementScore: 92,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 9,
      teamFitRating: 10,
      volunteerActivities: ["Code for Good", "Tech Mentorship Program"],
      companyEventsAttended: 12
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 7916, type: "Salary" },
        { date: "2024-08-31", amount: 7916, type: "Salary" },
        { date: "2024-07-31", amount: 7916, type: "Salary" }
      ],
      expenseReimbursements: 450,
      costCenter: "ENG-001",
      budgetResponsibility: 50000
    },
    complianceSecurity: {
      securityClearanceLevel: "Level 2",
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2026-05-12",
      dataAccessPermissions: [
        "Production Database",
        "AWS Console",
        "GitHub Admin"
      ],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "GDPR Training",
        "SOC 2 Compliance"
      ],
      policyAcknowledgments: [
        "Code of Conduct",
        "Remote Work Policy",
        "Data Protection Policy"
      ]
    },
    analyticsMetrics: {
      punctualityScore: 98,
      productivityMetrics: {
        tasksCompleted: 156,
        averageTaskTime: 4.2,
        qualityScore: 95
      },
      utilizationRate: 92,
      projectCompletionRate: 98,
      absenteeismRate: 0.8
    }
  },
  {
    employeeId: "E002",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    phoneNumber: "+1 (555) 234-5678",
    dateOfBirth: "1985-07-22",
    nationality: "United States",
    maritalStatus: "Single",
    address: {
      street: "456 Oak Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103"
    },
    emergencyContact: {
      name: "Mary Smith",
      relationship: "Mother",
      phoneNumber: "+1 (555) 234-5679"
    },
    department: "Marketing",
    position: "Marketing Manager",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Mid-Level",
    dateOfHire: "2019-03-20",
    status: "Active",
    salary: 85000,
    bonusPercentage: 12,
    stockOptions: 3000,
    benefits: {
      health: true,
      dental: true,
      vision: false,
      retirement401k: true
    },
    ptoBalance: 15,
    vacationDaysTaken: 10,
    vacationDaysRemaining: 10,
    sickDaysTaken: 5,
    personalDaysTaken: 2,
    workSchedule: "Monday-Friday, 9:00 AM - 5:00 PM",
    remoteDaysPerWeek: 2,
    overtimeHours: 3,
    performanceRating: "Good",
    lastReviewDate: "2024-08-10",
    nextReviewDate: "2025-08-10",
    goals: [
      "Increase social media engagement by 30%",
      "Launch new product campaign",
      "Build marketing automation workflows"
    ],
    skills: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Analytics",
      "Adobe Creative Suite"
    ],
    certifications: ["Google Analytics Certified", "HubSpot Marketing"],
    trainingsCompleted: ["Advanced SEO Workshop", "Brand Management Course"],
    taxStatus: "Single",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2019-03-10",
    companyAssets: ["MacBook Air", "Access Card #A002"],
    education: [
      {
        degree: "Bachelor of Arts in Marketing",
        institution: "UCLA",
        graduationYear: 2007,
        gpa: 3.4
      }
    ],
    languages: [{ language: "English", proficiency: "Native" }],
    professionalMemberships: ["American Marketing Association"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2019-03-22",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-08-01",
      promotionHistory: [
        {
          date: "2022-03-20",
          fromPosition: "Marketing Specialist",
          toPosition: "Marketing Manager",
          salaryIncrease: 18000
        }
      ],
      disciplinaryActions: [],
      awards: []
    },
    workplaceAccommodations: {
      workspacePreferences: "Window seat, quiet area",
      parkingAssignment: "P2-B15",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "In Development",
      highPotential: false,
      flightRisk: "Low",
      mentorshipRole: "None",
      internalMobilityInterests: ["Senior Marketing Manager"],
      careerPathStage: "Mid-Level Manager"
    },
    engagementCulture: {
      engagementScore: 85,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 8,
      teamFitRating: 9,
      volunteerActivities: ["Marketing for Nonprofits"],
      companyEventsAttended: 8
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 7083, type: "Salary" },
        { date: "2024-08-31", amount: 7083, type: "Salary" }
      ],
      expenseReimbursements: 320,
      costCenter: "MKT-001"
    },
    complianceSecurity: {
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2025-03-20",
      dataAccessPermissions: ["Marketing Tools", "Analytics Dashboard"],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "Brand Guidelines"
      ],
      policyAcknowledgments: ["Code of Conduct", "Social Media Policy"]
    },
    analyticsMetrics: {
      punctualityScore: 94,
      productivityMetrics: {
        tasksCompleted: 89,
        averageTaskTime: 6.5,
        qualityScore: 88
      },
      projectCompletionRate: 92,
      absenteeismRate: 1.9
    }
  },
  {
    employeeId: "E003",
    firstName: "Carol",
    lastName: "Williams",
    email: "carol.williams@example.com",
    phoneNumber: "+1 (555) 345-6789",
    dateOfBirth: "1982-11-08",
    nationality: "United States",
    maritalStatus: "Married",
    address: {
      street: "789 Pine Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94104"
    },
    emergencyContact: {
      name: "Robert Williams",
      relationship: "Spouse",
      phoneNumber: "+1 (555) 345-6790"
    },
    department: "Engineering",
    position: "Senior Developer",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Lead",
    dateOfHire: "2017-08-15",
    status: "Active",
    salary: 110000,
    bonusPercentage: 20,
    stockOptions: 8000,
    benefits: {
      health: true,
      dental: true,
      vision: true,
      retirement401k: true
    },
    ptoBalance: 22,
    vacationDaysTaken: 8,
    vacationDaysRemaining: 17,
    sickDaysTaken: 1,
    personalDaysTaken: 0,
    workSchedule: "Monday-Friday, 9:00 AM - 5:00 PM",
    remoteDaysPerWeek: 4,
    overtimeHours: 8,
    performanceRating: "Excellent",
    lastReviewDate: "2024-10-01",
    nextReviewDate: "2025-10-01",
    goals: [
      "Architect new platform features",
      "Reduce technical debt by 40%",
      "Establish engineering best practices"
    ],
    skills: ["Python", "Java", "System Design", "Kubernetes", "PostgreSQL"],
    certifications: ["Google Cloud Professional", "Kubernetes Administrator"],
    trainingsCompleted: [
      "System Architecture Workshop",
      "Team Leadership Program"
    ],
    taxStatus: "Married Filing Jointly",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2017-08-01",
    companyAssets: ['MacBook Pro 16"', "iPad Pro", "Access Card #A003"],
    notes: "Engineering team lead, manages 5 direct reports",
    education: [
      {
        degree: "Master of Science in Computer Engineering",
        institution: "MIT",
        graduationYear: 2005,
        gpa: 3.9
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Georgia Tech",
        graduationYear: 2003,
        gpa: 3.7
      }
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Mandarin", proficiency: "Fluent" }
    ],
    professionalMemberships: ["IEEE", "Women in Technology"],
    publications: [
      "Scalable System Design Patterns (2022)",
      "Cloud Architecture Guide (2020)"
    ],
    patents: ["US Patent 10,234,567 - Distributed Caching System"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2017-08-18",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-09-15",
      promotionHistory: [
        {
          date: "2019-08-15",
          fromPosition: "Software Engineer",
          toPosition: "Senior Developer",
          salaryIncrease: 25000
        },
        {
          date: "2022-08-15",
          fromPosition: "Senior Developer",
          toPosition: "Lead Developer",
          salaryIncrease: 30000
        }
      ],
      disciplinaryActions: [],
      awards: [
        {
          date: "2023-12-15",
          title: "Innovation Award",
          description: "Revolutionary platform architecture design"
        },
        {
          date: "2022-06-01",
          title: "Leadership Excellence",
          description: "Outstanding team leadership and mentorship"
        }
      ]
    },
    workplaceAccommodations: {
      workspacePreferences: "Private office, whiteboard",
      ergonomicEquipment: ["Standing desk", "Herman Miller chair"],
      parkingAssignment: "P1-A01",
      buildingAccessLevel: "Executive Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Ready",
      highPotential: true,
      flightRisk: "Low",
      mentorshipRole: "Mentor",
      menteeName: "Alice Johnson, Frank Miller",
      internalMobilityInterests: ["VP of Engineering", "CTO"],
      careerPathStage: "Senior Leadership Track"
    },
    engagementCulture: {
      engagementScore: 96,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 10,
      teamFitRating: 10,
      volunteerActivities: ["STEM Education", "Women in Tech Mentorship"],
      companyEventsAttended: 15
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 9166, type: "Salary" },
        { date: "2024-08-31", amount: 9166, type: "Salary" },
        { date: "2024-06-30", amount: 20000, type: "Bonus" }
      ],
      expenseReimbursements: 850,
      costCenter: "ENG-001",
      budgetResponsibility: 500000
    },
    complianceSecurity: {
      securityClearanceLevel: "Level 3",
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2027-08-15",
      dataAccessPermissions: ["All Systems", "Admin Access", "Financial Data"],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "Leadership Compliance",
        "SOC 2 Compliance",
        "GDPR Training"
      ],
      policyAcknowledgments: [
        "Code of Conduct",
        "Leadership Guidelines",
        "IP Protection Policy"
      ]
    },
    analyticsMetrics: {
      punctualityScore: 99,
      productivityMetrics: {
        tasksCompleted: 203,
        averageTaskTime: 3.8,
        qualityScore: 98
      },
      utilizationRate: 95,
      projectCompletionRate: 99,
      absenteeismRate: 0.4
    }
  },
  {
    employeeId: "E004",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    phoneNumber: "+1 (555) 456-7890",
    dateOfBirth: "1992-05-30",
    nationality: "United States",
    maritalStatus: "Single",
    address: {
      street: "321 Elm Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105"
    },
    emergencyContact: {
      name: "Susan Brown",
      relationship: "Sister",
      phoneNumber: "+1 (555) 456-7891"
    },
    department: "HR",
    position: "HR Specialist",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Junior",
    dateOfHire: "2020-01-10",
    status: "Active",
    salary: 70000,
    bonusPercentage: 10,
    benefits: {
      health: true,
      dental: true,
      vision: true,
      retirement401k: true
    },
    ptoBalance: 12,
    vacationDaysTaken: 8,
    vacationDaysRemaining: 12,
    sickDaysTaken: 3,
    personalDaysTaken: 1,
    workSchedule: "Monday-Friday, 8:30 AM - 4:30 PM",
    remoteDaysPerWeek: 1,
    overtimeHours: 2,
    performanceRating: "Good",
    lastReviewDate: "2024-07-20",
    nextReviewDate: "2025-07-20",
    goals: [
      "Streamline onboarding process",
      "Complete SHRM certification",
      "Implement new HRIS system"
    ],
    skills: [
      "Recruitment",
      "Employee Relations",
      "HRIS",
      "Compliance",
      "Training"
    ],
    certifications: ["PHR Certification"],
    trainingsCompleted: ["HR Compliance 2024", "Conflict Resolution Workshop"],
    taxStatus: "Single",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2020-01-05",
    companyAssets: ["Dell Laptop", "Access Card #A004"],
    education: [
      {
        degree: "Bachelor of Science in Human Resources Management",
        institution: "Penn State University",
        graduationYear: 2014,
        gpa: 3.5
      }
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "French", proficiency: "Basic" }
    ],
    professionalMemberships: ["SHRM"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2020-01-13",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-07-01",
      promotionHistory: [],
      disciplinaryActions: [],
      awards: []
    },
    workplaceAccommodations: {
      workspacePreferences: "Collaborative space",
      parkingAssignment: "P2-C10",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Not Applicable",
      highPotential: false,
      flightRisk: "Low",
      mentorshipRole: "Mentee",
      mentorName: "HR Director",
      internalMobilityInterests: ["HR Manager", "Talent Acquisition Lead"],
      careerPathStage: "Early Career Professional"
    },
    engagementCulture: {
      engagementScore: 88,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 8,
      teamFitRating: 9,
      volunteerActivities: ["Career Fair Volunteer"],
      companyEventsAttended: 10
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 5833, type: "Salary" },
        { date: "2024-08-31", amount: 5833, type: "Salary" }
      ],
      expenseReimbursements: 150,
      costCenter: "HR-001"
    },
    complianceSecurity: {
      confidentialityAgreementSigned: true,
      nonCompeteClause: false,
      dataAccessPermissions: ["HRIS", "Employee Records"],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "HR Compliance",
        "EEOC Training"
      ],
      policyAcknowledgments: ["Code of Conduct", "Confidentiality Policy"]
    },
    analyticsMetrics: {
      punctualityScore: 96,
      productivityMetrics: {
        tasksCompleted: 112,
        averageTaskTime: 5.1,
        qualityScore: 86
      },
      projectCompletionRate: 90,
      absenteeismRate: 1.2
    }
  },
  {
    employeeId: "E005",
    firstName: "Emma",
    lastName: "Davis",
    email: "emma.davis@example.com",
    phoneNumber: "+1 (555) 567-8901",
    dateOfBirth: "1995-09-12",
    nationality: "United States",
    maritalStatus: "Single",
    address: {
      street: "654 Maple Drive",
      city: "San Francisco",
      state: "CA",
      zipCode: "94106"
    },
    emergencyContact: {
      name: "James Davis",
      relationship: "Father",
      phoneNumber: "+1 (555) 567-8902"
    },
    department: "Sales",
    position: "Sales Representative",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Entry",
    dateOfHire: "2021-06-01",
    status: "Active",
    salary: 65000,
    bonusPercentage: 25,
    benefits: {
      health: true,
      dental: false,
      vision: false,
      retirement401k: true
    },
    ptoBalance: 10,
    vacationDaysTaken: 5,
    vacationDaysRemaining: 10,
    sickDaysTaken: 8,
    personalDaysTaken: 3,
    workSchedule: "Monday-Friday, 9:00 AM - 6:00 PM",
    remoteDaysPerWeek: 1,
    overtimeHours: 10,
    performanceRating: "Average",
    lastReviewDate: "2024-06-15",
    nextReviewDate: "2025-06-15",
    goals: [
      "Achieve 120% of sales quota",
      "Build client relationship skills",
      "Complete sales training program"
    ],
    skills: ["Sales", "CRM", "Negotiation", "Presentation", "Customer Service"],
    certifications: ["Salesforce Certified"],
    trainingsCompleted: ["Sales Fundamentals", "Product Knowledge Training"],
    taxStatus: "Single",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2021-05-25",
    companyAssets: ["MacBook Air", "iPhone 13", "Access Card #A005"],
    notes: "High potential, needs coaching on closing techniques",
    education: [
      {
        degree: "Bachelor of Science in Finance",
        institution: "NYU Stern",
        graduationYear: 2013,
        gpa: 3.7
      }
    ],
    languages: [{ language: "English", proficiency: "Native" }],
    professionalMemberships: ["CFA Institute"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2018-09-07",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      performanceImprovementPlan: true,
      pipStartDate: "2024-07-01",
      pipEndDate: "2024-10-01",
      feedback360Completed: false,
      promotionHistory: [],
      disciplinaryActions: [
        {
          date: "2024-06-15",
          type: "Written Warning",
          description: "Missed sales targets for Q2"
        }
      ],
      awards: []
    },
    workplaceAccommodations: {
      workspacePreferences: "Quiet workspace, natural light",
      parkingAssignment: "P2-B08",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Not Applicable",
      highPotential: false,
      flightRisk: "Medium",
      mentorshipRole: "Mentee",
      mentorName: "Alice Johnson",
      internalMobilityInterests: ["Account Executive", "Sales Manager"],
      careerPathStage: "Entry Level"
    },
    engagementCulture: {
      engagementScore: 86,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 8,
      teamFitRating: 8,
      volunteerActivities: ["Financial Literacy Program"],
      companyEventsAttended: 9
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 6666, type: "Salary" },
        { date: "2024-09-30", amount: 3200, type: "Commission" },
        { date: "2024-08-31", amount: 6666, type: "Salary" }
      ],
      commissionStructure: "10% of sales revenue",
      expenseReimbursements: 280,
      costCenter: "SALES-001"
    },
    complianceSecurity: {
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2025-06-01",
      dataAccessPermissions: ["CRM", "Sales Dashboard"],
      complianceTrainingCompleted: ["Security Awareness 2024", "Sales Ethics"],
      policyAcknowledgments: ["Code of Conduct", "Sales Policy"]
    },
    analyticsMetrics: {
      punctualityScore: 89,
      productivityMetrics: {
        tasksCompleted: 67,
        averageTaskTime: 8.2,
        qualityScore: 75
      },
      customerSatisfactionScore: 82,
      projectCompletionRate: 78,
      absenteeismRate: 3.1
    }
  },
  {
    employeeId: "E006",
    firstName: "Frank",
    lastName: "Miller",
    email: "frank.miller@example.com",
    phoneNumber: "+1 (555) 678-9012",
    dateOfBirth: "1988-12-03",
    nationality: "United States",
    maritalStatus: "Married",
    address: {
      street: "987 Cedar Lane",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107"
    },
    emergencyContact: {
      name: "Linda Miller",
      relationship: "Spouse",
      phoneNumber: "+1 (555) 678-9013"
    },
    department: "Engineering",
    position: "DevOps Engineer",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Senior",
    dateOfHire: "2019-11-22",
    status: "Active",
    managerId: "E003",
    managerName: "Carol Williams",
    salary: 98000,
    bonusPercentage: 15,
    stockOptions: 4500,
    benefits: {
      health: true,
      dental: true,
      vision: true,
      retirement401k: true
    },
    ptoBalance: 16,
    vacationDaysTaken: 9,
    vacationDaysRemaining: 11,
    sickDaysTaken: 2,
    personalDaysTaken: 1,
    workSchedule: "Monday-Friday, 9:00 AM - 5:00 PM",
    remoteDaysPerWeek: 5,
    overtimeHours: 12,
    performanceRating: "Excellent",
    lastReviewDate: "2024-09-30",
    nextReviewDate: "2025-09-30",
    goals: [
      "Implement CI/CD pipeline improvements",
      "Reduce deployment time by 50%",
      "Automate infrastructure provisioning"
    ],
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    certifications: [
      "AWS DevOps Professional",
      "Certified Kubernetes Administrator"
    ],
    trainingsCompleted: ["Advanced Docker Workshop", "Cloud Security Training"],
    taxStatus: "Married Filing Jointly",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2019-11-15",
    companyAssets: ['MacBook Pro 14"', "Access Card #A006"],
    education: [
      {
        degree: "Bachelor of Science in Information Technology",
        institution: "University of Washington",
        graduationYear: 2010,
        gpa: 3.6
      }
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "German", proficiency: "Intermediate" }
    ],
    professionalMemberships: ["DevOps Institute"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2019-11-25",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-09-20",
      promotionHistory: [
        {
          date: "2022-11-22",
          fromPosition: "DevOps Engineer",
          toPosition: "Senior DevOps Engineer",
          salaryIncrease: 18000
        }
      ],
      disciplinaryActions: [],
      awards: [
        {
          date: "2024-03-01",
          title: "Technical Excellence Award",
          description: "Reduced deployment time by 60%"
        }
      ]
    },
    workplaceAccommodations: {
      workspacePreferences: "Remote work full-time",
      ergonomicEquipment: ["Standing desk", "Ergonomic chair"],
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Identified",
      highPotential: true,
      flightRisk: "Low",
      mentorshipRole: "None",
      internalMobilityInterests: ["DevOps Lead", "Platform Engineering"],
      careerPathStage: "Senior Individual Contributor"
    },
    engagementCulture: {
      engagementScore: 90,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 9,
      teamFitRating: 9,
      volunteerActivities: ["Open Source Contributions"],
      companyEventsAttended: 6
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 8166, type: "Salary" },
        { date: "2024-08-31", amount: 8166, type: "Salary" }
      ],
      expenseReimbursements: 520,
      costCenter: "ENG-001"
    },
    complianceSecurity: {
      securityClearanceLevel: "Level 2",
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2026-11-22",
      dataAccessPermissions: [
        "Production Systems",
        "AWS Admin",
        "Kubernetes Cluster"
      ],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "Cloud Security",
        "SOC 2 Compliance"
      ],
      policyAcknowledgments: [
        "Code of Conduct",
        "Remote Work Policy",
        "Security Policy"
      ]
    },
    analyticsMetrics: {
      punctualityScore: 97,
      productivityMetrics: {
        tasksCompleted: 178,
        averageTaskTime: 3.9,
        qualityScore: 94
      },
      utilizationRate: 94,
      projectCompletionRate: 97,
      absenteeismRate: 0.8
    }
  },
  {
    employeeId: "E007",
    firstName: "Grace",
    lastName: "Wilson",
    email: "grace.wilson@example.com",
    phoneNumber: "+1 (555) 789-0123",
    dateOfBirth: "1991-04-18",
    nationality: "United States",
    maritalStatus: "Divorced",
    address: {
      street: "147 Birch Road",
      city: "San Francisco",
      state: "CA",
      zipCode: "94108"
    },
    emergencyContact: {
      name: "Patricia Wilson",
      relationship: "Mother",
      phoneNumber: "+1 (555) 789-0124"
    },
    department: "Finance",
    position: "Financial Analyst",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Mid-Level",
    dateOfHire: "2018-09-05",
    status: "Active",
    salary: 80000,
    bonusPercentage: 12,
    stockOptions: 2500,
    benefits: {
      health: true,
      dental: true,
      vision: true,
      retirement401k: true
    },
    ptoBalance: 14,
    vacationDaysTaken: 11,
    vacationDaysRemaining: 9,
    sickDaysTaken: 4,
    personalDaysTaken: 2,
    workSchedule: "Monday-Friday, 8:00 AM - 4:00 PM",
    remoteDaysPerWeek: 2,
    overtimeHours: 6,
    performanceRating: "Good",
    lastReviewDate: "2024-08-25",
    nextReviewDate: "2025-08-25",
    goals: [
      "Improve financial forecasting accuracy",
      "Complete CFA Level 2",
      "Streamline monthly reporting process"
    ],
    skills: ["Financial Analysis", "Excel", "SQL", "Tableau", "Budgeting"],
    certifications: ["CFA Level 1", "QuickBooks Certified"],
    trainingsCompleted: [
      "Advanced Financial Modeling",
      "Data Analytics Course"
    ],
    taxStatus: "Head of Household",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2018-08-28",
    companyAssets: ["Dell Laptop", "Access Card #A007"],
    education: [
      {
        degree: "Bachelor of Science in Finance",
        institution: "NYU Stern",
        graduationYear: 2013,
        gpa: 3.7
      }
    ],
    languages: [{ language: "English", proficiency: "Native" }],
    professionalMemberships: ["CFA Institute"],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2018-09-07",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-08-15",
      promotionHistory: [
        {
          date: "2021-09-05",
          fromPosition: "Junior Financial Analyst",
          toPosition: "Financial Analyst",
          salaryIncrease: 12000
        }
      ],
      disciplinaryActions: [],
      awards: []
    },
    workplaceAccommodations: {
      workspacePreferences: "Quiet workspace, natural light",
      parkingAssignment: "P2-B08",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "In Development",
      highPotential: false,
      flightRisk: "Low",
      mentorshipRole: "None",
      internalMobilityInterests: [
        "Senior Financial Analyst",
        "Finance Manager"
      ],
      careerPathStage: "Mid-Level Professional"
    },
    engagementCulture: {
      engagementScore: 86,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 8,
      teamFitRating: 8,
      volunteerActivities: ["Financial Literacy Program"],
      companyEventsAttended: 9
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 6666, type: "Salary" },
        { date: "2024-08-31", amount: 6666, type: "Salary" }
      ],
      expenseReimbursements: 280,
      costCenter: "FIN-001"
    },
    complianceSecurity: {
      confidentialityAgreementSigned: true,
      nonCompeteClause: true,
      nonCompeteExpiryDate: "2025-06-01",
      dataAccessPermissions: ["Financial Systems", "ERP Access"],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "SOX Compliance",
        "Financial Ethics"
      ],
      policyAcknowledgments: [
        "Code of Conduct",
        "Financial Policy",
        "Insider Trading Policy"
      ]
    },
    analyticsMetrics: {
      punctualityScore: 95,
      productivityMetrics: {
        tasksCompleted: 134,
        averageTaskTime: 5.8,
        qualityScore: 90
      },
      projectCompletionRate: 94,
      absenteeismRate: 1.5
    }
  },
  {
    employeeId: "E008",
    firstName: "Henry",
    lastName: "Moore",
    email: "henry.moore@example.com",
    phoneNumber: "+1 (555) 890-1234",
    dateOfBirth: "1993-06-25",
    nationality: "United States",
    maritalStatus: "Single",
    address: {
      street: "258 Willow Court",
      city: "San Francisco",
      state: "CA",
      zipCode: "94109"
    },
    emergencyContact: {
      name: "Thomas Moore",
      relationship: "Brother",
      phoneNumber: "+1 (555) 890-1235"
    },
    department: "Engineering",
    position: "QA Engineer",
    employmentType: "Full-time",
    workLocation: "San Francisco HQ",
    employeeLevel: "Mid-Level",
    dateOfHire: "2020-04-18",
    status: "On Leave",
    managerId: "E003",
    managerName: "Carol Williams",
    salary: 75000,
    bonusPercentage: 10,
    stockOptions: 2000,
    benefits: {
      health: true,
      dental: true,
      vision: false,
      retirement401k: true
    },
    ptoBalance: 8,
    vacationDaysTaken: 6,
    vacationDaysRemaining: 9,
    sickDaysTaken: 6,
    personalDaysTaken: 2,
    workSchedule: "Monday-Friday, 9:00 AM - 5:00 PM",
    remoteDaysPerWeek: 3,
    overtimeHours: 4,
    performanceRating: "Good",
    lastReviewDate: "2024-07-10",
    nextReviewDate: "2025-07-10",
    goals: [
      "Implement automated testing framework",
      "Reduce bug escape rate by 30%",
      "Complete ISTQB certification"
    ],
    skills: ["Test Automation", "Selenium", "Jest", "API Testing", "Agile"],
    certifications: ["ISTQB Foundation Level"],
    trainingsCompleted: ["Automation Testing Workshop", "Agile QA Practices"],
    taxStatus: "Single",
    backgroundCheckStatus: "Completed",
    ndaSignedDate: "2020-04-10",
    companyAssets: ['MacBook Pro 13"', "Access Card #A008"],
    notes: "Currently on medical leave, expected return date: 2025-01-15",
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Michigan",
        graduationYear: 2015,
        gpa: 3.4
      }
    ],
    languages: [{ language: "English", proficiency: "Native" }],
    workAuthorization: {
      status: "Citizen",
      sponsorshipRequired: false
    },
    onboarding: {
      orientationCompleted: true,
      orientationDate: "2020-04-20",
      equipmentSetup: true,
      systemAccessProvisioned: true,
      onboardingProgress: 100
    },
    offboarding: {
      rehireEligible: true
    },
    performanceManagement: {
      feedback360Completed: true,
      lastFeedback360Date: "2024-07-01",
      promotionHistory: [],
      disciplinaryActions: [],
      awards: []
    },
    workplaceAccommodations: {
      disabilityAccommodations: "Medical leave accommodation",
      workspacePreferences: "Flexible seating",
      parkingAssignment: "P2-A15",
      buildingAccessLevel: "Full Access"
    },
    organizationalDevelopment: {
      successionPlanningStatus: "Not Applicable",
      highPotential: false,
      flightRisk: "Low",
      mentorshipRole: "None",
      internalMobilityInterests: ["Senior QA Engineer", "QA Lead"],
      careerPathStage: "Mid-Level Professional"
    },
    engagementCulture: {
      engagementScore: 82,
      lastSurveyDate: "2024-09-01",
      satisfactionRating: 8,
      teamFitRating: 8,
      companyEventsAttended: 7
    },
    financialPayroll: {
      payrollHistory: [
        { date: "2024-09-30", amount: 6250, type: "Salary" },
        { date: "2024-08-31", amount: 6250, type: "Salary" }
      ],
      expenseReimbursements: 180,
      costCenter: "ENG-001"
    },
    complianceSecurity: {
      confidentialityAgreementSigned: true,
      nonCompeteClause: false,
      dataAccessPermissions: ["Test Environments", "Bug Tracking"],
      complianceTrainingCompleted: [
        "Security Awareness 2024",
        "QA Best Practices"
      ],
      policyAcknowledgments: ["Code of Conduct", "Testing Policy"]
    },
    analyticsMetrics: {
      punctualityScore: 93,
      productivityMetrics: {
        tasksCompleted: 98,
        averageTaskTime: 6.8,
        qualityScore: 87
      },
      projectCompletionRate: 88,
      absenteeismRate: 2.3
    }
  }
];

export function getEmployeeById(id: string): Employee | undefined {
  return mockEmployees.find((emp) => emp.employeeId === id);
}

export function getEmployeeStats() {
  const totalEmployees = mockEmployees.length;
  const activeEmployees = mockEmployees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const departments = new Set(mockEmployees.map((emp) => emp.department)).size;
  const averageSalary = Math.round(
    mockEmployees.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees
  );

  return {
    totalEmployees,
    activeEmployees,
    departments,
    averageSalary
  };
}
