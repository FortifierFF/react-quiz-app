import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./pages/Settings.jsx";
import Questions from "./pages/Questions.jsx";
import FinalScreen from "./pages/FinalScreen.jsx";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Settings /> },
    { path: "/questions", element: <Questions /> },
    { path: "/score", element: <FinalScreen /> },
  ]);

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <RouterProvider router={router} />
      </Box>
    </Container>
  );
}

export default App;
