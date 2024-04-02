import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getCompanies } from "../store/companiesSlice";
import { AppDispatch, RootState } from "../store/store";
import CompaniesTable from "../tables/CompaniesTable/CompaniesTable";

const Companies = () => {
  const { companies, isLoading } = useSelector(
    (state: RootState) => state.companies
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    dispatch(getCompanies({}));
  }, [dispatch]);
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
