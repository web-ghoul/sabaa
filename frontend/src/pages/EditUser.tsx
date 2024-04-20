import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch } from "../store/store";
import { getUser } from "../store/userSlice";

const EditUser = () => {
  const { pageContainerClasses } = useContext(AppContext);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getUser({ id }));
    }
  }, [id, dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_USERS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Users</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Edit User
          </Typography>
        </BreadCrumbs>
        <Forms type={"editUser"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditUser;
