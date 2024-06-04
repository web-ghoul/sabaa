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
import { EmployeeTypes, OwnerTypes } from "../../types/store.types";
import TableMenuItem from "../TableMenuItem";

const EChannelsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    handleOpenDeleteModal,
    editableEChannelData,
    handleOpenEChannelModal,
  } = useContext(FormsContext);

  const handleView = () => {
    if (editableEChannelData) {
      if (editableEChannelData.owner) {
        const type = (editableEChannelData.owner as OwnerTypes).type;
        navigate(
          `${
            type === "owner"
              ? import.meta.env.VITE_OWNERS_ROUTE
              : type === "pro"
              ? import.meta.env.VITE_PROS_ROUTE
              : import.meta.env.VITE_CUSTOMERS_ROUTE
          }/${
            editableEChannelData &&
            (editableEChannelData.owner as OwnerTypes)._id
          }`
        );
      } else {
        navigate(
          `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
            editableEChannelData &&
            (editableEChannelData.employee as EmployeeTypes)._id
          }`
        );
      }
    }
  };

  const handleEdit = () => {
    if (editableEChannelData) {
      handleOpenEChannelModal("editEChannel");
    }
  };

  const handleDelete = () => {
    handleOpenDeleteModal("eChannel");
  };

  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      open={Boolean(openTableMenu)}
      elevation={3}
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
        handling={handleDelete}
      />
    </Menu>
  );
};

export default EChannelsTableMenu;
