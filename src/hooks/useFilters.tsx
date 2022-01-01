import { useState } from "react";
import { Subscription } from "../utils/types";
const useFilters = () => {
  const [filters, setFilters] = useState<Subscription>({});
  const clearFilters = () => setFilters({});
  return { filters, changeFilters: setFilters, clearFilters };
};

export default useFilters;
