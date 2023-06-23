import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField.jsx";
import TextFieldComp from "../components/TextFieldComp.jsx";
import useAxios from "../hooks/useAxios.js";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  // if (loading) {
  //   return (
  //     <Box mt={20}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" fontWeight="bold">
          Quiz App
        </Typography>
        {loading ? (
          <Box mt={20}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <SelectField
              options={response?.trivia_categories}
              label="Category"
            />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3} width="100%">
              <Button fullWidth variant="contained" type="submit">
                GET STARTED
              </Button>
            </Box>
          </>
        )}
      </form>
    </>
  );
};

export default Settings;
