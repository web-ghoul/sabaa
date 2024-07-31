import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getCompany } from "../store/companySlice";
import { AppDispatch, RootState } from "../store/store";
import CompanyProfile from "../tabs/CompanyProfile/CompanyProfile";
const Company = () => {
  const { company, isLoading, activities } = useSelector(
    (state: RootState) => state.company
  );
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setCompanyTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getCompany({ id }));
    }
    setCompanyTabsValue(0);
  }, [dispatch, id, setCompanyTabsValue]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Companies</Typography>
          </Link>
          <Typography variant="h6" key="2">
            {company && company.name}
          </Typography>
        </BreadCrumbs>
        <CompanyProfile
          company={company}
          isLoading={isLoading}
          activities={activities}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Company;
