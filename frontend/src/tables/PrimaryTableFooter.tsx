import { Box, Pagination } from "@mui/material";

const PrimaryTableFooter = () => {
  return (
    <Box className={`!grid justify-stretch items-center w-full p-4`}>
      <Pagination count={10} variant="outlined" color="primary" />
    </Box>
  );
};

export default PrimaryTableFooter;
