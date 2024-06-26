import { Box, Paper, Skeleton } from "@mui/material";
import LoadingUserBox from "../UserBox/LoadingUserBox";
import LoadingButton from "./LoadingButton";
import LoadingDataBox from "./LoadingDataBox";

const LoadingProfileDetails = () => {
  return (
    <Paper
      className={`grid justify-stretch items-center gap-10 p-6 !rounded-xl`}
      elevation={11}
    >
      <Skeleton variant={"text"} className={`w-[35%]`} />
      <Box className={`flex justify-between items-center gap-6`}>
        <LoadingUserBox size={"3xlarge"} />
        <Box className={`flex justify-end items-center gap-2`}>
          <LoadingButton />
          <LoadingButton />
        </Box>
      </Box>
      <Box className={`grid justify-start items-center gap-8 grid-cols-2 `}>
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
        <LoadingDataBox />
      </Box>
    </Paper>
  );
};

export default LoadingProfileDetails;
