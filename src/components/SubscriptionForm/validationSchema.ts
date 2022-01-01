import * as yup from "yup";
export const validationSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  picture: yup.mixed().required("Picture is required")
});
