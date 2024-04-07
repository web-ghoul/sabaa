import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
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
  const { setQueries } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setQueries(allParams);
    dispatch(getOwners(allParams));
  }, []);
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
