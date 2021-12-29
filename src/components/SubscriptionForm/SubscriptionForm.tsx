import useForm from "./useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import {
  braSizeValues,
  castingsValues,
  genderValues,
  hairColorValues,
  hairLengthValues,
  heightValues,
  professionsValues,
  shoesizeValues,
  waistValues,
  weightValues,
} from "../../utils/constants";
const SubscriptionForm = () => {
  const form = useForm();
  console.log({ form });
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
              <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender-select"
                  value={gender}
                  name="gender"
                  label="Gender"
                  onChange={handleChange}
                >
                  {genderValues.map((gv) => (
                    <MenuItem key={gv} value={gv}>
                      {gv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newValue) => {
                    setFieldValue("dob", newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth/>}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="profession">Profession</InputLabel>
                <Select
                  labelId="profession-label"
                  id="profession-select"
                  value={profession}
                  name="profession"
                  label="Profession"
                  onChange={handleChange}
                >
                  {professionsValues.map((pv) => (
                    <MenuItem key={pv} value={pv}>
                      {pv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="shoesize">Shoe Size</InputLabel>
                <Select
                  labelId="shoesize-label"
                  id="shoesize-select"
                  value={shoesize}
                  name="shoesize"
                  label="shoesize"
                  onChange={handleChange}
                >
                  {shoesizeValues.map((sv) => (
                    <MenuItem key={sv} value={sv}>
                      {sv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="hairColor">Hair Color</InputLabel>
                <Select
                  labelId="hairColor-label"
                  id="hairColor-select"
                  value={hairColor}
                  name="hairColor"
                  label="hairColor"
                  onChange={handleChange}
                >
                  {hairColorValues.map((hc) => (
                    <MenuItem key={hc} value={hc}>
                      {hc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="hairLength">Hair Color</InputLabel>
                <Select
                  labelId="hairLength-label"
                  id="hairLength-select"
                  value={hairLength}
                  name="hairLength"
                  label="hairLength"
                  onChange={handleChange}
                >
                  {hairLengthValues.map((hl) => (
                    <MenuItem key={hl} value={hl}>
                      {hl}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="braSize">Bra Size</InputLabel>
                <Select
                  labelId="braSize-label"
                  id="braSize-select"
                  value={braSize}
                  name="braSize"
                  label="braSize"
                  onChange={handleChange}
                >
                  {braSizeValues.map((hl) => (
                    <MenuItem key={hl} value={hl}>
                      {hl}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="waist">Waist Size</InputLabel>
                <Select
                  labelId="waist-label"
                  id="waist-select"
                  value={waist}
                  name="waist"
                  label="Waist Size"
                  onChange={handleChange}
                >
                  {waistValues.map((ws, i) => (
                    <MenuItem key={`${ws}-${i}`} value={ws}>
                      {ws}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="height">Height</InputLabel>
                <Select
                  labelId="height-label"
                  id="height-select"
                  value={height}
                  name="height"
                  label="height"
                  onChange={handleChange}
                >
                  {heightValues.map((hv, i) => (
                    <MenuItem key={`${hv}-${i}`} value={hv}>
                      {hv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="weight">Weight</InputLabel>
                <Select
                  labelId="weight-label"
                  id="weight-select"
                  value={weight}
                  name="weight"
                  label="weight"
                  onChange={handleChange}
                >
                  {weightValues.map((wv, i) => (
                    <MenuItem key={`${wv}-${i}`} value={wv}>
                      {wv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="castings">Castings</InputLabel>
                <Select
                  labelId="castings-label"
                  id="castings-select"
                  value={castings}
                  name="castings"
                  label="castings"
                  onChange={handleChange}
                >
                  {castingsValues.map((wv, i) => (
                    <MenuItem key={`${wv}-${i}`} value={wv}>
                      {wv}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
