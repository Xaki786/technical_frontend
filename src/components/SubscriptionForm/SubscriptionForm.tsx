import useForm from "./useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CustomSelect from "../CustomSelect/CustomSelect";
const SubscriptionForm = () => {
  const form = useForm();
  const {
    values: {
      firstName,
      lastName,
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
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <h1>Subscription Form</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                type="lastName"
                value={lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
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
