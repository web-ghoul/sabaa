import { Divider, Paper } from "@mui/material";
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
    <Paper
      className={`paper grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2`}
    >
      {!isLoading && data
        ? data.map((data, i) => (
            <Fragment key={i}>
              {i > 0 && <Divider />}
              <ActivityBox activity={data} />
            </Fragment>
          ))
        : Array(handleRandomNumber())
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>
                {i > 0 && <Divider />}
                <LoadingActivityBox />
              </Fragment>
            ))}
    </Paper>
  );
};

export default ActivitiesSection;
