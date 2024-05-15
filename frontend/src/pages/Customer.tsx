import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getCustomer } from "../store/customerSlice";
import { AppDispatch, RootState } from "../store/store";
import CustomerProfile from "../tabs/CustomerProfile/CustomerProfile";

const Customer = () => {
  const { customer, isLoading, companies } = useSelector(
    (state: RootState) => state.customer
  );
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setCustomerTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getCustomer({ id }));
    }
    setCustomerTabsValue(0);
  }, [dispatch, id, setCustomerTabsValue]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_CUSTOMERS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Customers</Typography>
            </Link>
            <Typography variant="h6" key="2">
              {customer && customer.name}
            </Typography>
          </BreadCrumbs>
        </Box>
        <CustomerProfile
          companies={companies}
          customer={customer}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Customer;
