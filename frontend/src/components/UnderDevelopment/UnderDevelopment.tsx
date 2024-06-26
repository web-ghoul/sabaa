import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UnderDevelopment = () => {
  return (
    <Box className={`grid justify-center items-center gap-4`}>
      <Box
        className={`flex justify-center items-center rounded-lg h-[70vh] w-auto overflow-hidden`}
      >
        <LazyLoadImage
          src={`/images/under_development (${
            Math.floor(Math.random() * 3) + 1
          }).gif`}
          alt={"development..."}
        />
      </Box>
      <Typography variant="h3" className={`text-center !font-[700]`}>
        Under Development...
      </Typography>
    </Box>
  );
};

export default UnderDevelopment;
