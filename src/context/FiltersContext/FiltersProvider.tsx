import { createContext } from "react";
import useFilters from "../../hooks/useFilters";
import { IfiltersContext } from "../../utils/types";

export const FiltersContext = createContext<IfiltersContext>({
  filters: {},
  changeFilters: () => {},
});

export const FiltersProvier = ({ children }: { children: JSX.Element }) => {
  const { filters, changeFilters } = useFilters();

  return (
    <FiltersContext.Provider value={{ filters, changeFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
