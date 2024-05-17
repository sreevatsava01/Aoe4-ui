import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { civilisation } from "../../constants/civilisation";

export default function BasicSelect(props) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  console.log({ props });

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={props.label}
          onChange={handleChange}
        >
          {props.civs && props.civs.length > 0 ? (
            props.civs.map((civ, index) => (
              <MenuItem key={index} value={civ}>
                {civ}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No options available</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
