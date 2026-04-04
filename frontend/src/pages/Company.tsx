import { Box, Skeleton, Typography } from "@mui/material";
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
    (state: RootState) => state.company,
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

export const LoadingCompany = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={200} height={24} />
      <Box className="flex items-center gap-6">
        <Skeleton variant="circular" width={100} height={100} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" height={32} />
          <Skeleton variant="text" width="60%" height={24} />
        </Box>
      </Box>
      <Box className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={60} />
        ))}
      </Box>
      <Skeleton variant="rounded" height={200} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default Company;
