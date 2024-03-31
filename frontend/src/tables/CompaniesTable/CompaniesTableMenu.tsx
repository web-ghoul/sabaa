<<<<<<< HEAD
import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
=======
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import TableMenuItem from "../TableMenuItem";

const CompaniesTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
<<<<<<< HEAD
  const navigate = useNavigate();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const {
    handleOpenEditCompanyModal,
    handleOpenDeleteModal,
    editableCompanyData,
  } = useContext(FormsContext);
  const { handleDeleteCompanyFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_COMPANIES_ROUTE}/${
        editableCompanyData && editableCompanyData._id
      }`
    );
  };

  const handleEdit = () => {
    if (sheet) {
      handleOpenEditCompanyModal();
    } else {
      navigate(
        `${import.meta.env.VITE_COMPANIES_ROUTE}/${
          editableCompanyData && editableCompanyData._id
        }/edit`
      );
    }
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteCompanyFromSheet();
    } else {
      handleOpenDeleteModal();
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`);
  }, [pathname, sheet]);
=======
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
        handling={handleDelete}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      />
    </Menu>
  );
};

export default CompaniesTableMenu;
