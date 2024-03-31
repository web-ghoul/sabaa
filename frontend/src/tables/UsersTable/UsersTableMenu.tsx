import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const UsersTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const { editableUserData, handleOpenDeleteModal, setDeleteType } =
    useContext(FormsContext);
  const navigate = useNavigate();

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_USERS_ROUTE}/${
        editableUserData && editableUserData._id
      }`
    );
  };

  const handleEdit = () => {
    navigate(
      `${import.meta.env.VITE_USERS_ROUTE}/${
        editableUserData && editableUserData._id
      }/edit`
    );
  };

  const handleDelete = () => {
    handleOpenDeleteModal();
    setDeleteType("user");
  };

  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      elevation={3}
      open={Boolean(openTableMenu)}
      onClose={handleCloseTableMenu}
      anchorEl={openTableMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <TableMenuItem
        icon={<VisibilityRounded />}
        title={"View"}
        handling={handleView}
      />
      <TableMenuItem
        icon={<EditRounded />}
        title={"Edit"}
        handling={handleEdit}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        color={`text-error`}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default UsersTableMenu;
