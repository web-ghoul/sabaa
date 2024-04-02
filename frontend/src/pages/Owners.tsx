import { Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Owners = () => {
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
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
