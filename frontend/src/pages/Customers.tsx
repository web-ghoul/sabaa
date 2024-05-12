import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getCustomers } from "../store/customersSlice";
import { AppDispatch, RootState } from "../store/store";
import CustomersTable from "../tables/CustomersTable/CustomersTable";
const Customers = () => {
  const { customers, isLoading } = useSelector(
    (state: RootState) => state.customers
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { customersCounter } = useSelector(
    (state: RootState) => state.customersCounter
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getCustomers({}));
    }
  }, [dispatch, searchParams]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Customers
          </Typography>
        </BreadCrumbs>
        <Forms type={"ownersOptions"} />
        <CustomersTable
          count={customersCounter}
          data={customers}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Customers;
