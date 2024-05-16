import { Divider, Paper, Typography } from "@mui/material";
import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityBox from "../components/ActivityBox/ActivityBox";
import LoadingActivityBox from "../components/ActivityBox/LoadingActivityBox";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getActivities } from "../store/activitiesSlice";
import { AppDispatch, RootState } from "../store/store";

const Activities = () => {
  const { activities, isLoading } = useSelector(
    (state: RootState) => state.activities
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Activities
          </Typography>
        </BreadCrumbs>
        <Forms type={"activitiesOptions"} />
        <Paper
          className={`paper grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2`}
        >
          {!isLoading && activities
            ? activities.map((activity, i) => (
                <Fragment key={i}>
                  {i > 0 && <Divider />}
                  <ActivityBox activity={activity} />
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
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Activities;
