import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Selectables } from "../../utils/constants";
type CustomSelectProps = {
  item: string;
  handleChange: (field: string, value: string) => void;
  itemValue: string | number | null | undefined;
};
const CustomSelect = ({ item, handleChange, itemValue }: CustomSelectProps) => {
  const list = Selectables[item];
  return (
    <FormControl fullWidth>
      <InputLabel id={item}>
        {item[0].toUpperCase() + item.substring(1)}
      </InputLabel>
      <Select
        labelId={`${item}-label-id`}
        id={`${item}-select`}
        value={itemValue || ""}
        defaultValue=""
        name={item}
        label={item}
        onChange={(e) => handleChange(item, e.target.value as string)}
      >
        {list.map((listItem, i) => (
          <MenuItem key={`${listItem}-i`} value={listItem}>
            {typeof listItem === "string"
              ? listItem[0].toUpperCase() + listItem.substring(1)
              : listItem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
