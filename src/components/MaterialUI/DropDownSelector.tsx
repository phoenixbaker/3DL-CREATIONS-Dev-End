import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectLabelsType = {
  selectors: string[];
  setSelected: (res: string) => void;
  selected: string;
  label: string;
};

export default function SelectLabels({
  selectors,
  label,
  selected,
  setSelected,
}: SelectLabelsType) {
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{label}</InputLabel>
        <Select value={selected} label={label} onChange={handleChange}>
          {selectors.map((sel) => (
            <MenuItem value={sel}>{sel}</MenuItem>
          ))}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}
