import { Box, Button, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { LogoTypes } from "../../types/components.types";

const Logo = ({ color, noTitle }: LogoTypes) => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
  };
  return (
    <Button
      className={`flex justify-start items-center gap-2 w-fit !p-0`}
      onClick={handleGoHome}
    >
      <Box
        className={`rounded-full overflow-hidden w-[40px] h-[40px] md:w-[35px] md:h-[35px] sm:!w-[35px] sm:!h-[35px]`}
      >
        <LazyLoadImage src="/images/icon_fit.png" alt="Logo" />
      </Box>
      {!noTitle && (
        <Typography
          variant="h5"
          className={`!font-[700] ${
            color === "light" ? "text-white" : "text-secondary"
          }`}
        >
          SABAA
        </Typography>
      )}
    </Button>
  );
};

export default Logo;
