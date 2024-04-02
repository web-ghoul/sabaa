import { Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { RootState } from "../store/store";
import UsersTable from "../tables/UsersTable/UsersTable";

const Users = () => {
  const { users, isLoading } = useSelector((state: RootState) => state.users);
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Users
          </Typography>
        </BreadCrumbs>
        <Forms type={"usersOptions"} />
        <UsersTable data={users} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Users;
