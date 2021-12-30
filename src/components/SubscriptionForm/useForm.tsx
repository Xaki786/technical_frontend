import { FormikProps, useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { Subscription } from "../../utils/types";
const useForm = () => {
  const formik: FormikProps<Subscription> = useFormik<Subscription>({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      dob: null,
      profession: "",
      shoesize: null,
      hairColor: "",
      hairLength: "",
      braSize: "",
      waist: null,
      height: null,
      weight: null,
      castings: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  return formik;
};

export default useForm;
