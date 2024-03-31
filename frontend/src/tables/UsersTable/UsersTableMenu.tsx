<<<<<<< HEAD
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
=======
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import TableMenuItem from "../TableMenuItem";

const UsersTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
<<<<<<< HEAD
  const { editableUserData, handleOpenDeleteModal } = useContext(FormsContext);
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

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
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
=======
      <TableMenuItem icon={<EditRounded />} title={"Edit"} />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        color={`text-error`}
<<<<<<< HEAD
        handling={handleOpenDeleteModal}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      />
    </Menu>
  );
};

export default UsersTableMenu;
