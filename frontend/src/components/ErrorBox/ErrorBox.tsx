import { Button, Paper, Typography, Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { HomeRounded, RefreshRounded } from "@mui/icons-material";
import { handleImage } from "../../functions/handleImage";

const ErrorBox = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Paper
      className={`grid justify-center items-center gap-6 p-8 text-center m-auto max-w-[600px] rounded-3xl shadow-xl`}
    >
      <Box className="w-full max-w-[400px] m-auto overflow-hidden rounded-2xl">
        <LazyLoadImage
          src={handleImage("images/error.jpg")}
          alt={"error"}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </Box>
      <Box className="grid gap-2">
        <Typography variant="h4" className="!font-[800] text-primary">
          Oops! Something went wrong
        </Typography>
        <Typography variant="h6" className="text-secondary opacity-80">
          The page you are looking for might have been moved or doesn't exist
          anymore.
        </Typography>
      </Box>
      <Box className="flex justify-center items-center gap-4 flex-wrap">
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeRounded />}
          onClick={handleHome}
          className="!rounded-full !px-8 !py-3 !font-[700] !shadow-lg hover:!scale-105 transition-all"
        >
          Go Home
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<RefreshRounded />}
          onClick={handleRefresh}
          className="!rounded-full !px-8 !py-3 !font-[700] hover:!bg-primary hover:!text-white transition-all"
        >
          Refresh Page
        </Button>
      </Box>
    </Paper>
  );
};

export default ErrorBox;
