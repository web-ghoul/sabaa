import {
  DeleteRounded,
  EditRounded,
  JoinFullRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const ProsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    handleOpenCustomerModal,
    handleOpenDeleteModal,
    handleOpenLinkToCompanyModal,
    editableCustomerData,
  } = useContext(FormsContext);
  const { handleDeleteCustomerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${
        editableCustomerData && editableCustomerData._id
      }`
    );
  };

  const handleLink = () => {
    handleOpenLinkToCompanyModal("linkCustomer");
  };

  const handleEdit = () => {
    handleOpenCustomerModal("editCustomer");
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteCustomerFromSheet();
    } else {
      handleOpenDeleteModal("pro");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`);
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
      {!sheet && (
        <TableMenuItem
          icon={<JoinFullRounded />}
          title={"Link"}
          handling={handleLink}
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

export default ProsTableMenu;
