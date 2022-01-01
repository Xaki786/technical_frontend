import Axios from "../../utils/Axios";
import { useQuery } from "react-query";
import { Api_Endpoints } from "../../utils/constants";
import { Subscription } from "../../utils/types";
import isEmpty from "lodash/isEmpty";
import qString from "query-string";
import { removeEmptyValues } from "../../utils/utlils";
type SearchFormProps = {
  enabled: boolean;
  params: string | null;
  filters: Subscription;
};
const searchSubscriptions = (url: string) => {
  return Axios.get(url);
};
const useSearchForm = ({ enabled, params, filters }: SearchFormProps) => {
  let url = Api_Endpoints.get_all_subscriptions;
  let query = qString.stringify(removeEmptyValues(filters));
  if (!isEmpty(filters)) {
    url = `${url}?${query}`;
  }
  if (params) {
    url = `${Api_Endpoints.search_subscriptions}`;
    url = `${url}?search=${params}`;
    if (!isEmpty(filters)) {
      url = `${url}&${query}`;
    }
  }
  return useQuery(["search-form", params], () => searchSubscriptions(url), {
    enabled: enabled && params !== null,
  });
};

export default useSearchForm;
