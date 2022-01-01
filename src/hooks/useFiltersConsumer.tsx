import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext/FiltersProvider";
import { IfiltersContext } from "../utils/types";

const useFiltersConsumer = () => {
  const context: IfiltersContext = useContext(FiltersContext);
  if (!context) {
    throw new Error("Filters should be used inside it's provider");
  }
  return context;
};

export default useFiltersConsumer;
