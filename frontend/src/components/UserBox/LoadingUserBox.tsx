import { Box, Skeleton } from "@mui/material";

const LoadingUserBox = ({ size }: { size: string }) => {
  return (
    <Box className={`flex justify-stretch items-center gap-2`}>
      <Box
        className={`flex justify-center items-center overflow-hidden rounded-full ${
          size === "3xlarge"
            ? "w-[110px] h-[110px] md:w-[45px] md:h-[45px] sm:w-[40px] sm:h-[40px]"
            : size === "2xlarge"
            ? "w-[90px] h-[90px] md:w-[45px] md:h-[45px] sm:w-[40px] sm:h-[40px]"
            : size === "xlarge"
            ? "w-[70px] h-[70px] md:w-[45px] md:h-[45px] sm:w-[40px] sm:h-[40px]"
            : size === "large"
            ? "w-[50px] h-[50px] md:w-[45px] md:h-[45px] sm:w-[40px] sm:h-[40px]"
            : size === "medium"
            ? "w-[40px] h-[40px] md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px]"
            : "w-[30px] h-[30px] md:w-[28px] md:h-[28px] sm:w-[25px] sm:h-[25px]"
        }`}
      >
        <Skeleton variant={"circular"} width={"100%"} height={"100%"} />
      </Box>
      <Skeleton variant={"rectangular"} width={100} />
    </Box>
  );
};

export default LoadingUserBox;
