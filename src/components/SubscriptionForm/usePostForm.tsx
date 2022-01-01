import { useMutation } from "react-query";
import { Subscription } from "../../utils/types";
import Axios from "../../utils/Axios";
import { Api_Endpoints } from "../../utils/constants";
import { removeEmptyValues } from "../../utils/utlils";
const postForm = (
  url: string,
  subscription: Subscription
): Promise<Response> => {
  const formData = new FormData();
  const clearSubscription = removeEmptyValues(subscription);
  Object.keys(clearSubscription).forEach((s) => {
    if (s !== "picture") {
      formData.append(s, clearSubscription[s]);
    }
  });
  formData.append("picture", clearSubscription.picture as Blob);
  return Axios.post(url, formData);
};
const usePostForm = () => {
  const url = Api_Endpoints.submit_form;
  return useMutation(({ subscription }: { subscription: Subscription }) =>
    postForm(url, subscription)
  );
};

export default usePostForm;
