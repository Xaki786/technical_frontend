import {
  Collapse,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useFiltersConsumer from "../../hooks/useFiltersConsumer";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const SelectedFilters = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const { filters } = useFiltersConsumer();
  const FiltersList = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v)
  );
  if (isEmpty(filters)) {
    return <Typography variant="h6">No Filter Selected</Typography>;
  }
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 200 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Selected Filters" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {Object.keys(FiltersList).map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={FiltersList[value]}
            >
              <ListItemText primary={`${value}`} />
            </ListItem>
          ))}
        </Collapse>
      </List>
    </>
  );
};

export default SelectedFilters;
