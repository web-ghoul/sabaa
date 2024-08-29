import { Skeleton } from "@mui/material";

const LoadingSelectorView = () => {
  return (
    <Skeleton
      variant="rectangular"
      className={`!h-[45px] !rounded-sm !w-full`}
    />
  );
};

export default LoadingSelectorView;
