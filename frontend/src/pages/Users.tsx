import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getUsers } from "../store/usersSlice";
import UsersTable from "../tables/UsersTable/UsersTable";

const Users = () => {
  const { users, isLoading } = useSelector((state: RootState) => state.users);
  const { pageContainerClasses, setQueries } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const { usersCounter } = useSelector(
    (state: RootState) => state.usersCounter
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setQueries(allParams);
    dispatch(getUsers(allParams));
  }, []);
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
