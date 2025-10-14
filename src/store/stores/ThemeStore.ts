import { create } from "zustand";
import type { DarkLightType } from "../../shared/types/globalTypes";

type ThemeStoreType = {
  theme: DarkLightType;
  setTheme: (theme: DarkLightType) => void;
};

export const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: "dark",
  // Actions
  setTheme: (theme: DarkLightType) => set({ theme })
  // API Calls
}));
