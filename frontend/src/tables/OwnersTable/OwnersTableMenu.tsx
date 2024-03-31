import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
=======
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import TableMenuItem from "../TableMenuItem";

const OwnersTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
<<<<<<< HEAD
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleOpenEditOwnerModal, handleOpenDeleteModal, editableOwnerData } =
    useContext(FormsContext);
  const { handleDeleteOwnerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_OWNERS_ROUTE}/${
        editableOwnerData && editableOwnerData._id
      }`
    );
  };

  const handleEdit = () => {
    if (sheet) {
      handleOpenEditOwnerModal();
    } else {
      navigate(
        `${import.meta.env.VITE_OWNERS_ROUTE}/${
          editableOwnerData && editableOwnerData._id
        }/edit`
      );
    }
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteOwnerFromSheet();
    } else {
      handleOpenDeleteModal();
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`);
  }, [pathname, sheet]);
=======
  const navigate = useNavigate();

  const handleView = () => {};

  const handleEdit = () => {
    navigate(`${import.meta.env.VITE_EDIT_OWNER_ROUTE}`);
  };

  const handleDelete = () => {};
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

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
<<<<<<< HEAD
      {!sheet && (
        <TableMenuItem
          icon={<VisibilityRounded />}
          title={"View"}
          handling={handleView}
        />
      )}
=======
      <TableMenuItem
        icon={<VisibilityRounded />}
        title={"View"}
        color={""}
        handling={handleView}
      />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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

export default OwnersTableMenu;
