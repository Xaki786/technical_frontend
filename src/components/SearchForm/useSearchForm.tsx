import Axios from "../../utils/Axios";
import { useQuery } from "react-query";
import { Api_Endpoints } from "../../utils/constants";
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
  return Axios.get(`${url}?${params}`);
};
const useSearchForm = ({ enabled, params }: SearchFormProps) => {
  let url = Api_Endpoints.get_all_subscriptions;
  if (params) {
    url = Api_Endpoints.search_subscriptions;
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
