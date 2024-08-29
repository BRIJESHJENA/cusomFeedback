import { Box, Radio, Typography } from "@mui/material";

function RadioButton() {
  return (
    <Box>
      <Typography>Multiple choice - 1 answer</Typography>
      <Box>
        <Radio
          //   checked={selectedValue === "a"}
          //   onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          //   checked={selectedValue === "a"}
          //   onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          //   checked={selectedValue === "a"}
          //   onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
      </Box>
    </Box>
  );
}

export default RadioButton;
