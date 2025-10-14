import { create } from "zustand";
import { mockEmployees } from "../data/v0MockDataUser";
import type { EmployeeType } from "../data/v0MockDataUser";

type AppStoreType = {
  hrEmployees: EmployeeType[];
  employeeProfiles: EmployeeType[];
  setHrEmployees: (employees: EmployeeType[]) => void;
  setEmployeeProfiles: (employeeProfiles: EmployeeType[]) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  hrEmployees: mockEmployees,
  employeeProfiles: mockEmployees,
  // Actions
  setHrEmployees: (hrEmployees: EmployeeType[]) => set({ hrEmployees }),
  setEmployeeProfiles: (employeeProfiles: EmployeeType[]) =>
    set({ employeeProfiles })
  // API Calls
}));
