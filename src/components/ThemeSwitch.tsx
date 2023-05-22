import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const ThemeSwitch = () => {
  const [checked, setchecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setchecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch checked={checked} onChange={handleChange} size="small" />
        }
      />
    </Box>
  );
};

export default ThemeSwitch;
