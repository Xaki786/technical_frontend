import { useState } from "react";
import { Subscription } from "../utils/types";
const useFilters = () => {
  const [filters, setFilters] = useState<Subscription>({});
  return { filters, changeFilters: setFilters };
};

export default useFilters;
