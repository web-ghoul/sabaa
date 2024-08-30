import { VerifiedUserRounded } from "@mui/icons-material";
import { Box, Card, Skeleton } from "@mui/material";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import LoadingButton from "../ProfileDetails/LoadingButton";

const LoadingRoleCard = () => {
  return (
    <Card
      className={`!rounded-lg p-4 md:p-3 sm:!p-2 grid justify-stretch items-center w-full gap-14  !shadow-current`}
    >
      <Box className={`flex justify-between items-center gap-10`}>
        <VerifiedUserRounded className={`text-primary`} />
        <Skeleton
          variant="text"
          sx={{ width: `${handleRandomNumber(50, 100)}%` }}
        />
      </Box>
      <Box className={`flex justify-between items-center gap-10`}>
        <LoadingButton />
        <LoadingButton />
      </Box>
    </Card>
  );
};

export default LoadingRoleCard;
