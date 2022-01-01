import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTheme } from "@mui/material/styles";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";

export default function Filters() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FilterListIcon onClick={handleClickOpen} color="primary"/>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <SubscriptionForm isFilter={true} handleClose={handleClose}/>
        <DialogTitle id="responsive-dialog-title">
          Select various filters to refine models
        </DialogTitle>
      </Dialog>
    </div>
  );
}
