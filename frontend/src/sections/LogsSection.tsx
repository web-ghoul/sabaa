import { Box, Divider } from "@mui/material";
import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityBox from "../components/ActivityBox/ActivityBox";
import LoadingActivityBox from "../components/ActivityBox/LoadingActivityBox";
import Title from "../components/Title/Title";
import { FormsContext } from "../contexts/FormsContext";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { getActivities } from "../store/activitiesSlice";
import { AppDispatch, RootState } from "../store/store";

const LogsSection = () => {
  const { editableTransactionData } = useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { activities, isLoading } = useSelector(
    (state: RootState) => state.activities
  );

  useEffect(() => {
    if (editableTransactionData) {
      dispatch(getActivities({ id: editableTransactionData._id, limit: -1 }));
    }
  }, [dispatch, editableTransactionData]);

  return (
    <Box className={`grid justify-stretch items-center gap-10`}>
      <Title title={"Transaction Logs"} />
      <Box className={`grid justify-stretch items-center gap-4`}>
        {!isLoading && activities
          ? activities.map((data, i) => (
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
      </Box>
    </Box>
  );
};

export default LogsSection;
