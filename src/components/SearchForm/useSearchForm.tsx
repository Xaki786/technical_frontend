import axios from "axios";
import { useQuery } from "react-query";
type SearchFormProps = {
  enabled: boolean;
  params: string | null;
};
const searchSubscriptions = ({
  url,
  params,
}: {
  url: string;
  params: string | null;
}) => {
  return axios.get(`${url}?${params}`);
};
const useSearchForm = ({ enabled, params }: SearchFormProps) => {
  let url = "http://localhost:5000/api/subscription/all";
  if (params) {
    url = "http://localhost:5000/api/subscription/search";
  }

  return useQuery(
    ["search-form", params],
    () => searchSubscriptions({ url, params: params }),
    {
      enabled: enabled && params !== null,
    }
  );
};

export default useSearchForm;
