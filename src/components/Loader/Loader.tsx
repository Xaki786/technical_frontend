import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
export default function Loader() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box sx={{ display: "flex", mt: "50px" }}>
        <CircularProgress />
      </Box>
    </Grid>
  );
}
