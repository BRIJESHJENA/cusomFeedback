import { Box, TextField, Typography } from "@mui/material";

function Singleline() {
  return (
    <Box>
      <Typography>
        Do you have any suggestions to improve our website?
      </Typography>
      <TextField variant="outlined" fullWidth disabled />
    </Box>
  );
}

export default Singleline;
