import { Skeleton } from "@mui/material";

const LoadingButton = () => {
  return <Skeleton variant="rectangular" className={`w-[100px] !h-[35px]`} />;
};

export default LoadingButton;
