import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions.js";

const FinalScreen = () => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to start !
      </Button>
    </Box>
  );
};

export default FinalScreen;
