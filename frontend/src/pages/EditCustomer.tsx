import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getCustomer } from "../store/customerSlice";
import { AppDispatch } from "../store/store";

const EditCustomer = () => {
  const { pageContainerClasses } = useContext(AppContext);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getCustomer({ id }));
    }
  }, [id, dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_CUSTOMERS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Customers</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Edit Customer
          </Typography>
        </BreadCrumbs>
        <Forms type={"editCustomer"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditCustomer;
