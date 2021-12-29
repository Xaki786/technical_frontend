import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
const useForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: new Date(),
      profession: "",
      shoesize: "",
      hairColor: "",
      hairLength: "",
      braSize: "",
      waist: "",
      height: "",
      weight: "",
      castings: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return formik;
};

export default useForm;
