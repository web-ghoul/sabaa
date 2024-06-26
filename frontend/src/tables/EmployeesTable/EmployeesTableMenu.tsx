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
import { ModalsContext } from "../../contexts/ModalsContext";
import TableMenuItem from "../TableMenuItem";

const EmployeesTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const navigate = useNavigate();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const { editableEmployeeData } = useContext(FormsContext);
  const { handleOpenDeleteModal, handleOpenEmployeeModal } =
    useContext(ModalsContext);
  const { handleDeleteEmployeeFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
        editableEmployeeData && editableEmployeeData._id
      }`
    );
  };

  const handleEdit = () => {
    if (sheet) {
      handleOpenEmployeeModal("editEmployee");
    } else {
      if (editableEmployeeData) {
        navigate(
          `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
            editableEmployeeData._id
          }/edit`
        );
      }
    }
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteEmployeeFromSheet();
    } else {
      handleOpenDeleteModal("employee");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`);
  }, [pathname, sheet]);
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
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default EmployeesTableMenu;
