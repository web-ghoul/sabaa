import { Box, Skeleton } from "@mui/material";
import { handleRandomNumber } from "../../functions/handleRandomNumber";

const LoadingActivityBox = () => {
  return (
    <Box className={`flex justify-start items-start gap-2 sm:!gap-1`}>
      <Skeleton
        variant="circular"
        className={`flex justify-center items-center overflow-hidden rounded-full
          !w-[50px] !h-[50px] md:!w-[45px] md:!h-[45px] sm:!w-[40px] sm:!h-[40px]
        `}
      />
      <Box className={`grid justify-start items-center gap-2 sm:!gap-1`}>
        <Box className={`flex justify-start items-center gap-1 !capitalize`}>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton
                key={i}
                variant="text"
                sx={{ width: `${handleRandomNumber() * 10}px !important` }}
              />
            ))}
        </Box>
        <Skeleton
          variant="text"
          sx={{ width: `${handleRandomNumber() * 5}px !important` }}
        />
      </Box>
    </Box>
  );
};

export default LoadingActivityBox;
