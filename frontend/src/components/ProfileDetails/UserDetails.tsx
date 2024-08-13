import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { RootState } from "../../store/store";
import { UserTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const UserDetails = ({
  data,
  title,
  classes,
}: {
  data: UserTypes;
  title: string;
  classes: { [key: string]: string };
}) => {
  const { user } = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);
  const { id } = useParams();
  const { setEditableUserData } = useContext(FormsContext);
  const { handleOpenDeleteModal, handleOpenUserModal } =
    useContext(ModalsContext);
  //User
  const handleEditUser = () => {
    if (id) {
      setEditableUserData(user);
    } else {
      setEditableUserData(auth.user);
    }
    handleOpenUserModal("editUser");
  };
  const handleDeleteUser = () => {
    handleOpenDeleteModal("user");
    setEditableUserData(user);
  };
  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h5"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as UserTypes).avatar}
          username={(data as UserTypes).name}
          size={"3xlarge"}
          head={"h4"}
        />
        <Box className={classes.profileButtonsClasses}>
          <Button
            title={"Edit"}
            handling={handleEditUser}
            bg={"!bg-green-500"}
          />
          <Button
            title={"Delete"}
            handling={handleDeleteUser}
            bg={"!bg-red-500"}
          />
        </Box>
      </Box>
      <Box className={classes.profileInfoClasses}>
        <DataBox title={"Email"} value={(data as UserTypes).email} />
        <DataBox title={"Phone"} value={(data as UserTypes).phone} />
        <DataBox title={"Role"} value={(data as UserTypes).role} />
        <DataBox
          title={"Status"}
          value={<StatusBox status={(data as UserTypes).status} />}
        />
        {(data as UserTypes).createdAt && (
          <DataBox
            title={"Created At"}
            value={handleDate((data as UserTypes).createdAt, true)}
          />
        )}
      </Box>
    </Paper>
  );
};

export default UserDetails;
