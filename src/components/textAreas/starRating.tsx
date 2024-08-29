import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (rating) {
      handleRatingChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = hoverRating !== null ? i <= hoverRating : i <= rating;
      stars.push(
        <IconButton
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {isFilled ? (
            <StarIcon style={{ color: "#FFD700" }} />
          ) : (
            <StarBorderIcon style={{ color: "#FFD700" }} />
          )}
        </IconButton>
      );
    }
    return stars;
  };

  return (
    <Box>
      <Typography>Star Rating Component</Typography>
      <Box display="flex" justifyContent="center">
        {renderStars()}
      </Box>
    </Box>
  );
}

export default StarRating;
