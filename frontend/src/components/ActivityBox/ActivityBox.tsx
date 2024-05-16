import { Box, Typography } from "@mui/material";
import { handleDate } from "../../functions/handleDate";
import { ActivityTypes } from "../../types/store.types";
import UserBox from "../UserBox/UserBox";

const ActivityBox = ({ activity }: { activity: ActivityTypes }) => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Box>
        <UserBox username={"webGhoul"} size={"medium"} />
        <Typography variant="body1" className={`!font-[600] text-primary`}>
          {handleDate(activity.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ActivityBox;
