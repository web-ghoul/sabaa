import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getNatwasals } from "../store/natwasalsSlice";
import { AppDispatch, RootState } from "../store/store";
import NatwasalsTable from "../tables/NatwasalsTable/NatwasalsTable";

const Natwasals = () => {
  const { natwasals, isLoading } = useSelector(
    (state: RootState) => state.natwasals
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { natwasalsCounter } = useSelector(
    (state: RootState) => state.natwasalsCounter
  );

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getNatwasals(handleGetQueries()));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Natwasals
          </Typography>
        </BreadCrumbs>
        <Forms type={"natwasalsOptions"} />
        <NatwasalsTable
          count={natwasalsCounter}
          data={natwasals}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Natwasals;
