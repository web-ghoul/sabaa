import { Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { RootState } from "../store/store";
import NationalitiesTable from "../tables/NationalitiesTable/NationalitiesTable";

const Nationalities = () => {
  const { nationalities, isLoading } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Nationality
          </Typography>
        </BreadCrumbs>
        <Forms type={"nationalitiesOptions"} />
        <NationalitiesTable data={nationalities} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Nationalities;
