import useForm from "./useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { genderValues } from "../../utils/constants";
const SubscriptionForm = () => {
  const form = useForm();
  console.log({ form });
  const {
    values: { firstName, lastName, gender },
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = form;
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <h1>SubscriptionForm</h1>
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
                  label="Age"
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
            <Grid item xs={12} md={6}></Grid>
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
