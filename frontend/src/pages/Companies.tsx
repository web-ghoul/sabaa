import { Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { RootState } from "../store/store";
import CompaniesTable from "../tables/CompaniesTable/CompaniesTable";

const Companies = () => {
  const { companies, isLoading } = useSelector(
    (state: RootState) => state.companies
  );
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Companies
          </Typography>
        </BreadCrumbs>
        <Forms type={"companiesOptions"} />
        <CompaniesTable data={companies} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Companies;
