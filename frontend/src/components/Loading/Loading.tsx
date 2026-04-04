import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        minHeight: "200px",
      }}
    >
      <CircularProgress size={50} thickness={4} color="primary" />
    </Box>
  );
};

export default Loading;
