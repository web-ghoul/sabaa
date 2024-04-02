import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LogoTypes } from "../../types/components.types";

const Logo = ({ color, noTitle }: LogoTypes) => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
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
    </Box>
  );
};

export default Logo;
