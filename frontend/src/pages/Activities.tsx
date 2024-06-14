import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import ActivitiesSection from "../sections/ActivitiesSection";
import { getActivities } from "../store/activitiesSlice";
import { AppDispatch, RootState } from "../store/store";

const Activities = () => {
  const { activities, isLoading } = useSelector(
    (state: RootState) => state.activities
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    dispatch(getActivities(allParams));
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
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Activities;
