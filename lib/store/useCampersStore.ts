import { create } from "zustand";

interface camperFilters {
  location?: string,
  AC?: boolean,
  transmission?: string,
  kitchen?: boolean,
  TV?: boolean,
  bathroom?: boolean,
  form?: "van" | "fullyIntegrated" | "alcove";
  page: number,

  setFilters: (filters: Partial<camperFilters>) => void;
  resetFilters: () => void;
  nextPage: () => void
};

const initialFilters = {
  location: undefined,
  AC: undefined,
  transmission: undefined,
  kitchen: undefined,
  TV: undefined,
  bathroom: undefined,
  form: undefined,
  page: 1,
};

export const useCampersStore = create<camperFilters>((set) => ({
 ...initialFilters,

  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
  resetFilters: () => set({
...initialFilters,
  }),

  nextPage: () => set((state) => ({ page: state.page + 1 })),
}));
