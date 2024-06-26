import { Box, Skeleton } from "@mui/material";

const LoadingDataBox = () => {
  return (
    <Box
      className={`flex justify-start items-center gap-2 border border-gray p-4 rounded-md`}
    >
      <Skeleton variant="rectangular" className={`w-[48%]`} />
      <Skeleton variant="rectangular" className={`w-[48%]`} />
    </Box>
  );
};

export default LoadingDataBox;
