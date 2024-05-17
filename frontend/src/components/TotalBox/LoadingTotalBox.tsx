import { Skeleton } from "@mui/material";

const LoadingTotalBox = () => {
  return (
    <Skeleton
      className={`!h-[160px] md:!h-[140px] sm:!h-[120px] rounded-md sm:!rounded-sm`}
      variant="rectangular"
    />
  );
};

export default LoadingTotalBox;
