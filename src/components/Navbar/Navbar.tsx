import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { routes } from "../../routes/routes";
import CompanyName from "../CompanyName/CompanyName";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            <CompanyName />
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {routes.map(({ name, id, url }) => (
              <Button
                key={id}
                onClick={() => history.push(url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
