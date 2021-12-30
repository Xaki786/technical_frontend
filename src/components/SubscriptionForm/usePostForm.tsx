import { useMutation } from "react-query";
import { Subscription } from "../../utils/types";
import axios from "axios";
type postFormProps = {
  url: string;
  subscription: Subscription;
};
const postForm = (url: string, subscription: Subscription): Promise<Response> =>
  axios.post(url, subscription);
const usePostForm = () => {
//   const url = "http://localhost:5000/api/subscription";
  const url = "https://technical-backend.herokuapp.com/api/subscription";
  return useMutation(({ subscription }: { subscription: Subscription }) =>
    postForm(url, subscription)
  );
};

export default usePostForm;
