import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Owners = () => {
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const { pageContainerClasses } = useContext(AppContext);
  const { ownersCounter } = useSelector(
    (state: RootState) => state.ownersCounter
  );

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getOwners(handleGetQueries()));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Owners
          </Typography>
        </BreadCrumbs>
        <Forms type={"ownersOptions"} />
        <OwnersTable
          count={ownersCounter}
          data={owners}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Owners;
