import { Divider, Pagination, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import ActivityBox from "../components/ActivityBox/ActivityBox";
import LoadingActivityBox from "../components/ActivityBox/LoadingActivityBox";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { getActivitiesCounter } from "../store/activitiesCounterSlice";
import { getActivities } from "../store/activitiesSlice";
import { AppDispatch, RootState } from "../store/store";
import { ActivityTypes } from "../types/store.types";

const ActivitiesSection = ({
  data,
  isLoading,
}: {
  data: ActivityTypes[] | null;
  isLoading: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { activitiesCounter } = useSelector(
    (state: RootState) => state.activitiesCounter
  );
  const [page, setPage] = useState(1);
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(getActivities({ page: page - 1 }));
  };

  useEffect(() => {
    dispatch(getActivitiesCounter());
  }, [dispatch]);

  return (
    <Paper
      className={`paper grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2`}
    >
      {!isLoading && data
        ? data.slice(10 * page - 10, 10 * page).map((data, i) => (
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
      <Pagination
        count={activitiesCounter || 10}
        variant="outlined"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default ActivitiesSection;
