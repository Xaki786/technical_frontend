import { FormEvent } from "react";
import useForm from "./useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CustomSelect from "../CustomSelect/CustomSelect";
import usePostForm from "./usePostForm";
const SubscriptionForm = () => {
  const form = useForm();
  const { isLoading, mutate: postForm } = usePostForm();
  const {
    values: {
      firstname,
      lastname,
      gender,
      profession,
      shoesize,
      hairColor,
      hairLength,
      braSize,
      waist,
      height,
      weight,
      castings,
      dob,
    },
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = form;
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    const subscription = {
      firstname,
      lastname,
      gender,
      profession,
      shoesize,
      hairColor,
      hairLength,
      braSize,
      waist,
      height,
      weight,
      castings,
      dob,
    };
    postForm({ subscription });
  };
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <h1>Subscription Form</h1>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="firstname"
                name="firstname"
                label="First Name"
                value={firstname}
                onChange={handleChange}
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={touched.firstname && errors.firstname}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="lastname"
                name="lastname"
                label="Last Name"
                type="lastname"
                value={lastname}
                onChange={handleChange}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"gender"}
                itemValue={gender}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newValue) => {
                    setFieldValue("dob", newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"profession"}
                itemValue={profession}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"shoesize"}
                itemValue={shoesize}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"hairColor"}
                itemValue={hairColor}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"hairLength"}
                itemValue={hairLength}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"braSize"}
                itemValue={braSize}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"waist"}
                itemValue={waist}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"height"}
                itemValue={height}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"weight"}
                itemValue={weight}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={12}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"castings"}
                itemValue={castings}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SubscriptionForm;
