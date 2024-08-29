import { Box, Button, Typography } from "@mui/material";

function NumberRating() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box>
      <Typography>
        How likely is it that you will recommend us to your family and friends?
      </Typography>
      <Box>
        {values.map((e, i) => (
          <Button disabled key={i} size="small" variant="outlined">
            {e}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default NumberRating;
