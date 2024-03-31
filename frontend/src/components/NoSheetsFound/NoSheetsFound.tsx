import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NoSheetsFound = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-4 p-4`}>
      <Box className={`w-[150px] h-[150px] m-auto`}>
        <LazyLoadImage alt={"empty_sheet"} src={"/images/empty_sheet.png"} />
      </Box>
      <Typography variant="h4" className={`!font-[700] text-center`}>
        No Sheets Found
      </Typography>
    </Box>
  );
};

export default NoSheetsFound;
