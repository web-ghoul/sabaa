import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getUsers } from "../store/usersSlice";
import UsersTable from "../tables/UsersTable/UsersTable";
import useQueries from "../hooks/useQueries";

const Users = () => {
  const { users, isLoading } = useSelector((state: RootState) => state.users);
  const { pageContainerClasses } = useContext(AppContext);
  const { usersCounter } = useSelector(
    (state: RootState) => state.usersCounter
  );
  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getUsers(handleGetQueries()));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Users
          </Typography>
        </BreadCrumbs>
        <Forms type={"usersOptions"} />
        <UsersTable count={usersCounter} data={users} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Users;
