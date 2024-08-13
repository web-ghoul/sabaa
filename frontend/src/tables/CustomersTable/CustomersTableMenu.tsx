import {
  CancelRounded,
  ChangeCircleRounded,
  DeleteRounded,
  EditRounded,
  HistoryRounded,
  PersonAddRounded,
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

const CustomersTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { editableCustomerData } = useContext(FormsContext);
  const {
    handleOpenCustomerModal,
    handleOpenDeleteModal,
    handleOpenConvertCustomerModal,
  } = useContext(ModalsContext);
  const { handleDeleteCustomerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${
        editableCustomerData && editableCustomerData._id
      }`
    );
  };

  const handleEdit = () => {
    handleOpenCustomerModal("editCustomer");
  };

  const handleConvert = () => {
    handleOpenConvertCustomerModal();
  };

  const handleAddSponsoredPerson = () => {};

  const handleCancelResidence = () => {};

  const handleRenewResidence = () => {};

  const handleDelete = () => {
    if (sheet) {
      handleDeleteCustomerFromSheet();
    } else {
      handleOpenDeleteModal("customer");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_CUSTOMERS_ROUTE}`);
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
        icon={<ChangeCircleRounded />}
        title={"Convert"}
        handling={handleConvert}
      />
      <TableMenuItem
        icon={<PersonAddRounded />}
        title={"Add Sponsored Persons"}
        handling={handleAddSponsoredPerson}
      />
      <TableMenuItem
        icon={<HistoryRounded />}
        title={"Renew Residence"}
        handling={handleRenewResidence}
      />
      <TableMenuItem
        icon={<CancelRounded />}
        title={"Cancel Residence"}
        handling={handleCancelResidence}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default CustomersTableMenu;
