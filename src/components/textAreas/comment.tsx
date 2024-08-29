import { Box, TextField, Typography } from "@mui/material";

function Comment() {
  return (
    <Box>
      <Typography>Would you like to add comment?</Typography>
      <TextField
        // label={label}
        variant="outlined"
        fullWidth
        disabled
        multiline
      />
    </Box>
  );
}

export default Comment;
