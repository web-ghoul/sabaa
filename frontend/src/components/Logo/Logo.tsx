import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LogoTypes } from "../../types/components.types";

const Logo = ({ color }: LogoTypes) => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Box className={`rounded-full overflow-hidden`}>
        <LazyLoadImage
          src="/images/icon_fit.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </Box>
      <Typography
        variant="h5"
        className={`!font-[700] ${
          color === "light" ? "text-white" : "text-secondary"
        }`}
      >
        SABAA
      </Typography>
    </Box>
  );
};

export default Logo;
