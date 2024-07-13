import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getTasheels } from "../store/tasheelsSlice";
import TasheelsTable from "../tables/TasheelsTable/TasheelsTable";

const Tasheels = () => {
  const { tasheels, isLoading } = useSelector(
    (state: RootState) => state.tasheels
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { tasheelsCounter } = useSelector(
    (state: RootState) => state.tasheelsCounter
  );

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getTasheels(handleGetQueries()));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Tasheels
          </Typography>
        </BreadCrumbs>
        <Forms type={"tasheelsOptions"} />
        <TasheelsTable
          count={tasheelsCounter}
          data={tasheels}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Tasheels;
