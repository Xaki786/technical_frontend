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
import Loader from "../Loader/Loader";
import useFiltersConsumer from "../../hooks/useFiltersConsumer";
const SubscriptionForm = ({
  isFilter = false,
  handleClose = () => {},
}: {
  isFilter?: boolean;
  handleClose?: () => void;
}) => {
  const form = useForm();
  const { isLoading, mutate: postForm } = usePostForm();
  const {
    values,
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
      picture,
    },
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    errors,
    touched,
  } = form;
  const { changeFilters, clearFilters } = useFiltersConsumer();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    if ((!firstname || !lastname || !picture) && !isFilter) {
      return;
    }
    const subscription: { [key: string]: any } = {
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
      picture,
    };
    if (isFilter) {
      changeFilters(values);
      handleClose();
    } else {
      resetForm();
      postForm({ subscription });
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={isFilter ? 12 : 6} sx={{ p: isFilter ? 2 : 0 }}>
        <h2>{isFilter ? "Select Filters" : "Subscription Form"}</h2>
        <form onSubmit={handleFormSubmit}>
          {!isFilter && (
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
          )}
          {!isFilter && (
            <Grid container spacing={1} sx={{ mb: 2 }}>
              <Grid item xs={12} md={isFilter ? 12 : 6}>
                <TextField
                  fullWidth
                  id="picture"
                  name="picture"
                  type="file"
                  onChange={(e: any) => {
                    setFieldValue("picture", e.target.files[0]);
                  }}
                  error={touched.picture && Boolean(errors.picture)}
                  helperText={touched.picture && errors.picture}
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
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          )}
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
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"castings"}
                itemValue={castings}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                handleChange={setFieldValue}
                item={"gender"}
                itemValue={gender}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit">
            {isFilter ? "Filter" : "Submit"}
          </Button>
          {isFilter && (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => {
                resetForm();
                clearFilters();
              }}
            >
              Reset Filters
            </Button>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default SubscriptionForm;
