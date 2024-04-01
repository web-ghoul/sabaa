import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Owners = () => {
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOwners({}));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`grid justify-stretch items-start content-start gap-6`}
      >
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Owners
          </Typography>
        </BreadCrumbs>
        <Forms type={"ownersOptions"} />
        <OwnersTable data={owners} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Owners;
