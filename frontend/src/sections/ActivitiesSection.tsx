import { Box, Divider } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import ActivityBox from "../components/ActivityBox/ActivityBox";
import LoadingActivityBox from "../components/ActivityBox/LoadingActivityBox";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { ActivityTypes } from "../types/store.types";

const ActivitiesSection = ({
  data,
  isLoading,
}: {
  data: ActivityTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <Box
      className={`grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2`}
    >
      {!isLoading && data
        ? data.map((activity, i) => (
            <Fragment key={i}>
              <Divider />
              <ActivityBox activity={activity} />
            </Fragment>
          ))
        : Array(handleRandomNumber())
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>
                <Divider />
                <LoadingActivityBox />
              </Fragment>
            ))}
    </Box>
  );
};

export default ActivitiesSection;
