import { create } from "zustand";

type AppStoreType = {
  hrEmployees: string[];
  employeeProfiles: string[];
  setHrEmployees: (employees: string[]) => void;
  setEmployeeProfiles: (employeeProfiles: string[]) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  hrEmployees: [],
  employeeProfiles: [],
  // Actions
  setHrEmployees: (hrEmployees: string[]) => set({ hrEmployees }),
  setEmployeeProfiles: (employeeProfiles: string[]) => set({ employeeProfiles })
  // API Calls
}));
