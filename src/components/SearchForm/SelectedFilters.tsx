import { Button, Collapse, ListItemButton, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useFiltersConsumer from "../../hooks/useFiltersConsumer";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { removeEmptyValues } from "../../utils/utlils";

const SelectedFilters = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const { filters, clearFilters } = useFiltersConsumer();
  const FiltersList = removeEmptyValues(filters);
  if (isEmpty(filters)) {
    return null;
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
          <ListItem key="reset" disableGutters>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                clearFilters();
              }}
            >
              Clear Filters
            </Button>
          </ListItem>
        </Collapse>
      </List>
    </>
  );
};

export default SelectedFilters;
