import { createContext } from "react";
import useFilters from "../../hooks/useFilters";
import { IfiltersContext } from "../../utils/types";

export const FiltersContext = createContext<IfiltersContext>({
  filters: {},
  changeFilters: () => {},
  clearFilters: () => {},
});

export const FiltersProvier = ({ children }: { children: JSX.Element }) => {
  const { filters, changeFilters, clearFilters } = useFilters();

  return (
    <FiltersContext.Provider value={{ filters, changeFilters, clearFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
