import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

function ExpressionRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

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
  const smileIcons = [
    SentimentVeryDissatisfiedIcon,
    SentimentDissatisfiedIcon,
    SentimentSatisfiedIcon,
    SentimentSatisfiedAltIcon,
    SentimentVerySatisfiedIcon,
  ];

  const renderSmiles = () => {
    const smiles = [];
    for (let i = 1; i <= 5; i++) {
      const Icon = smileIcons[i - 1];
      smiles.push(
        <IconButton
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            style={{
              color:
                i <= (hoverRating !== null ? hoverRating : rating)
                  ? "#FFD700"
                  : "#C0C0C0",
              fontSize: 40,
            }}
          />
        </IconButton>
      );
    }
    return smiles;
  };

  return (
    <div>
      <Typography>Smile Rating Component</Typography>
      <Box display="flex" justifyContent="center">
        {renderSmiles()}
      </Box>
    </div>
  );
}

export default ExpressionRating;
