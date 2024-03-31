import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NoDataFound = () => {
  return (
    <Box className={`grid justify-center items-center gap-4`}>
      <Box className={`flex justify-center items-center w-[50px]`}>
        <LazyLoadImage src={"/images/no_data.png"} alt={"no data"} />
      </Box>
      <Typography variant="h6">No data found</Typography>
    </Box>
  );
};

export default NoDataFound;
